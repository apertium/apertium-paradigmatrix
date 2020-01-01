
var hiddenTags = []
var tagsNotToAdd = []

//Specify APY URL
var APY_URL = 'https://beta.apertium.org/apy/'

//Allows for Paradigm after you have typed the space bar
$(document).ready(function () {
  $(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      paradigm()
    }
  })
})

//Function to get the tags given a jquery object
function getTags(obj) {

  if($(obj).data('tags') != undefined) {

    var completedString = "";
    $(obj).text("")
    $.each($(obj).data('tags').split('.'), function(index, value) {
      completedString += "<" + value + ">";
    });

    if(hiddenTags.indexOf(completedString) > -1 == false){
      hiddenTags.push(completedString);
    }

  }
}

//Function to edit the values of the tags
function editTags(obj, find, change) {

  //see if tags exist
  if($(obj).data('tags') != undefined) {
    var tags = $(obj).data('tags').split('.');

    str = "<"

    $.each($(tags), function(index, value) {
      if(index < tags.length - 1) {
        str += value + "><"
      }else{
        str += value + ">"
      }
    });

    //See if tags matches the tag in the html
    if(str == find){

      //Find if the value should be added or not
      if ((change.indexOf('#') > -1) == false && ($(obj).text().indexOf(change) > -1 == false)) {
        $(obj).text($(obj).text() + change + " ");
      }
    }
  }
}

//Function to determine the tags to remove
function removeTheseTags(obj) {
  if($(obj).data('remove-tags') != undefined) {
    var tags = $(obj).data('remove-tags').split('.');
    var completedString = "";
    $.each($(tags), function(index, value) {
      tagsNotToAdd.push(value);
    });
  }
}

// Function to go through all tags and use the getTags function
function runThruGettingTags() {
  $("*").each(function(){
    getTags(this);
  });
}

// Function to see all tags and edit
function runThruEditingNames(hiddenTagsValue, updatedValue) {
  $("*").each(function(){
    editTags(this, hiddenTagsValue, updatedValue)
  });
}

//Function is called when button is pressed or when spacebar is pressed
function paradigm() {

  $(document).ready(function () {

    //get values of the language and text to be paradigmed
    var language = $('#Language').val();
    var paradigmText = $('#ParadigmText').val();
    var languagesWithFirstTag = ""

    //go through all elements and see to remove all not
    $('*').each(function(){
      removeTheseTags(this);
    })

    //get JSON from the analyze endpoint to see the different forms of the word
    $.getJSON(APY_URL + 'analyze?lang='+encodeURIComponent(language)+'&q='+encodeURIComponent(paradigmText), function(data,status) {
      var arrOfWordsWithFirstTag = []
      languagesWithFirstTag = data[0][0];
      forms = languagesWithFirstTag.split('/');
      //iterate through all the forms of the word
      $.each($(forms), function(index, value) {
        //this is a temporary fix which should be changed when fixing #2
        if(index == 1) {
          //get the forms in array form
          text = value.replace(new RegExp('><', 'g'), ".");
          text = text.replace(new RegExp('<', 'g'), ".");
          text = text.replace(new RegExp('>', 'g'), ".");
          text = text.split(/[\s.]+/)

          string = ""

          //get all the tags now with the tags we wanted removed, removed
          $.each($(text), function(insideIndex, indString) {
            if(insideIndex > 0 && indString != "" && tagsNotToAdd.indexOf(indString.trim()) > -1 == false && string.includes("<" + indString + ">") == false){
              string += "<" + indString + ">";
            }
          });
          //get the form of the word so it is ready to be queryed to generate endpoint
          arrOfWordsWithFirstTag.push(value.split('<')[0]+string);
          languagesWithFirstTag = arrOfWordsWithFirstTag;
          //make sure that the hiddenTags variable does not add elements twice; clear the array
          hiddenTags = []
          //get all tags and store in hiddenTags Variable
          runThruGettingTags()
          //iterate through words with base tags and add the hidden tags on the html onto this
          $.each($(languagesWithFirstTag), function(firstTagIndex, firstTag) {
            if(isVerb(firstTag, paradigmText)) {
              $.each($(hiddenTags), function(hiddenTagIndex, hiddenTag) {
                //query generate endpoint so we can see the end values
                $.getJSON(APY_URL + 'generate?lang='+encodeURIComponent(language)+'&q='+encodeURIComponent(firstTag+hiddenTag),function(data,status) {
                  //edit html values from the output of the APY
                  console.log(APY_URL + 'generate?lang='+encodeURIComponent(language)+'&q='+encodeURIComponent(firstTag+hiddenTag))
                  runThruEditingNames(hiddenTag, data[0][0])
                },'html');
              });
            } else {
              alert("The text introduced is not a valid verb. Please, try another token.");
              return 0;
            }
          });
        }
      });
    },'html');
  });

}

function isVerb(firstTag, paradigmText) {
  let dataIsVerb = false;

  // symbols corresponding to verbs (http:/http://wiki.apertium.org/wiki/List_of_symbols#Part-of-speech_Categories)
  // in case any verb symbol is missing, you can simply add it to the back of the array
  let verbSymbols = ['vblex', 'v', 'vbmod', 'vbser', 'vbhaver', 'vbdo'];

  // try the different symbols until we find the actual one, unless it's not a verb
  $.each(verbSymbols, function(index, value) {
    if(firstTag===paradigmText+"<"+value+">") {
      dataIsVerb = true;
      return false;
    }
  });
  return dataIsVerb;
}
