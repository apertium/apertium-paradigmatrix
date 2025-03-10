function add_haa() {
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
