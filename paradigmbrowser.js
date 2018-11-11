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
      completedString += "<" + tags[i] + ">";
    }
    hiddenTags.push(completedString);
  }
}

function editTags(obj, find, change) {
  if($(obj).data('tags') != undefined) {
    var tags = $(obj).data('tags').split('.');
    str = "<"
    for(let x = 0; x < tags.length; x++) {
      if(x < tags.length - 1) {
        str += tags[x] + "><"
      }else{
        str += tags[x] + ">"
      }
    }

    if(str == find){
      if ((change.indexOf('#') > -1) == false) {
        $(obj).text(change);
      }
    }
  }
}

function removeTheseTags(obj) {
  if($(obj).data('remove-tags') != undefined) {
    var tags = $(obj).data('remove-tags').split('.');
    var completedString = "";
    for (let i = 0; i < tags.length; i++) {
      tagsNotToAdd.push(tags[i]);
    }
  }
}

function runThruGettingTags(arr) {
  $('#table tr').each(function(){
    $(this).find('td').each(function(){
      getTags(this);
    })
  })
  for(let i = 0; i < arr.length; i++) {
    $(arr[i]).each(function(){
      getTags(this);
    })
  }
}

function runThruEditingNames(arr, hiddenTagsValue, updatedValue) {
  $('#table tr').each(function(){
    $(this).find('td').each(function(){
      editTags(this, hiddenTagsValue, updatedValue)
    })
  })
  for(let i = 0; i < arr.length; i++) {
    $(arr[i]).each(function(){
      editTags(this, hiddenTagsValue, updatedValue)
    })
  }
}

function paradigm() {
  $(document).ready(function () {
    var language = $('#Language').val();
    var paradigmText = $('#ParadigmText').val();
    var languagesWithFirstTag = ""
    $('p').each(function(){
      removeTheseTags(this);
    })
    $.getJSON(encodeURI('https://beta.apertium.org/apy/analyze?lang='+language+'&q='+paradigmText),function(data,status) {
      var arrOfWordsWithFirstTag = []
      languagesWithFirstTag = data[0][0];
      individualTypesOfWord = languagesWithFirstTag.split('/');
      for(let i = 1; i < individualTypesOfWord.length; i++) {
        text = individualTypesOfWord[i].replace(new RegExp('><', 'g'), ".");
        text = text.replace(new RegExp('<', 'g'), ".");
        text = text.replace(new RegExp('>', 'g'), ".");
        text = text.split(/[\s.]+/)
        string = ""
        for(let j = 1; j < text.length; j++){
          if(text[j] != ""){
            if(tagsNotToAdd.indexOf(text[j].trim()) > -1 == false){
              if(string.includes("<" + text[j] + ">") == false){
                string += "<" + text[j] + ">";
              }
            }
          }
        }
        arrOfWordsWithFirstTag.push(individualTypesOfWord[i].split('<')[0]+string);
      }
      languagesWithFirstTag = arrOfWordsWithFirstTag;
      hiddenTags = []
      runThruGettingTags(["body", "span", "div", "p"])
      for (let j = 0; j < languagesWithFirstTag.length; j++) {
        for(let k = 0; k < hiddenTags.length; k++) {
          $.getJSON(encodeURI('https://beta.apertium.org/apy/generate?lang='+language+'&q='+languagesWithFirstTag[j]+hiddenTags[k]),function(data,status) {
            runThruEditingNames(["p", "div", "body", "span"], hiddenTags[k], data[0][0])
          },'html');
        }
      }
    },'html');
  });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
