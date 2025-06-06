function add_unm() {
  return {
    dix: {
      'see [something]': {1: 'nem<v><tv><nn>', type: 'verb_ti'},
      'cook [something]': {1: 'wixenin<v><tv><nn>', type: 'verb_ti'},
      'have [something]': {1: 'ulhatu<v><tv><nn>', type: 'verb_ti'},
      'be tired': {1: 'wikwihel<v><iv><aa>', type: 'verb_ai'},
      'be sick': {1: 'pals<v><iv><aa>', type: 'verb_ai'},
      'be sad': {1: 'shielìntàm<v><iv><aa>', type: 'verb_ai'},
      'bake bread': {1: 'ahponhe<v><iv><aa>', type: 'verb_ai'},
      'give [to someone]': {1: 'mil<v><tv><aa>', type: 'verb_ta'},
      'see [someone]': {1: 'new<v><tv><aa>', type: 'verb_ta'},
      'help [someone]': {1: 'wichëm<v><tv><aa>', type: 'verb_ta'}
    },
    verb_ai: [
      {title: 'Subject',
       text: 'Who is the doer of the action?',
       seq: 3,
       values: [{label: 'I', tags: '<s_1sg>'},
                {label: 'you (one person)', tags: '<s_2sg>'},
                {label: 'he/she', tags: '<s_3sg>'},
                {label: 'we (excluding you)', tags: '<s_11pl>'},
                {label: 'we (including you)', tags: '<s_12pl>'},
                {label: 'you all', tags: '<s_2pl>'},
                {label: 'they', tags: '<s_3pl>'}
               ]
      },
      {title: 'Negation',
       text: 'Is the action done or not?',
       seq: 2,
       values: [{label: 'done', tags: ''},
                {label: 'not', tags: '<neg>'}
               ]
      },
      {title: 'Tense',
       text: 'When does does the action take place?',
       templates: [{label: 'past/present', templ: '{1}{2}{3}'},
                   {label: 'future', templ: 'xu<adv>$ ^{1}{2}{3}'},
                   {label: 'subordinative', templ: 'tëli<cnjsub>$ ^{1}<subord>{2}{3}'},
                   {label: 'want to', templ: 'kata<vaux>+{1}{2}{3}'}
                  ]
      }
    ],
    verb_ti: [
      {title: 'Subject',
       text: 'Who is the doer of the action?',
       seq: 3,
       values: [{label: 'I', tags: '<s_1sg>'},
                {label: 'you (one person)', tags: '<s_2sg>'},
                {label: 'he/she', tags: '<s_3sg>'},
                {label: 'we (excluding you)', tags: '<s_11pl>'},
                {label: 'we (including you)', tags: '<s_12pl>'},
                {label: 'you all', tags: '<s_2pl>'},
                {label: 'they', tags: '<s_3pl>'}
               ]
      },
      {title: 'Object',
       text: 'What is the action done to?',
       seq: 4,
       values: [{label: 'something', tags: ''},
                {label: 'it', tags: '<o_sg>'},
                {label: 'them', tags: '<o_pl>'}
               ]
      },
      {title: 'Negation',
       text: 'Is the action done or not?',
       seq: 2,
       values: [{label: 'done', tags: ''},
                {label: 'not', tags: '<neg>'}
               ]
      },
      {title: 'Tense',
       text: 'When does does the action take place?',
       templates: [{label: 'past/present', templ: '{1}{2}{3}{4}'},
                   {label: 'future', templ: 'xu<adv>$ ^{1}{2}{3}{4}'},
                   {label: 'subordinative', templ: 'tëli<cnjsub>$ ^{1}<subord>{2}{3}{4}'},
                   {label: 'want to', templ: 'kata<vaux>+{1}{2}{3}{4}'}
                  ]
      }
    ],
    verb_ta: [
      {title: 'Subject',
       text: 'Who is the doer of the action?',
       seq: 3,
       values: [{label: 'I', tags: '<s_1sg>'},
                {label: 'you (one person)', tags: '<s_2sg>'},
                {label: 'he/she', tags: '<s_3sg>'},
                {label: 'we (excluding you)', tags: '<s_11pl>'},
                {label: 'we (including you)', tags: '<s_12pl>'},
                {label: 'you all', tags: '<s_2pl>'},
                {label: 'they', tags: '<s_3pl>'}
               ]
      },
      {title: 'Object',
       text: 'Who is the action done to?',
       seq: 4,
       values: [{label: 'me', tags: '<o_1sg>'},
                {label: 'you', tags: '<o_2sg>'},
                {label: 'him/her', tags: '<o_3sg>'},
                {label: 'them', tags: '<o_3pl>'}
               ]
      },
      {title: 'Negation',
       text: 'Is the action done or not?',
       seq: 2,
       values: [{label: 'done', tags: ''},
                {label: 'not', tags: '<neg>'}
               ]
      },
      {title: 'Tense',
       text: 'When does does the action take place?',
       templates: [{label: 'past/present', templ: '{1}{2}{3}{4}'},
                   {label: 'future', templ: 'xu<adv>$ ^{1}{2}{3}{4}'},
                   {label: 'subordinative', templ: 'tëli<cnjsub>$ ^{1}<subord>{2}{3}{4}'},
                   {label: 'want to', templ: 'kata<vaux>+{1}{2}{3}{4}'}
                  ]
      }
    ]

  };
}
