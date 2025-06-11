let unm_labels = {
	"English": {
		"s_1sg": "I",
		"s_2sg": "you",
		"s_3sg": "s/he",
		"s_11pl": "we (excluding you)",
		"s_12pl": "we (including you)",
		"s_2pl": "you all",
		"s_3pl": "they",
		"o_sg": "→ it",
		"o_pl": "→ them",
		"o_idf": "→ something"
	},
	"English (linguist)": {
		"s_1sg": "1sg subj.",
		"s_2sg": "2sg subj",
		"s_3sg": "3sg subj",
		"s_11pl": "11pl subj",
		"s_12pl": "12pl subj",
		"s_2pl": "2pl subj",
		"s_3pl": "3pl subj",
		"o_sg": "sg obj",
		"o_pl": "pl obj",
		"o_idf": "indef. obj"
	},
	"Unami": {
		"s_1sg": "ni",
		"s_2sg": "ki",
		"s_3sg": "nàni",
		"s_11pl": "nilina",
		"s_12pl": "kiluna",
		"s_2pl": "kiluwa",
		"s_3pl": "nèk",
		"o_sg": "→ nën",
		"o_pl": "→ nèl",
		"o_idf": "→ kèku"
	}
}

function add_unm() {
  return {
    verb_ti: [
      {
        id: 'ind',
        label: 'Indicative',
        tabcols: ['Singular Object', 'Plural Object', 'Indefinite Object'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 's_1sg.o_sg'}, {tags: 's_1sg.o_pl'}, {tags: 's_1sg'}],
          [{tags: 's_2sg.o_sg'}, {tags: 's_2sg.o_pl'}, {tags: 's_2sg'}],
          [{tags: 's_3sg.o_sg'}, {tags: 's_3sg.o_pl'}, {tags: 's_3sg'}],
          [{tags: 's_11pl.o_sg'}, {tags: 's_11pl.o_pl'}, {tags: 's_11pl'}],
          [{tags: 's_12pl.o_sg'}, {tags: 's_12pl.o_pl'}, {tags: 's_12pl'}],
          [{tags: 's_2pl', width: 2}, {tags: 's_2pl'}],
          [{tags: 's_3pl', width: 2}, {tags: 's_3pl'}]
        ],
        html: {
          'English': `
            <div class="table-container">
              <div class="table"><h3>Affirmative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['English']['o_sg']}</th><th>${unm_labels['English']['o_pl']}</th><th>${unm_labels['English']['o_idf']}</th></tr>
                <tr><th>${unm_labels['English']['s_1sg']}</th><td data-tags="s_1sg.o_sg"></td><td data-tags="s_1sg.o_pl"></td><td data-tags="s_1sg"></td></tr>
                <tr><th>${unm_labels['English']['s_2sg']}</th><td data-tags="s_2sg.o_sg"></td><td data-tags="s_2sg.o_pl"></td><td data-tags="s_2sg"></td></tr>
                <tr><th>${unm_labels['English']['s_3sg']}</th><td data-tags="s_3sg.o_sg"></td><td data-tags="s_3sg.o_pl"></td><td data-tags="s_3sg"></td></tr>
                <tr><th>${unm_labels['English']['s_11pl']}</th><td data-tags="s_11pl.o_sg"></td><td data-tags="s_11pl.o_pl"></td><td data-tags="s_11pl"></td></tr>
                <tr><th>${unm_labels['English']['s_12pl']}</th><td data-tags="s_12pl.o_sg"></td><td data-tags="s_12pl.o_pl"></td><td data-tags="s_12pl"></td></tr>
                <tr><th>${unm_labels['English']['s_2pl']}</th><td data-tags="s_2pl.o_sg"></td><td data-tags="s_2pl.o_pl"></td><td data-tags="s_2pl"></td></tr>
                <tr><th>${unm_labels['English']['s_3pl']}</th><td data-tags="s_3pl.o_sg"></td><td data-tags="s_3pl.o_pl"></td><td data-tags="s_3pl"></td></tr>
              </table></div>
              <div class="table"><h3>Negative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['English']['o_sg']}</th><th>${unm_labels['English']['o_pl']}</th><th>${unm_labels['English']['o_idf']}</th></tr>
                <tr><th>${unm_labels['English']['s_1sg']}</th><td data-tags="neg.s_1sg.o_sg"></td><td data-tags="neg.s_1sg.o_pl"></td><td data-tags="neg.s_1sg"></td></tr>
                <tr><th>${unm_labels['English']['s_2sg']}</th><td data-tags="neg.s_2sg.o_sg"></td><td data-tags="neg.s_2sg.o_pl"></td><td data-tags="neg.s_2sg"></td></tr>
                <tr><th>${unm_labels['English']['s_3sg']}</th><td data-tags="neg.s_3sg.o_sg"></td><td data-tags="neg.s_3sg.o_pl"></td><td data-tags="neg.s_3sg"></td></tr>
                <tr><th>${unm_labels['English']['s_11pl']}</th><td data-tags="neg.s_11pl.o_sg"></td><td data-tags="neg.s_11pl.o_pl"></td><td data-tags="neg.s_11pl"></td></tr>
                <tr><th>${unm_labels['English']['s_12pl']}</th><td data-tags="neg.s_12pl.o_sg"></td><td data-tags="neg.s_12pl.o_pl"></td><td data-tags="neg.s_12pl"></td></tr>
                <tr><th>${unm_labels['English']['s_2pl']}</th><td data-tags="neg.s_2pl.o_sg"></td><td data-tags="neg.s_2pl.o_pl"></td><td data-tags="neg.s_2pl"></td></tr>
                <tr><th>${unm_labels['English']['s_3pl']}</th><td data-tags="neg.s_3pl.o_sg"></td><td data-tags="neg.s_3pl.o_pl"></td><td data-tags="neg.s_3pl"></td></tr>
              </table></div>
          `,
          'English (linguist)': `
            <div class="table-container">
              <div class="table"><h3>Affirmative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['English (linguist)']['o_sg']}</th><th>${unm_labels['English (linguist)']['o_pl']}</th><th>${unm_labels['English (linguist)']['o_idf']}</th></tr>
                <tr><th>${unm_labels['English (linguist)']['s_1sg']}</th><td data-tags="s_1sg.o_sg"></td><td data-tags="s_1sg.o_pl"></td><td data-tags="s_1sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_2sg']}</th><td data-tags="s_2sg.o_sg"></td><td data-tags="s_2sg.o_pl"></td><td data-tags="s_2sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_3sg']}</th><td data-tags="s_3sg.o_sg"></td><td data-tags="s_3sg.o_pl"></td><td data-tags="s_3sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_11pl']}</th><td data-tags="s_11pl.o_sg"></td><td data-tags="s_11pl.o_pl"></td><td data-tags="s_11pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_12pl']}</th><td data-tags="s_12pl.o_sg"></td><td data-tags="s_12pl.o_pl"></td><td data-tags="s_12pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_2pl']}</th><td data-tags="s_2pl.o_sg"></td><td data-tags="s_2pl.o_pl"></td><td data-tags="s_2pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_3pl']}</th><td data-tags="s_3pl.o_sg"></td><td data-tags="s_3pl.o_pl"></td><td data-tags="s_3pl"></td></tr>
              </table></div>
              <div class="table"><h3>Negative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['English (linguist)']['o_sg']}</th><th>${unm_labels['English (linguist)']['o_pl']}</th><th>${unm_labels['English (linguist)']['o_idf']}</th></tr>
                <tr><th>${unm_labels['English (linguist)']['s_1sg']}</th><td data-tags="neg.s_1sg.o_sg"></td><td data-tags="neg.s_1sg.o_pl"></td><td data-tags="neg.s_1sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_2sg']}</th><td data-tags="neg.s_2sg.o_sg"></td><td data-tags="neg.s_2sg.o_pl"></td><td data-tags="neg.s_2sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_3sg']}</th><td data-tags="neg.s_3sg.o_sg"></td><td data-tags="neg.s_3sg.o_pl"></td><td data-tags="neg.s_3sg"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_11pl']}</th><td data-tags="neg.s_11pl.o_sg"></td><td data-tags="neg.s_11pl.o_pl"></td><td data-tags="neg.s_11pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_12pl']}</th><td data-tags="neg.s_12pl.o_sg"></td><td data-tags="neg.s_12pl.o_pl"></td><td data-tags="neg.s_12pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_2pl']}</th><td data-tags="neg.s_2pl.o_sg"></td><td data-tags="neg.s_2pl.o_pl"></td><td data-tags="neg.s_2pl"></td></tr>
                <tr><th>${unm_labels['English (linguist)']['s_3pl']}</th><td data-tags="neg.s_3pl.o_sg"></td><td data-tags="neg.s_3pl.o_pl"></td><td data-tags="neg.s_3pl"></td></tr>
              </table></div>
          `,
          'Lenape': `
            <div class="table-container">
              <div class="table"><h3>Affirmative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['English']['o_sg']}</th><th>${unm_labels['English']['o_pl']}</th><th>${unm_labels['English']['o_idf']}</th></tr>
                <tr><th>${unm_labels['English']['s_1sg']}</th><td data-tags="s_1sg.o_sg"></td><td data-tags="s_1sg.o_pl"></td><td data-tags="s_1sg"></td></tr>
                <tr><th>${unm_labels['English']['s_2sg']}</th><td data-tags="s_2sg.o_sg"></td><td data-tags="s_2sg.o_pl"></td><td data-tags="s_2sg"></td></tr>
                <tr><th>${unm_labels['English']['s_3sg']}</th><td data-tags="s_3sg.o_sg"></td><td data-tags="s_3sg.o_pl"></td><td data-tags="s_3sg"></td></tr>
                <tr><th>${unm_labels['English']['s_11pl']}</th><td data-tags="s_11pl.o_sg"></td><td data-tags="s_11pl.o_pl"></td><td data-tags="s_11pl"></td></tr>
                <tr><th>${unm_labels['English']['s_12pl']}</th><td data-tags="s_12pl.o_sg"></td><td data-tags="s_12pl.o_pl"></td><td data-tags="s_12pl"></td></tr>
                <tr><th>${unm_labels['English']['s_2pl']}</th><td data-tags="s_2pl.o_sg"></td><td data-tags="s_2pl.o_pl"></td><td data-tags="s_2pl"></td></tr>
                <tr><th>${unm_labels['English']['s_3pl']}</th><td data-tags="s_3pl.o_sg"></td><td data-tags="s_3pl.o_pl"></td><td data-tags="s_3pl"></td></tr>
              </table></div>
              <div class="table"><h3>Negative</h3>
              <table class="paradigm-table">
                <tr><th></th><th>${unm_labels['Lenape']['o_sg']}</th><th>${unm_labels['Lenape']['o_pl']}</th><th>${unm_labels['Lenape']['o_idf']}</th></tr>
                <tr><th>${unm_labels['Lenape']['s_1sg']}</th><td data-tags="neg.s_1sg.o_sg"></td><td data-tags="neg.s_1sg.o_pl"></td><td data-tags="neg.s_1sg"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_2sg']}</th><td data-tags="neg.s_2sg.o_sg"></td><td data-tags="neg.s_2sg.o_pl"></td><td data-tags="neg.s_2sg"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_3sg']}</th><td data-tags="neg.s_3sg.o_sg"></td><td data-tags="neg.s_3sg.o_pl"></td><td data-tags="neg.s_3sg"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_11pl']}</th><td data-tags="neg.s_11pl.o_sg"></td><td data-tags="neg.s_11pl.o_pl"></td><td data-tags="neg.s_11pl"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_12pl']}</th><td data-tags="neg.s_12pl.o_sg"></td><td data-tags="neg.s_12pl.o_pl"></td><td data-tags="neg.s_12pl"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_2pl']}</th><td data-tags="neg.s_2pl.o_sg"></td><td data-tags="neg.s_2pl.o_pl"></td><td data-tags="neg.s_2pl"></td></tr>
                <tr><th>${unm_labels['Lenape']['s_3pl']}</th><td data-tags="neg.s_3pl.o_sg"></td><td data-tags="neg.s_3pl.o_pl"></td><td data-tags="neg.s_3pl"></td></tr>
              </table></div>
          `
      },
      {
        id: 'ind.neg',
        label: 'Indicative (negative)',
        tabcols: ['Singular Object', 'Plural Object', 'Indefinite Object'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 'neg.s_1sg.o_sg'}, {tags: 'neg.s_1sg.o_pl'}, {tags: 'neg.s_1sg'}],
          [{tags: 'neg.s_2sg.o_sg'}, {tags: 'neg.s_2sg.o_pl'}, {tags: 'neg.s_2sg'}],
          [{tags: 'neg.s_3sg.o_sg'}, {tags: 'neg.s_3sg.o_pl'}, {tags: 'neg.s_3sg'}],
          [{tags: 'neg.s_11pl.o_sg'}, {tags: 'neg.s_11pl.o_pl'}, {tags: 'neg.s_11pl'}],
          [{tags: 'neg.s_12pl.o_sg'}, {tags: 'neg.s_12pl.o_pl'}, {tags: 'neg.s_12pl'}],
          [{tags: 'neg.s_2pl', width: 2}, {tags: 'neg.s_2pl'}],
          [{tags: 'neg.s_3pl', width: 2}, {tags: 'neg.s_3pl'}]
        ]
      },
      {
        id: 'subord',
        label: 'Subordinative',
        tabcols: ['Singular Object', 'Plural Object', 'Indefinite Object'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 'subord.s_1sg.o_sg'}, {tags: 'subord.s_1sg.o_pl'}, {tags: 'subord.s_1sg'}],
          [{tags: 'subord.s_2sg.o_sg'}, {tags: 'subord.s_2sg.o_pl'}, {tags: 'subord.s_2sg'}],
          [{tags: 'subord.s_3sg.o_sg'}, {tags: 'subord.s_3sg.o_pl'}, {tags: 'subord.s_3sg'}],
          [{tags: 'subord.s_11pl.o_sg'}, {tags: 'subord.s_11pl.o_pl'}, {tags: 'subord.s_11pl'}],
          [{tags: 'subord.s_12pl.o_sg'}, {tags: 'subord.s_12pl.o_pl'}, {tags: 'subord.s_12pl'}],
          [{tags: 'subord.s_2pl', width: 2}, {tags: 'subord.s_2pl'}],
          [{tags: 'subord.s_3pl', width: 2}, {tags: 'subord.s_3pl'}]
        ]
      },
    ],
    verb_ia: [
      {
        id: 'ind',
        label: 'Indicative',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'First person (incl)', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 's_1sg'}, {tags: 's_11pl'}],
          [{tags: ''}, {tags: 's_12pl'}],
          [{tags: 's_2sg'}, {tags: 's_2pl'}],
          [{tags: 's_3sg'}, {tags: 's_3pl'}]
        ]
      },
      {
        id: 'ind.neg',
        label: 'Indicative (negative)',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'First person (incl)', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'neg.s_1sg'}, {tags: 'neg.s_11pl'}],
          [{tags: ''}, {tags: 'neg.s_12pl'}],
          [{tags: 'neg.s_2sg'}, {tags: 'neg.s_2pl'}],
          [{tags: 'neg.s_3sg'}, {tags: 'neg.s_3pl'}]
        ]
      },
      {
        id: 'subord',
        label: 'Subordinative',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'First person (incl)', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'subord.s_1sg'}, {tags: 'subord.s_11pl'}],
          [{tags: ''}, {tags: 'subord.s_12pl'}],
          [{tags: 'subord.s_2sg'}, {tags: 'subord.s_2pl'}],
          [{tags: 'subord.s_3sg'}, {tags: 'subord.s_3pl'}]
        ]
      },
    ],
    verb_ta: [
      {
        id: 'ind_dir',
        label: 'Indicative Direct',
        tabcols: ['... him/her/it', '... them'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 'dir.s_1sg.o_sg'}, {tags: 'dir.s_1sg.o_pl'}],
          [{tags: 'dir.s_2sg.o_sg'}, {tags: 'dir.s_2sg.o_pl'}],
          [{tags: 'dir.s_3sg.o_sg'}, {tags: 'dir.s_3sg.o_pl'}],
          [{tags: 'dir.s_11pl.o_sg'}, {tags: 'dir.s_11pl.o_pl'}],
          [{tags: 'dir.s_12pl.o_sg'}, {tags: 'dir.s_12pl.o_pl'}],
          [{tags: 'dir.s_2pl.o_sg'}, {tags: 'dir.s_2pl.o_pl'}],
          [{tags: 'dir.s_3pl', width: 2}]
        ]
      },
      {
        id: 'ind_inv',
        label: 'Indicative Inverse',
        tabcols: ['He/she ...', 'They ...'],
        tabrows: ['First person sg obj', 'Second person sg obj', 'Third person sg obj', 'First person pl (excl) obj', 'First person pl (incl) obj', 'Second person pl obj', 'Third person pl obj' ],
        tabdata: [
          [{tags: 'inv.o_1sg.s_sg'}, {tags: 'inv.o_1sg.s_pl'}],
          [{tags: 'inv.o_2sg.s_sg'}, {tags: 'inv.o_2sg.s_pl'}],
          [{tags: 'inv.o_3sg.s_sg'}, {tags: 'inv.o_3sg.s_pl'}],
          [{tags: 'inv.o_11pl.s_sg'}, {tags: 'inv.o_11pl.s_pl'}],
          [{tags: 'inv.o_12pl.s_sg'}, {tags: 'inv.o_12pl.s_pl'}],
          [{tags: 'inv.o_2pl.s_sg'}, {tags: 'inv.o_2pl.s_pl'}],
          [{tags: 'inv.o_3pl', width: 2}]
        ]
      },
    ]
  };
}
