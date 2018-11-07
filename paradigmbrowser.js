
// If you would like to add paradigms, do so by adding entries to the following dictionary
var hiddenTags = []

$(document).ready(function () {
  $(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      paradigm()
    }
  })
})


function paradigm() {

  $(document).ready(function () {

    var language = $('#Language').val();
    var paradigmText = $('#ParadigmText').val();

    var languagesWithFirstTag = ""
    var dictOfParadigmedWords = {}

    $.getJSON('https://beta.apertium.org/apy/analyze?lang='+language+'&q='+paradigmText,function(data,status) {

      var arrOfWordsWithFirstTag = []
      languagesWithFirstTag = data[0][0];

      individualTypesOfWord = languagesWithFirstTag.split('/');

      for(let i = 1; i < individualTypesOfWord.length; i++) {
        arrOfWordsWithFirstTag.push(individualTypesOfWord[i].split('>')[0]+'>');
      }

      languagesWithFirstTag = arrOfWordsWithFirstTag.filter(onlyUnique);

      $('#ParadigmText').val("");

      hiddenTags = []

      $('#table tr').each(function(){
        $(this).find('td').each(function(){
          var tags = $(this).data('tags').split('.');
          var completedString = "";
          for (let i = 0; i < tags.length; i++) {
            completedString += "<" + tags[i] + ">";
          }
          hiddenTags.push(completedString);
        })
      })


      for (let j = 0; j < languagesWithFirstTag.length; j++) {
        tag = languagesWithFirstTag[j].split('<')[1].split('>')[0];
        for(let k = 0; k < hiddenTags.length; k++) {
          $.getJSON('https://beta.apertium.org/apy/generate?lang='+language+'&q='+languagesWithFirstTag[j]+hiddenTags[k],function(data,status) {
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
