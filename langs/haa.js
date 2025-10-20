let haa_labels = {
   "English": {
     "p1sg": "I",
     "p2sg": "you",
     "p3sg": "he/she/they",
     "p1pl": "we",
     "p2pl": "you all",
     "p3pl": "they",
     "p1sg_": 'I →',
     "p2sg_": "you →",
     "p3sg_": "he/she/they →",
     "p1pl_": "we →",
     "p2pl_": "you all →",
     "p3pl_": "they →",
     "_p1sg": "→ me",
     "_p2sg": "→ you",
     "_p3sg": "→ him/her/them",
     "_p1pl": "→ us",
     "_p2pl": "→ you all",
     "_p3pl": "→ them",
   },
   "English (linguist)": {
     "sg": "Singular",
     "pl": "Plural",
     "p1": "1st",
     "p2": "2nd",
     "p3": "3rd",
     "subj_sg": 'Singular Subj',
     "subj_pl": 'Plural Subj',
     "obj_sg": 'Singular Obj',
     "obj_pl": 'Plural Obj',
     "p1_p1": '1st → 1st',
     "p1_p2": '1st → 2nd',
     "p1_p3": '1st → 3rd',
     "p2_p1": '2nd → 1st',
     "p2_p2": '2nd → 2nd',
     "p2_p3": '2nd → 3rd',
     "p3_p1": '3rd → 1st',
     "p3_p2": '3rd → 2nd',
     "p3_p3": '3rd → 3rd'
   },
	"Hän": {
     "p1sg": "shan",
     "p2sg": "nann",
     "p3sg": "he/she/they",
     "p1pl": "we",
     "p2pl": "you all",
     "p3pl": "they",
     "p1sg_": 'shan →',
     "p2sg_": "nann →",
     "p3sg_": "he/she/they →",
     "p1pl_": "we →",
     "p2pl_": "you all →",
     "p3pl_": "they →",
     "_p1sg": "→ shan",
     "_p2sg": "→ nann",
     "_p3sg": "→ him/her/them",
     "_p1pl": "→ us",
     "_p2pl": "→ you all",
     "_p3pl": "→ them",

	}
}


