function add_unm() {
  return {
    verb_ti: [
      {
        id: 'ind',
        label: 'Indicative',
        tabcols: ['Singular Object', 'Plural Object'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 'p1.sg.o_sg'}, {tags: 'p1.sg.o_pl'}],
          [{tags: 'p2.sg.o_sg'}, {tags: 'p2.sg.o_pl'}],
          [{tags: 'p3.sg.o_sg'}, {tags: 'p3.sg.o_pl'}],
          [{tags: 'p1.excl.pl.o_sg'}, {tags: 'p1.excl.pl.o_pl'}],
          [{tags: 'p1.incl.pl.o_sg'}, {tags: 'p1.incl.pl.o_pl'}],
          [{tags: 'p2.pl', width: 2}],
          [{tags: 'p3.pl', width: 2}]
        ]
      },
      {
        id: 'subord',
        label: 'Subordinative',
        tabcols: ['Singular Object', 'Plural Object'],
        tabrows: ['First person sg subj', 'Second person sg subj', 'Third person sg subj', 'First person pl (excl) subj', 'First person pl (incl) subj', 'Second person pl subj', 'Third person pl subj' ],
        tabdata: [
          [{tags: 'subord.p1.sg.o_sg'}, {tags: 'subord.p1.sg.o_pl'}],
          [{tags: 'subord.p2.sg.o_sg'}, {tags: 'subord.p2.sg.o_pl'}],
          [{tags: 'subord.p3.sg.o_sg'}, {tags: 'subord.p3.sg.o_pl'}],
          [{tags: 'subord.p1.excl.pl.o_sg'}, {tags: 'subord.p1.excl.pl.o_pl'}],
          [{tags: 'subord.p1.incl.pl.o_sg'}, {tags: 'subord.p1.incl.pl.o_pl'}],
          [{tags: 'subord.p2.pl', width: 2}],
          [{tags: 'subord.p3.pl', width: 2}]
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
          [{tags: 'p1.sg'}, {tags: 'p1.excl.pl'}],
          [{tags: ''}, {tags: 'p1.incl.pl'}],
          [{tags: 'p2.sg'}, {tags: 'p2.pl'}],
          [{tags: 'p3.sg'}, {tags: 'p3.pl'}]
        ]
      },
      {
        id: 'subord',
        label: 'Subordinative',
        tabcols: ['Singular', 'Plural'],
        tabrows: ['First person', 'First person (incl)', 'Second person', 'Third person'],
        tabdata: [
          [{tags: 'subord.p1.sg'}, {tags: 'subord.p1.excl.pl'}],
          [{tags: ''}, {tags: 'subord.p1.incl.pl'}],
          [{tags: 'subord.p2.sg'}, {tags: 'subord.p2.pl'}],
          [{tags: 'subord.p3.sg'}, {tags: 'subord.p3.pl'}]
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
          [{tags: 'dir.p1.sg.o_sg'}, {tags: 'dir.p1.sg.o_pl'}],
          [{tags: 'dir.p2.sg.o_sg'}, {tags: 'dir.p2.sg.o_pl'}],
          [{tags: 'dir.p3.sg.o_sg'}, {tags: 'dir.p3.sg.o_pl'}],
          [{tags: 'dir.p1.excl.pl.o_sg'}, {tags: 'dir.p1.excl.pl.o_pl'}],
          [{tags: 'dir.p1.incl.pl.o_sg'}, {tags: 'dir.p1.incl.pl.o_pl'}],
          [{tags: 'dir.p2.pl.o_sg'}, {tags: 'dir.p2.pl.o_pl'}],
          [{tags: 'dir.p3.pl', width: 2}]
        ]
      },
      {
        id: 'ind_inv',
        label: 'Indicative Inverse',
        tabcols: ['He/she ...', 'They ...'],
        tabrows: ['First person sg obj', 'Second person sg obj', 'Third person sg obj', 'First person pl (excl) obj', 'First person pl (incl) obj', 'Second person pl obj', 'Third person pl obj' ],
        tabdata: [
          [{tags: 'inv.p1.sg.s_sg'}, {tags: 'inv.p1.sg.s_pl'}],
          [{tags: 'inv.p2.sg.s_sg'}, {tags: 'inv.p2.sg.s_pl'}],
          [{tags: 'inv.p3.sg.s_sg'}, {tags: 'inv.p3.sg.s_pl'}],
          [{tags: 'inv.p1.excl.pl.s_sg'}, {tags: 'inv.p1.excl.pl.s_pl'}],
          [{tags: 'inv.p1.incl.pl.s_sg'}, {tags: 'inv.p1.incl.pl.s_pl'}],
          [{tags: 'inv.p2.pl.s_sg'}, {tags: 'inv.p2.pl.s_pl'}],
          [{tags: 'inv.p3.pl', width: 2}]
        ]
      },
    ]
  };
}
