function uum_fin_vb(tgs, lab) {
  return {
    id: tgs.replaceAll('.', '-'),
    label: lab,
    tabcols: ['Affirmative', 'Negative'],
    tabrows: ['1st person singular', '1st person plural',
              '2nd person singular', '2nd person plural',
              '3rd person singular', '3rd person plural'],
    tabdata: [
      [{tags: tgs+'.p1.sg'}, {tags: 'neg.'+tgs+'.p1.sg'}],
      [{tags: tgs+'.p1.pl'}, {tags: 'neg.'+tgs+'.p1.pl'}],
      [{tags: tgs+'.p2.sg'}, {tags: 'neg.'+tgs+'.p2.sg'}],
      [{tags: tgs+'.p2.pl'}, {tags: 'neg.'+tgs+'.p2.pl'}],
      [{tags: tgs+'.p3.sg'}, {tags: 'neg.'+tgs+'.p3.sg'}],
      [{tags: tgs+'.p3.pl'}, {tags: 'neg.'+tgs+'.p3.pl'}]
    ]
  };
}

function add_uum() {
  return {
    vaux: [],
    verb_iv: [
      {
        id: 'nonfin',
        label: 'Non-finite',
        subcats: [ 
          {
            id: 'inf',
            label: 'Infinitive',
            tabcols: ['Affirmative', 'Negative'],
            tabdata: [[{tags: 'inf'}, {tags: 'neg.tsg'}]]
          },
          {
            id: 'pp',
            label: 'Participle',
            tabcols: ['Affirmative', 'Negative'],
            tabdata: [[{tags: 'pp'}, {tags: 'neg.pp'}]]
          },
          {
            id: 'tsg',
            label: 'Converb',
            tabcols: ['Affirmative', 'Negative'],
            tabdata: [[{tags: 'tsg'}, {tags: 'neg.tsg'}]]
          }
        ]
      },
      uum_fin_vb('pres', 'Present'),
      uum_fin_vb('past', 'Past'),
      uum_fin_vb('fut', 'Future'),
      uum_fin_vb('fdi', 'Future definite'),
      uum_fin_vb('pres.cni', 'Conditional'),
      {
        id: 'imp',
        label: 'Imperative',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ['1st person singular', '1st person plural',
                  '2nd person singular', '2nd person plural'],
        tabdata: [
          [{tags: 'imp.p1.sg'}, {tags: 'neg.imp.p1.sg'}],
          [{tags: 'imp.p1.pl'}, {tags: 'neg.imp.p1.pl'}],
          [{tags: 'imp.p2.sg'}, {tags: 'neg.imp.p2.sg'}],
          [{tags: 'imp.p2.pl'}, {tags: 'neg.imp.p2.pl'}]
        ]
      }
    ],
    verb_tv: [
      {
        id: 'inf',
        label: 'Infinitive',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [[{tags: 'inf'}, {tags: 'neg.tsg'}]]
      },
      {
        id: 'pp',
        label: 'Participle',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [[{tags: 'pp'}, {tags: 'neg.pp'}]]
      },
      uum_fin_vb('pres', 'Present'),
      uum_fin_vb('past', 'Past'),
      uum_fin_vb('fut', 'Future'),
      uum_fin_vb('fdi', 'Future definite'),
      uum_fin_vb('pres.cni', 'Conditional'),
      {
        id: 'imp',
        label: 'Imperative',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ['1st person singular', '1st person plural',
                  '2nd person singular', '2nd person plural'],
        tabdata: [
          [{tags: 'imp.p1.sg'}, {tags: 'neg.imp.p1.sg'}],
          [{tags: 'imp.p1.pl'}, {tags: 'neg.imp.p1.pl'}],
          [{tags: 'imp.p2.sg'}, {tags: 'neg.imp.p2.sg'}],
          [{tags: 'imp.p2.pl'}, {tags: 'neg.imp.p2.pl'}]
        ]
      },
      {
        id: 'tsg',
        label: 'Transgressive',
        tabcols: ['Affirmative', 'Negative'],
        tabdata: [[{tags: 'tsg'}, {tags: 'neg.tsg'}]]
      }
    ],
    noun: [
      {
        id: 'noun-cases',
        label: 'Cases',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['Nominative', 'Accusative', 'Dative', 'Locative', 'Genitive', 'Ablative', 'Instrumental', 'Terminative', 'Abessive'],
        tabdata: [
          [{tags: 'nom'}, {tags: 'pl.nom'}],
          [{tags: 'acc'}, {tags: 'pl.acc'}],
          [{tags: 'dat'}, {tags: 'pl.dat'}],
          [{tags: 'loc'}, {tags: 'pl.loc'}],
          [{tags: 'gen'}, {tags: 'pl.gen'}],
          [{tags: 'abl'}, {tags: 'pl.abl'}],
          [{tags: 'ins'}, {tags: 'pl.ins'}],
          [{tags: 'term'}, {tags: 'pl.term'}],
          [{tags: 'abe'}, {tags: 'pl.abe'}]
        ]
      },
      {
        id: 'noun-poss',
        label: 'Possession',
        tabcols: ['1sg', '2sg', '3sg', '1pl', '2pl', '3pl'],
        tabrows: ['Nominative', 'Accusative', 'Dative', 'Locative', 'Genetive', 'Ablative', 'Instrumental', 'Terminative', 'Abessive'],
        tabdata: [
          [
            {tags: 'px1sg.nom'}, {tags: 'px2sg.nom'}, {tags: 'px3sg.nom'},
            {tags: 'px1pl.nom'}, {tags: 'px2pl.nom'}, {tags: 'px3pl.nom'}
          ],
          [
            {tags: 'px1sg.acc'}, {tags: 'px2sg.acc'}, {tags: 'px3sg.acc'},
            {tags: 'px1pl.acc'}, {tags: 'px2pl.acc'}, {tags: 'px3pl.acc'}
          ],
          [
            {tags: 'px1sg.dat'}, {tags: 'px2sg.dat'}, {tags: 'px3sg.dat'},
            {tags: 'px1pl.dat'}, {tags: 'px2pl.dat'}, {tags: 'px3pl.dat'}
          ],
          [
            {tags: 'px1sg.loc'}, {tags: 'px2sg.loc'}, {tags: 'px3sg.loc'},
            {tags: 'px1pl.loc'}, {tags: 'px2pl.loc'}, {tags: 'px3pl.loc'}
          ],
          [
            {tags: 'px1sg.gen'}, {tags: 'px2sg.gen'}, {tags: 'px3sg.gen'},
            {tags: 'px1pl.gen'}, {tags: 'px2pl.gen'}, {tags: 'px3pl.gen'}
          ],
          [
            {tags: 'px1sg.abl'}, {tags: 'px2sg.abl'}, {tags: 'px3sg.abl'},
            {tags: 'px1pl.abl'}, {tags: 'px2pl.abl'}, {tags: 'px3pl.abl'}
          ],
          [
            {tags: 'px1sg.ins'}, {tags: 'px2sg.ins'}, {tags: 'px3sg.ins'},
            {tags: 'px1pl.ins'}, {tags: 'px2pl.ins'}, {tags: 'px3pl.ins'}
          ],
          [
            {tags: 'px1sg.term'}, {tags: 'px2sg.term'}, {tags: 'px3sg.term'},
            {tags: 'px1pl.term'}, {tags: 'px2pl.term'}, {tags: 'px3pl.term'}
          ],
          [
            {tags: 'px1sg.abe'}, {tags: 'px2sg.abe'}, {tags: 'px3sg.abe'},
            {tags: 'px1pl.abe'}, {tags: 'px2pl.abe'}, {tags: 'px3pl.abe'}
          ]
        ]
      }
    ]
  };
}