function haa_tv_table(lang, label, prefix) {
  let labels=haa_labels[lang];
  if (lang=="English (linguist)") {
    return `
        <table class="paradigm-table">
          <tr><th></th><th colspan="2">${labels['subj_sg']}</th><th colspan="2">${labels['subj_pl']}</th></tr>
          <tr><th></th><th>${labels['obj_sg']}</th><th>${labels['obj_pl']}</th><th>${labels['obj_sg']}</th><th>${labels['obj_pl']}</th></tr>
          <tr><th>${labels['p1']}</th><td colspan="2" data-tags="${prefix}.s_1sg"></td><td colspan="2" data-tags="${prefix}.s_1pl"></td></tr>
          <tr><th>${labels['p1_p1']}</th><td data-tags="${prefix}.s_1sg.refl"></td><td data-tags="${prefix}.s_1sg.o_1pl"></td><td data-tags="${prefix}.s_1pl.o_1sg"></td><td data-tags="${prefix}.s_1pl.refl"></td></tr>
          <tr><th>${labels['p1_p2']}</th><td data-tags="${prefix}.s_1sg.o_2sg"></td><td data-tags="${prefix}.s_1sg.o_2pl"></td><td data-tags="${prefix}.s_1pl.o_2sg"></td><td data-tags="${prefix}.s_1pl.o_2pl"></td></tr>
          <tr><th>${labels['p1_p3']}</th><td data-tags="${prefix}.s_1sg.o_3sg"></td><td data-tags="${prefix}.s_1sg.o_3pl"></td><td data-tags="${prefix}.s_1pl.o_3sg"></td><td data-tags="${prefix}.s_1pl.o_3pl"></td></tr>
          <tr><th>${labels['p2']}</th><td colspan="2" data-tags="${prefix}.s_2sg"></td><td colspan="2" data-tags="${prefix}.s_2pl"></td></tr>
          <tr><th>${labels['p2_p1']}</th><td data-tags="${prefix}.s_2sg.o_1sg"></td><td data-tags="${prefix}.s_2sg.o_1pl"></td><td data-tags="${prefix}.s_2pl.o_1sg"></td><td data-tags="${prefix}.s_2pl.o_1pl"></td></tr>
          <tr><th>${labels['p2_p2']}</td><td data-tags="${prefix}.s_2sg.refl"></td><td data-tags="${prefix}.s_2sg.o_2pl"></td><td data-tags="${prefix}.s_2pl.o_2sg"></td><td data-tags="${prefix}.s_2pl.refl"></td></tr>
          <tr><th>${labels['p2_p3']}</th><td data-tags="${prefix}.s_2sg.o_3sg"></td><td data-tags="${prefix}.s_2sg.o_3pl"></td><td data-tags="${prefix}.s_2pl.o_3sg"></td><td data-tags="${prefix}.s_2pl.o_3pl"></td></tr>
          <tr><th>${labels['p3']}</th><td colspan="2" data-tags="${prefix}.s_3sg"></td><td colspan="2" data-tags="${prefix}.s_3pl"></td></tr>
          <tr><th>${labels['p3_p1']}</th><td data-tags="${prefix}.s_3sg.o_1sg"></td><td data-tags="${prefix}.s_3sg.o_1pl"></td><td data-tags="${prefix}.s_3pl.o_1sg"></td><td data-tags="${prefix}.s_3pl.o_1pl"></td></tr>
          <tr><th>${labels['p3_p2']}</th><td data-tags="${prefix}.s_3sg.o_2sg"></td><td data-tags="${prefix}.s_3sg.o_2pl"></td><td data-tags="${prefix}.s_3pl.o_2sg"></td><td data-tags="${prefix}.s_3pl.o_2pl"></td></tr>
          <tr><th>${labels['p3_p3']}</th><td data-tags="${prefix}.s_3sg.refl"></td><td data-tags="${prefix}.s_3sg.o_3pl"></td><td data-tags="${prefix}.s_3pl.o_3sg"></td><td data-tags="${prefix}.s_3pl.refl"></td></tr>
        </table>`;
  } else {
    return `
        <table class="paradigm-table">
          <tr><th></th><th></th><th>${labels['_p1sg']}</th><th>${labels['_p2sg']}</th><th>${labels['_p3sg']}</th><th>${labels['_p1pl']}</th><th>${labels['_p2pl']}</th><th>${labels['_p3pl']}</th></tr>
          <tr><th>${labels['p1sg_']}</th><td data-tags="${prefix}.s_1sg"></td><td data-tags="${prefix}.s_1sg.refl"></td><td data-tags="${prefix}.s_1sg.o_2sg"></td><td data-tags="${prefix}.s_1sg.o_3sg"></td><td data-tags="${prefix}.s_1sg.o_1pl"></td><td data-tags="${prefix}.s_1sg.o_2pl"></td><td data-tags="${prefix}.s_1sg.o_3pl"></td></tr>
          <tr><th>${labels['p2sg_']}</th><td data-tags="${prefix}.s_2sg"></td><td data-tags="${prefix}.s_2sg.o_1sg"></td><td data-tags="${prefix}.s_2sg.refl"></td><td data-tags="${prefix}.s_2sg.o_3sg"></td><td data-tags="${prefix}.s_2sg.o_1pl"></td><td data-tags="${prefix}.s_2sg.o_2pl"></td><td data-tags="${prefix}.s_2sg.o_3pl"></td></tr>
          <tr><th>${labels['p3sg_']}</th><td data-tags="${prefix}.s_3sg"></td><td data-tags="${prefix}.s_3sg.o_1sg"></td><td data-tags="${prefix}.s_3sg.o_2sg"></td><td data-tags="${prefix}.s_3sg.refl"></td><td data-tags="${prefix}.s_3sg.o_1pl"></td><td data-tags="${prefix}.s_3sg.o_2pl"></td><td data-tags="${prefix}.s_3sg.o_3pl"></td></tr>
          <tr><th>${labels['p1pl_']}</th><td data-tags="${prefix}.s_1pl"></td><td data-tags="${prefix}.s_1pl.o_1sg"></td><td data-tags="${prefix}.s_1pl.o_2sg"></td><td data-tags="${prefix}.s_1pl.o_3sg"></td><td data-tags="${prefix}.s_1pl.refl"></td><td data-tags="${prefix}.s_1pl.o_2pl"></td><td data-tags="${prefix}.s_1pl.o_3pl"></td></tr>
          <tr><th>${labels['p2pl_']}</th><td data-tags="${prefix}.s_2pl"></td><td data-tags="${prefix}.s_2pl.o_1sg"></td><td data-tags="${prefix}.s_2pl.o_2sg"></td><td data-tags="${prefix}.s_2pl.o_3sg"></td><td data-tags="${prefix}.s_2pl.o_1pl"></td><td data-tags="${prefix}.s_2pl.refl"></td><td data-tags="${prefix}.s_2pl.o_3pl"></td></tr>
          <tr><th>${labels['p3pl_']}</th><td data-tags="${prefix}.s_3pl"></td><td data-tags="${prefix}.s_3pl.o_1sg"></td><td data-tags="${prefix}.s_3pl.o_2sg"></td><td data-tags="${prefix}.s_3pl.o_3sg"></td><td data-tags="${prefix}.s_3pl.o_1pl"></td><td data-tags="${prefix}.s_3pl.o_2pl"></td><td data-tags="${prefix}.s_3pl.refl"></td></tr>
        </table>`;
  }
}

