let uum_labels = {
  "English": {
    "p1sg": "I",
    "p2sg": "you",
    "p3sg": "he/she",
    "p1pl": "we",
    "p2pl": "you all",
    "p3pl": "they",
    "cases": {
      "nom": "Nominative",
      "acc": "Accusative",
      "dat": "Dative",
      "loc": "Locative",
      "gen": "Genitive",
      "abl": "Ablative",
      "ins": "Instrumental",
      "term": "Terminative",
      "abe": "Abessive"
    }
  },
  "Linguist": {
    "sg": "Singular",
    "pl": "Plural",
    "p1": "1st",
    "p2": "2nd",
    "p3": "3rd",
    "cases": {
      "nom": "Nominative",
      "acc": "Accusative",
      "dat": "Dative",
      "loc": "Locative",
      "gen": "Genitive",
      "abl": "Ablative",
      "ins": "Instrumental",
      "term": "Terminative",
      "abe": "Abessive"
    }
  },
  "Russian": {
    "p1sg": "я",
    "p2sg": "ты",
    "p3sg": "он/она",
    "p1pl": "мы",
    "p2pl": "вы",
    "p3pl": "они",
    "cases": {
      "nom": "Именительный",
      "acc": "Винительный",
      "dat": "Дательный",
      "loc": "Местный",
      "gen": "Родительный",
      "abl": "Исходный",
      "ins": "Творительный",
      "term": "Предел",
      "abe": "Безналичный"
    }
  },
  "Ukrainian": {
    "p1sg": "я",
    "p2sg": "ти",
    "p3sg": "він/вона",
    "p1pl": "ми",
    "p2pl": "ви",
    "p3pl": "вони",
    "cases": {
      "nom": "Називний",
      "acc": "Знахідний",
      "dat": "Давальний",
      "loc": "Місцевий",
      "gen": "Родовий",
      "abl": "Відмінок походження",
      "ins": "Орудний",
      "term": "Кінцевий",
      "abe": "Безвідмінковий"
    }
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
      'Linguist': `
        <table class="paradigm-table">
          <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
          <tr><th>${uum_labels['Linguist']['p1']} ${uum_labels['Linguist']['sg']}</th>
            <td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['Linguist']['p1']} ${uum_labels['Linguist']['pl']}</th>
            <td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['Linguist']['p2']} ${uum_labels['Linguist']['sg']}</th>
            <td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['Linguist']['p2']} ${uum_labels['Linguist']['pl']}</th>
            <td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['Linguist']['p3']} ${uum_labels['Linguist']['sg']}</th>
            <td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['Linguist']['p3']} ${uum_labels['Linguist']['pl']}</th>
            <td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'English': `
        <table class="paradigm-table">
          <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
          <tr><th>${uum_labels['English']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['English']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['English']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['English']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['English']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['English']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'Russian': `
        <table class="paradigm-table">
          <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
          <tr><th>${uum_labels['Russian']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['Russian']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['Russian']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['Russian']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['Russian']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['Russian']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
        </table>`,
      'Ukrainian': `
        <table class="paradigm-table">
          <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
          <tr><th>${uum_labels['Ukrainian']['p1sg']}</th><td data-tags="${tgs}.p1.sg"></td><td data-tags="neg.${tgs}.p1.sg"></td></tr>
          <tr><th>${uum_labels['Ukrainian']['p1pl']}</th><td data-tags="${tgs}.p1.pl"></td><td data-tags="neg.${tgs}.p1.pl"></td></tr>
          <tr><th>${uum_labels['Ukrainian']['p2sg']}</th><td data-tags="${tgs}.p2.sg"></td><td data-tags="neg.${tgs}.p2.sg"></td></tr>
          <tr><th>${uum_labels['Ukrainian']['p2pl']}</th><td data-tags="${tgs}.p2.pl"></td><td data-tags="neg.${tgs}.p2.pl"></td></tr>
          <tr><th>${uum_labels['Ukrainian']['p3sg']}</th><td data-tags="${tgs}.p3.sg"></td><td data-tags="neg.${tgs}.p3.sg"></td></tr>
          <tr><th>${uum_labels['Ukrainian']['p3pl']}</th><td data-tags="${tgs}.p3.pl"></td><td data-tags="neg.${tgs}.p3.pl"></td></tr>
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
          'Linguist': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'English': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'Russian': `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>Инфинитив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Причастие</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Деепричастие</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'Ukrainian': `
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
          'Linguist': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>${uum_labels["Linguist"]["p1"]} ${uum_labels["Linguist"]["sg"]}</th>
                <td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p1"]} ${uum_labels["Linguist"]["pl"]}</th>
                <td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p2"]} ${uum_labels["Linguist"]["sg"]}</th>
                <td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p2"]} ${uum_labels["Linguist"]["pl"]}</th>
                <td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'English': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>${uum_labels["English"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["English"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["English"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["English"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'Russian': `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>${uum_labels["Russian"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Russian"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Russian"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Russian"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'Ukrainian': `
            <table class="paradigm-table">
              <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
              <tr><th>${uum_labels["Ukrainian"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`
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
          'Linguist': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'English': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>Infinitive</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Participle</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Converb</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'Russian': `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>Инфинитив</th><td data-tags="inf"></td><td data-tags="neg.inf"></td></tr>
              <tr><th>Причастие</th><td data-tags="pp"></td><td data-tags="neg.pp"></td></tr>
              <tr><th>Деепричастие</th><td data-tags="tsg"></td><td data-tags="neg.tsg"></td></tr>
            </table>`,
          'Ukrainian': `
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
          'Linguist': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>${uum_labels["Linguist"]["p1"]} ${uum_labels["Linguist"]["sg"]}</th>
                <td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p1"]} ${uum_labels["Linguist"]["pl"]}</th>
                <td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p2"]} ${uum_labels["Linguist"]["sg"]}</th>
                <td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Linguist"]["p2"]} ${uum_labels["Linguist"]["pl"]}</th>
                <td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'English': `
            <table class="paradigm-table">
              <tr><th></th><th>Affirmative</th><th>Negative</th></tr>
              <tr><th>${uum_labels["English"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["English"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["English"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["English"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'Russian': `
            <table class="paradigm-table">
              <tr><th></th><th>Утвердительный</th><th>Отрицательный</th></tr>
              <tr><th>${uum_labels["Russian"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Russian"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Russian"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Russian"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`,
          'Ukrainian': `
            <table class="paradigm-table">
              <tr><th></th><th>Стверджувальний</th><th>Заперечний</th></tr>
              <tr><th>${uum_labels["Ukrainian"]["p1sg"]}</th><td data-tags="imp.p1.sg"></td><td data-tags="neg.imp.p1.sg"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p1pl"]}</th><td data-tags="imp.p1.pl"></td><td data-tags="neg.imp.p1.pl"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p2sg"]}</th><td data-tags="imp.p2.sg"></td><td data-tags="neg.imp.p2.sg"></td></tr>
              <tr><th>${uum_labels["Ukrainian"]["p2pl"]}</th><td data-tags="imp.p2.pl"></td><td data-tags="neg.imp.p2.pl"></td></tr>
            </table>`
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
        ],
        html: {
          Linguist: `
            <table class="paradigm-table">
              <tr><th></th><th>Singular</th><th>Plural</th></tr>
              <tr><th>${uum_labels["Linguist"].cases.nom}</th><td data-tags="nom"></td><td data-tags="pl.nom"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.acc}</th><td data-tags="acc"></td><td data-tags="pl.acc"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.dat}</th><td data-tags="dat"></td><td data-tags="pl.dat"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.loc}</th><td data-tags="loc"></td><td data-tags="pl.loc"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.gen}</th><td data-tags="gen"></td><td data-tags="pl.gen"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.abl}</th><td data-tags="abl"></td><td data-tags="pl.abl"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.ins}</th><td data-tags="ins"></td><td data-tags="pl.ins"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.term}</th><td data-tags="term"></td><td data-tags="pl.term"></td></tr>
              <tr><th>${uum_labels["Linguist"].cases.abe}</th><td data-tags="abe"></td><td data-tags="pl.abe"></td></tr>
            </table>`,
          English: `
            <table class="paradigm-table">
              <tr><th></th><th>Singular</th><th>Plural</th></tr>
              <tr><th>${uum_labels["English"].cases.nom}</th><td data-tags="nom"></td><td data-tags="pl.nom"></td></tr>
              <tr><th>${uum_labels["English"].cases.acc}</th><td data-tags="acc"></td><td data-tags="pl.acc"></td></tr>
              <tr><th>${uum_labels["English"].cases.dat}</th><td data-tags="dat"></td><td data-tags="pl.dat"></td></tr>
              <tr><th>${uum_labels["English"].cases.loc}</th><td data-tags="loc"></td><td data-tags="pl.loc"></td></tr>
              <tr><th>${uum_labels["English"].cases.gen}</th><td data-tags="gen"></td><td data-tags="pl.gen"></td></tr>
              <tr><th>${uum_labels["English"].cases.abl}</th><td data-tags="abl"></td><td data-tags="pl.abl"></td></tr>
              <tr><th>${uum_labels["English"].cases.ins}</th><td data-tags="ins"></td><td data-tags="pl.ins"></td></tr>
              <tr><th>${uum_labels["English"].cases.term}</th><td data-tags="term"></td><td data-tags="pl.term"></td></tr>
              <tr><th>${uum_labels["English"].cases.abe}</th><td data-tags="abe"></td><td data-tags="pl.abe"></td></tr>
            </table>`,
          Russian: `
            <table class="paradigm-table">
              <tr><th></th><th>Единственное число</th><th>Множественное число</th></tr>
              <tr><th>${uum_labels["Russian"].cases.nom}</th><td data-tags="nom"></td><td data-tags="pl.nom"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.acc}</th><td data-tags="acc"></td><td data-tags="pl.acc"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.dat}</th><td data-tags="dat"></td><td data-tags="pl.dat"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.loc}</th><td data-tags="loc"></td><td data-tags="pl.loc"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.gen}</th><td data-tags="gen"></td><td data-tags="pl.gen"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.abl}</th><td data-tags="abl"></td><td data-tags="pl.abl"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.ins}</th><td data-tags="ins"></td><td data-tags="pl.ins"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.term}</th><td data-tags="term"></td><td data-tags="pl.term"></td></tr>
              <tr><th>${uum_labels["Russian"].cases.abe}</th><td data-tags="abe"></td><td data-tags="pl.abe"></td></tr>
            </table>`,
          Ukrainian: `
            <table class="paradigm-table">
              <tr><th></th><th>Однина</th><th>Множина</th></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.nom}</th><td data-tags="nom"></td><td data-tags="pl.nom"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.acc}</th><td data-tags="acc"></td><td data-tags="pl.acc"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.dat}</th><td data-tags="dat"></td><td data-tags="pl.dat"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.loc}</th><td data-tags="loc"></td><td data-tags="pl.loc"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.gen}</th><td data-tags="gen"></td><td data-tags="pl.gen"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.abl}</th><td data-tags="abl"></td><td data-tags="pl.abl"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.ins}</th><td data-tags="ins"></td><td data-tags="pl.ins"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.term}</th><td data-tags="term"></td><td data-tags="pl.term"></td></tr>
              <tr><th>${uum_labels["Ukrainian"].cases.abe}</th><td data-tags="abe"></td><td data-tags="pl.abe"></td></tr>
            </table>`
        }
      },
      {
        id: 'noun-poss',
        label: 'Possession',
        subcats: [
          {
            id: 'noun-poss-sg',
            label: 'Singular possessed object',
            tabcols: ['1sg', '2sg', '3sg', '1pl', '2pl', '3pl'],
            tabrows: ['Nominative', 'Accusative', 'Dative', 'Locative', 'Genetive', 'Ablative', 'Instrumental', 'Terminative', 'Abessive'],
            tabdata: [
              [
                { tags: 'px1sg.nom' }, { tags: 'px2sg.nom' }, { tags: 'px3sg.nom' },
                { tags: 'px1pl.nom' }, { tags: 'px2pl.nom' }, { tags: 'px3pl.nom' }
              ],
              [
                { tags: 'px1sg.acc' }, { tags: 'px2sg.acc' }, { tags: 'px3sg.acc' },
                { tags: 'px1pl.acc' }, { tags: 'px2pl.acc' }, { tags: 'px3pl.acc' }
              ],
              [
                { tags: 'px1sg.dat' }, { tags: 'px2sg.dat' }, { tags: 'px3sg.dat' },
                { tags: 'px1pl.dat' }, { tags: 'px2pl.dat' }, { tags: 'px3pl.dat' }
              ],
              [
                { tags: 'px1sg.loc' }, { tags: 'px2sg.loc' }, { tags: 'px3sg.loc' },
                { tags: 'px1pl.loc' }, { tags: 'px2pl.loc' }, { tags: 'px3pl.loc' }
              ],
              [
                { tags: 'px1sg.gen' }, { tags: 'px2sg.gen' }, { tags: 'px3sg.gen' },
                { tags: 'px1pl.gen' }, { tags: 'px2pl.gen' }, { tags: 'px3pl.gen' }
              ],
              [
                { tags: 'px1sg.abl' }, { tags: 'px2sg.abl' }, { tags: 'px3sg.abl' },
                { tags: 'px1pl.abl' }, { tags: 'px2pl.abl' }, { tags: 'px3pl.abl' }
              ],
              [
                { tags: 'px1sg.ins' }, { tags: 'px2sg.ins' }, { tags: 'px3sg.ins' },
                { tags: 'px1pl.ins' }, { tags: 'px2pl.ins' }, { tags: 'px3pl.ins' }
              ],
              [
                { tags: 'px1sg.term' }, { tags: 'px2sg.term' }, { tags: 'px3sg.term' },
                { tags: 'px1pl.term' }, { tags: 'px2pl.term' }, { tags: 'px3pl.term' }
              ],
              [
                { tags: 'px1sg.abe' }, { tags: 'px2sg.abe' }, { tags: 'px3sg.abe' },
                { tags: 'px1pl.abe' }, { tags: 'px2pl.abe' }, { tags: 'px3pl.abe' }
              ]
            ],
            html: {
              'Linguist': `
                <table class="paradigm-table">
                  <tr><th></th><th>1sg</th><th>2sg</th><th>3sg</th><th>1pl</th><th>2pl</th><th>3pl</th></tr>
                  <tr><th>${uum_labels["Linguist"].cases.nom}</th><td data-tags="px1sg.nom"></td><td data-tags="px2sg.nom"></td><td data-tags="px3sg.nom"></td><td data-tags="px1pl.nom"></td><td data-tags="px2pl.nom"></td><td data-tags="px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.acc}</th><td data-tags="px1sg.acc"></td><td data-tags="px2sg.acc"></td><td data-tags="px3sg.acc"></td><td data-tags="px1pl.acc"></td><td data-tags="px2pl.acc"></td><td data-tags="px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.dat}</th><td data-tags="px1sg.dat"></td><td data-tags="px2sg.dat"></td><td data-tags="px3sg.dat"></td><td data-tags="px1pl.dat"></td><td data-tags="px2pl.dat"></td><td data-tags="px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.loc}</th><td data-tags="px1sg.loc"></td><td data-tags="px2sg.loc"></td><td data-tags="px3sg.loc"></td><td data-tags="px1pl.loc"></td><td data-tags="px2pl.loc"></td><td data-tags="px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.gen}</th><td data-tags="px1sg.gen"></td><td data-tags="px2sg.gen"></td><td data-tags="px3sg.gen"></td><td data-tags="px1pl.gen"></td><td data-tags="px2pl.gen"></td><td data-tags="px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.abl}</th><td data-tags="px1sg.abl"></td><td data-tags="px2sg.abl"></td><td data-tags="px3sg.abl"></td><td data-tags="px1pl.abl"></td><td data-tags="px2pl.abl"></td><td data-tags="px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.ins}</th><td data-tags="px1sg.ins"></td><td data-tags="px2sg.ins"></td><td data-tags="px3sg.ins"></td><td data-tags="px1pl.ins"></td><td data-tags="px2pl.ins"></td><td data-tags="px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.term}</th><td data-tags="px1sg.term"></td><td data-tags="px2sg.term"></td><td data-tags="px3sg.term"></td><td data-tags="px1pl.term"></td><td data-tags="px2pl.term"></td><td data-tags="px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.abe}</th><td data-tags="px1sg.abe"></td><td data-tags="px2sg.abe"></td><td data-tags="px3sg.abe"></td><td data-tags="px1pl.abe"></td><td data-tags="px2pl.abe"></td><td data-tags="px3pl.abe"></td></tr>
                </table>`,
              'English': `
                <table class="paradigm-table">
                  <tr><th></th><th>my</th><th>your</th><th>his/her</th><th>our</th><th>your (pl)</th><th>their</th></tr>
                  <tr><th>${uum_labels["English"].cases.nom}</th><td data-tags="px1sg.nom"></td><td data-tags="px2sg.nom"></td><td data-tags="px3sg.nom"></td><td data-tags="px1pl.nom"></td><td data-tags="px2pl.nom"></td><td data-tags="px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["English"].cases.acc}</th><td data-tags="px1sg.acc"></td><td data-tags="px2sg.acc"></td><td data-tags="px3sg.acc"></td><td data-tags="px1pl.acc"></td><td data-tags="px2pl.acc"></td><td data-tags="px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["English"].cases.dat}</th><td data-tags="px1sg.dat"></td><td data-tags="px2sg.dat"></td><td data-tags="px3sg.dat"></td><td data-tags="px1pl.dat"></td><td data-tags="px2pl.dat"></td><td data-tags="px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["English"].cases.loc}</th><td data-tags="px1sg.loc"></td><td data-tags="px2sg.loc"></td><td data-tags="px3sg.loc"></td><td data-tags="px1pl.loc"></td><td data-tags="px2pl.loc"></td><td data-tags="px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["English"].cases.gen}</th><td data-tags="px1sg.gen"></td><td data-tags="px2sg.gen"></td><td data-tags="px3sg.gen"></td><td data-tags="px1pl.gen"></td><td data-tags="px2pl.gen"></td><td data-tags="px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["English"].cases.abl}</th><td data-tags="px1sg.abl"></td><td data-tags="px2sg.abl"></td><td data-tags="px3sg.abl"></td><td data-tags="px1pl.abl"></td><td data-tags="px2pl.abl"></td><td data-tags="px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["English"].cases.ins}</th><td data-tags="px1sg.ins"></td><td data-tags="px2sg.ins"></td><td data-tags="px3sg.ins"></td><td data-tags="px1pl.ins"></td><td data-tags="px2pl.ins"></td><td data-tags="px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["English"].cases.term}</th><td data-tags="px1sg.term"></td><td data-tags="px2sg.term"></td><td data-tags="px3sg.term"></td><td data-tags="px1pl.term"></td><td data-tags="px2pl.term"></td><td data-tags="px3pl.term"></td></tr>
                  <tr><th>${uum_labels["English"].cases.abe}</th><td data-tags="px1sg.abe"></td><td data-tags="px2sg.abe"></td><td data-tags="px3sg.abe"></td><td data-tags="px1pl.abe"></td><td data-tags="px2pl.abe"></td><td data-tags="px3pl.abe"></td></tr>
                </table>`,
              'Russian': `
                <table class="paradigm-table">
                  <tr><th></th><th>мой</th><th>твой</th><th>его/её</th><th>наш</th><th>ваш</th><th>их</th></tr>
                  <tr><th>${uum_labels["Russian"].cases.nom}</th><td data-tags="px1sg.nom"></td><td data-tags="px2sg.nom"></td><td data-tags="px3sg.nom"></td><td data-tags="px1pl.nom"></td><td data-tags="px2pl.nom"></td><td data-tags="px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.acc}</th><td data-tags="px1sg.acc"></td><td data-tags="px2sg.acc"></td><td data-tags="px3sg.acc"></td><td data-tags="px1pl.acc"></td><td data-tags="px2pl.acc"></td><td data-tags="px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.dat}</th><td data-tags="px1sg.dat"></td><td data-tags="px2sg.dat"></td><td data-tags="px3sg.dat"></td><td data-tags="px1pl.dat"></td><td data-tags="px2pl.dat"></td><td data-tags="px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.loc}</th><td data-tags="px1sg.loc"></td><td data-tags="px2sg.loc"></td><td data-tags="px3sg.loc"></td><td data-tags="px1pl.loc"></td><td data-tags="px2pl.loc"></td><td data-tags="px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.gen}</th><td data-tags="px1sg.gen"></td><td data-tags="px2sg.gen"></td><td data-tags="px3sg.gen"></td><td data-tags="px1pl.gen"></td><td data-tags="px2pl.gen"></td><td data-tags="px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.abl}</th><td data-tags="px1sg.abl"></td><td data-tags="px2sg.abl"></td><td data-tags="px3sg.abl"></td><td data-tags="px1pl.abl"></td><td data-tags="px2pl.abl"></td><td data-tags="px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.ins}</th><td data-tags="px1sg.ins"></td><td data-tags="px2sg.ins"></td><td data-tags="px3sg.ins"></td><td data-tags="px1pl.ins"></td><td data-tags="px2pl.ins"></td><td data-tags="px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.term}</th><td data-tags="px1sg.term"></td><td data-tags="px2sg.term"></td><td data-tags="px3sg.term"></td><td data-tags="px1pl.term"></td><td data-tags="px2pl.term"></td><td data-tags="px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.abe}</th><td data-tags="px1sg.abe"></td><td data-tags="px2sg.abe"></td><td data-tags="px3sg.abe"></td><td data-tags="px1pl.abe"></td><td data-tags="px2pl.abe"></td><td data-tags="px3pl.abe"></td></tr>
                </table>`,
              'Ukrainian': `
                <table class="paradigm-table">
                  <tr><th></th><th>мій</th><th>твій</th><th>його/її</th><th>наш</th><th>ваш</th><th>їхній</th></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.nom}</th><td data-tags="px1sg.nom"></td><td data-tags="px2sg.nom"></td><td data-tags="px3sg.nom"></td><td data-tags="px1pl.nom"></td><td data-tags="px2pl.nom"></td><td data-tags="px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.acc}</th><td data-tags="px1sg.acc"></td><td data-tags="px2sg.acc"></td><td data-tags="px3sg.acc"></td><td data-tags="px1pl.acc"></td><td data-tags="px2pl.acc"></td><td data-tags="px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.dat}</th><td data-tags="px1sg.dat"></td><td data-tags="px2sg.dat"></td><td data-tags="px3sg.dat"></td><td data-tags="px1pl.dat"></td><td data-tags="px2pl.dat"></td><td data-tags="px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.loc}</th><td data-tags="px1sg.loc"></td><td data-tags="px2sg.loc"></td><td data-tags="px3sg.loc"></td><td data-tags="px1pl.loc"></td><td data-tags="px2pl.loc"></td><td data-tags="px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.gen}</th><td data-tags="px1sg.gen"></td><td data-tags="px2sg.gen"></td><td data-tags="px3sg.gen"></td><td data-tags="px1pl.gen"></td><td data-tags="px2pl.gen"></td><td data-tags="px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.abl}</th><td data-tags="px1sg.abl"></td><td data-tags="px2sg.abl"></td><td data-tags="px3sg.abl"></td><td data-tags="px1pl.abl"></td><td data-tags="px2pl.abl"></td><td data-tags="px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.ins}</th><td data-tags="px1sg.ins"></td><td data-tags="px2sg.ins"></td><td data-tags="px3sg.ins"></td><td data-tags="px1pl.ins"></td><td data-tags="px2pl.ins"></td><td data-tags="px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.term}</th><td data-tags="px1sg.term"></td><td data-tags="px2sg.term"></td><td data-tags="px3sg.term"></td><td data-tags="px1pl.term"></td><td data-tags="px2pl.term"></td><td data-tags="px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.abe}</th><td data-tags="px1sg.abe"></td><td data-tags="px2sg.abe"></td><td data-tags="px3sg.abe"></td><td data-tags="px1pl.abe"></td><td data-tags="px2pl.abe"></td><td data-tags="px3pl.abe"></td></tr>
                </table>`
            }
          },
          {
            id: 'noun-poss-pl',
            label: 'Plural possessed object',
            tabcols: ['1sg', '2sg', '3sg', '1pl', '2pl', '3pl'],
            tabrows: ['Nominative', 'Accusative', 'Dative', 'Locative', 'Genetive', 'Ablative', 'Instrumental', 'Terminative', 'Abessive'],
            tabdata: [
              [
                { tags: 'pl.px1sg.nom' }, { tags: 'pl.px2sg.nom' }, { tags: 'pl.px3sg.nom' },
                { tags: 'pl.px1pl.nom' }, { tags: 'pl.px2pl.nom' }, { tags: 'pl.px3pl.nom' }
              ],
              [
                { tags: 'pl.px1sg.acc' }, { tags: 'pl.px2sg.acc' }, { tags: 'pl.px3sg.acc' },
                { tags: 'pl.px1pl.acc' }, { tags: 'pl.px2pl.acc' }, { tags: 'pl.px3pl.acc' }
              ],
              [
                { tags: 'pl.px1sg.dat' }, { tags: 'pl.px2sg.dat' }, { tags: 'pl.px3sg.dat' },
                { tags: 'pl.px1pl.dat' }, { tags: 'pl.px2pl.dat' }, { tags: 'pl.px3pl.dat' }
              ],
              [
                { tags: 'pl.px1sg.loc' }, { tags: 'pl.px2sg.loc' }, { tags: 'pl.px3sg.loc' },
                { tags: 'pl.px1pl.loc' }, { tags: 'pl.px2pl.loc' }, { tags: 'pl.px3pl.loc' }
              ],
              [
                { tags: 'pl.px1sg.gen' }, { tags: 'pl.px2sg.gen' }, { tags: 'pl.px3sg.gen' },
                { tags: 'pl.px1pl.gen' }, { tags: 'pl.px2pl.gen' }, { tags: 'pl.px3pl.gen' }
              ],
              [
                { tags: 'pl.px1sg.abl' }, { tags: 'pl.px2sg.abl' }, { tags: 'pl.px3sg.abl' },
                { tags: 'pl.px1pl.abl' }, { tags: 'pl.px2pl.abl' }, { tags: 'pl.px3pl.abl' }
              ],
              [
                { tags: 'pl.px1sg.ins' }, { tags: 'pl.px2sg.ins' }, { tags: 'pl.px3sg.ins' },
                { tags: 'pl.px1pl.ins' }, { tags: 'pl.px2pl.ins' }, { tags: 'pl.px3pl.ins' }
              ],
              [
                { tags: 'pl.px1sg.term' }, { tags: 'pl.px2sg.term' }, { tags: 'pl.px3sg.term' },
                { tags: 'pl.px1pl.term' }, { tags: 'pl.px2pl.term' }, { tags: 'pl.px3pl.term' }
              ],
              [
                { tags: 'pl.px1sg.abe' }, { tags: 'pl.px2sg.abe' }, { tags: 'pl.px3sg.abe' },
                { tags: 'pl.px1pl.abe' }, { tags: 'pl.px2pl.abe' }, { tags: 'pl.px3pl.abe' }
              ]
            ],
            html: {
              'Linguist': `
                <table class="paradigm-table">
                  <tr><th></th><th>1sg</th><th>2sg</th><th>3sg</th><th>1pl</th><th>2pl</th><th>3pl</th></tr>
                  <tr><th>${uum_labels["Linguist"].cases.nom}</th><td data-tags="pl.px1sg.nom"></td><td data-tags="pl.px2sg.nom"></td><td data-tags="pl.px3sg.nom"></td><td data-tags="pl.px1pl.nom"></td><td data-tags="pl.px2pl.nom"></td><td data-tags="pl.px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.acc}</th><td data-tags="pl.px1sg.acc"></td><td data-tags="pl.px2sg.acc"></td><td data-tags="pl.px3sg.acc"></td><td data-tags="pl.px1pl.acc"></td><td data-tags="pl.px2pl.acc"></td><td data-tags="pl.px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.dat}</th><td data-tags="pl.px1sg.dat"></td><td data-tags="pl.px2sg.dat"></td><td data-tags="pl.px3sg.dat"></td><td data-tags="pl.px1pl.dat"></td><td data-tags="pl.px2pl.dat"></td><td data-tags="pl.px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.loc}</th><td data-tags="pl.px1sg.loc"></td><td data-tags="pl.px2sg.loc"></td><td data-tags="pl.px3sg.loc"></td><td data-tags="pl.px1pl.loc"></td><td data-tags="pl.px2pl.loc"></td><td data-tags="pl.px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.gen}</th><td data-tags="pl.px1sg.gen"></td><td data-tags="pl.px2sg.gen"></td><td data-tags="pl.px3sg.gen"></td><td data-tags="pl.px1pl.gen"></td><td data-tags="pl.px2pl.gen"></td><td data-tags="pl.px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.abl}</th><td data-tags="pl.px1sg.abl"></td><td data-tags="pl.px2sg.abl"></td><td data-tags="pl.px3sg.abl"></td><td data-tags="pl.px1pl.abl"></td><td data-tags="pl.px2pl.abl"></td><td data-tags="pl.px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.ins}</th><td data-tags="pl.px1sg.ins"></td><td data-tags="pl.px2sg.ins"></td><td data-tags="pl.px3sg.ins"></td><td data-tags="pl.px1pl.ins"></td><td data-tags="pl.px2pl.ins"></td><td data-tags="pl.px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.term}</th><td data-tags="pl.px1sg.term"></td><td data-tags="pl.px2sg.term"></td><td data-tags="pl.px3sg.term"></td><td data-tags="pl.px1pl.term"></td><td data-tags="pl.px2pl.term"></td><td data-tags="pl.px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Linguist"].cases.abe}</th><td data-tags="pl.px1sg.abe"></td><td data-tags="pl.px2sg.abe"></td><td data-tags="pl.px3sg.abe"></td><td data-tags="pl.px1pl.abe"></td><td data-tags="pl.px2pl.abe"></td><td data-tags="pl.px3pl.abe"></td></tr>
                </table>`,
              'English': `
                <table class="paradigm-table">
                  <tr><th></th><th>my</th><th>your</th><th>his/her</th><th>our</th><th>your (pl)</th><th>their</th></tr>
                  <tr><th>${uum_labels["English"].cases.nom}</th><td data-tags="pl.px1sg.nom"></td><td data-tags="pl.px2sg.nom"></td><td data-tags="pl.px3sg.nom"></td><td data-tags="pl.px1pl.nom"></td><td data-tags="pl.px2pl.nom"></td><td data-tags="pl.px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["English"].cases.acc}</th><td data-tags="pl.px1sg.acc"></td><td data-tags="pl.px2sg.acc"></td><td data-tags="pl.px3sg.acc"></td><td data-tags="pl.px1pl.acc"></td><td data-tags="pl.px2pl.acc"></td><td data-tags="pl.px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["English"].cases.dat}</th><td data-tags="pl.px1sg.dat"></td><td data-tags="pl.px2sg.dat"></td><td data-tags="pl.px3sg.dat"></td><td data-tags="pl.px1pl.dat"></td><td data-tags="pl.px2pl.dat"></td><td data-tags="pl.px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["English"].cases.loc}</th><td data-tags="pl.px1sg.loc"></td><td data-tags="pl.px2sg.loc"></td><td data-tags="pl.px3sg.loc"></td><td data-tags="pl.px1pl.loc"></td><td data-tags="pl.px2pl.loc"></td><td data-tags="pl.px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["English"].cases.gen}</th><td data-tags="pl.px1sg.gen"></td><td data-tags="pl.px2sg.gen"></td><td data-tags="pl.px3sg.gen"></td><td data-tags="pl.px1pl.gen"></td><td data-tags="pl.px2pl.gen"></td><td data-tags="pl.px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["English"].cases.abl}</th><td data-tags="pl.px1sg.abl"></td><td data-tags="pl.px2sg.abl"></td><td data-tags="pl.px3sg.abl"></td><td data-tags="pl.px1pl.abl"></td><td data-tags="pl.px2pl.abl"></td><td data-tags="pl.px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["English"].cases.ins}</th><td data-tags="pl.px1sg.ins"></td><td data-tags="pl.px2sg.ins"></td><td data-tags="pl.px3sg.ins"></td><td data-tags="pl.px1pl.ins"></td><td data-tags="pl.px2pl.ins"></td><td data-tags="pl.px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["English"].cases.term}</th><td data-tags="pl.px1sg.term"></td><td data-tags="pl.px2sg.term"></td><td data-tags="pl.px3sg.term"></td><td data-tags="pl.px1pl.term"></td><td data-tags="pl.px2pl.term"></td><td data-tags="pl.px3pl.term"></td></tr>
                  <tr><th>${uum_labels["English"].cases.abe}</th><td data-tags="pl.px1sg.abe"></td><td data-tags="pl.px2sg.abe"></td><td data-tags="pl.px3sg.abe"></td><td data-tags="pl.px1pl.abe"></td><td data-tags="pl.px2pl.abe"></td><td data-tags="pl.px3pl.abe"></td></tr>
                </table>`,
              'Russian': `
                <table class="paradigm-table">
                  <tr><th></th><th>мои</th><th>твои</th><th>его/её</th><th>наши</th><th>ваши</th><th>их</th></tr>
                  <tr><th>${uum_labels["Russian"].cases.nom}</th><td data-tags="pl.px1sg.nom"></td><td data-tags="pl.px2sg.nom"></td><td data-tags="pl.px3sg.nom"></td><td data-tags="pl.px1pl.nom"></td><td data-tags="pl.px2pl.nom"></td><td data-tags="pl.px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.acc}</th><td data-tags="pl.px1sg.acc"></td><td data-tags="pl.px2sg.acc"></td><td data-tags="pl.px3sg.acc"></td><td data-tags="pl.px1pl.acc"></td><td data-tags="pl.px2pl.acc"></td><td data-tags="pl.px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.dat}</th><td data-tags="pl.px1sg.dat"></td><td data-tags="pl.px2sg.dat"></td><td data-tags="pl.px3sg.dat"></td><td data-tags="pl.px1pl.dat"></td><td data-tags="pl.px2pl.dat"></td><td data-tags="pl.px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.loc}</th><td data-tags="pl.px1sg.loc"></td><td data-tags="pl.px2sg.loc"></td><td data-tags="pl.px3sg.loc"></td><td data-tags="pl.px1pl.loc"></td><td data-tags="pl.px2pl.loc"></td><td data-tags="pl.px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.gen}</th><td data-tags="pl.px1sg.gen"></td><td data-tags="pl.px2sg.gen"></td><td data-tags="pl.px3sg.gen"></td><td data-tags="pl.px1pl.gen"></td><td data-tags="pl.px2pl.gen"></td><td data-tags="pl.px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.abl}</th><td data-tags="pl.px1sg.abl"></td><td data-tags="pl.px2sg.abl"></td><td data-tags="pl.px3sg.abl"></td><td data-tags="pl.px1pl.abl"></td><td data-tags="pl.px2pl.abl"></td><td data-tags="pl.px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.ins}</th><td data-tags="pl.px1sg.ins"></td><td data-tags="pl.px2sg.ins"></td><td data-tags="pl.px3sg.ins"></td><td data-tags="pl.px1pl.ins"></td><td data-tags="pl.px2pl.ins"></td><td data-tags="pl.px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.term}</th><td data-tags="pl.px1sg.term"></td><td data-tags="pl.px2sg.term"></td><td data-tags="pl.px3sg.term"></td><td data-tags="pl.px1pl.term"></td><td data-tags="pl.px2pl.term"></td><td data-tags="pl.px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Russian"].cases.abe}</th><td data-tags="pl.px1sg.abe"></td><td data-tags="pl.px2sg.abe"></td><td data-tags="pl.px3sg.abe"></td><td data-tags="pl.px1pl.abe"></td><td data-tags="pl.px2pl.abe"></td><td data-tags="pl.px3pl.abe"></td></tr>
                </table>`,
              'Ukrainian': `
                <table class="paradigm-table">
                  <tr><th></th><th>мої</th><th>твої</th><th>його/її</th><th>наші</th><th>ваші</th><th>їхні</th></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.nom}</th><td data-tags="pl.px1sg.nom"></td><td data-tags="pl.px2sg.nom"></td><td data-tags="pl.px3sg.nom"></td><td data-tags="pl.px1pl.nom"></td><td data-tags="pl.px2pl.nom"></td><td data-tags="pl.px3pl.nom"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.acc}</th><td data-tags="pl.px1sg.acc"></td><td data-tags="pl.px2sg.acc"></td><td data-tags="pl.px3sg.acc"></td><td data-tags="pl.px1pl.acc"></td><td data-tags="pl.px2pl.acc"></td><td data-tags="pl.px3pl.acc"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.dat}</th><td data-tags="pl.px1sg.dat"></td><td data-tags="pl.px2sg.dat"></td><td data-tags="pl.px3sg.dat"></td><td data-tags="pl.px1pl.dat"></td><td data-tags="pl.px2pl.dat"></td><td data-tags="pl.px3pl.dat"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.loc}</th><td data-tags="pl.px1sg.loc"></td><td data-tags="pl.px2sg.loc"></td><td data-tags="pl.px3sg.loc"></td><td data-tags="pl.px1pl.loc"></td><td data-tags="pl.px2pl.loc"></td><td data-tags="pl.px3pl.loc"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.gen}</th><td data-tags="pl.px1sg.gen"></td><td data-tags="pl.px2sg.gen"></td><td data-tags="pl.px3sg.gen"></td><td data-tags="pl.px1pl.gen"></td><td data-tags="pl.px2pl.gen"></td><td data-tags="pl.px3pl.gen"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.abl}</th><td data-tags="pl.px1sg.abl"></td><td data-tags="pl.px2sg.abl"></td><td data-tags="pl.px3sg.abl"></td><td data-tags="pl.px1pl.abl"></td><td data-tags="pl.px2pl.abl"></td><td data-tags="pl.px3pl.abl"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.ins}</th><td data-tags="pl.px1sg.ins"></td><td data-tags="pl.px2sg.ins"></td><td data-tags="pl.px3sg.ins"></td><td data-tags="pl.px1pl.ins"></td><td data-tags="pl.px2pl.ins"></td><td data-tags="pl.px3pl.ins"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.term}</th><td data-tags="pl.px1sg.term"></td><td data-tags="pl.px2sg.term"></td><td data-tags="pl.px3sg.term"></td><td data-tags="pl.px1pl.term"></td><td data-tags="pl.px2pl.term"></td><td data-tags="pl.px3pl.term"></td></tr>
                  <tr><th>${uum_labels["Ukrainian"].cases.abe}</th><td data-tags="pl.px1sg.abe"></td><td data-tags="pl.px2sg.abe"></td><td data-tags="pl.px3sg.abe"></td><td data-tags="pl.px1pl.abe"></td><td data-tags="pl.px2pl.abe"></td><td data-tags="pl.px3pl.abe"></td></tr>
                </table>`
            }
          }
        ]
      }
    ]
  }
}

LANGS['uum'].labels = uum_labels;
