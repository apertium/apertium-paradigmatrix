function hyw_fin_vb(tense_tgs, mood_tgs, lab) {
  return {
    id: tense_tgs.replaceAll('.', '-'),
    id: mood_tgs.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: tense_tgs+'.p1.sg.'+mood_tgs}, {tags: tense_tgs+'.p1.pl.'+mood_tgs},
       {tags: tense_tgs+'.p1.sg.'+mood_tgs+'.neg'}, {tags: tense_tgs+'.p1.pl.'+mood_tgs+'.neg'}],
      [{tags: tense_tgs+'.p2.sg.'+mood_tgs}, {tags: tense_tgs+'.p2.pl.'+mood_tgs},
       {tags: tense_tgs+'.p2.sg.'+mood_tgs+'.neg'}, {tags: tense_tgs+'.p2.pl.'+mood_tgs+'.neg'}],
      [{tags: tense_tgs+'.p3.sg.'+mood_tgs}, {tags: tense_tgs+'.p3.pl.'+mood_tgs},
       {tags: tense_tgs+'.p3.sg.'+mood_tgs+'.neg'}, {tags: tense_tgs+'.p3.pl.'+mood_tgs+'.neg'}]
    ]
  };
}
function hyw_fin_vb_fut(tense_tgs, mood_tgs, lab) {
  return {
    id: tense_tgs.replaceAll('.', '-'),
    id: mood_tgs.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{pretxt: 'պիտի', tags: tense_tgs+'.p1.sg.'+mood_tgs},        {pretxt: 'պիտի', tags: tense_tgs+'.p1.pl.'+mood_tgs},
       {pretxt: 'պիտի', tags: tense_tgs+'.p1.sg.'+mood_tgs+'.neg'}, {pretxt: 'պիտի', tags: tense_tgs+'.p1.pl.'+mood_tgs+'.neg'}],
      [{pretxt: 'պիտի', tags: tense_tgs+'.p2.sg.'+mood_tgs},        {pretxt: 'պիտի', tags: tense_tgs+'.p2.pl.'+mood_tgs},
       {pretxt: 'պիտի', tags: tense_tgs+'.p2.sg.'+mood_tgs+'.neg'}, {pretxt: 'պիտի', tags: tense_tgs+'.p2.pl.'+mood_tgs+'.neg'}],
      [{pretxt: 'պիտի', tags: tense_tgs+'.p3.sg.'+mood_tgs},        {pretxt: 'պիտի', tags: tense_tgs+'.p3.pl.'+mood_tgs},
       {pretxt: 'պիտի', tags: tense_tgs+'.p3.sg.'+mood_tgs+'.neg'}, {pretxt: 'պիտի', tags: tense_tgs+'.p3.pl.'+mood_tgs+'.neg'}]
    ]
  };
}