function haa_p123_sg_pl_table(label, prefix) {
  return {
    id: prefix,
    "label": label,
    tabcols: ["Singular", "Plural"],
    tabrows: ["First Person", "Second Person", "Third Person"],
    tabdata: [
      [{tags: prefix+".p1.sg"}, {tags: prefix+".p1.pl"}],
      [{tags: prefix+".p2.sg"}, {tags: prefix+".p2.pl"}],
      [{tags: prefix+".p3.sg"}, {tags: prefix+".p3.pl"}]
    ],
    html: {
      'English (linguist)': `
        <table class="paradigm-table">
          <tr><th></th><th>${haa_labels['linguist']['sg']}</th><th>${haa_labels['linguist']['pl']}</th></tr>
          <tr><th>${haa_labels['linguist']['p1']}</th>
            <td data-tags="${prefix}.p1.sg"></td>
            <td data-tags="${prefix}.p1.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['linguist']['p2']}</th>
            <td data-tags="${prefix}.p2.sg"></td>
            <td data-tags="${prefix}.p2.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['linguist']['p3']}</th>
            <td data-tags="${prefix}.p3.sg"></td>
            <td data-tags="${prefix}.p3.pl"></td>
          </th></tr>
        </table>`,
      'English': `
        <table class="paradigm-table">
          <tr><th>${haa_labels['english']['p1sg']}</th>
            <td data-tags="${prefix}.p1.sg"></td>
            <th>${haa_labels['english']['p1pl']}</th>
            <td data-tags="${prefix}.p1.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['english']['p2sg']}</th>
            <td data-tags="${prefix}.p2.sg"></td>
            <th>${haa_labels['english']['p2pl']}</th>
            <td data-tags="${prefix}.p2.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['english']['p3sg']}</th>
            <td data-tags="${prefix}.p3.sg"></td>
            <th>${haa_labels['english']['p3pl']}</th>
            <td data-tags="${prefix}.p3.pl"></td>
          </th></tr>
        </table>`,
      'Hän': `
        <table class="paradigm-table">
          <tr><th>${haa_labels['english']['p1sg']}</th>
            <td data-tags="${prefix}.p1.sg"></td>
            <th>${haa_labels['english']['p1pl']}</th>
            <td data-tags="${prefix}.p1.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['english']['p2sg']}</th>
            <td data-tags="${prefix}.p2.sg"></td>
            <th>${haa_labels['english']['p2pl']}</th>
            <td data-tags="${prefix}.p2.pl"></td>
          </th></tr>
          <tr><th>${haa_labels['english']['p3sg']}</th>
            <td data-tags="${prefix}.p3.sg"></td>
            <th>${haa_labels['english']['p3pl']}</th>
            <td data-tags="${prefix}.p3.pl"></td>
          </th></tr>
        </table>`
	 }
  };
}

