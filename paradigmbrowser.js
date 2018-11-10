var hiddenTags = []

// This is where you should specify anything not to add
var tagsNotToAdd = []

$(document).ready(function () {
  $(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      paradigm()
    }
  })
})

function getTags(obj) {
  if($(obj).data('tags') != undefined) {
    var tags = $(obj).data('tags').split('.');
    var completedString = "";
    for (let i = 0; i < tags.length; i++) {
      if(tagsNotToAdd.indexOf(tags[i].trim()) > -1 == false){
        completedString += "<" + tags[i] + ">";
      }
    }
    hiddenTags.push(completedString);
  }
}

function removeTheseTags(obj) {
  if($(obj).data('remove-tags') != undefined) {
    var tags = $(obj).data('remove-tags').split('.');
    var completedString = "";
    for (let i = 0; i < tags.length; i++) {
      completedString += tags[i];
    }
    tagsNotToAdd.push(completedString);
  }
}


function paradigm() {

  $(document).ready(function () {

    var language = $('#Language').val();
    var paradigmText = $('#ParadigmText').val();

    var languagesWithFirstTag = ""
    var dictOfParadigmedWords = {}

    $('#table tr').each(function(){
      $(this).find('td').each(function(){
        removeTheseTags(this);
      })
    })

    $('p').each(function(){
      removeTheseTags(this);
    })

    $('div').each(function(){
      removeTheseTags(this);
    })

    $('body').each(function(){
      removeTheseTags(this);
    })

    $('span').each(function(){
      removeTheseTags(this);
    })

    $.getJSON(encodeURI('https://beta.apertium.org/apy/analyze?lang='+language+'&q='+paradigmText),function(data,status) {
      console.log('https://beta.apertium.org/apy/analyze?lang='+language+'&q='+paradigmText)
      var arrOfWordsWithFirstTag = []
      languagesWithFirstTag = data[0][0];
      console.log(languagesWithFirstTag)
      individualTypesOfWord = languagesWithFirstTag.split('/');

      for(let i = 1; i < individualTypesOfWord.length; i++) {
        arrOfWordsWithFirstTag.push(individualTypesOfWord[i].split('>')[0]+'>');
      }

      languagesWithFirstTag = arrOfWordsWithFirstTag.filter(onlyUnique);

      $('#ParadigmText').val($('#ParadigmText').val()+": ");

      hiddenTags = []

      $('#table tr').each(function(){
        $(this).find('td').each(function(){
          getTags(this);
        })
      })

      $('p').each(function(){
        getTags(this);
      })

      $('div').each(function(){
        getTags(this);
      })

      $('body').each(function(){
        getTags(this);
      })

      $('span').each(function(){
        getTags(this);
      })

      for (let j = 0; j < languagesWithFirstTag.length; j++) {
        tag = languagesWithFirstTag[j].split('<')[1].split('>')[0];
        console.log(tag)
        for(let k = 0; k < hiddenTags.length; k++) {
          $.getJSON(encodeURI('https://beta.apertium.org/apy/generate?lang='+language+'&q='+languagesWithFirstTag[j]+hiddenTags[k]),function(data,status) {
            //console.log('https://beta.apertium.org/apy/generate?lang='+language+'&q='+languagesWithFirstTag[j]+hiddenTags[k])
            if(languagesWithFirstTag[j].split('<')[0] in dictOfParadigmedWords){
              dictOfParadigmedWords[languagesWithFirstTag[j].split('<')[0]].push(data[0][0])
            }else{
              dictOfParadigmedWords[languagesWithFirstTag[j].split('<')[0]] = [data[0][0]]
            }
            if(data[0][0].indexOf('#') == -1){
              $('#ParadigmText').val($('#ParadigmText').val() + data[0][0] + " ");
            }
          },'html');
        }

      }

    },'html');

  });

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
