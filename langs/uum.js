let uum_labels = {
   "english": {
     "p1sg": "I",
     "p2sg": "you",
     "p3sg": "he/she",
     "p1pl": "we",
     "p2pl": "you all",
     "p3pl": "they"
   },
   "linguist": {
     "sg": "Singular",
     "pl": "Plural",
     "p1": "1st",
     "p2": "2nd",
     "p3": "3rd"
   },
   "urum": {
      "p1sg": "мен",
      "p2sg": "сен",
      "p3sg": "о",
      "p1pl": "биз",
      "p2pl": "сиз",
      "p3pl": "олар"
   },
   "russian": {
      "p1sg": "я",
      "p2sg": "ты",
      "p3sg": "он/она",
      "p1pl": "мы",
      "p2pl": "вы",
      "p3pl": "они"
   },
   "ukrainian": {
      "p1sg": "я",
      "p2sg": "ти",
      "p3sg": "він/вона",
      "p1pl": "ми",
      "p2pl": "ви",
      "p3pl": "вони"
   }
} 

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
    ],
    html: {
      'linguist': `
        <table class="paradigm-table">
          <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
          <tr><th>${uum_labels['linguist']['p1']} ${uum_labels['linguist']['sg']}</th>
            <td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['linguist']['p1']} ${uum_labels['linguist']['pl']}</th>
            <td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['linguist']['p2']} ${uum_labels['linguist']['sg']}</th>
            <td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['linguist']['p2']} ${uum_labels['linguist']['pl']}</th>
            <td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['linguist']['p3']} ${uum_labels['linguist']['sg']}</th>
            <td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['linguist']['p3']} ${uum_labels['linguist']['pl']}</th>
            <td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'english': `
        <table class="paradigm-table">
          <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
          <tr><th>${uum_labels['english']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['english']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['english']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['english']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['english']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['english']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'russian': `
        <table class="paradigm-table">
          <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
          <tr><th>${uum_labels['russian']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['russian']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['russian']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['russian']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['russian']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['russian']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'ukrainian': `
        <table class="paradigm-table">
          <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
          <tr><th>${uum_labels['ukrainian']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['ukrainian']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['ukrainian']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['ukrainian']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['ukrainian']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['ukrainian']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`
    }
  };
}

function add_uum() {
  return {
    vaux: [],
    verb_iv: [
      {
        id: 'non-personal',
        label: 'Non-personal forms',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ['Infinitive', 'Participle', 'Converb'],
        tabdata: [
          [{ tags: 'inf' }, { tags: 'neg.inf' }],
          [{ tags: 'pp' }, { tags: 'neg.pp' }],
          [{ tags: 'tsg' }, { tags: 'neg.tsg' }]
        ],
        html: {
          linguist: `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          english: `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          russian: `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>Инфинитив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Причастие</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Деепричастие</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          ukrainian: `
            <table class="paradigm-table">
              <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
              <tr><th>Інфінітив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Дієприкметник</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Дієприслівник</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`
        }
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
        tabrows: [
          '1st person singular',
          '1st person plural',
          '2nd person singular',
          '2nd person plural'
        ],
        tabdata: [
          [{ tags: 'imp.p1.sg' }, { tags: 'neg.imp.p1.sg' }],
          [{ tags: 'imp.p1.pl' }, { tags: 'neg.imp.p1.pl' }],
          [{ tags: 'imp.p2.sg' }, { tags: 'neg.imp.p2.sg' }],
          [{ tags: 'imp.p2.pl' }, { tags: 'neg.imp.p2.pl' }]
        ],
        html: {
          linguist: `<table class="paradigm-table"><tr><th></th><th>Affirmative</th><th>Negative</th></tr>
                    <tr><th>1sg</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>1pl</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>2sg</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>2pl</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          english: `<table class="paradigm-table"><tr><th></th><th>Affirmative</th><th>Negative</th></tr>
                    <tr><th>I</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>we</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>you</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>you all</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          russian: `<table class="paradigm-table"><tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
                    <tr><th>я</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>мы</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>ты</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>вы</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          ukrainian: `<table class="paradigm-table"><tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
                      <tr><th>я</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                      <tr><th>ми</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                      <tr><th>ти</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                      <tr><th>ви</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`
        }
      }
    ],
    verb_tv: [
      {
        id: 'non-personal',
        label: 'Non-personal forms',
        tabcols: ['Affirmative', 'Negative'],
        tabrows: ['Infinitive', 'Participle', 'Converb'],
        tabdata: [
          [{ tags: 'inf' }, { tags: 'neg.inf' }],
          [{ tags: 'pp' }, { tags: 'neg.pp' }],
          [{ tags: 'tsg' }, { tags: 'neg.tsg' }]
        ],
        html: {
          linguist: `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          english: `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          russian: `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>Инфинитив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Причастие</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Деепричастие</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          ukrainian: `
            <table class="paradigm-table">
              <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
              <tr><th>Інфінітив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Дієприкметник</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Дієприслівник</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`
        }
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
        tabrows: [
          '1st person singular',
          '1st person plural',
          '2nd person singular',
          '2nd person plural'
        ],
        tabdata: [
          [{ tags: 'imp.p1.sg' }, { tags: 'neg.imp.p1.sg' }],
          [{ tags: 'imp.p1.pl' }, { tags: 'neg.imp.p1.pl' }],
          [{ tags: 'imp.p2.sg' }, { tags: 'neg.imp.p2.sg' }],
          [{ tags: 'imp.p2.pl' }, { tags: 'neg.imp.p2.pl' }]
        ],
        html: {
          linguist: `<table class="paradigm-table"><tr><th></th><th>Affirmative</th><th>Negative</th></tr>
                    <tr><th>1sg</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>1pl</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>2sg</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>2pl</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          english: `<table class="paradigm-table"><tr><th></th><th>Affirmative</th><th>Negative</th></tr>
                    <tr><th>I</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>we</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>you</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>you all</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          russian: `<table class="paradigm-table"><tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
                    <tr><th>я</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                    <tr><th>мы</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                    <tr><th>ты</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                    <tr><th>вы</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`,
          ukrainian: `<table class="paradigm-table"><tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
                      <tr><th>я</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
                      <tr><th>ми</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
                      <tr><th>ти</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
                      <tr><th>ви</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr></table>`
        }
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
