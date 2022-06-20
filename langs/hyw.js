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
       { tags: tense_tgs+'.'+verb_part_form+'.p3.sg'}, {pretxt: 'չեն', tags: tense_tgs+'.'+verb_part_form}]
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
function hyw_noun_decline_bare(det_tag, lab) {
  return {
    /*id: det_tag.replaceAll('.', '-'),*/
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: 'sg'}, {tags: 'pl'}],
      [{tags: 'sg.dat_gen'}, {tags: 'pl.dat_gen'}],
      [{tags: 'sg.abl'}, {tags: 'pl.abl'}],
      [{tags: 'sg.ins'}, {tags: 'pl.ins'}],
    ]
  };
}
function hyw_noun_decline(det_tag, lab) {
  return {
    id: det_tag.replaceAll('.', '-'),
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: 'sg.'+det_tag}, {tags: 'pl.'+det_tag}],
      [{tags: 'sg.dat_gen.'+det_tag}, {tags: 'pl.dat_gen.'+det_tag}],
      [{tags: 'sg.abl.'+det_tag}, {tags: 'pl.abl.'+det_tag}],
      [{tags: 'sg.ins.'+det_tag}, {tags: 'pl.ins.'+det_tag}],
    ]
  };
}
function hyw_noun_decline_pl_poss(det_tag, lab) {
  return {
    id: det_tag.replaceAll('.', '-'),
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: 'sg.pl_poss.'+det_tag}, {tags: 'pl.pl_poss.'+det_tag}],
      [{tags: 'sg.pl_poss.dat_gen.'+det_tag}, {tags: 'pl.pl_poss.dat_gen.'+det_tag}],
      [{tags: 'sg.pl_poss.abl.'+det_tag}, {tags: 'pl.pl_poss.abl.'+det_tag}],
      [{tags: 'sg.ins.pl_poss.'+det_tag}, {tags: 'pl.ins.pl_poss.'+det_tag}],
    ]
  };
}
function hyw_adj_decline_bare(det_tag, lab) {
  return {
    /*id: det_tag.replaceAll('.', '-'),*/
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: '' }, {tags: 'subst.pl'}],
      [{tags: 'subst.sg.dat_gen'}, {tags: 'subst.pl.dat_gen'}],
      [{tags: 'subst.sg.abl'}, {tags: 'subst.pl.abl'}],
      [{tags: 'subst.sg.ins'}, {tags: 'subst.pl.ins'}],
    ]
  };
}
function hyw_adj_decline(det_tag, lab) {
  return {
    id: det_tag.replaceAll('.', '-'),
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: 'subst.sg.'+det_tag}, {tags: 'subst.pl.'+det_tag}],
      [{tags: 'subst.sg.dat_gen.'+det_tag}, {tags: 'subst.pl.dat_gen.'+det_tag}],
      [{tags: 'subst.sg.abl.'+det_tag}, {tags: 'subst.pl.abl.'+det_tag}],
      [{tags: 'subst.sg.ins.'+det_tag}, {tags: 'subst.pl.ins.'+det_tag}],
    ]
  };
}
function hyw_adj_decline_pl_poss(det_tag, lab) {
  return {
    id: det_tag.replaceAll('.', '-'),
    label: lab,
        tabcols: ['Singular', 'Plural'],
    tabrows: ['Nominative/Accusative', 'Dative/Genitive', 'Ablative',' Intstrumental'],
    tabdata: [
      [{tags: 'subst.sg.pl_poss.'+det_tag}, {tags: 'subst.pl.pl_poss.'+det_tag}],
      [{tags: 'subst.sg.pl_poss.dat_gen.'+det_tag}, {tags: 'subst.pl.pl_poss.dat_gen.'+det_tag}],
      [{tags: 'subst.sg.pl_poss.abl.'+det_tag}, {tags: 'subst.pl.pl_poss.abl.'+det_tag}],
      [{tags: 'subst.sg.ins.pl_poss.'+det_tag}, {tags: 'subst.pl.ins.pl_poss.'+det_tag}],
    ]
  };
}

function add_hyx_hyw() {
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
          [{tags: 'res'}, {tags: 'res.neg'}],
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
      hyw_fin_vb('pres', 'subj', 'Subjunctive present'),
      hyw_fin_vb('past.impf', 'subj', 'Subjunctive past imperfect'),
      hyw_fin_vb_fut('pres', 'subj', 'Future'),
      hyw_fin_vb_fut('past.impf', 'subj', 'Future perfect'),
      hyw_fin_vb_perf_pres('res', 'Present perfect (non-evidential)'),
      hyw_fin_vb_perf_past('res', 'Pluperfect (non-evidential)'),
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
    ],
    noun: [
      hyw_noun_decline_bare('', 'Simple noun'),
      hyw_noun_decline('def','Definite noun'),
      hyw_noun_decline('px1sg','1st possessed noun'),
      hyw_noun_decline('px2sg','2nd possessive noun'),
      hyw_noun_decline_pl_poss('px1sg','Noun with 1st person plural possessor'),
      hyw_noun_decline_pl_poss('px2sg', 'Noun with 2nd person plural possessor'),
      hyw_noun_decline_pl_poss('def','Noun with 3rd person plural possessor'),
    ],
    nounproper: [
      hyw_noun_decline_bare('', 'Nominalized proper noun'),
      hyw_noun_decline('def','Definite proper noun'),
      hyw_noun_decline('px1sg','1st possessed proper noun'),
      hyw_noun_decline('px2sg','2nd possessive proper noun'),
      hyw_noun_decline_pl_poss('px1sg','Proper noun with 1st person plural possessor'),
      hyw_noun_decline_pl_poss('px2sg', 'Proper noun with 2nd person plural possessor'),
      hyw_noun_decline_pl_poss('def','Proper noun with 3rd person plural possessor'),
    ],
    adj: [
      hyw_adj_decline_bare('', 'Nominalized adjective'),
      hyw_adj_decline('def','Definite adjective'),
      hyw_adj_decline('px1sg','1st possessed adjective'),
      hyw_adj_decline('px2sg','2nd possessive adjective'),
      hyw_adj_decline_pl_poss('px1sg','Adjective with 1st person plural possessor'),
      hyw_adj_decline_pl_poss('px2sg', 'Adjective with 2nd person plural possessor'),
      hyw_adj_decline_pl_poss('def','Adjective with 3rd person plural possessor'),
    ],
    adv: [
      hyw_adj_decline_bare('', 'Nominalized adverb'),
      hyw_adj_decline('def','Definite adverb'),
      hyw_adj_decline('px1sg','1st possessed adverb'),
      hyw_adj_decline('px2sg','2nd possessive adverb'),
      hyw_adj_decline_pl_poss('px1sg','Adverb with 1st person plural possessor'),
      hyw_adj_decline_pl_poss('px2sg', 'Adverb with 2nd person plural possessor'),
      hyw_adj_decline_pl_poss('def','Adverb with 3rd person plural possessor'),
    ]
  };
}
