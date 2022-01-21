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

var LANGS = {
    grc: {name: "Ancient Greek", data: null, keeptags: []},
    kaz: {name: "Kazakh", data: null, keeptags: ['tv', 'iv']},
    spa: {name: "Spanish", data: null, keeptags: []}
};

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
    var posCat = $('#POS').val();
    var keepTags = LANGS[language].keeptags;

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

function blob2html(blob, depth, context) {
  let ret = '';
  if (blob.hasOwnProperty('id')) {
    ret += '<div id="'+blob.id+'">';
  }
  if (blob.hasOwnProperty('label')) {
    if (depth > 0) {
      ret += '<h'+depth+'>'+blob.label+'</h'+depth+'>';
    } else {
      ret += '<th><b>'+blob.label+'</b></th>';
    }
  }
  if (blob.hasOwnProperty('error')) {
    ret += '<div align="center" class="alert alert-warning" role="alert" style="width: 100%"><i class="fa fa-exclamation-triangle"></i>&nbsp;<b>Warning!</b><br>'+blob.error+'</div>';
  }
  if (blob.hasOwnProperty('info')) {
    ret += '<div align="center" class="alert alert-info" role="alert" style="width: 100%;"><i class="fa fa-search"></i>&nbsp;'+blob.info+'</div>';
  }
  if (blob.hasOwnProperty('subcats')) {
    for (let i = 0; i < blob.subcats.length; i++) {
      if (depth == 1 && i > 0) {
        ret += '<hr>';
      }
      ret += blob2html(blob.subcats[i], depth+1, 'div');
    }
  }
  if (blob.hasOwnProperty('tags') || blob.hasOwnProperty('text')) {
    let pre = '';
    let post = '';
    if (blob.hasOwnProperty('pretxt')) {
      pre = blob.pretxt;
    }
    if (blob.hasOwnProperty('posttxt')) {
      post = blob.posttxt;
    }
    let cont2conj = {
      'div': 'p',
      'tr': 'td',
      'ul': 'li'
    };
    let tag = cont2conj[context];
    if (tag == 'td' && blob.hasOwnProperty('width')) {
      tag += ' colspan="'+blob.width+'"';
    }
    if (blob.hasOwnProperty('text')) {
      ret += '<'+tag+'>'+blob.text+'</'+tag+'>';
    } else if (pre || post) {
      ret += '<'+tag+'>'+pre+'&nbsp;<span data-tags="'+blob.tags+'"></span>&nbsp;'+post+'</'+tag+'>';
    } else {
      ret += '<'+tag+' data-tags="'+blob.tags+'"></'+tag+'>';
    }
  }
  if (blob.hasOwnProperty('tablist')) {
    ret += '<table>';
    blob.tablist.forEach(function(l) {
      ret += '<tr>'+blob2html(l, 0, 'tr')+'</tr>';
    });
    ret += '</table><br>';
  }
  if (blob.hasOwnProperty('tabdata')) {
    ret += '<table>';
    let rows = [];
    if (blob.hasOwnProperty('tabrows')) {
      rows = blob.tabrows;
    }
    if (blob.hasOwnProperty('tabcolgroups')) {
      ret += '<tr>';
      if (rows.length > 0) {
        ret += '<th></th>';
      }
      blob.tabcolgroups.forEach(function(c) {
        ret += '<th colspan="'+c.width+'"><b>'+c.label+'</b></th>';
      });
    }
    if (blob.hasOwnProperty('tabcols')) {
      ret += '<tr>';
      if (rows.length > 0) {
        ret += '<th></th>';
      }
      blob.tabcols.forEach(function(c) {
        ret += '<th><b>'+c+'</b></th>';
      });
    }
    for (let i = 0; i < blob.tabdata.length; i++) {
      ret += '<tr>';
      if (rows.length > 0) {
        ret += '<th>';
        if (i < rows.length) {
          ret += '<b>'+rows[i]+'</b>';
        }
        ret += '</th>';
      }
      blob.tabdata[i].forEach(function(r) {
        ret += blob2html(r, 0, 'tr');
      });
      ret += '</tr>';
    }
    ret += '</table><br>';
  }
  if (blob.hasOwnProperty('id')) {
    ret += '</div>';
  }
  return ret;
}

function blob2nav(blob) {
  if (Array.isArray(blob)) {
    return '<ul>' + blob.map(blob2nav).join('') + '</ul>';
  } else if (blob.hasOwnProperty('id')) {
    let ret = '<li><a href="'+blob.id+'">';
    if (blob.hasOwnProperty('label')) {
      ret += blob.label;
    } else {
      ret += blob.id;
    }
    ret += '</a>';
    if (blob.hasOwnProperty('subcats')) {
      ret += blob2nav(blob.subcats);
    }
    ret += '</li>';
    return ret;
  } else {
    return '';
  }
}

function load_lang(lang) {
  if (LANGS[lang].data == null) {
    LANGS[lang].data = window['add_'+lang]();
  }
}

function set_lang() {
  let lang = $('#Language').val();
  if (lang != 'null') {
    load_lang(lang);
    let pos = '<option value="null">';
    Object.keys(LANGS[lang].data).sort().forEach(function(p) {
      pos += '<option value="'+p+'">'+p+'</option>';
    });
    $('#POS').html(pos);
    $('#POS').val('null');
    $('#content').html('');
    $('#nav').html('');
  }
}

function set_pos() {
  let lang = $('#Language').val();
  let pos = $('#POS').val();
  if (pos == 'null') {
    $('#content').html('');
    $('#nav').html('');
  } else {
    $('#content').html(
      LANGS[lang].data[pos].map(function(blk) {
        return blob2html(blk, 1, 'div');
      }).join('<hr>')
    );
    $('#nav').html('<h2 style="font-family: Ubuntu, sans-serif;">Quick navigation</h2>' + blob2nav(LANGS[lang].data[pos]));
  }
}

$(document).ready(function() {
  $('#Language').html(
    '<option value="null">---</option>'+
    Object.keys(LANGS).sort().map(function(lg) {
      return '<option value="'+lg+'">'+LANGS[lg].name+'</option>';
    }).join('')
  );
  $('#Language').change(set_lang);
  $('#POS').change(set_pos);
});
