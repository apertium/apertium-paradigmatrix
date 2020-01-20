var hiddenTags = [];

//Specify APY URL
const APY_URL = "https://beta.apertium.org/apy/";

// POS Categories. Keys are according to Universal Dependencies
const POS_CATS = {
  verb: ["vblex", "v", "vbmod", "vbser", "vbhaver", "vbdo", "vaux"],
  noun: ["n"],
  adj: ["adj"],
  adv: ["adv", "preadv", "postadv"],
  det: ["det"],
  pron: ["prn"]
}
var selectionPrompt;
//Allows for Paradigm after you have typed the space bar
$(document).ready(function () {
  $(window).keypress(function (e) {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      paradigm();
    }
  });
  selectionPrompt = $("#selection");
  selectionPrompt.dialog({
    autoOpen: false,
    closeOnEscape: false
  });
});

//Function to get the tags given a jquery object
function getTags(obj) {
  if ($(obj).data("tags") !== undefined) {
    var completedString = "";
    $(obj).text("");
    $.each($(obj).data("tags").split("."), function (index, value) {
      completedString += "<" + value + ">";
    });

    if (!hiddenTags.includes(completedString)) {
      hiddenTags.push(completedString);
    }
  }
}

//Function to edit the values of the tags
function editTags(obj, find, change) {
  //see if tags exist
  if ($(obj).data("tags") !== undefined) {
    var tags = $(obj).data("tags").split(".");
    var str = "<";
    $.each($(tags), function (index, value) {
      if (index < tags.length - 1) {
        str += value + "><";
      } else {
        str += value + ">";
      }
    });
    //See if tags matches the tag in the html
    if (str === find) {
      //Find if the value should be added or not
      if (!change.includes("#") && !$(obj).text().includes(change)) {
        $(obj).text($(obj).text() + change + " ");
      }
    }
  }
}

// Function to go through all tags and use the getTags function
function runThruGettingTags() {
  $("*").each(function (key, obj) {
    getTags(obj);
  });
}

// Function to see all tags and edit
function runThruEditingNames(hiddenTagsValue, updatedValue) {
  $("*").each(function (key, el) {
    editTags(el, hiddenTagsValue, updatedValue);
  });
}

function generateParadigms(correctForm, lang) {
  var firstTag = correctForm[0] + "<" + correctForm.slice(1).join("><") + ">";
  //make sure that the hiddenTags variable does not add elements twice; clear the array
  hiddenTags = [];
  //get all tags and store in hiddenTags Variable
  runThruGettingTags();
  //iterate through words with base tags and add the hidden tags on the html onto this
  $.each($(hiddenTags), function (hiddenTagIndex, hiddenTag) {
    //query generate endpoint so we can see the end values
    $.getJSON(APY_URL + "generate?lang=" + encodeURIComponent(lang) + "&q=" + encodeURIComponent(firstTag + hiddenTag), function (data) {
      //edit html values from the output of the APY
      runThruEditingNames(hiddenTag, data[0][0]);
    }, "html");
  });
}

//Function is called when button is pressed or when spacebar is pressed
function paradigm() {
  $(document).ready(function () {
    //get values of the language and text to be paradigmed
    var language = $("#Language").val();
    var paradigmText = $("#ParadigmText").val();
    var alertMessage = $("#alertmsg").data("msg");
    var posCat = $("#poscat").data("pos-category");
    var keepTags = [];
    if ($("#noremove").length) {
      keepTags = $("#noremove").data("no-remove-tags").split(",");
    }
    keepTags = keepTags.map(s => s.trim()) //removes extra whitespace

    //get JSON from the analyze endpoint to see the different forms of the word
    $.getJSON(APY_URL + "analyze?lang=" + encodeURIComponent(language) + "&q=" + encodeURIComponent(paradigmText), function (data) {
      var forms = data[0][0].split("/");
      var isCorrectPOS = false;
      var validForms = [];
      //iterate through all the forms of the word
      $.each($(forms), function (index, value) {
        if (index == 0) return //the first option is just the word itself
        //get the forms in array form
        var text = value.replace(new RegExp("><", "g"), ".");
        text = text.replace(new RegExp("<", "g"), ".");
        text = text.replace(new RegExp(">", "g"), ".");
        text = text.split(/[\s.]+/);

        text.forEach(function (el, idx) {
          if (!keepTags.includes(el) && idx > 1) {
            text.splice(idx);
          }
        });
        //Check whether each form is a verb and whether it's already in validForms arr
        var inArr = validForms.some((f) => text.every((t, i) => (t) === f[i]));
        if (isPOSCat(text[1], posCat) && !inArr) {
          isCorrectPOS = true;
          validForms.push(text); //already split for convenience
        }
      });
      if (!isCorrectPOS) {
        alert(alertMessage);
        return false; //Stop running
      }
      if (validForms.length > 1) {
        var buttons = [];
        validForms.forEach(function (form) {
          buttons.push({
            text: form[0] + "<" + form.slice(1).join("><") + ">",
            click: function () {
              $(this).dialog("close");
              generateParadigms(form, language);
            }
          });
        });
        selectionPrompt.dialog("option", "buttons", buttons);
        selectionPrompt.dialog("open");
      } else {
        generateParadigms(validForms[0], language);
      }
    }, "html");
  });
}

function isPOSCat(tag, category) {
  var catSymbols = POS_CATS[category.toLowerCase()]
  return catSymbols.includes(tag);
}
