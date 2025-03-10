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

function tags2url(prefix, tags) {
  return encodeURIComponent(tags.map(function(t) {
    if (t.length == 0) {
      return '^'+prefix+'$';
    } else {
      return '^'+prefix+'<'+t.split('.').join('><')+'>$';
    }
  }).join(''));
}

function generateMultiple(correctForm, lang) {
  var prefix = correctForm[0] + '<' + correctForm.slice(1).join('><') + '>';
  let tagNodes = [];
  let tags = [];
  $('*').each(function(key, obj) {
    if ($(obj).data('tags') !== undefined) {
      tagNodes.push(obj);
      if (tags.indexOf($(obj).data('tags')) == -1) {
        tags.push($(obj).data('tags'));
      }
    }
  });
  let STEP_SIZE = 5;
  for (let i = 0; i < tags.length; i += STEP_SIZE) {
    $.getJSON(APY_URL + 'generate?lang=' + encodeURIComponent(lang) + '&q=' + tags2url(prefix, tags.slice(i, i+STEP_SIZE)), function(data) {
      data.forEach(function(d) {
        let form = d[0];
        if (form.length > 0 && form[0] == '#') {
          return;
        }
        let tags = d[1].slice(prefix.length+2, d[1].length-2).split('><').join('.');
        tagNodes.forEach(function(n) {
          if ($(n).data('tags') == tags) {
            $(n).text(form);
          }
        });
      });
    }, 'html');
  }
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
        firstTag = text[1];
        keptTags = text.slice(1).join('.');

        // make sure it's not already in the valid forms array
        var inArr = validForms.some((f) => text.every((t, i) => (t) === f[i]));
        // and that it's a form of the POS selected
        if (!inArr && isPOSCat(firstTag, posCat)) {
          // check whether we're dealing with a particular subcategory
          if (POS_SUBCATS[language] !== undefined && POS_SUBCATS[language][posCat] !== undefined) {
            subCat = getSubCat(language, posCat, keptTags);
            // update paradigms
            update_template(language, subCat);
            isCorrectPOS = true;
            validForms.push(text); //already split for convenience
          } else {
            isCorrectPOS = true;
            validForms.push(text); //already split for convenience
          }
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
              //generateParadigms(form, language);
              generateMultiple(form, language);
            }
          });
        });
        selectionPrompt.dialog("option", "buttons", buttons);
        selectionPrompt.dialog("open");
      } else {
        //generateParadigms(validForms[0], language);
        generateMultiple(validForms[0], language);
      }
    }, "html");
  });
}

function getSubCat(lg, category, keptTags) {
  // first make sure subcats defined for lg
  if (POS_SUBCATS[lg] !== undefined) {
    let subcats = [] ;
    // check each cat with subcats for lg
    $.each(POS_SUBCATS[lg], function(key, contents) {
      // if the subcat is part of this cat then grab the category
      $.each(contents, function(subcat, tags) {
        if (tags.indexOf(keptTags) != -1 ) {
          subcats.push(subcat);
        }
      });
    });
    if (subcats.length) {
      //FIXME: is returning the furst one right behaviour?
      return subcats[0];
    } else {
      return false;
    }
  } else {
    return false; // [category, lg];
  }

}

function POSCatOfSubCat(category, lg) {
  // first make sure subcats defined for lg
  if (POS_SUBCATS[lg] !== undefined) {
    let cats = [] ;
    // check each cat with subcats for lg
    $.each(POS_SUBCATS[lg], function(key, contents) {
      // if the subcat is part of this cat then grab the category
      if (contents[category] !== undefined) {
        cats.push(key);
      }
    });
    if (cats.length) {
      return cats[0];
    } else {
      return false;
    }
  } else {
    return false; // [category, lg];
  }
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
    if (tag == 'td' && blob.hasOwnProperty('height')) {
      tag += ' rowspan="'+blob.height+'"';
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
    let added = [];
    $('#POS').html(
      Object.keys(LANGS[lang].data).sort().map(function(p) {
        // if the category isn't in the main list,
        // then assume it's a subcategory and get its category
        if (POS_CATS[p] === undefined) {
          POS_MainCat = POSCatOfSubCat(p, lang);
        } else {  // if it's in the list, then it's not a sub-category
          POS_MainCat = p;
        }
        // if we haven't already added the category, then add to list
        // this avoids adding categories with more than one subcategory multiple times
        if (!added.includes(POS_MainCat)) {
          added.push(POS_MainCat);
          return '<option value="'+POS_MainCat+'">'+POS_NAMES[POS_MainCat]+'</option>';
        }
      }).join('')
    );
    $('#content').html('');
    $('#nav').html('');
    set_pos();
  }
}

function set_pos() {
  let lang = $('#Language').val();
  let pos = $('#POS').val();
  // check whether we're dealing with a subcat
  if (POS_SUBCATS[lang] !== undefined && POS_SUBCATS[lang][pos] !== undefined) {
    // if so, set pos to a random by default
    // FIXME: is this the right behaviour?
    pos = Object.keys(POS_SUBCATS[lang][pos])[0];
  }
  if (pos === null) {
    $('#content').html('');
    $('#nav').html('');
    console.warn('No POS selected');
  } else {
    update_template(lang,pos);
  }
}

function update_template(lang, pos) {
  $('#content').html(
    LANGS[lang].data[pos].map(function(blk) {
      return blob2html(blk, 1, 'div');
    }).join('<hr>')
  );
  $('#nav').html('<h2 style="font-family: Ubuntu, sans-serif;">Quick navigation</h2>' + blob2nav(LANGS[lang].data[pos]));
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
