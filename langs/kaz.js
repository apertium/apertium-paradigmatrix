function kaz_fin_vb(tgs, lab) {
  return {
    id: tgs.replaceAll('.', '-'),
    label: lab,
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person', 'Second person polite', 'Third person'],
    tabdata: [
      [{tags: tgs+'.p1.sg'}, {tags: tgs+'.p1.pl'},
       {tags: 'neg.'+tgs+'.p1.sg'}, {tags: 'neg.'+tgs+'.p1.pl'}],
      [{tags: tgs+'.p2.sg'}, {tags: tgs+'.p2.pl'},
       {tags: 'neg.'+tgs+'.p2.sg'}, {tags: 'neg.'+tgs+'.p2.pl'}],
      [{tags: tgs+'.p2.frm.sg'}, {tags: tgs+'.p2.frm.pl'},
       {tags: 'neg.'+tgs+'.p2.frm.sg'}, {tags: 'neg.'+tgs+'.p2.frm.pl'}],
      [{tags: tgs+'.p3.sg', width: 2}, {tags: 'neg.'+tgs+'.p3.sg', width: 2}]
    ]
  };
}

function kaz_fin_vb_pass(tgs, lab) {
  return {
    id: tgs.replaceAll('.', '-'),
    label: lab + " (passive)",
    tabcolgroups: [
      {label: 'Affirmative', width: 2},
      {label: 'Negative', width: 2}
    ],
    tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
    tabrows: ['First person', 'Second person', 'Second person polite', 'Third person'],
    tabdata: [
      [{tags: 'pass.'+tgs+'.p1.sg'}, {tags: 'pass.'+tgs+'.p1.pl'},
       {tags: 'pass.neg.'+tgs+'.p1.sg'}, {tags: 'pass.neg.'+tgs+'.p1.pl'}],
      [{tags: 'pass.'+tgs+'.p2.sg'}, {tags: 'pass.'+tgs+'.p2.pl'},
       {tags: 'pass.neg.'+tgs+'.p2.sg'}, {tags: 'pass.neg.'+tgs+'.p2.pl'}],
      [{tags: 'pass.'+tgs+'.p2.frm.sg'}, {tags: 'pass.'+tgs+'.p2.frm.pl'},
       {tags: 'pass.neg.'+tgs+'.p2.frm.sg'}, {tags: 'pass.neg.'+tgs+'.p2.frm.pl'}],
      [{tags: 'pass.'+tgs+'.p3.sg', width: 2}, {tags: 'pass.neg.'+tgs+'.p3.pl', width: 2}]
    ]
  };
}



