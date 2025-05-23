let labels = {
   "english": {
     "p1sg": "I",
     "p2sg": "you",
     "p3sg": "he/she/they, you (formal)",
     "p1pl": "we",
     "p2pl": "you all (Spain)",
     "p3pl": "they, you all"
   },
   "linguist": {
     "sg": "Singular",
     "pl": "Plural",
     "p1": "1st",
     "p2": "2nd",
     "p3": "3rd"
   },
   "spanish": {
      "p1sg": "yo",
      "p2sg": "tú",
      "p3sg": "él/ella/usted",
      "p1pl": "nosotros/nosotras",
      "p2pl": "vosotros/vosotras",
      "p3pl": "ellos/ellas/ustedes"
   }
}
/** to-do: find out why the js is losing record of spanish for some reason */
function spa_p123_sg_pl_table(label, prefix) {
  return {
    id: prefix,
    "label": label,
    tabcols: ["Singular", "Plural"],
    tabrows: ["First (1st)", "Second (2nd)", "Third (3rd)"],
    tabdata: [
      [{tags: prefix+".p1.sg"}, {tags: prefix+".p1.pl"}],
      [{tags: prefix+".p2.sg"}, {tags: prefix+".p2.pl"}],
      [{tags: prefix+".p3.sg"}, {tags: prefix+".p3.pl"}]
    ],
    html: {
      'linguist': `
        <table class="paradigm-table">
          <tr><th></th><th>${labels['linguist']['sg']}</th><th>${labels['linguist']['pl']}</th></tr>
          <tr><th>${labels['linguist']['p1']}</th>
            <td data-tag="${prefix}.p1.sg"></td>
            <td data-tag="${prefix}.p1.pl"></td>
          </th></tr>
          <tr><th>${labels['linguist']['p2']}</th>
            <td data-tag="${prefix}.p2.sg"></td>
            <td data-tag="${prefix}.p2.pl"></td>
          </th></tr>
          <tr><th>${labels['linguist']['p3']}</th>
            <td data-tag="${prefix}.p3.sg"></td>
            <td data-tag="${prefix}.p3.pl"></td>
          </th></tr>
        </table>`,
      'english': `
        <table class="paradigm-table">
          <tr><th>${labels['english']['p1sg']}</th>
            <td data-tag="${prefix}.p1.sg"></td>
            <th>${labels['english']['p1pl']}</th>
            <td data-tag="${prefix}.p1.pl"></td>
          </th></tr>
          <tr><th>${labels['english']['p2sg']}</th>
            <td data-tag="${prefix}.p2.sg"></td>
            <th>${labels['english']['p2pl']}</th>
            <td data-tag="${prefix}.p2.pl"></td>
          </th></tr>
          <tr><th>${labels['english']['p3sg']}</th>
            <td data-tag="${prefix}.p3.sg"></td>
            <th>${labels['english']['p3pl']}</th>
            <td data-tag="${prefix}.p3.pl"></td>
          </th></tr>
        </table>`,
        'spanish': `
          <table class="paradigm-table">
            <tr><th>${labels['spanish']['p1sg']}</th>
              <td data-tag="${prefix}.p1.sg"></td>
              <th>${labels['spanish']['p1pl']}</th>
              <td data-tag="${prefix}.p1.pl"></td>
            </th></tr>
            <tr><th>${labels['spanish']['p2sg']}</th>
              <td data-tag="${prefix}.p2.sg"></td>
              <th>${labels['spanish']['p2pl']}</th>
              <td data-tag="${prefix}.p2.pl"></td>
            </th></tr>
            <tr><th>${labels['spanish']['p3sg']}</th>
              <td data-tag="${prefix}.p3.sg"></td>
              <th>${labels['spanish']['p3pl']}</th>
              <td data-tag="${prefix}.p3.pl"></td>
            </th></tr>
            </table>`
	 }
  };
}

function spa_compound_tense(id, label, info, p1sg, p1pl, p2sg, p2pl, p3sg, p3pl) {
  return {
    "id": id,
    "label": label,
    "info": info,
    tabcols: ["Singular", "Plural"],
    tabrows: ["First (1st)", "Second (2nd)", "Third (3rd)"],
    tabdata: [
      [{pretxt: p1sg, tags: "pp.m.sg"}, {pretxt: p1pl, tags: "pp.m.sg"}],
      [{pretxt: p2sg, tags: "pp.m.sg"}, {pretxt: p2pl, tags: "pp.m.sg"}],
      [{pretxt: p3sg, tags: "pp.m.sg"}, {pretxt: p3pl, tags: "pp.m.sg"}]
    ]
  };
}