function add_haa() {
  const mode = $('#Mode').val() || 'English (linguist)';
  const labels = haa_labels[mode];

  return {
    verb_iv: [
      {
        id: 'impf',
        label: 'Imperfect',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'impf.s_1sg'}, {tags: 'impf.s_1pl'}],
          [{tags: 'impf.s_2sg'}, {tags: 'impf.s_2pl'}],
          [{tags: 'impf.s_3sg'}, {tags: 'impf.s_3pl'}]
        ]
      },
      {
        id: 'perf',
        label: 'Perfect',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'perf.s_1sg'}, {tags: 'perf.s_1pl'}],
          [{tags: 'perf.s_2sg'}, {tags: 'perf.s_2pl'}],
          [{tags: 'perf.s_3sg'}, {tags: 'perf.s_3pl'}]
        ]
      },
      {
        id: 'fut',
        label: 'Future',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'fut.s_1sg'}, {tags: 'fut.s_1pl'}],
          [{tags: 'fut.s_2sg'}, {tags: 'fut.s_2pl'}],
          [{tags: 'fut.s_3sg'}, {tags: 'fut.s_3pl'}]
        ]
      },
      {
        id: 'incp',
        label: 'Inceptive',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'incp.s_1sg'}, {tags: 'incp.s_1pl'}],
          [{tags: 'incp.s_2sg'}, {tags: 'incp.s_2pl'}],
          [{tags: 'incp.s_3sg'}, {tags: 'incp.s_3pl'}]
        ]
      },
    ],
    verb_tv: [
      {
        id: 'impf',
        label: 'Imperfect',
        html: {
          'English (linguist)': haa_tv_table('English (linguist)', 'Imperfect', 'impf'),
			 'English': haa_tv_table('English', 'Imperfect', 'impf'),
			 'Hän': haa_tv_table('Hän', 'Imperfect', 'impf'),
        },
        tabcolgroups: [
          {label: 'Singular Subj', width: 2},
          {label: 'Plural Subj', width: 2}
        ],
        tabcols: ['Singular Obj', 'Plural Obj', 'Singular Obj', 'Plural Obj'],
        tabrows: ['First person',
          'First person → First person',
          'First person → Second person',
          'First person → Third person',
          'Second person',
          'Second person → First person',
          'Second person → Second person',
          'Second person → Third person',
          'Third person',
          'Third person → First person',
          'Third person → Second person',
          'Third person → Third person'],
        tabdata: [
          [{tags: 'impf.s_1sg', width: 2}, {tags: 'impf.s_1pl', width: 2}],
          [{tags: 'impf.s_1sg.refl'}, {tags: 'impf.s_1sg.o_1pl'}, {tags: 'impf.s_1pl.o_1sg'}, {tags: 'impf.s_1pl.refl'}],
          [{tags: 'impf.s_1sg.o_2sg'}, {tags: 'impf.s_1sg.o_2pl'}, {tags: 'impf.s_1pl.o_2sg'}, {tags: 'impf.s_1pl.o_2pl'}],
          [{tags: 'impf.s_1sg.o_3sg'}, {tags: 'impf.s_1sg.o_3pl'}, {tags: 'impf.s_1pl.o_3sg'}, {tags: 'impf.s_1pl.o_3pl'}],
          [{tags: 'impf.s_2sg', width: 2}, {tags: 'impf.s_2pl', width: 2}],
          [{tags: 'impf.s_2sg.o_1sg'}, {tags: 'impf.s_2sg.o_1pl'}, {tags: 'impf.s_2pl.o_1sg'}, {tags: 'impf.s_2pl.o_1pl'}],
          [{tags: 'impf.s_2sg.refl'}, {tags: 'impf.s_2sg.o_2pl'}, {tags: 'impf.s_2pl.o_2sg'}, {tags: 'impf.s_2pl.refl'}],
          [{tags: 'impf.s_2sg.o_3sg'}, {tags: 'impf.s_2sg.o_3pl'}, {tags: 'impf.s_2pl.o_3sg'}, {tags: 'impf.s_2pl.o_3pl'}],
          [{tags: 'impf.s_3sg', width: 2}, {tags: 'impf.s_3pl', width: 2}],
          [{tags: 'impf.s_3sg.o_1sg'}, {tags: 'impf.s_3sg.o_1pl'}, {tags: 'impf.s_3pl.o_1sg'}, {tags: 'impf.s_3pl.o_1pl'}],
          [{tags: 'impf.s_3sg.o_2sg'}, {tags: 'impf.s_3sg.o_2pl'}, {tags: 'impf.s_3pl.o_2sg'}, {tags: 'impf.s_3pl.o_2pl'}],
          [{tags: 'impf.s_3sg.refl'}, {tags: 'impf.s_3sg.o_3pl'}, {tags: 'impf.s_3pl.o_3sg'}, {tags: 'impf.s_3pl.refl'}]
        ]
      },
      {
        id: 'perf',
        label: 'Perfect',
        html: {
          'English (linguist)': haa_tv_table('English (linguist)', 'Perfect', 'perf'),
			 'English': haa_tv_table('English', 'Perfect', 'perf'),
			 'Hän': haa_tv_table('Hän', 'Perfect', 'perf')
        },
        tabcolgroups: [
          {label: 'Singular Subj', width: 2},
          {label: 'Plural Subj', width: 2}
        ],
        tabcols: ['Singular Obj', 'Plural Obj', 'Singular Obj', 'Plural Obj'],
        tabrows: ['First person',
          'First person → First person',
          'First person → Second person',
          'First person → Third person',
          'Second person',
          'Second person → First person',
          'Second person → Second person',
          'Second person → Third person',
          'Third person',
          'Third person → First person',
          'Third person → Second person',
          'Third person → Third person'],
        tabdata: [
          [{tags: 'perf.s_1sg', width: 2}, {tags: 'perf.s_1pl', width: 2}],
          [{tags: 'perf.s_1sg.refl'}, {tags: 'perf.s_1sg.o_1pl'}, {tags: 'perf.s_1pl.o_1sg'}, {tags: 'perf.s_1pl.refl'}],
          [{tags: 'perf.s_1sg.o_2sg'}, {tags: 'perf.s_1sg.o_2pl'}, {tags: 'perf.s_1pl.o_2sg'}, {tags: 'perf.s_1pl.o_2pl'}],
          [{tags: 'perf.s_1sg.o_3sg'}, {tags: 'perf.s_1sg.o_3pl'}, {tags: 'perf.s_1pl.o_3sg'}, {tags: 'perf.s_1pl.o_3pl'}],
          [{tags: 'perf.s_2sg', width: 2}, {tags: 'perf.s_2pl', width: 2}],
          [{tags: 'perf.s_2sg.o_1sg'}, {tags: 'perf.s_2sg.o_1pl'}, {tags: 'perf.s_2pl.o_1sg'}, {tags: 'perf.s_2pl.o_1pl'}],
          [{tags: 'perf.s_2sg.refl'}, {tags: 'perf.s_2sg.o_2pl'}, {tags: 'perf.s_2pl.o_2sg'}, {tags: 'perf.s_2pl.refl'}],
          [{tags: 'perf.s_2sg.o_3sg'}, {tags: 'perf.s_2sg.o_3pl'}, {tags: 'perf.s_2pl.o_3sg'}, {tags: 'perf.s_2pl.o_3pl'}],
          [{tags: 'perf.s_3sg', width: 2}, {tags: 'perf.s_3pl', width: 2}],
          [{tags: 'perf.s_3sg.o_1sg'}, {tags: 'perf.s_3sg.o_1pl'}, {tags: 'perf.s_3pl.o_1sg'}, {tags: 'perf.s_3pl.o_1pl'}],
          [{tags: 'perf.s_3sg.o_2sg'}, {tags: 'perf.s_3sg.o_2pl'}, {tags: 'perf.s_3pl.o_2sg'}, {tags: 'perf.s_3pl.o_2pl'}],
          [{tags: 'perf.s_3sg.refl'}, {tags: 'perf.s_3sg.o_3pl'}, {tags: 'perf.s_3pl.o_3sg'}, {tags: 'perf.s_3pl.refl'}]
        ]
      },
      {
        id: 'fut',
        label: 'Future',
        html: {
          'English (linguist)': haa_tv_table('English (linguist)', 'Future', 'fut'),
			 'English': haa_tv_table('English', 'Future', 'fut'),
			 'Hän': haa_tv_table('Hän', 'Future', 'fut')
        },
        tabcolgroups: [
          {label: 'Singular Subj', width: 2},
          {label: 'Plural Subj', width: 2}
        ],
        tabcols: ['Singular Obj', 'Plural Obj', 'Singular Obj', 'Plural Obj'],
        tabrows: ['First person',
          'First person → First person',
          'First person → Second person',
          'First person → Third person',
          'Second person',
          'Second person → First person',
          'Second person → Second person',
          'Second person → Third person',
          'Third person',
          'Third person → First person',
          'Third person → Second person',
          'Third person → Third person'],
        tabdata: [
          [{tags: 'fut.s_1sg', width: 2}, {tags: 'fut.s_1pl', width: 2}],
          [{tags: 'fut.s_1sg.refl'}, {tags: 'fut.s_1sg.o_1pl'}, {tags: 'fut.s_1pl.o_1sg'}, {tags: 'fut.s_1pl.refl'}],
          [{tags: 'fut.s_1sg.o_2sg'}, {tags: 'fut.s_1sg.o_2pl'}, {tags: 'fut.s_1pl.o_2sg'}, {tags: 'fut.s_1pl.o_2pl'}],
          [{tags: 'fut.s_1sg.o_3sg'}, {tags: 'fut.s_1sg.o_3pl'}, {tags: 'fut.s_1pl.o_3sg'}, {tags: 'fut.s_1pl.o_3pl'}],
          [{tags: 'fut.s_2sg', width: 2}, {tags: 'fut.s_2pl', width: 2}],
          [{tags: 'fut.s_2sg.o_1sg'}, {tags: 'fut.s_2sg.o_1pl'}, {tags: 'fut.s_2pl.o_1sg'}, {tags: 'fut.s_2pl.o_1pl'}],
          [{tags: 'fut.s_2sg.refl'}, {tags: 'fut.s_2sg.o_2pl'}, {tags: 'fut.s_2pl.o_2sg'}, {tags: 'fut.s_2pl.refl'}],
          [{tags: 'fut.s_2sg.o_3sg'}, {tags: 'fut.s_2sg.o_3pl'}, {tags: 'fut.s_2pl.o_3sg'}, {tags: 'fut.s_2pl.o_3pl'}],
          [{tags: 'fut.s_3sg', width: 2}, {tags: 'fut.s_3pl', width: 2}],
          [{tags: 'fut.s_3sg.o_1sg'}, {tags: 'fut.s_3sg.o_1pl'}, {tags: 'fut.s_3pl.o_1sg'}, {tags: 'fut.s_3pl.o_1pl'}],
          [{tags: 'fut.s_3sg.o_2sg'}, {tags: 'fut.s_3sg.o_2pl'}, {tags: 'fut.s_3pl.o_2sg'}, {tags: 'fut.s_3pl.o_2pl'}],
          [{tags: 'fut.s_3sg.refl'}, {tags: 'fut.s_3sg.o_3pl'}, {tags: 'fut.s_3pl.o_3sg'}, {tags: 'fut.s_3pl.refl'}]
        ]
      },
      {
        id: 'incp',
        label: 'Inceptive',
		  info: "If forms for a particular aspect are missing, it is because the verb stem for that aspect is not yet available in the transducer",
        html: {
          'English (linguist)': haa_tv_table('English (linguist)', 'Inceptive', 'incp'),
			 'English': haa_tv_table('English', 'Inceptive', 'incp'),
			 'Hän': haa_tv_table('Hän', 'Inceptive', 'incp')
        },
        tabcolgroups: [
          {label: 'Singular Subj', width: 2},
          {label: 'Plural Subj', width: 2}
        ],
        tabcols: ['Singular Obj', 'Plural Obj', 'Singular Obj', 'Plural Obj'],
        tabrows: ['First person',
          'First person → First person',
          'First person → Second person',
          'First person → Third person',
          'Second person',
          'Second person → First person',
          'Second person → Second person',
          'Second person → Third person',
          'Third person',
          'Third person → First person',
          'Third person → Second person',
          'Third person → Third person'],
        tabdata: [
          [{tags: 'incp.s_1sg', width: 2}, {tags: 'incp.s_1pl', width: 2}],
          [{tags: 'incp.s_1sg.refl'}, {tags: 'incp.s_1sg.o_1pl'}, {tags: 'incp.s_1pl.o_1sg'}, {tags: 'incp.s_1pl.refl'}],
          [{tags: 'incp.s_1sg.o_2sg'}, {tags: 'incp.s_1sg.o_2pl'}, {tags: 'incp.s_1pl.o_2sg'}, {tags: 'incp.s_1pl.o_2pl'}],
          [{tags: 'incp.s_1sg.o_3sg'}, {tags: 'incp.s_1sg.o_3pl'}, {tags: 'incp.s_1pl.o_3sg'}, {tags: 'incp.s_1pl.o_3pl'}],
          [{tags: 'incp.s_2sg', width: 2}, {tags: 'incp.s_2pl', width: 2}],
          [{tags: 'incp.s_2sg.o_1sg'}, {tags: 'incp.s_2sg.o_1pl'}, {tags: 'incp.s_2pl.o_1sg'}, {tags: 'incp.s_2pl.o_1pl'}],
          [{tags: 'incp.s_2sg.refl'}, {tags: 'incp.s_2sg.o_2pl'}, {tags: 'incp.s_2pl.o_2sg'}, {tags: 'incp.s_2pl.refl'}],
          [{tags: 'incp.s_2sg.o_3sg'}, {tags: 'incp.s_2sg.o_3pl'}, {tags: 'incp.s_2pl.o_3sg'}, {tags: 'incp.s_2pl.o_3pl'}],
          [{tags: 'incp.s_3sg', width: 2}, {tags: 'incp.s_3pl', width: 2}],
          [{tags: 'incp.s_3sg.o_1sg'}, {tags: 'incp.s_3sg.o_1pl'}, {tags: 'incp.s_3pl.o_1sg'}, {tags: 'incp.s_3pl.o_1pl'}],
          [{tags: 'incp.s_3sg.o_2sg'}, {tags: 'incp.s_3sg.o_2pl'}, {tags: 'incp.s_3pl.o_2sg'}, {tags: 'incp.s_3pl.o_2pl'}],
          [{tags: 'incp.s_3sg.refl'}, {tags: 'incp.s_3sg.o_3pl'}, {tags: 'incp.s_3pl.o_3sg'}, {tags: 'incp.s_3pl.refl'}]
        ]
      }
    ]
  }
}

LANGS['haa'].labels = haa_labels;