function add_kaz() {
  return {
    vaux: [
      {
        id: 'inf',
        label: 'Infinitives',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'prc_perf'}, {tags: 'neg.prc_perf'}],
          [{tags: 'prc_impf'}, {tags: 'neg.prc_impf'}],
          [{tags: 'prc_plan', width: 2}]
        ]
      },
      {
        id: 'ger',
        label: 'Gerunds',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'ger.nom'}, {tags: 'neg.ger.nom'}],
          [{tags: 'ger_past.nom'}, {tags: 'neg.ger_past.nom'}],
          [{tags: 'gpr_fut.nom'}, {tags: 'neg.gpr_fut.nom'}],
          [{tags: 'gpr_impf.nom'}, {tags: 'neg.gpr_impf.nom'}]
        ]
      },
      kaz_fin_vb('aor', 'Non-past'),
      kaz_fin_vb('ifi', 'Recent past'),
      kaz_fin_vb('ifi.evid', 'Past evidential'),
      kaz_fin_vb('past', 'Non-recent past'),
      {
        id: 'opt',
        label: 'Optative / imperative',
        tabcolgroups: [
          {label: 'Affirmative', width: 2},
          {label: 'Negative', width: 2}
        ],
        tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Second person polite',
                  'Third person'],
        tabdata: [
          [{tags: 'opt.p1.sg'}, {tags: 'opt.p1.pl'},
           {tags: 'neg.opt.p1.sg'}, {tags: 'neg.opt.p1.pl'}],
          [{tags: 'imp.p2.sg'}, {tags: 'imp.p2.pl'},
           {tags: 'neg.imp.p2.sg'}, {tags: 'neg.imp.p2.pl'}],
          [{tags: 'imp.p2.frm.sg'}, {tags: 'imp.p2.frm.pl'},
           {tags: 'neg.opt.p2.frm.sg'}, {tags: 'neg.opt.p2.frm.pl'}],
          [{tags: 'opt.p3.sg', width: 2}, {tags: 'neg.opt.p1.sg', width: 2}]
        ]
      },
      kaz_fin_vb('gna_cond', 'Conditional'),
      kaz_fin_vb('fut', '[descriptive word] Future'),
      kaz_fin_vb('fut_plan', '[descriptive word] Future'),
      kaz_fin_vb('pih', 'Past imperfective'),
      {
        'id': 'prc_vol',
        'label': "Volitional infinitive",
        tabcols: ["Singular", "Plural"],
        tabrows: ["First person", "Second person", "Second person polite",
                  "Third person"],
        tabdata: [
          [{tags: 'prc_vol.p1.sg'}, {tags: 'prc_vol.p1.pl'}],
          [{tags: 'prc_vol.p2.sg'}, {tags: 'prc_vol.p2.pl'}],
          [{tags: 'prc_vol.p2.frm.sg'}, {tags: 'prc_vol.p2.frm.pl'}],
          [{tags: 'prc_vol.p3.sg', width: 2}]
        ]
      }
    ],
    verb_iv: [
      {
        id: 'inf',
        label: 'Infinitives',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'prc_perf'}, {tags: 'neg.prc_perf'}],
          [{tags: 'prc_impf'}, {tags: 'neg.prc_impf'}],
          [{tags: 'prc_plan', width: 2}]
        ]
      },
      {
        id: 'ger',
        label: 'Gerunds',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'ger.nom'}, {tags: 'neg.ger.nom'}],
          [{tags: 'ger_past.nom'}, {tags: 'neg.ger_past.nom'}],
          [{tags: 'gpr_fut.nom'}, {tags: 'neg.gpr_fut.nom'}],
          [{tags: 'gpr_impf.nom'}, {tags: 'neg.gpr_impf.nom'}]
        ]
      },
      kaz_fin_vb('aor', 'Non-past'),
      kaz_fin_vb('ifi', 'Recent past'),
      kaz_fin_vb('ifi.evid', 'Past evidential'),
      kaz_fin_vb('past', 'Non-recent past'),
      {
        id: 'opt',
        label: 'Optative / imperative',
        tabcolgroups: [
          {label: 'Affirmative', width: 2},
          {label: 'Negative', width: 2}
        ],
        tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Second person polite',
                  'Third person'],
        tabdata: [
          [{tags: 'opt.p1.sg'}, {tags: 'opt.p1.pl'},
           {tags: 'neg.opt.p1.sg'}, {tags: 'neg.opt.p1.pl'}],
          [{tags: 'imp.p2.sg'}, {tags: 'imp.p2.pl'},
           {tags: 'neg.imp.p2.sg'}, {tags: 'neg.imp.p2.pl'}],
          [{tags: 'imp.p2.frm.sg'}, {tags: 'imp.p2.frm.pl'},
           {tags: 'neg.opt.p2.frm.sg'}, {tags: 'neg.opt.p2.frm.pl'}],
          [{tags: 'opt.p3.sg', width: 2}, {tags: 'neg.opt.p1.sg', width: 2}]
        ]
      },
      kaz_fin_vb('gna_cond', 'Conditional'),
      kaz_fin_vb('fut', '[descriptive word] Future'),
      kaz_fin_vb('fut_plan', '[descriptive word] Future'),
      kaz_fin_vb('pih', 'Past imperfective'),
      {
        'id': 'prc_vol',
        'label': "Volitional infinitive",
        tabcols: ["Singular", "Plural"],
        tabrows: ["First person", "Second person", "Second person polite",
                  "Third person"],
        tabdata: [
          [{tags: 'prc_vol.p1.sg'}, {tags: 'prc_vol.p1.pl'}],
          [{tags: 'prc_vol.p2.sg'}, {tags: 'prc_vol.p2.pl'}],
          [{tags: 'prc_vol.p2.frm.sg'}, {tags: 'prc_vol.p2.frm.pl'}],
          [{tags: 'prc_vol.p3.sg', width: 2}]
        ]
      }
    ],
    verb_tv: [
      {
        id: 'inf',
        label: 'Infinitives',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'prc_perf'}, {tags: 'neg.prc_perf'}],
          [{tags: 'prc_impf'}, {tags: 'neg.prc_impf'}],
          [{tags: 'prc_plan', width: 2}]
        ]
      },
      {
        id: 'ger',
        label: 'Gerunds',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [
          [{tags: 'ger.nom'}, {tags: 'neg.ger.nom'}],
          [{tags: 'ger_past.nom'}, {tags: 'neg.ger_past.nom'}],
          [{tags: 'gpr_fut.nom'}, {tags: 'neg.gpr_fut.nom'}],
          [{tags: 'gpr_impf.nom'}, {tags: 'neg.gpr_impf.nom'}]
        ]
      },
      kaz_fin_vb('aor', 'Non-past'),
      kaz_fin_vb_pass('aor', 'Non-past'),
      kaz_fin_vb('ifi', 'Recent past'),
      kaz_fin_vb_pass('ifi', 'Recent past'),
      kaz_fin_vb('ifi.evid', 'Past evidential'),
      kaz_fin_vb('past', 'Non-recent past'),
      {
        id: 'opt',
        label: 'Optative / imperative',
        tabcolgroups: [
          {label: 'Affirmative', width: 2},
          {label: 'Negative', width: 2}
        ],
        tabcols: ['Singular', 'Plural', 'Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Second person polite',
                  'Third person'],
        tabdata: [
          [{tags: 'opt.p1.sg'}, {tags: 'opt.p1.pl'},
           {tags: 'neg.opt.p1.sg'}, {tags: 'neg.opt.p1.pl'}],
          [{tags: 'imp.p2.sg'}, {tags: 'imp.p2.pl'},
           {tags: 'neg.imp.p2.sg'}, {tags: 'neg.imp.p2.pl'}],
          [{tags: 'imp.p2.frm.sg'}, {tags: 'imp.p2.frm.pl'},
           {tags: 'neg.opt.p2.frm.sg'}, {tags: 'neg.opt.p2.frm.pl'}],
          [{tags: 'opt.p3.sg', width: 2}, {tags: 'neg.opt.p1.sg', width: 2}]
        ]
      },
      kaz_fin_vb('gna_cond', 'Conditional'),
      kaz_fin_vb('fut', '[descriptive word] Future'),
      kaz_fin_vb('fut_plan', '[descriptive word] Future'),
      kaz_fin_vb('pih', 'Past imperfective'),
      {
        'id': 'prc_vol',
        'label': "Volitional infinitive",
        tabcols: ["Singular", "Plural"],
        tabrows: ["First person", "Second person", "Second person polite",
                  "Third person"],
        tabdata: [
          [{tags: 'prc_vol.p1.sg'}, {tags: 'prc_vol.p1.pl'}],
          [{tags: 'prc_vol.p2.sg'}, {tags: 'prc_vol.p2.pl'}],
          [{tags: 'prc_vol.p2.frm.sg'}, {tags: 'prc_vol.p2.frm.pl'}],
          [{tags: 'prc_vol.p3.sg', width: 2}]
        ]
      }
    ]

  };
}
