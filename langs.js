var LANGS = {
  grc: {name: "Ancient Greek", data: null},
  kaz: {name: "Kazakh", data: null},
  spa: {name: "Spanish", data: null}
};

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
    if (blob.hasOwnProperty('tabcols')) {
      ret += '<tr><th></th>';
      blob.tabcols.forEach(function(c) {
        ret += '<th><b>'+c+'</b></th>';
      });
    }
    let rows = [];
    if (blob.hasOwnProperty('tabrows')) {
      rows = blob.tabrows;
    }
    for (let i = 0; i < blob.tabdata.length; i++) {
      ret += '<tr><th>';
      if (i < rows.length) {
        ret += '<b>'+rows[i]+'</b>';
      }
      ret += '</th>';
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
