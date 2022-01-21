function grc_fin_vb(tgs, label) {
  return {
    id: tgs.replaceAll('.', '-'),
    "label": label,
    tabcols: ["Singular", "Dual", "Plural"],
    tabrows: ["First (1st)", "Second (2nd)", "Third (3rd)"],
    tabdata: [
      [{tags: tgs+".p1.sg"}, {text: ""},           {tags: tgs+".p1.pl"}],
      [{tags: tgs+".p2.sg"}, {tags: tgs+".p2.du"}, {tags: tgs+".p2.pl"}],
      [{tags: tgs+".p3.sg"}, {tags: tgs+".p3.du"}, {tags: tgs+".p3.pl"}]
    ]
  };
}

function add_grc() {
  return {
    verb: [
      {
        id: "ind",
        label: "Indicative",
        subcats: [
          {
            id: "ind-pres",
            label: "Present",
            subcats: [
              grc_fin_vb("ind.actv.impf.pres", "Active"),
              grc_fin_vb("ind.midv.impf.pres", "Middle/Passive")
            ]
          },
          {
            id: "ind-past",
            label: "Imperfect",
            subcats: [
              grc_fin_vb("ind.actv.impf.past", "Active"),
              grc_fin_vb("ind.midv.impf.past", "Middle/Passive")
            ]
          },
          {
            id: "ind-fut",
            label: "Future",
            subcats: [
              grc_fin_vb("ind.actv.impf.fut", "Active"),
              grc_fin_vb("ind.midv.impf.fut", "Middle"),
              grc_fin_vb("ind.pass.impf.fut", "Passive")
            ]
          },
          {
            id: "ind-aor",
            label: "Aorist",
            subcats: [
              grc_fin_vb("ind.actv.aor.past", "Active"),
              grc_fin_vb("ind.midv.aor.past", "Middle"),
              grc_fin_vb("ind.pass.aor.past", "Passive")
            ]
          },
          {
            id: "ind-perf",
            label: "Perfect",
            subcats: [
              grc_fin_vb("ind.actv.perf.pres", "Active"),
              grc_fin_vb("ind.midv.perf.pres", "Middle/Passive")
            ]
          },
        ]
      },
      {
        id: "sub",
        label: "Subjunctive"
      },
      {
        id: "opt",
        label: "Optative"
      },
      {
        id: "imp",
        label: "Imperative"
      }
    ]
  };
}
