function hye_fin_vb(tense_tgs, mood_tgs, lab) {
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
function hye_fin_vb_conditional_pres(lab) {
  return {
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: 'pres.p1.sg.subj.cond'}, {tags: 'pres.p1.pl.subj.cond'},
       {pretxt: 'չեմ', tags: 'neg_ptcp'}, {pretxt: 'չենք', tags: 'neg_ptcp'}],
      [{tags: 'pres.p2.sg.subj.cond'}, {tags: 'pres.p2.pl.subj.cond'},
       {pretxt: 'չես', tags: 'neg_ptcp'}, {pretxt: 'չեք', tags: 'neg_ptcp'}],
      [{tags: 'pres.p3.sg.subj.cond'}, {tags: 'pres.p3.pl.subj.cond'},
       {pretxt: 'չի', tags: 'neg_ptcp'}, {pretxt: 'չեն', tags: 'neg_ptcp'}]
    ]
  };
}
function hye_fin_vb_conditional_past(lab) {
  return {
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person',  'Third person'],
    tabdata: [
      [{tags: 'past.impf.p1.sg.subj.cond'}, {tags: 'past.impf.p1.pl.subj.cond'},
       {pretxt: 'չէի', tags: 'neg_ptcp'}, {pretxt: 'չէինք', tags: 'neg_ptcp'}],
      [{tags: 'past.impf.p2.sg.subj.cond'}, {tags: 'past.impf.p2.pl.subj.cond'},
       {pretxt: 'չէիր', tags: 'neg_ptcp'}, {pretxt: 'չէիք', tags: 'neg_ptcp'}],
      [{tags: 'past.impf.p3.sg.subj.cond'}, {tags: 'past.impf.p3.pl.subj.cond'},
       {pretxt: 'չէր', tags: 'neg_ptcp'}, {pretxt: 'չէին', tags: 'neg_ptcp'}]
    ]
  };
}

function hye_fin_vb_periphrasis_general_pres(verb_part_form, lab) {
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
       {pretxt: 'չի', tags: verb_part_form}, {pretxt: 'չեն', tags: verb_part_form}]
      ]
  };
}
function hye_fin_vb_periphrasis_general_past(verb_part_form, lab) {
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
function hye_noun_decline_bare(det_tag, lab) {
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
function hye_noun_decline(det_tag, lab) {
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
function hye_noun_decline_pl_poss(det_tag, lab) {
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
function hye_adj_decline_bare(det_tag, lab) {
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
function hye_adj_decline(det_tag, lab) {
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
function hye_adj_decline_pl_poss(det_tag, lab) {
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

function add_hyx_hye() {
  return {
    verb: [
      {
        id: 'nonfin',
        label: 'Non-finite forms',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ["Infinitive", "Subject participle", "Resultative participle",
         "Imperfective converb","Simultaneous converb","Perfective converb",
          "Future converb 1","Future converb 2",
         "Connegative converb"],
        tabdata: [
          [{tags: 'ger'}, {tags: 'ger.neg'}],
          [{tags: 'pprs'}, {tags: 'pprs.neg'}],
          [{tags: 'res'}, {tags: 'res.neg'}],
          [{tags: 'impf_cvb', width: 2}],
          [{tags: 'ger.sim_ptcp', width: 2}],
          [{tags: 'perf', width: 2}],
          [{tags: 'ger.fut_ptcp', width: 2}],
          [{tags: 'ger.pros_ptcp', width: 2}],
          [{tags: 'neg_ptcp', width: 2}],
        ]
      },
      hye_fin_vb('pres', 'indc', 'Indicative present (if defective)'),
      hye_fin_vb_periphrasis_general_pres('impf_cvb', 'Indicative present (regular)'),
      hye_fin_vb('past.impf', 'indc', 'Indicative past imperfect (if defective)'),
      hye_fin_vb_periphrasis_general_past('impf_cvb', 'Indicative past imperfect (regular)'),
      hye_fin_vb_periphrasis_general_pres('ger.fut_ptcp', 'Future'),
      hye_fin_vb_periphrasis_general_past('ger.fut_ptcp', 'Future perfect'),
      hye_fin_vb_periphrasis_general_pres('perf', 'Present perfect'),
      hye_fin_vb_periphrasis_general_past('perf', 'Past perfect'),
      hye_fin_vb('past.pret', 'indc', 'Aorist (simple past)'),
      hye_fin_vb('pres', 'subj', 'Subjunctive present'),
      hye_fin_vb('past.impf', 'subj', 'Subjunctive past imperfect'),
      hye_fin_vb_conditional_pres('Conditional future'),
      hye_fin_vb_conditional_past('Conditional future perfect'),
  
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
         {pretxt: 'մի', tags: 'imp.p2.sg'},  {pretxt: 'մի', tags: 'imp.p2.pl'}]
        ]
      },
    ],
    noun: [
      hye_noun_decline_bare('', 'Simple noun'),
      hye_noun_decline('def','Definite noun'),
      hye_noun_decline('px1sg','1st possessed noun'),
      hye_noun_decline('px2sg','2nd possessive noun'),
      hye_noun_decline_pl_poss('px1sg','Noun with 1st person plural possessor'),
      hye_noun_decline_pl_poss('px2sg', 'Noun with 2nd person plural possessor'),
      hye_noun_decline_pl_poss('def','Noun with 3rd person plural possessor'),
    ],
    nounproper: [
      hye_noun_decline_bare('', 'Nominalized proper noun'),
      hye_noun_decline('def','Definite proper noun'),
      hye_noun_decline('px1sg','1st possessed proper noun'),
      hye_noun_decline('px2sg','2nd possessive proper noun'),
      hye_noun_decline_pl_poss('px1sg','Proper noun with 1st person plural possessor'),
      hye_noun_decline_pl_poss('px2sg', 'Proper noun with 2nd person plural possessor'),
      hye_noun_decline_pl_poss('def','Proper noun with 3rd person plural possessor'),
    ],
    adj: [
      hye_adj_decline_bare('', 'Nominalized adjective'),
      hye_adj_decline('def','Definite adjective'),
      hye_adj_decline('px1sg','1st possessed adjective'),
      hye_adj_decline('px2sg','2nd possessive adjective'),
      hye_adj_decline_pl_poss('px1sg','Adjective with 1st person plural possessor'),
      hye_adj_decline_pl_poss('px2sg', 'Adjective with 2nd person plural possessor'),
      hye_adj_decline_pl_poss('def','Adjective with 3rd person plural possessor'),
    ],
    adv: [
      hye_adj_decline_bare('', 'Nominalized adverb'),
      hye_adj_decline('def','Definite adverb'),
      hye_adj_decline('px1sg','1st possessed adverb'),
      hye_adj_decline('px2sg','2nd possessive adverb'),
      hye_adj_decline_pl_poss('px1sg','Adverb with 1st person plural possessor'),
      hye_adj_decline_pl_poss('px2sg', 'Adverb with 2nd person plural possessor'),
      hye_adj_decline_pl_poss('def','Adverb with 3rd person plural possessor'),
    ]
  };
}