function hyw_fin_vb_periphrasis_pres_chi(tense_tgs, mood_tgs, verb_part_form, lab) {
  return {
    id: tense_tgs.replaceAll('.', '-'),
    id: mood_tgs.replaceAll('.', '-'),
    id: verb_part_form.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: tense_tgs+'.p1.sg.'+mood_tgs}, {tags: tense_tgs+'.p1.pl.'+mood_tgs},
       {pretxt: 'չեմ', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չենք', tags: tense_tgs+'.'+verb_part_form}],
      [{tags: tense_tgs+'.p2.sg.'+mood_tgs}, {tags: tense_tgs+'.p2.pl.'+mood_tgs},
       {pretxt: 'չես', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չէք', tags: tense_tgs+'.'+verb_part_form}],
      [{tags: tense_tgs+'.p3.sg.'+mood_tgs}, {tags: tense_tgs+'.p3.pl.'+mood_tgs},
       {pretxt: 'չի', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չեն', tags: tense_tgs+'.'+verb_part_form}]
      ]
  };
}
function hyw_fin_vb_periphrasis_past(tense_tgs, mood_tgs, verb_part_form, lab) {
  return {
    id: tense_tgs.replaceAll('.', '-'),
    id: mood_tgs.replaceAll('.', '-'),
    id: verb_part_form.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: tense_tgs+'.p1.sg.'+mood_tgs}, {tags: tense_tgs+'.p1.pl.'+mood_tgs},
       {pretxt: 'չէի', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չէինք', tags: tense_tgs+'.'+verb_part_form}],
      [{tags: tense_tgs+'.p2.sg.'+mood_tgs}, {tags: tense_tgs+'.p2.pl.'+mood_tgs},
       {pretxt: 'չէիր', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չէիք', tags: tense_tgs+'.'+verb_part_form}],
      [{tags: tense_tgs+'.p3.sg.'+mood_tgs}, {tags: tense_tgs+'.p3.pl.'+mood_tgs},
       {pretxt: 'չէր', tags: tense_tgs+'.'+verb_part_form}, {pretxt: 'չէին', tags: tense_tgs+'.'+verb_part_form}]
      ]
  };
}
function hyw_fin_vb_perf_pres(verb_part_form, lab) {
  return {
    id: verb_part_form.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: verb_part_form, posttxt: "եմ"}, {tags: verb_part_form, posttxt: "ենք"},
       {pretxt: 'չեմ', tags: verb_part_form}, {pretxt: 'չենք', tags: verb_part_form}],
      [{tags: verb_part_form, posttxt: "ես"}, {tags: verb_part_form, posttxt: "էք"},
       {pretxt: 'չես', tags: verb_part_form}, {pretxt: 'չէք', tags: verb_part_form}],
      [{tags: verb_part_form, posttxt: "է"}, {tags: verb_part_form, posttxt: "են"},
       {pretxt: 'չէ', tags: verb_part_form}, {pretxt: 'չեն', tags: verb_part_form}]
      ]
  };
}
function hyw_fin_vb_perf_past(verb_part_form, lab) {
  return {
    id: verb_part_form.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: verb_part_form, posttxt: "էի"}, {tags: verb_part_form, posttxt: "էինք"},
       {pretxt: 'չէի', tags: verb_part_form}, {pretxt: 'չէինք', tags: verb_part_form}],
      [{tags: verb_part_form, posttxt: "էիր"}, {tags: verb_part_form, posttxt: "էիք"},
       {pretxt: 'չէիր', tags: verb_part_form}, {pretxt: 'չէիք', tags: verb_part_form}],
      [{tags: verb_part_form, posttxt: "էր"}, {tags: verb_part_form, posttxt: "էին"},
       {pretxt: 'չէր', tags: verb_part_form}, {pretxt: 'չէին', tags: verb_part_form}]
      ]
  };
}


function add_hyw() {
  return {
    verb: [
      {
        id: 'nonfin',
        label: 'Non-finite forms',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ["Infinitive", "Subject participle", "Resultative participle",
         "Evidential participle","Future converb 1","Future converb 2",
         "Connegative converb (present)", "Connegative converb (past imperfect)"],
        tabdata: [
          [{tags: 'ger'}, {tags: 'ger.neg'}],
          [{tags: 'pprs'}, {tags: 'pprs.neg'}],
          [{tags: 'perf'}, {tags: 'perf.neg'}],
          [{tags: 'evid', width: 2}],
          [{tags: 'ger.fut_ptcp', width: 2}],
          [{tags: 'ger.pros_ptcp', width: 2}],
          [{tags: 'pres.neg_ptcp', width: 2}],
          [{tags: 'past.impf.neg_ptcp', width: 2}]
        ]
      },
      hyw_fin_vb('pres', 'indc', 'Indicative present (if defective)'),
      hyw_fin_vb_periphrasis_pres_chi('pres', 'indc','neg_ptcp', 'Indicative present (regular)'),
      hyw_fin_vb('past.impf', 'indc', 'Indicative past imperfect (if defective)'),
      hyw_fin_vb_periphrasis_past('past.impf', 'indc','neg_ptcp', 'Indicative past imperfect (regular)'),
      hyw_fin_vb_fut('pres', 'subj', 'Future'),
      hyw_fin_vb_fut('past.impf', 'subj', 'Future perfect'),
      hyw_fin_vb_perf_pres('perf', 'Present perfect (non-evidential)'),
      hyw_fin_vb_perf_past('perf', 'Pluperfect (non-evidential)'),
      hyw_fin_vb_perf_pres('evid', 'Present perfect (evidential)'),
      hyw_fin_vb_perf_past('evid', 'Pluperfect (evidential)'),
      hyw_fin_vb('past.pret', 'indc', 'Aorist (simple past)'),
      {
        id: 'imp',
        label: 'Imperative',
        tabcolgroups: [
          {label: 'Affirmative', width: 2},
          {label: 'Negative', width: 2}
        ],
        tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
        tabrows: ['First person', 'Second person'],
        tabdata: [
          [{tags: 'imp.p2.sg'}, {tags: 'imp.p2.pl'},
         {pretxt: 'մի', tags: 'proh.p2.sg'},  {pretxt: 'մի', tags: 'proh.p2.pl'}]
        ]
      },
    ]
  };
}
