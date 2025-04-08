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
        ]
      },
      {
        id: 'ind',
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