function add_spa() {
  return {
    verb: [
      {
        id: "non-personal",
        label: "Non-personal forms",
        tablist: [
          {label: "Simple infinitive", tags: "inf"},
          {
            label: "Compound infinitive",
            pretxt: "habiendo",
            tags: "pp.m.sg"
          },
          {label: "Simple gerund", tags: "ger"},
          {
            label: "Compound gerund",
            pretxt: "habiendo",
            tags: "pp.m.sg"
          },
          {label: "Past participle", tags: "pp.m.sg"}
        ]
      },
      {
        id: "personal",
        label: "Personal forms",
        subcats: [
          {
            id: "indicative",
            label: "Indicative mode",
            subcats: [
              spa_p123_sg_pl_table("Present", "pri"),
              spa_p123_sg_pl_table(
                "Past imperfect (<i>pretérito imperfecto</i>)",
                "pii"
              ),
              spa_p123_sg_pl_table(
                "Past definite (<i>pretérito perfecto simple</i>)",
                "ifi"
              ),
              spa_p123_sg_pl_table("Simple future", "fti"),
              spa_p123_sg_pl_table("Simple conditional", "cni"),
              spa_compound_tense(
                "vbhaver-pri",
                "Compound past definite (<i>pretérito perfecto compuesto</i>)",
                'Correlative to <a class="alert-link" href="#pri">present indicative</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "he", "hemos", "has", "habéis", "ha", "han"
              ),
              spa_compound_tense(
                "vbhaver-pii",
                "Compound past perfect (<i>pretérito pluscuamperfecto</i>)",
                'Correlative to <a class="alert-link" href="#pii">past imperfect</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "había", "habíamos", "habías", "habíais", "había", "habían"
              ),
              spa_compound_tense(
                "vbhaver-ifi",
                "Compound past perfect [2] (<i>pretérito anterior</i>)",
                'Correlative to <a class="alert-link" href="#ifi">past definite</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>). This tense does not have an exact English equivalent.',
                "hube", "hubimos", "hubiste", "hubisteis", "hubo", "hubieron"
              ),
              spa_compound_tense(
                "vbhaver-fti",
                "Compound future",
                'Correlative to <a class="alert-link" href="#fti">simple future</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "habré", "habremos", "habrás", "habréis", "habrá", "habrán"
              ),
              spa_compound_tense(
                "vbhaver-cni",
                "Compound conditional",
                'Correlative to <a class="alert-link" href="#cni">simple conditional</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "habría", "habríamos", "habrías", "habríais", "habría", "habríán"
              ),
            ]
          },
          {
            id: "subjunctive",
            label: "Subjunctive mode",
            subcats: [
              spa_p123_sg_pl_table("Present", "prs"),
              {
                id: "pis",
                label: "Past imperfect",
                info: 'This tense has two possible structures. Only one of them is being displayed, as given by <a class="alert-link" href="//github.com/apertium/apertium-apy">Apertium APY</a> (more information about this and other tenses: <a class="alert-link" href="//www.rae.es/diccionario-panhispanico-de-dudas/apendices/modelos-de-conjugacion-verbal">rae.es</a>).',
                tabcols: ["Singular", "Plural"],
                tabrows: ["First (1st)", "Second (2nd)", "Third (3rd)"],
                tabdata: [
                  [{tags: "pis.p1.sg"}, {tags: "pis.p1.pl"}],
                  [{tags: "pis.p2.sg"}, {tags: "pis.p2.pl"}],
                  [{tags: "pis.p3.sg"}, {tags: "pis.p3.pl"}]
                ]
              },
              {
                id: "fts",
                label: "Simple future",
                error: '<a class="alert-link" href="//github.com/apertium/apertium-apy">Apertium APY</a> does not currently support the generation of future subjunctive forms.<br>You can also manually generate them with the information given in the <a class="alert-link" href="//www.rae.es/diccionario-panhispanico-de-dudas/apendices/modelos-de-conjugacion-verbal">rae.es page listed above</a> (Spanish) or in <a class="alert-link" href="//www.spanishdict.com/guide/spanish-future-subjunctive">spanishdict.com</a> (English).<br>We apologize for this inconvenience.'
              },
              spa_compound_tense(
                "vbhaver-prs",
                "Compound past definite (<i>pretérito perfecto compuesto</i>)",
                'Correlative to <a class="alert-link" href="#prs">present subjunctive</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "haya", "hayamos", "hayas", "hayáis", "haya", "hayan"
              ),
              spa_compound_tense(
                "vbhaver-pis",
                "Compound past perfect (<i>pretérito pluscuamperfecto</i>)",
                'Correlative to <a class="alert-link" href="#pis">past imperfect subjunctive</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "hubiera/hubiese", "hubiéramos/hubiésemos",
                "hubieras/hubieses", "hubierais/hubieseis",
                "hubiera/hubiese", "hubieran/hubiesen"
              ),
              spa_compound_tense(
                "vbhaver-fts",
                "Compound future",
                'Correlative to <a class="alert-link" href="#fts">simple future subjunctive</a> for the auxiliary verb <i>haber</i> (<code>&#60;vbhaver&#62;</code>).',
                "hubiere", "hubiéremos",
                "hubieres", "hubiereis",
                "hubiere", "hubieren"
              ),
            ]
          },
          {
            id: "imperative",
            label: "Imperative mode",
            info: 'This mode is only presented in the second person (both singular and plural), first person plural, and third person (both personal and plural), for only use of the formal treatment <i>usted</i> (2nd person).',
            tabcols: ["Singular", "Plural"],
            tabrows: [
              "First (1st)",
              "Second (2nd)",
              "Second formal (2nd: <i>usted</i>)"
            ],
            tabdata: [
              [{text: ""}, {tags: "imp.p1.pl"}],
              [{tags: "imp.p2.sg"}, {tags: "imp.p2.pl"}],
              [{tags: "imp.p3.sg"}, {tags: "imp.p3.pl"}]
            ]
          }
        ]
      }
    ]
  };
}
