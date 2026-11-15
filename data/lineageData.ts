import { StudyNode, Lang } from "../components/StudyTool";

export interface DiagramCollection {
  id:
    | "complement"
    | "immune_iei"
    | "sepsis_infection"
    | "hiv_reservoir"
    | "reactivity";
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  nodes: StudyNode[];
}

// ============================================================================
// 1. კომპლემენტის სისტემის კასკადი, რეგულატორები და პათოლოგია (თავი 16.2, სურ. 2.2)
// ============================================================================
export const complementNodes: StudyNode[] = [
  // --- ROW 1: INITIATION PATHWAYS & C1-INH ---
  {
    id: "c1_inh",
    parents: [],
    top: 20,
    left: 13,
    width: "w-52",
    isInhibitor: true,
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "ინჰიბიტორი: C1-Inh (SERPING1)",
      en: "Inhibitor: C1-Inh (SERPING1)",
    },
    subtitle: {
      ka: "ბლოკავს C1r₂s₂-ს და MASP-1/2-ს",
      en: "Blocks C1r₂s₂ & MASP-1/2",
    },
    name: {
      ka: "C1-ინჰიბიტორი (SERPING1) და კვინკეს შეშუპება",
      en: "C1-Inhibitor (SERPING1) & Hereditary Angioedema",
    },
    function: {
      ka: "პლაზმური რეგულატორი C1-Inh აშორებს C1r₂s₂-ს კლასიკურ გზაში და ბლოკავს MASP-1/2-ს ლექტინურ გზაში, ასევე აკონტროლებს კალიკრეინ-კინინურ სისტემას.",
      en: "Dissociates C1r2s2 in the classical pathway and inhibits MASP-1/2 in the lectin pathway, while regulating kallikrein-kinin activation.",
    },
    diseases: [
      {
        name: {
          ka: "მემკვიდრული ანგიონევროზული შეშუპება (კვინკეს შეშუპება)",
          en: "Hereditary Angioedema (Quincke Edema)",
        },
        findings: {
          ka: "C1-Inh დეფიციტი (SERPING1 მუტაცია) იწვევს კლასიკური გზისა და კალიკრეინ-კინინური სისტემის უკონტროლო აქტივაციას ბრადიკინინის ჭარბი წარმოქმნით და სახის, ხორხისა და ნაწლავის ლორწოვანის შეშუპებით.",
          en: "Uncontrolled bradykinin generation causing life-threatening facial, laryngeal, and intestinal mucosal edema.",
        },
      },
    ],
  },
  {
    id: "comp_classical",
    parents: ["c1_inh"],
    top: 20,
    left: 38,
    width: "w-56",
    bgClass: "bg-blue-100 border-blue-400",
    label: {
      ka: "კლასიკური გზა (C1q–r₂s₂)",
      en: "Classical Pathway (C1q–r₂s₂)",
    },
    subtitle: {
      ka: "Ag–Ab (IgM, IgG₁₋₃) → C4 და C2 გახლეჩა",
      en: "Ag–Ab Complex → Cleaves C4 & C2",
    },
    name: {
      ka: "კომპლემენტის კლასიკური გზა (C1q, C1r, C1s, C4, C2)",
      en: "Classical Complement Pathway",
    },
    function: {
      ka: "ირთვება ანტიგენ-ანტისხეულის (IgM ან IgG1-3) კომპლექსით, რომელსაც უკავშირდება მონოციტ/მაკროფაგების მიერ სინთეზირებული ჰექსამერული C1q და ააქტიურებს C1r₂s₂ სერინულ პროტეაზებს; C1s ხლეჩს C4-სა და C2-ს.",
      en: "Activated by IgM/IgG1-3 immune complexes binding hexameric C1q, activating C1r2s2 to cleave C4 and C2.",
    },
    diseases: [
      {
        name: {
          ka: "C1q, C1r/s, C4 (C4A), C2 დეფიციტი → სისტემური წითელი მგლურა (SLE)",
          en: "Early Classical Deficiency → Systemic Lupus Erythematosus (SLE)",
        },
        findings: {
          ka: "მგლურა ვითარდება ჰომოზიგოტური C1q დეფიციტის 88%-ში, C4 დეფიციტის 78.6%-ში, C1r/s — 65%-ში, C2 — 10%-ში. ირღვევა აპოპტოზური ნუკლეოსომებისა და იმუნური კომპლექსების კლირენსი და იზრდება pDC-ების მიერ IFN-α-ის სეკრეცია. ლაბორატორიულად: ↓CH50, ნორმალური AH50.",
          en: "Impaired clearance of apoptotic bodies and immune complexes causing SLE (↓CH50, normal AH50).",
        },
      },
    ],
  },
  {
    id: "comp_lectin",
    parents: ["c1_inh"],
    top: 20,
    left: 63,
    width: "w-56",
    bgClass: "bg-teal-100 border-teal-400",
    label: {
      ka: "ლექტინური გზა (MBL / ფიკოლინები)",
      en: "Lectin Pathway (MBL / Ficolins)",
    },
    subtitle: {
      ka: "მიკრობული მანოზა + MASP-1/2 → C4, C2",
      en: "Microbial Mannose + MASP-1/2",
    },
    name: {
      ka: "კომპლემენტის ლექტინური გზა",
      en: "Lectin Pathway of Complement",
    },
    function: {
      ka: "ირთვება ანტისხეულების გარეშე: პლაზმის მანოზა-დამაკავშირებელი ლექტინი (MBL) ან ფიკოლინ-3 უკავშირდება მიკრობის ნახშირწყლებს და MASP-1/2 პროტეაზებით ხლეჩს C4-სა და C2-ს.",
      en: "Antibody-independent pathway where MBL or ficolins bind microbial carbohydrates and activate MASP-1/2.",
    },
    diseases: [
      {
        name: {
          ka: "MBL და MASP-2 დეფიციტი",
          en: "MBL & MASP-2 Deficiency",
        },
        findings: {
          ka: "ზრდის მოწყვლადობას ჩირქოვანი რესპირატორული ინფექციების მიმართ, განსაკუთრებით ჩვილებში (ფიზიოლოგიური ჰიპოგამაგლობულინემიის პერიოდში).",
          en: "Increases susceptibility to pyogenic infections in infants.",
        },
      },
    ],
  },
  {
    id: "comp_alternative",
    parents: [],
    top: 20,
    left: 88,
    width: "w-52",
    bgClass: "bg-amber-100 border-amber-400",
    label: {
      ka: "ალტერნატიული გზა (LPS, B, D)",
      en: "Alternative Pathway (LPS, B, D)",
    },
    subtitle: {
      ka: "C3 ჰიდროლიზი + ფაქტორი B, D, პროპერდინი",
      en: "C3(H₂O) + Factors B, D, Properdin",
    },
    name: {
      ka: "კომპლემენტის ალტერნატიული გზა",
      en: "Alternative Pathway of Complement",
    },
    function: {
      ka: "ირთვება C3-ის სპონტანური ჰიდროლიზით ან მიკრობულ ზედაპირზე (LPS) C3b-ის ფიქსაციით. C3b იერთებს ფაქტორ B-ს, რომელსაც ხლეჩს ფაქტორი D და წარმოიქმნება ალტერნატიული C3-კონვერტაზა C3bBb (სტაბილიზდება პროპერდინით).",
      en: "Initiated by spontaneous C3 hydrolysis or microbial LPS with Factors B, D, and properdin.",
    },
    diseases: [
      {
        name: {
          ka: "ფაქტორ B, D და პროპერდინის დეფიციტი",
          en: "Factor B, D & Properdin Deficiency",
        },
        findings: {
          ka: "ლაბორატორიულად: ნორმალური CH50 და დაბალი AH50. იწვევს მძიმე მენინგოკოკურ (Neisseria meningitidis) ინფექციებს.",
          en: "Normal CH50 and low AH50; predisposes to fulminant Neisseria infections.",
        },
      },
    ],
  },

  // --- ROW 2: C3 CONVERTASES & CONVERTASE REGULATORS ---
  {
    id: "reg_conv",
    parents: [],
    top: 170,
    left: 15,
    width: "w-56",
    isInhibitor: true,
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "კონვერტაზების რეგულატორები",
      en: "Convertase Regulators",
    },
    subtitle: {
      ka: "CD55 (DAF), CR1, C4bp, FH, FI + CD46",
      en: "CD55, CR1, C4bp, FH, FI + CD46",
    },
    name: {
      ka: "C3-კონვერტაზების მემბრანული და პლაზმური რეგულატორები",
      en: "Membrane & Plasma Regulators of C3 Convertases",
    },
    function: {
      ka: "საკუთარ უჯრედებზე კონვერტაზების დისოციაციას იწვევს CD55 (DAF), CR1, C4bp და ფაქტორი H (FH), ხოლო სერინული პროტეაზა ფაქტორი I (CD46/MCP და CR1 კოფაქტორებით) პროტეოლიზურად შლის C3b-სა და C4b-ს (iC3b, C4d).",
      en: "Accelerates decay of convertases (CD55, CR1, C4bp, FH) and cleaves C3b/C4b via Factor I + CD46/CR1.",
    },
    diseases: [
      {
        name: {
          ka: "ატიპური ჰემოლიზურ-ურემიული სინდრომი (aHUS - FH, FI, CD46)",
          en: "Atypical Hemolytic Uremic Syndrome (aHUS)",
        },
        findings: {
          ka: "ფაქტორ H-ის, ფაქტორ I-ის ან CD46-ის დეფიციტი იწვევს ალტერნატიული გზის ჰიპერაქტივაციას ენდოთელიუმზე: მიკროანგიოპათიური ჰემოლიზური ანემია, თრომბოციტოპენია და თირკმლის მწვავე უკმარისობა.",
          en: "Alternative pathway overactivation on endothelium causing MAHA, thrombocytopenia, and AKI.",
        },
      },
      {
        name: {
          ka: "CHAPLE დაავადება (CD55 დეფიციტი)",
          en: "CHAPLE Disease (CD55 Deficiency)",
        },
        findings: {
          ka: "CD55 (DAF) დეფიციტი იწვევს კომპლემენტის ჰიპერაქტივაციას, თრომბოზებსა და ცილის კარგვით მიმდინარე ენტეროპათიას.",
          en: "Complement hyperactivation, angiopathic thrombosis, and protein-losing enteropathy.",
        },
      },
    ],
  },
  {
    id: "c3_conv_cl",
    parents: ["comp_classical", "comp_lectin", "reg_conv"],
    top: 170,
    left: 50,
    width: "w-64",
    bgClass: "bg-sky-100 border-sky-400",
    label: {
      ka: "კლასიკური/ლექტინური კონვერტაზა: C4b2a",
      en: "Classical/Lectin C3 Convertase: C4b2a",
    },
    subtitle: {
      ka: "ორივე გზის გაერთიანება (+ ანაფილატოქსინი C4a)",
      en: "Merges Classical & Lectin Pathways",
    },
    name: {
      ka: "კლასიკური და ლექტინური გზის C3-კონვერტაზა (C4b2a)",
      en: "Classical/Lectin C3 Convertase (C4b2a)",
    },
    function: {
      ka: "წარმოიქმნება როგორც კლასიკური, ისე ლექტინური გზით C4-ისა და C2-ის გახლეჩის შედეგად. ხლეჩს ცენტრალურ კომპონენტ C3-ს C3b-დ და C3a-დ.",
      en: "Formed by cleavage of C4 and C2 in both classical and lectin pathways; cleaves central C3.",
    },
  },
  {
    id: "c3_conv_ap",
    parents: ["comp_alternative", "reg_conv"],
    top: 170,
    left: 85,
    width: "w-60",
    bgClass: "bg-orange-100 border-orange-400",
    label: {
      ka: "ალტერნატიული კონვერტაზა: C3bBb",
      en: "Alternative C3 Convertase: C3bBb",
    },
    subtitle: {
      ka: "სტაბილიზებული პროპერდინით (+C3b მარყუჟი)",
      en: "Stabilized by Properdin",
    },
    name: {
      ka: "ალტერნატიული გზის C3-კონვერტაზა (C3bBb) და ამპლიფიკაციის მარყუჟი",
      en: "Alternative C3 Convertase (C3bBb) & Amplification Loop",
    },
    function: {
      ka: "ხლეჩს C3-ს და წარმოქმნილი C3b-ის მეშვეობით რთავს დადებითი უკუკავშირის — ამპლიფიკაციის მარყუჟს.",
      en: "Cleaves C3 and drives the positive-feedback amplification loop (+C3b).",
    },
    diseases: [
      {
        name: {
          ka: "C3 ნეფრიტული ფაქტორი (C3NeF)",
          en: "C3 Nephritic Factor Autoantibody",
        },
        findings: {
          ka: "აუტოანტისხეული, რომელიც ასტაბილიზებს C3bBb კონვერტაზას, იწვევს C3-ის უწყვეტ განლევასა და გლომერულონეფრიტს.",
          en: "Autoantibody stabilizing C3bBb, causing persistent C3 consumption and glomerulonephritis.",
        },
      },
    ],
  },

  // --- ROW 3: CENTRAL C3 & OPSONIZATION ---
  {
    id: "opson_ic",
    parents: ["c3_central"],
    top: 325,
    left: 20,
    width: "w-60",
    bgClass: "bg-indigo-100 border-indigo-400",
    label: {
      ka: "ოფსონოფაგოციტოზი და IC კლირენსი",
      en: "Opsonophagocytosis & IC Clearance",
    },
    subtitle: {
      ka: "C3b → ფაგოციტების CR1 (CD35) და CR3 (CD18)",
      en: "C3b binds Phagocyte CR1 & CR3",
    },
    name: {
      ka: "ოფსონოფაგოციტოზი და იმუნური კომპლექსების კლირენსი",
      en: "Opsonophagocytosis & Immune Complex Clearance",
    },
    function: {
      ka: "C3b ემაგრება მიკრობის ზედაპირს და უკავშირდება ნეიტროფილებისა და მაკროფაგების CR1 და CR3 (CD11b/CD18) რეცეპტორებს, რაც მკვეთრად აძლიერებს ფაგოციტოზსა და იმუნური კომპლექსების ელიმინაციას.",
      en: "C3b coats microbes and binds phagocyte CR1/CR3 receptors to drive phagocytosis and immune complex clearance.",
    },
  },
  {
    id: "c3_central",
    parents: ["c3_conv_cl", "c3_conv_ap"],
    top: 325,
    left: 60,
    width: "w-68",
    bgClass: "bg-yellow-100 border-yellow-500",
    label: {
      ka: "ცენტრალური კომპონენტი C3 → C3b + C3a",
      en: "Central Component C3 → C3b + C3a",
    },
    subtitle: {
      ka: "სამივე გზის კონვერგენცია | C3 დეფიციტი: ↓CH50, ↓AH50",
      en: "Convergence of All 3 Pathways",
    },
    name: {
      ka: "ცენტრალური კომპონენტი C3",
      en: "Central Complement Component C3",
    },
    function: {
      ka: "აქ ერთიანდება კლასიკური, ლექტინური და ალტერნატიული გზები. C3 იხლიჩება მთავარ ოფსონინ C3b-დ და ანაფილატოქსინ C3a-დ. ერითროციტებზე ფიქსირებული C4d (E-C4d) ასახავს კომპლემენტის მოხმარებას ბოლო 60 დღის მანძილზე.",
      en: "Convergence point of all 3 pathways, yielding major opsonin C3b and anaphylatoxin C3a.",
    },
    diseases: [
      {
        name: {
          ka: "C3-ის დეფიციტი (↓CH50 და ↓AH50)",
          en: "C3 Deficiency (↓CH50 & ↓AH50)",
        },
        findings: {
          ka: "ოფსონიზაციისა და ქემოტაქსისის მოშლის გამო ვითარდება უმძიმესი მორეციდივე ჩირქოვანი ბაქტერიული ინფექციები (S. pneumoniae, H. influenzae) და გლომერულონეფრიტი.",
          en: "Impaired opsonization and chemotaxis leading to severe recurrent pyogenic infections and glomerulonephritis.",
        },
      },
    ],
  },

  // --- ROW 4: C5 CONVERTASES, ANAPHYLATOXINS & ECULIZUMAB/CD59 ---
  {
    id: "reg_mac",
    parents: [],
    top: 475,
    left: 18,
    width: "w-56",
    isInhibitor: true,
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "ეკულიზუმაბი, CD59 და S-ცილა",
      en: "Eculizumab, CD59 & S-Protein",
    },
    subtitle: {
      ka: "C5-ის და MAC-ის თერაპიული/მემბრანული ბლოკი",
      en: "Blocks C5 Cleavage & MAC Assembly",
    },
    name: {
      ka: "ტერმინალური კასკადის ბლოკატორები (ეკულიზუმაბი და CD59)",
      en: "Terminal Pathway Inhibitors (Eculizumab & CD59)",
    },
    function: {
      ka: "მონოკლონური ანტისხეული ეკულიზუმაბი ბლოკავს C5-ის გახლეჩას (გამოიყენება aHUS-ის დროს), ხოლო მემბრანული CD59 და პლაზმური S-ცილა ბლოკავენ MAC-ის აწყობას საკუთარ უჯრედებზე.",
      en: "Eculizumab blocks C5 cleavage; CD59 and S-protein inhibit MAC formation on host cells.",
    },
    diseases: [
      {
        name: {
          ka: "CD59 დეფიციტი → სისხლძარღვშიდა ჰემოლიზი",
          en: "CD59 Deficiency",
        },
        findings: {
          ka: "CD59-ის დეფიციტისას საკუთარი ერითროციტები ვერ იცავენ თავს MAC-ისგან და ვითარდება სისხლძარღვშიდა ჰემოლიზი.",
          en: "Loss of MAC inhibition on host RBCs causes intravascular hemolysis.",
        },
      },
    ],
  },
  {
    id: "c5_convertase",
    parents: ["c3_central", "reg_mac"],
    top: 475,
    left: 55,
    width: "w-64",
    bgClass: "bg-rose-100 border-rose-400",
    label: {
      ka: "C5-კონვერტაზები → C5b + C5a",
      en: "C5 Convertases → C5b + C5a",
    },
    subtitle: {
      ka: "C4b2a3b (კლას./ლექტ.) და C3bBb3b (ალტერნ.)",
      en: "C4b2a3b & C3bBb3b",
    },
    name: {
      ka: "C5-კონვერტაზები (C4b2a3b და C3bBb3b)",
      en: "C5 Convertases (C4b2a3b & C3bBb3b)",
    },
    function: {
      ka: "C3b-ის მიერთებით C3-კონვერტაზები გარდაიქმნება C5-კონვერტაზებად, რომლებიც ხლეჩენ C5-ს უძლიერეს ქემოატრაქტანტ/ანაფილატოქსინ C5a-დ და C5b-დ (რომელიც იწყებს MAC-ის აწყობას).",
      en: "Cleaves C5 into potent anaphylatoxin/chemoattractant C5a and MAC initiator C5b.",
    },
  },
  {
    id: "anaphylatoxins",
    parents: ["c3_central", "c5_convertase"],
    top: 475,
    left: 88,
    width: "w-52",
    bgClass: "bg-amber-100 border-amber-400",
    label: {
      ka: "ანაფილატოქსინები: C3a, C5a",
      en: "Anaphylatoxins: C3a & C5a",
    },
    subtitle: {
      ka: "ქემოტაქსისი და პოხიერი უჯრედების დეგრანულაცია",
      en: "Chemotaxis & Mast Cell Degranulation",
    },
    name: {
      ka: "ანაფილატოქსინები (C3a, C4a, C5a) და ქემოტაქსისი",
      en: "Anaphylatoxins (C3a, C5a) & Inflammation",
    },
    function: {
      ka: "C5a და C3a იწვევენ პოხიერი უჯრედებისა და ბაზოფილების დეგრანულაციას (ჰისტამინის გამოყოფას), სისხლძარღვთა განვლადობის გაზრდასა და ნეიტროფილების მძლავრ ქემოტაქსისს ანთების კერაში.",
      en: "Induce mast cell degranulation, vascular permeability, and neutrophil chemotaxis.",
    },
  },

  // --- ROW 5: MAC ---
  {
    id: "mac_complex",
    parents: ["c5_convertase", "reg_mac"],
    top: 615,
    left: 55,
    width: "w-72",
    bgClass: "bg-red-100 border-red-500",
    label: {
      ka: "მემბრანა-შემტევი კომპლექსი (MAC: C5b–C9ₙ)",
      en: "Membrane Attack Complex (MAC: C5b–C9ₙ)",
    },
    subtitle: {
      ka: "სამიზნე უჯრედის ლიზისი | დეფიციტი → ნეისერია",
      en: "Target Cell Lysis | Deficiency → Neisseria",
    },
    name: {
      ka: "მემბრანა-შემტევი კომპლექსი (MAC: C5b–C6–C7–C8–C9ₙ)",
      en: "Membrane Attack Complex (MAC)",
    },
    function: {
      ka: "C5b იერთებს C6, C7, C8 და პოლიმერიზებულ C9 კომპონენტებს, ქმნის ტრანსმემბრანულ ფორებს და იწვევს მიკრობის ოსმოსურ ლიზისს.",
      en: "Forms transmembrane pores in target microbes, causing osmotic lysis.",
    },
    diseases: [
      {
        name: {
          ka: "C5–C9 დეფიციტი (↓CH50, ↓AH50) → ნეისერიული ინფექციები",
          en: "Terminal Complement (C5–C9) Deficiency",
        },
        findings: {
          ka: "ბაქტერიციდული ლიზისის მოშლა იწვევს სელექციურ მიდრეკილებას დისემინირებული ნეისერიული ინფექციების (Neisseria meningitidis, N. gonorrhoeae) მიმართ.",
          en: "Selective susceptibility to disseminated Neisseria meningitidis and N. gonorrhoeae infections.",
        },
      },
    ],
  },
];

// ============================================================================
// 2. ლიმფოპოეზი, რეზისტენტობა და პირველადი იმუნოდეფიციტები (IEI) (თავი 16.1 & 16.2)
// ============================================================================
export const immuneLineageNodes: StudyNode[] = [
  {
    id: "immune_root",
    parents: [],
    top: 20,
    left: 50,
    width: "w-68",
    bgClass: "bg-purple-100 border-purple-400",
    label: {
      ka: "ინფექციური დაცვა და ჰემატოპოეზი",
      en: "Infectious Defense & Hematopoiesis",
    },
    subtitle: {
      ka: "ძვლის ტვინი, თიმუსი და ბარიერული სისტემები",
      en: "Bone Marrow, Thymus & Barriers",
    },
    name: {
      ka: "ორგანიზმის ინფექციური რეზისტენტობა და იმუნური სისტემა",
      en: "Host Infectious Resistance & Immune Architecture",
    },
    function: {
      ka: "აერთიანებს არასპეციფიკურ (თანდაყოლილ) და სპეციფიკურ (ადაპტაციურ) იმუნიტეტს. ცენტრალური ორგანოებია ძვლის ტვინი და თიმუსი, ხოლო პერიფერიული — ლიმფური კვანძები, ელენთა და MALT/GALT.",
      en: "Integrates innate and adaptive immunity across central (bone marrow, thymus) and peripheral lymphoid organs.",
    },
    diseases: [
      {
        name: {
          ka: "ძვლის ტვინის უკმარისობა (IUIS კატეგორია 9) და VEXAS (კატეგორია 10)",
          en: "Bone Marrow Failure & VEXAS Syndrome",
        },
        findings: {
          ka: "ფანკონის ანემია (FANCA–W), თანდაყოლილი დისკერატოზი (DKC1, TERT) და MIRAGE (SAMD9/9L): პანციტოპენია და მიელოდისპლაზია. სომატური UBA1 მუტაცია იწვევს VEXAS სინდრომს (ზრდასრულთა აუტოანთება).",
          en: "Fanconi anemia, dyskeratosis congenita, MIRAGE syndrome, and somatic UBA1 VEXAS syndrome.",
        },
      },
    ],
  },
  {
    id: "innate_branch",
    parents: ["immune_root"],
    top: 150,
    left: 24,
    width: "w-64",
    bgClass: "bg-cyan-100 border-cyan-400",
    label: {
      ka: "თანდაყოლილი (არასპეციფიკური) დაცვა",
      en: "Innate (Nonspecific) Immunity",
    },
    subtitle: {
      ka: "სწრაფი პასუხი, PRRs (TLRs, NLRs, cGAS–STING)",
      en: "Rapid Response, PRRs, No Memory",
    },
    name: {
      ka: "თანდაყოლილი იმუნიტეტი და პატერნ-ამომცნობი რეცეპტორები (PRRs)",
      en: "Innate Immunity & Pattern Recognition Receptors (PRRs)",
    },
    function: {
      ka: "PRR რეცეპტორებით (TLRs, NLRs, RLRs, cGAS–STING, CLRs) ამოიცნობს მიკრობულ PAMP-ებს და დაზიანებული უჯრედების DAMP-ებს.",
      en: "Detects microbial PAMPs and host DAMPs via TLRs, NLRs, RLRs, cGAS-STING, and CLRs.",
    },
    diseases: [
      {
        name: {
          ka: "IRAK4/MyD88, TLR3 (HSE), ინფლამასომოპათიები და ინტერფერონოპათიები",
          en: "Monogenic PRR Defects",
        },
        findings: {
          ka: "IRAK4/MyD88 LOF → პიოგენური ინფექციები ცხელების გარეშე; TLR3–UNC93B1–TRIF–TBK1–IRF3 დეფექტი → HSV-1 ენცეფალიტი; NLRP3/MEFV → ინფლამასომოპათიები (FMF, CAPS — კასპაზა-1/გასდერმინ D პიროპტოზი); cGAS–STING/TREX1 → I ტიპის ინტერფერონოპათიები (SAVI, AGS).",
          en: "IRAK4/MyD88 (afebrile pyogenic infections), TLR3 (HSV-1 encephalitis), NLRP3/MEFV (FMF, CAPS), cGAS-STING/TREX1 (interferonopathies).",
        },
      },
    ],
  },
  {
    id: "clp_adaptive",
    parents: ["immune_root"],
    top: 150,
    left: 73,
    width: "w-68",
    bgClass: "bg-rose-100 border-rose-400",
    label: {
      ka: "ლიმფოიდური წინამორბედი (CLP)",
      en: "Common Lymphoid Progenitor (CLP)",
    },
    subtitle: {
      ka: "ბლოკი: ADA/PNP/AK2 და RAG1/2 (T⁻B⁻ SCID)",
      en: "Blocked in ADA/PNP & RAG1/2 SCID",
    },
    name: {
      ka: "საერთო ლიმფოიდური წინამორბედი (CLP) და T⁻B⁻ SCID",
      en: "Common Lymphoid Progenitor (CLP) & T⁻B⁻ SCID",
    },
    function: {
      ka: "საწყისს აძლევს T-, B- და NK-ლიმფოციტებს. მოითხოვს პურინების დეტოქსიკაციასა (ADA, PNP) და V(D)J სომატურ რეკომბინაციას (RAG1/2, Artemis, LIG4).",
      en: "Gives rise to T, B, and NK cells; requires intact purine metabolism (ADA, PNP) and V(D)J recombination (RAG1/2).",
    },
    diseases: [
      {
        name: {
          ka: "T⁻B⁻NK⁻ SCID (ADA, PNP, AK2) და T⁻B⁻NK⁺ SCID (RAG1/2, Artemis)",
          en: "T⁻B⁻NK⁻ SCID & T⁻B⁻NK⁺ SCID / Omenn Syndrome",
        },
        findings: {
          ka: "ADA/PNP დეფიციტისას dATP/dGTP ტოქსიკურობა კლავს T, B და NK წინამორბედებს (T⁻B⁻NK⁻ SCID; AK2 იწვევს რეტიკულურ დისგენეზიას). RAG1/2 ან Artemis დეფიციტი ბლოკავს V(D)J რეკომბინაციას (T⁻B⁻NK⁺ SCID; ნაწილობრივი RAG1/2 აქტივობა იწვევს ომენის სინდრომს).",
          en: "ADA/PNP/AK2 defects cause T⁻B⁻NK⁻ SCID; RAG1/2 or Artemis defects cause T⁻B⁻NK⁺ SCID or Omenn syndrome.",
        },
      },
    ],
  },
  {
    id: "innate_barriers",
    parents: ["innate_branch"],
    top: 295,
    left: 11,
    width: "w-48",
    bgClass: "bg-teal-100 border-teal-400",
    label: {
      ka: "ბარიერული / ჰუმორული",
      en: "Barriers & Humoral Innate",
    },
    subtitle: {
      ka: "კანი, ლიზოციმი, IFN, ლაქტოფერინი",
      en: "Skin, Lysozyme, IFN, Lactoferrin",
    },
    name: {
      ka: "მექანიკური ბარიერები და ჰუმორული ფაქტორები",
      en: "Mechanical Barriers & Innate Humoral Factors",
    },
    function: {
      ka: "კანი, ლორწოვანი, კომენსალური მიკრობიოტა (ბაზალური TLR-სიგნალიზაცია), ლიზოციმი, ლაქტოფერინი, β-ლიზინები და ინტერფერონები (α, β, γ).",
      en: "Skin, mucosa, microbiota basal TLR signaling, lysozyme, lactoferrin, β-lysins, and interferons.",
    },
  },
  {
    id: "phagocytes",
    parents: ["innate_branch"],
    top: 295,
    left: 33,
    width: "w-52",
    bgClass: "bg-cyan-100 border-cyan-500",
    label: {
      ka: "ფაგოციტები და NK უჯრედები",
      en: "Phagocytes & NK Cells",
    },
    subtitle: {
      ka: "ნეიტროფილები, მაკროფაგები (LAD, CGD)",
      en: "Neutrophils, Macrophages",
    },
    name: {
      ka: "ფაგოციტოზის სისტემა და მისი დეფექტები",
      en: "Phagocytic System & Defects (LAD, CGD, Chediak-Higashi)",
    },
    function: {
      ka: "ახორციელებს ადჰეზიას (CD18/LFA-1), ქემოტაქსისს, ოფსონიზაციას, ფაგოლიზოსომის შექმნასა და რესპირატორულ აფეთქებას (NADPH-ოქსიდაზა, MPO).",
      en: "Mediates rolling, CD18 adhesion, chemotaxis, phagolysosome fusion, and NADPH oxidase respiratory burst.",
    },
    diseases: [
      {
        name: {
          ka: "LAD I (CD18), CGD (NADPH-ოქსიდაზა) და ჩედიაკ-ჰიგასი (LYST)",
          en: "LAD I, CGD & Chediak-Higashi Syndrome",
        },
        findings: {
          ka: "LAD I (ITGB2/CD18): ჭიპლარის გვიანი მოვარდნა, უჩირქო ნეკროზი და ექსტრემალური ლეიკოციტოზი. CGD (CYBB): მგრძნობელობა მხოლოდ კატალაზა-დადებითი მიკრობებისადმი (S. aureus, Serratia, Aspergillus). ჩედიაკ-ჰიგასი (LYST): გიგანტური გრანულები და დაუსრულებელი ფაგოციტოზი.",
          en: "LAD I (non-purulent infections + extreme neutrophilia); CGD (catalase-positive abscesses/granulomas); LYST (giant granules).",
        },
      },
    ],
  },
  {
    id: "pre_t_thymus",
    parents: ["clp_adaptive"],
    top: 295,
    left: 59,
    width: "w-56",
    bgClass: "bg-blue-100 border-blue-400",
    label: {
      ka: "პრე-T და თიმოციტი (თიმუსი)",
      en: "Pre-T & Thymocyte (Thymus)",
    },
    subtitle: {
      ka: "ბლოკი: γc/JAK3, IL-7Rα, დი ჯორჯი (22q11.2)",
      en: "Blocked in γc/JAK3 & DiGeorge",
    },
    name: {
      ka: "თიმოციტების მომწიფება და ცენტრალური ტოლერანტობა (AIRE)",
      en: "Thymic Maturation & Central Tolerance",
    },
    function: {
      ka: "თიმუსში მიმდინარეობს T-უჯრედების სელექცია და AIRE-დამოკიდებული აუტორეაქტიული კლონების დელეცია.",
      en: "Thymic T-cell differentiation, MHC restriction, and AIRE-mediated negative selection.",
    },
    diseases: [
      {
        name: {
          ka: "T⁻B⁺NK⁻ SCID (IL2RG/JAK3), დი ჯორჯი (22q11.2) და APECED (AIRE)",
          en: "T⁻B⁺NK⁻ SCID, DiGeorge Syndrome & APECED",
        },
        findings: {
          ka: "γc (IL2RG) ან JAK3 მუტაცია იწვევს T⁻B⁺NK⁻ SCID-ს; IL-7Rα/CD3 — T⁻B⁺NK⁺ SCID-ს. დი ჯორჯის სინდრომი (22q11.2/TBX1): თიმუსის აპლაზია + ჰიპოკალციემიური ტეტანია + გულის მანკი. AIRE მუტაცია იწვევს APECED-ს.",
          en: "IL2RG/JAK3 causes T⁻B⁺NK⁻ SCID; 22q11.2 deletion causes DiGeorge triad; AIRE mutation causes APECED.",
        },
      },
    ],
  },
  {
    id: "pre_b_marrow",
    parents: ["clp_adaptive"],
    top: 295,
    left: 87,
    width: "w-52",
    bgClass: "bg-emerald-100 border-emerald-400",
    label: {
      ka: "პრო-B → პრე-B (ძვლის ტვინი)",
      en: "Pro-B → Pre-B (Bone Marrow)",
    },
    subtitle: {
      ka: "ბლოკი: BTK (ბრუტონის XLA, CD19⁺ < 1%)",
      en: "Blocked in Bruton XLA (BTK)",
    },
    name: {
      ka: "B-უჯრედების მომწიფება ძვლის ტვინში და ბრუტონის XLA",
      en: "Bone Marrow B-Cell Maturation & Bruton XLA",
    },
    function: {
      ka: "პრო-B უჯრედის პრე-B და მწიფე B-უჯრედად გარდაქმნა მოითხოვს პრე-BCR-სა და ბრუტონის თიროზინკინაზას (BTK).",
      en: "Requires pre-BCR and Bruton tyrosine kinase (BTK) signaling.",
    },
    diseases: [
      {
        name: {
          ka: "ბრუტონის X-შეჭიდული აგამაგლობულინემია (XLA - BTK, IGHM, BLNK)",
          en: "Bruton X-Linked Agammaglobulinemia (XLA)",
        },
        findings: {
          ka: "BTK მუტაცია აჩერებს მომწიფებას პრე-B სტადიაზე: CD19⁺ < 1%, KREC არ ვლინდება, არ არის ყველა კლასის ანტისხეული. ვლინდება მე-5–12 თვიდან (დედისეული IgG-ის განლევის შემდეგ).",
          en: "Arrest at pre-B stage with absent B cells and panhypogammaglobulinemia, presenting at 5–12 months.",
        },
      },
    ],
  },
  {
    id: "cd4_t_helper",
    parents: ["pre_t_thymus"],
    top: 450,
    left: 44,
    width: "w-56",
    bgClass: "bg-indigo-100 border-indigo-400",
    label: {
      ka: "მწიფე CD4⁺ T-ჰელპერები",
      en: "Mature CD4⁺ T-Helper Cells",
    },
    subtitle: {
      ka: "MHC II (CIITA) | Th1, Th2, Th17, FoxP3⁺ Treg",
      en: "MHC Class II Restricted (~46%)",
    },
    name: {
      ka: "CD4⁺ T-ჰელპერები (Th1, Th2, Th17, Treg)",
      en: "CD4⁺ T-Helper Subsets & MHC II Deficiency",
    },
    function: {
      ka: "ამოიცნობს ეგზოგენურ პეპტიდებს APC-ის MHC II-ზე (სიგნალი 1) და CD28–B7 კოსტიმულაციით (სიგნალი 2) გამოყოფს IL-2-ს. დიფერენცირდება Th1 (IFN-γ), Th2 (IL-4/5/13), Th17 (IL-17) და Treg (FoxP3⁺) უჯრედებად.",
      en: "Recognizes exogenous antigens on MHC II; differentiates into Th1, Th2, Th17, and FoxP3⁺ Treg.",
    },
    diseases: [
      {
        name: {
          ka: "MHC II დეფიციტი (CIITA), ჯობის სინდრომი (STAT3), MSMD და IPEX (FOXP3)",
          en: "MHC II Deficiency, Job Syndrome, MSMD & IPEX",
        },
        findings: {
          ka: "CIITA მუტაცია იწვევს CD4⁺ უჯრედების დეფიციტს; STAT3 LOF — ჯობის სინდრომს („ცივი“ აბსცესები, ↑IgE); IL-12/IFN-γ დეფექტი — მიკობაქტერიოზს (MSMD); FOXP3 მუტაცია — IPEX სინდრომს.",
          en: "CIITA (↓CD4⁺), STAT3 LOF (Job syndrome), IL-12/IFN-γ (MSMD), FOXP3 (IPEX).",
        },
      },
    ],
  },
  {
    id: "cd8_ctl",
    parents: ["pre_t_thymus"],
    top: 450,
    left: 67,
    width: "w-52",
    bgClass: "bg-sky-100 border-sky-400",
    label: {
      ka: "მწიფე CD8⁺ CTL კილერები",
      en: "Mature CD8⁺ Cytotoxic CTLs",
    },
    subtitle: {
      ka: "MHC I (TAP1/2), ZAP-70, პერფორინი",
      en: "MHC Class I Restricted (~19%)",
    },
    name: {
      ka: "CD8⁺ ციტოტოქსიკური T-ლიმფოციტები (CTL)",
      en: "CD8⁺ Cytotoxic T Lymphocytes (CTL)",
    },
    function: {
      ka: "ამოიცნობს ენდოგენურ (ვირუსულ/სიმსივნურ) ანტიგენებს MHC I მოლეკულაზე და კლავს სამიზნე უჯრედს პერფორინ/გრანზიმებითა და FasL–Fas-ით.",
      en: "Kills virus-infected and tumor cells via MHC Class I recognition, perforin/granzymes, and FasL-Fas.",
    },
    diseases: [
      {
        name: {
          ka: "MHC I (TAP1/2), ZAP-70 დეფიციტი და ფამილური HLH (PRF1)",
          en: "TAP1/2, ZAP-70 Deficiency & Familial HLH",
        },
        findings: {
          ka: "TAP1/2 ან ZAP-70 მუტაცია იწვევს CD8⁺ უჯრედების არარსებობას; PRF1/UNC13D მუტაცია არღვევს ციტოლიზს და იწვევს ჰემოფაგოციტურ „ციტოკინურ შტორმს“ (HLH).",
          en: "TAP1/2 or ZAP-70 defects cause ↓CD8⁺; PRF1 defects cause hemophagocytic lymphohistiocytosis (HLH).",
        },
      },
    ],
  },
  {
    id: "mature_b_plasma",
    parents: ["pre_b_marrow"],
    top: 450,
    left: 88,
    width: "w-52",
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "მწიფე B → პლაზმური უჯრედი",
      en: "Mature B → Plasma Cell",
    },
    subtitle: {
      ka: "ბლოკი: CD40L/AID (ჰიპერ-IgM), CVID, IgA",
      en: "IgM → IgG, IgA, IgE Switching",
    },
    name: {
      ka: "პლაზმური უჯრედები და ანტისხეულების დეფიციტები (CVID, ჰიპერ-IgM, IgA)",
      en: "Humoral Immunity, Hyper-IgM, CVID & IgA Deficiency",
    },
    function: {
      ka: "T-ჰელპერების CD40L სიგნალითა და AID/UNG ფერმენტებით B-უჯრედი რთავს იზოტიპს IgM-დან IgG, IgA და IgE კლასებზე.",
      en: "Executes class-switch recombination from IgM to IgG, IgA, and IgE via CD40L and AID/UNG.",
    },
    diseases: [
      {
        name: {
          ka: "ჰიპერ-IgM (CD40L, AID), CVID (TACI, BAFF-R) და IgA-ს დეფიციტი",
          en: "Hyper-IgM, CVID & Selective IgA Deficiency",
        },
        findings: {
          ka: "CD40L/AID/UNG დეფექტი → ჰიპერ-IgM; TACI/BAFF-R/PIK3CD → CVID (10–30 წ., ბრონქოექტაზიები, აუტოიმუნიტეტი); სელექციური IgA დეფიციტი → პლაზმის გადასხმისას ანტი-IgA ანაფილაქსიური შოკის რისკი!",
          en: "CD40L/AID (Hyper-IgM); TACI/BAFF-R (CVID); IgA deficiency (anti-IgA anaphylaxis upon plasma transfusion).",
        },
      },
    ],
  },
  {
    id: "t_b_dysreg",
    parents: ["cd4_t_helper", "cd8_ctl"],
    top: 595,
    left: 55,
    width: "w-72",
    bgClass: "bg-amber-100 border-amber-500",
    label: {
      ka: "სინდრომული და აპოპტოზური დეფექტები (WAS, ATM, ALPS)",
      en: "Syndromic & Apoptotic Defects (WAS, ATM, ALPS)",
    },
    subtitle: {
      ka: "ვისკოტ-ოლდრიჩი (WAS), ლუი-ბარი (ATM), ALPS (FAS)",
      en: "Cytoskeleton, DNA Repair & Fas Apoptosis",
    },
    name: {
      ka: "ვისკოტ-ოლდრიჩის (WAS), ლუი-ბარის (ATM) და ALPS (FAS) სინდრომები",
      en: "Wiskott-Aldrich, Ataxia-Telangiectasia & ALPS",
    },
    function: {
      ka: "უზრუნველყოფს იმუნოლოგიური სინაფსის აქტინის რეორგანიზაციას (WAS), დნმ-ის რეპარაციას (ATM) და იმუნური პასუხის დასრულებისას ლიმფოციტების აპოპტოზს (Fas–FasL).",
      en: "Regulates immunological synapse cytoskeleton (WAS), DNA repair (ATM), and Fas-mediated lymphocyte apoptosis.",
    },
    diseases: [
      {
        name: {
          ka: "WAS, ატაქსია-ტელეანგიექტაზია (ATM) და ALPS (FAS/FASLG)",
          en: "WAS, Ataxia-Telangiectasia & ALPS",
        },
        findings: {
          ka: "WAS: მიკროთრომბოციტოპენია + ეგზემა + ინფექციები (↓IgM, ↑IgA/IgE). ATM: ნათხემის ატაქსია + ტელეანგიექტაზია + ↓IgA + რადიოსენსიტიურობა. ALPS (FAS): CD4⁻CD8⁻ T-უჯრედების დაგროვება, ლიმფოპროლიფერაცია და აუტოიმუნური ციტოპენიები.",
          en: "WAS triad; ATM (ataxia, telangiectasia, radiosensitivity); ALPS (CD4⁻CD8⁻ double-negative T cells).",
        },
      },
    ],
  },
];

// ============================================================================
// 3. ინფექციური აგენტები და სეპტიური შოკის კასკადი (MODS) (თავი 16.1, სურ. 1.2)
// ============================================================================
export const sepsisInfectionNodes: StudyNode[] = [
  {
    id: "inf_agents",
    parents: [],
    top: 20,
    left: 50,
    width: "w-72",
    bgClass: "bg-orange-100 border-orange-500",
    label: {
      ka: "ინფექცია და მიკრობული ტოქსინები",
      en: "Infection & Microbial Toxins",
    },
    subtitle: {
      ka: "გრამ(-) LPS (ლიპიდ A), სუპერანტიგენები, ეგზოტოქსინები",
      en: "LPS (Lipid A), Superantigens, Exotoxins",
    },
    name: {
      ka: "ბიოლოგიური დამაზიანებელი ფაქტორები და ბაქტერიული ტოქსინები",
      en: "Biological Factors, Exotoxins & Endotoxins",
    },
    function: {
      ka: "მოიცავს ბაქტერიებს, ვირუსებს, რიკეტსიებს, ქლამიდიებს, სოკოებს, უმარტივესებს, ჰელმინთებსა და პრიონებს (PrPSc). ბაქტერიები აზიანებენ ადჰეზინებით, ბიოაპკით, ინვაზიის ფერმენტებით, ეგზოტოქსინებითა და ენდოტოქსინით (LPS).",
      en: "Includes micro-/macropathogens, protein exotoxins, superantigens, and Gram-negative LPS endotoxin.",
    },
    diseases: [
      {
        name: {
          ka: "ეგზოტოქსინები, სუპერანტიგენები (TSS) და შიგა-ტოქსინი (HUS)",
          en: "Exotoxins, TSS & Shiga-Toxin HUS",
        },
        findings: {
          ka: "დიფტერია (ცილის სინთეზის ბლოკი), ბოტულიზმი (აცეტილქოლინის ბლოკი → დუნე დამბლა), ტეტანუსი (შემაკავებელი ნეირონების ბლოკი → სპასტიური კრუნჩხვა), ქოლერა (სეკრეტორული დიარეა), S. aureus სუპერანტიგენი (MHC II + TCR Vβ → TSS), E. coli შიგა-ტოქსინი (HUS).",
          en: "Diphtheria, botulinum, tetanus, cholera toxins, S. aureus superantigen (TSS), and E. coli Shiga-toxin (HUS).",
        },
      },
    ],
  },
  {
    id: "sepsis_cytokines",
    parents: ["inf_agents"],
    top: 165,
    left: 50,
    width: "w-72",
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "მაკროფაგების აქტივაცია (TLR4)",
      en: "Macrophage Activation (TLR4)",
    },
    subtitle: {
      ka: "TNF-α, IL-1, IL-6 და აზოტის ოქსიდი (NO)",
      en: "TNF-α, IL-1, IL-6 & Nitric Oxide (NO)",
    },
    name: {
      ka: "მაკროფაგების აქტივაცია, ციტოკინური შტორმი და მწვავე ფაზის პასუხი",
      en: "Macrophage Activation, Fever & Acute Phase Response",
    },
    function: {
      ka: "გრამ(-) LPS (ლიპიდ A) უკავშირდება TLR4-ს და იწვევს TNF-α, IL-1, IL-6 და NO-ს მასობრივ გამოყოფას. ღვიძლში იზრდება დადებითი მწვავე ფაზის ცილები (CRP, SAA, ფიბრინოგენი) და მცირდება უარყოფითი (ალბუმინი, ტრანსფერინი, IGF-1).",
      en: "LPS-TLR4 signaling releases TNF-α, IL-1, IL-6, and NO, driving fever and acute phase protein synthesis.",
    },
  },
  {
    id: "sepsis_vasodilation",
    parents: ["sepsis_cytokines"],
    top: 315,
    left: 26,
    width: "w-64",
    bgClass: "bg-amber-100 border-amber-500",
    label: {
      ka: "სისტემური ვაზოდილატაცია (NO)",
      en: "Systemic Vasodilation (Excess NO)",
    },
    subtitle: {
      ka: "პერიფერიული წინააღმდეგობის ვარდნა (დისტრიბუციული შოკი)",
      en: "Drop in Vascular Resistance (Distributive Shock)",
    },
    name: {
      ka: "სისტემური ვაზოდილატაცია და დისტრიბუციული შოკი",
      en: "Systemic Vasodilation & Distributive Shock",
    },
    function: {
      ka: "აზოტის ოქსიდის (NO) ჭარბი სინთეზი იწვევს სისხლძარღვთა გლუვი კუნთების მოდუნებას, პერიფერიული სისხლძარღვოვანი წინააღმდეგობის მკვეთრ დაცემასა და დისტრიბუციულ შოკს.",
      en: "Excess NO synthesis relaxes vascular smooth muscle, causing profound drop in systemic vascular resistance.",
    },
  },
  {
    id: "sepsis_endothelium",
    parents: ["sepsis_cytokines"],
    top: 315,
    left: 74,
    width: "w-64",
    bgClass: "bg-amber-100 border-amber-500",
    label: {
      ka: "ენდოთელიუმის დაზიანება",
      en: "Endothelial Injury & Capillary Leak",
    },
    subtitle: {
      ka: "კაპილარული გაჟონვა და შეფარდებითი ჰიპოვოლემია",
      en: "Plasma Extravasation & Relative Hypovolemia",
    },
    name: {
      ka: "ენდოთელიუმის დაზიანება და კაპილარული გაჟონვა",
      en: "Endothelial Injury & Capillary Leak",
    },
    function: {
      ka: "ნეიტროფილების ადჰეზია და ციტოკინები აზიანებენ ენდოთელიუმს, იზრდება კაპილარების განვლადობა, პლაზმა გადადის ქსოვილებში და ვითარდება შეფარდებითი ჰიპოვოლემია.",
      en: "Cytokines and neutrophil adhesion damage vascular endothelium, causing plasma leakage into tissues.",
    },
  },
  {
    id: "sepsis_heart",
    parents: ["sepsis_vasodilation"],
    top: 460,
    left: 26,
    width: "w-64",
    bgClass: "bg-rose-100 border-rose-500",
    label: {
      ka: "მიოკარდიუმის დეპრესია",
      en: "Myocardial Depression",
    },
    subtitle: {
      ka: "რეფრაქტერული ჰიპოტენზია (წნევა < 90 მმ.ვწყ.სვ)",
      en: "Fluid-Refractory Hypotension (<90 mmHg)",
    },
    name: {
      ka: "მიოკარდიუმის დეპრესია და სეპტიური შოკი",
      en: "Myocardial Depression & Septic Shock",
    },
    function: {
      ka: "TNF-α თრგუნავს მიოკარდიუმის კუმშვადობას. ყალიბდება სეპტიური შოკი — ინფუზიური თერაპიის მიმართ რეფრაქტერული ჰიპოტენზია (სისტოლური წნევა < 90 მმ.ვწყ.სვ) და რძემჟავა აციდოზი.",
      en: "TNF-α depresses myocardial contractility, leading to fluid-refractory hypotension (<90 mmHg) and lactic acidosis.",
    },
  },
  {
    id: "sepsis_dic",
    parents: ["sepsis_endothelium"],
    top: 460,
    left: 74,
    width: "w-64",
    bgClass: "bg-rose-100 border-rose-500",
    label: {
      ka: "მიკროცირკულაციის კოლაფსი და დსკ",
      en: "Microvascular Collapse & DIC",
    },
    subtitle: {
      ka: "მიკროთრომბოზებისა და ჰემორაგიების ერთდროული განვითარება",
      en: "Simultaneous Microthrombosis & Bleeding",
    },
    name: {
      ka: "დისემინირებული სისხლძარღვშიდა კოაგულაცია (დსკ სინდრომი)",
      en: "Disseminated Intravascular Coagulation (DIC)",
    },
    function: {
      ka: "ენდოთელიუმის დაზიანება ააქტიურებს კოაგულაციის კასკადს, იწვევს დიფუზურ მიკროთრომბოზებსა და შედედების ფაქტორების/თრომბოციტების განლევას მასობრივი სისხლდენებით.",
      en: "Endothelial injury activates coagulation, causing diffuse microthrombi and consumptive bleeding.",
    },
  },
  {
    id: "sepsis_mods",
    parents: ["sepsis_heart", "sepsis_dic"],
    top: 605,
    left: 50,
    width: "w-80",
    bgClass: "bg-red-100 border-red-600",
    label: {
      ka: "მულტიორგანული უკმარისობის სინდრომი (MODS)",
      en: "Multi-Organ Dysfunction Syndrome (MODS)",
    },
    subtitle: {
      ka: "ARDS, თირკმლის მწვავე უკმარისობა, ღვიძლისა და ცნს-ის მოშლა",
      en: "ARDS, Acute Kidney Injury, Hepatic/CNS Failure",
    },
    name: {
      ka: "მულტიორგანული უკმარისობის სინდრომი (MODS) და თერაპია",
      en: "Multi-Organ Dysfunction Syndrome (MODS)",
    },
    function: {
      ka: "რეფრაქტერული ჰიპოტენზიისა და დსკ სინდრომის კონვერგენცია იწვევს მწვავე რესპირაციულ დისტრეს სინდრომს (ARDS), ოლიგოანურიასა და პოლიორგანულ უკმარისობას.",
      en: "Convergence of refractory hypotension and microvascular thrombosis/DIC causes ARDS, AKI, and MODS.",
    },
  },
];

// ============================================================================
// 4. აივ-1-ის ციკლი, CD4+ სიკვდილის მოდალობები და რეზერვუარი (თავი 16.2, სურ. 2.4)
// ============================================================================
export const hivReservoirNodes: StudyNode[] = [
  {
    id: "art_block",
    parents: [],
    top: 25,
    left: 16,
    width: "w-56",
    isInhibitor: true,
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "ART პოლითერაპიის ბლოკი",
      en: "ART Polytherapy Blockade",
    },
    subtitle: {
      ka: "CCR5 ინჰიბ., NRTIs/NNRTIs, INSTIs, PIs",
      en: "CCR5/Fusion, RT, Integrase & Protease Inhibitors",
    },
    name: {
      ka: "ანტირეტროვირუსული პოლითერაპია (HAART) და IRIS",
      en: "Antiretroviral Therapy (ART) & IRIS",
    },
    function: {
      ka: "ბლოკავს ვირუსის შეჭრას (მარავიროკი), უკუტრანსკრიპტაზას (NRTIs/NNRTIs), ინტეგრაზას (დოლუტეგრავირი) და პროტეაზას (PIs).",
      en: "Blocks viral entry, reverse transcriptase, integrase, and protease.",
    },
    diseases: [
      {
        name: {
          ka: "იმუნური რეკონსტიტუციის ანთებითი სინდრომი (IRIS)",
          en: "Immune Reconstitution Inflammatory Syndrome (IRIS)",
        },
        findings: {
          ka: "ART-ის დაწყებიდან რამდენიმე კვირაში სწრაფად აღდგენილი CD4⁺ T-ლიმფოციტები იწვევენ მძაფრ ანთებით შეტევას ფარულ პათოგენებზე (ტუბერკულოზი, კრიპტოკოკი, CMV).",
          en: "Paradoxical hyperinflammatory response against occult infections following rapid CD4⁺ recovery on ART.",
        },
      },
    ],
  },
  {
    id: "hiv_entry",
    parents: ["art_block"],
    top: 25,
    left: 60,
    width: "w-80",
    bgClass: "bg-rose-100 border-rose-500",
    label: {
      ka: "1. აივ-1-ის შეჭრა, უკუტრანსკრიფცია (RT) და ინტეგრაცია (IN)",
      en: "1. HIV-1 Entry, Reverse Transcription (RT) & Integration (IN)",
    },
    subtitle: {
      ka: "gp120/gp41 → CD4 + CCR5 (R5) / CXCR4 (X4) | APOBEC3G, SAMHD1",
      en: "gp120/gp41 → CD4 + CCR5/CXCR4 | Host Restriction",
    },
    name: {
      ka: "აივ-1-ის რეპლიკაციური ციკლი და მასპინძლის რესტრიქციის ფაქტორები",
      en: "HIV-1 Replication Cycle & Host Restriction Factors",
    },
    function: {
      ka: "gp120 უკავშირდება CD4-ს და CCR5 (ადრეული, R5) ან CXCR4 (გვიანი, X4 — სინციტიუმები) კორეცეპტორებს. APOBEC3G იწვევს ვირუსული დნმ-ის ჰიპერმუტაციას (მას შლის ვირუსული Vif), ხოლო SAMHD1 შლის dNTP მარაგს.",
      en: "gp120 binds CD4 and CCR5/CXCR4; host APOBEC3G (counteracted by Vif) and SAMHD1 restrict reverse transcription.",
    },
  },
  {
    id: "hiv_death",
    parents: ["hiv_entry"],
    top: 240,
    left: 28,
    width: "w-72",
    bgClass: "bg-orange-100 border-orange-500",
    label: {
      ka: "2ა. CD4⁺ T-უჯრედების განლევის 4 მოდალობა",
      en: "2a. Four Modalities of CD4⁺ T-Cell Depletion",
    },
    subtitle: {
      ka: "დომინანტური: პიროპტოზი (>80–95%, კასპაზა-1 → გასდერმინ D)",
      en: "Dominant: Pyroptosis (>80–95% via Caspase-1/GSDMD)",
    },
    name: {
      ka: "CD4⁺ T-ლიმფოციტების სიკვდილის მექანიზმები (პიროპტოზი, აპოპტოზი, ნეკროპტოზი, ფეროპტოზი)",
      en: "CD4⁺ T-Cell Death Modalities in HIV",
    },
    function: {
      ka: "უჯრედების >80–95% იღუპება აბორტული ინფექციით გამოწვეული პიროპტოზით (კასპაზა-1 ხლეჩს გასდერმინ D-ს + IL-1β/IL-18). ასევე ერთვება აპოპტოზი (gp120, Tat, Nef), ნეკროპტოზი (RIPK1/3–MLKL) და ფეროპტოზი (NCOA4/GPX4).",
      en: ">80–95% of dying CD4⁺ cells undergo abortive-infection pyroptosis (caspase-1/GSDMD), alongside apoptosis, necroptosis, and ferroptosis.",
    },
  },
  {
    id: "hiv_reservoir",
    parents: ["hiv_entry"],
    top: 240,
    left: 74,
    width: "w-72",
    bgClass: "bg-purple-100 border-purple-500",
    label: {
      ka: "2ბ. პროვირუსული რეზერვუარი და აუტოფაგიის ბლოკი",
      en: "2b. Proviral Reservoir & Autophagy Blockade",
    },
    subtitle: {
      ka: "დეფექტური პროვირუსები (>90%) → CD8⁺ გამოფიტვა (↑PD-1) და HAND",
      en: "Defective Proviruses (>90%) → CD8⁺ Exhaustion & HAND",
    },
    name: {
      ka: "დეფექტური პროვირუსები (>90%), მიელოიდური რეზერვუარი და აუტოფაგიის ბლოკი",
      en: "Defective Proviruses, CNS Microglial Reservoir & Autophagy Block",
    },
    function: {
      ka: "რეზერვუარის >90% დეფექტური პროვირუსია, რომელიც ასინთეზებს კრიპტულ პეპტიდებს და ფიტავს CD8⁺ CTL-ებს (↑PD-1). CD14⁺CD16⁺ მონოციტებს ვირუსი გადააქვთ ცნს-ის მიკროგლიაში (CoREST ლატენტობა, HAND). Nef/Tat ბლოკავს აუტოფაგიას (BECN1).",
      en: "Defective proviruses (>90%) drive CD8⁺ exhaustion and inflammaging; CD14⁺CD16⁺ monocytes seed CNS microglia causing HAND.",
    },
  },
  {
    id: "hiv_aids_stage",
    parents: ["hiv_death", "hiv_reservoir"],
    top: 470,
    left: 50,
    width: "w-96",
    bgClass: "bg-red-100 border-red-600",
    label: {
      ka: "3. შეძენილი იმუნოდეფიციტის სინდრომი (შიდს-ი): CD4⁺ < 200/μL",
      en: "3. Acquired Immunodeficiency Syndrome (AIDS): CD4⁺ < 200/μL",
    },
    subtitle: {
      ka: "CD4/CD8 < 0.9 | ოპორტუნისტული ინფექციები, კაპოშის სარკომა, Inflammaging",
      en: "CD4/CD8 < 0.9 | Opportunistic Infections, Malignancies & Inflammaging",
    },
    name: {
      ka: "შიდს-ის სტადია (CDC კატეგორია C) და განკურნების სტრატეგიები",
      en: "Clinical AIDS (CDC Category C) & Cure Strategies",
    },
    function: {
      ka: "CD4⁺ < 200/μL-ის დროს ვითარდება P. jirovecii პნევმონია (75%), საყლაპავის კანდიდოზი, კრიპტოკოკური მენინგიტი, ცერებრული ტოქსოპლაზმოზი, ტუბერკულოზი, MAC და CMV რეტინიტი (<50/μL), კაპოშის სარკომა (HHV-8 + Tat) და EBV-ლიმფომები.",
      en: "Manifests with PCP, esophageal candidiasis, cryptococcal meningitis, toxoplasmosis, TB, MAC, CMV retinitis, Kaposi sarcoma, and EBV lymphomas.",
    },
  },
];

// ============================================================================
// 5. რეაქტიულობის იერარქია და კლინიკური ფენოტიპები (თავი 16.2, სურ. 2.1)
// ============================================================================
export const reactivityNodes: StudyNode[] = [
  {
    id: "react_hierarchy",
    parents: [],
    top: 25,
    left: 50,
    width: "w-96",
    bgClass: "bg-sky-100 border-sky-500",
    label: {
      ka: "რეაქტიულობის იერარქია: 1. სახეობრივი → 2. ჯგუფური → 3. ინდივიდუალური",
      en: "Reactivity Hierarchy: 1. Species → 2. Group → 3. Individual",
    },
    subtitle: {
      ka: "კონსტიტუცია, სისხლის ჯგუფები (ABO, Duffy), HLA, სქესი, ასაკი",
      en: "Constitution, Blood Groups, HLA, Sex & Age",
    },
    name: {
      ka: "ორგანიზმის რეაქტიულობის ბიოლოგიური იერარქია",
      en: "Biological Hierarchy of Host Reactivity",
    },
    function: {
      ka: "1) სახეობრივი: ეფუძნება რეცეპტორულ ქიმიურ არაკომპლემენტარობას; 2) ჯგუფური: I (0) ჯგუფი — თორმეტგოჯას წყლული (+35%), II (A) ჯგუფი — გრიპისადმი მგრძნობელობა, Duffy(-) — მდგრადობა P. vivax-ის მიმართ; ქალებში SLE 9:1; ახალშობილებში მე-4–12 კვირაზე ფიზიოლოგიური ჰიპოგამაგლობულინემია.",
      en: "Encompasses species immunity, group constitution (ABO, Duffy, HLA, sex, age), and individual reactivity.",
    },
  },
  {
    id: "react_physio",
    parents: ["react_hierarchy"],
    top: 210,
    left: 25,
    width: "w-64",
    bgClass: "bg-emerald-100 border-emerald-500",
    label: {
      ka: "ფიზიოლოგიური რეაქტიულობა",
      en: "Physiological Reactivity",
    },
    subtitle: {
      ka: "ადეკვატური, ჰომეოსტაზური ადაპტაცია",
      en: "Homeostatic Adaptation",
    },
    name: {
      ka: "ფიზიოლოგიური რეაქტიულობა",
      en: "Physiological Reactivity",
    },
    function: {
      ka: "სპეციფიკური და არასპეციფიკური ადაპტაციური რეაქციები, რომლებიც შეესაბამება გამღიზიანებლის ძალასა და ხასიათს და ინარჩუნებს ჰომეოსტაზს.",
      en: "Adaptive responses proportional to the stimulus that preserve homeostasis.",
    },
  },
  {
    id: "react_patho",
    parents: ["react_hierarchy"],
    top: 210,
    left: 70,
    width: "w-68",
    bgClass: "bg-rose-100 border-rose-500",
    label: {
      ka: "პათოლოგიური რეაქტიულობა",
      en: "Pathological Reactivity",
    },
    subtitle: {
      ka: "იმუნოდეფიციტი, ალერგია, აუტოიმუნიტეტი, შოკი",
      en: "Immunodeficiency, Allergy, Autoimmunity, Shock",
    },
    name: {
      ka: "პათოლოგიური რეაქტიულობა",
      en: "Pathological Reactivity",
    },
    function: {
      ka: "დამაზიანებელი ფაქტორის მოქმედებით გამოწვეული არაადეკვატური, შეგუებითი პოტენციალის დამაქვეითებელი რეაქტიულობა.",
      en: "Dysregulated reactivity that reduces adaptive capacity.",
    },
  },
  {
    id: "pheno_norm",
    parents: ["react_physio"],
    top: 410,
    left: 14,
    width: "w-48",
    bgClass: "bg-emerald-100 border-emerald-400",
    label: {
      ka: "ნორმერგია",
      en: "Normergia",
    },
    subtitle: {
      ka: "ადეკვატური პასუხი (↑რეაქტ. / ↑რეზისტ.)",
      en: "Adequate Proportional Response",
    },
    name: {
      ka: "ნორმერგია",
      en: "Normergia",
    },
    function: {
      ka: "გამღიზიანებლისადმი სრულიად ადეკვატური ფიზიოლოგიური და იმუნოლოგიური რეაქცია.",
      en: "Physiologically proportional response to a stimulus.",
    },
  },
  {
    id: "pheno_hyper",
    parents: ["react_patho"],
    top: 410,
    left: 38,
    width: "w-52",
    bgClass: "bg-red-100 border-red-500",
    label: {
      ka: "ჰიპერერგია",
      en: "Hyperergia",
    },
    subtitle: {
      ka: "ჭარბი აგზნება (↑რეაქტ. / ↓რეზისტ.)",
      en: "Excessive Response (Anaphylaxis, Sepsis)",
    },
    name: {
      ka: "ჰიპერერგია (ანაფილაქსიური, ჰემოტრანსფუზიული და სეპტიური შოკი)",
      en: "Hyperergia",
    },
    function: {
      ka: "პათოლოგიურად მძაფრი რეაქცია, როდესაც რეაქტიულობა მომატებულია, მაგრამ რეზისტენტობა დაქვეითებულია აუტოდამაზიანებელი მედიატორების გადმოტყორცნის გამო.",
      en: "Excessive, tissue-destructive hyperreactivity with decreased resistance.",
    },
  },
  {
    id: "pheno_hypo",
    parents: ["react_patho"],
    top: 410,
    left: 63,
    width: "w-52",
    bgClass: "bg-amber-100 border-amber-500",
    label: {
      ka: "ჰიპერგია / ანერგია",
      en: "Hypergia / Anergy",
    },
    subtitle: {
      ka: "დადებითი (ჰიბერნაცია) vs უარყოფითი (შიდსი)",
      en: "Positive vs Negative Hyporeactivity",
    },
    name: {
      ka: "დადებითი და უარყოფითი ჰიპერგია / ანერგია",
      en: "Positive & Negative Hypergia / Anergy",
    },
    function: {
      ka: "დადებითი ჰიპერგია (↓რეაქტიულობა, ↑რეზისტენტობა): ჰიბერნაცია, მართვადი ჰიპოთერმია, ნარკოზი, აუტოტოლერანტობა. უარყოფითი ანერგია (↓რეაქტიულობა, ↓რეზისტენტობა): მძიმე შიმშილი, ტერმინალური ტუბერკულოზი, შიდს-ი.",
      en: "Positive hypergia conserves energy and raises resistance (hypothermia, hibernation); negative anergy reflects exhaustion (AIDS, starvation).",
    },
  },
  {
    id: "pheno_dys",
    parents: ["react_patho"],
    top: 410,
    left: 88,
    width: "w-48",
    bgClass: "bg-purple-100 border-purple-500",
    label: {
      ka: "დიზერგია / პარერგია",
      en: "Dysergia / Parergia",
    },
    subtitle: {
      ka: "გაუკუღმართებული პასუხი (ასპირინული ასთმა)",
      en: "Qualitatively Perverted Response",
    },
    name: {
      ka: "დიზერგია (პარერგია) და ფსევდოალერგია",
      en: "Dysergia & Pseudoallergic Reactions",
    },
    function: {
      ka: "თვისობრივად გაუკუღმართებული რეაქცია. მაგ., ასპირინული ბრონქული ასთმა (არაიმუნოლოგიური ფსევდოალერგია: COX-ის ბლოკირება არაქიდონის მჟავას რთავს ლიპოოქსიგენაზურ გზაზე → ბრონქოსპაზმური ლეიკოტრიენების LTC4, LTD4, LTE4 ჭარბი სინთეზი).",
      en: "Qualitatively abnormal response, including aspirin-induced asthma via leukotriene (LTC4, LTD4, LTE4) shunting.",
    },
  },
];

export const studyDiagrams: DiagramCollection[] = [
  {
    id: "complement",
    title: {
      ka: "1. კომპლემენტის სისტემის კასკადი (სურ. 2.2)",
      en: "1. Complement System Cascade (Fig. 2.2)",
    },
    subtitle: {
      ka: "თავი 16.2 — კლასიკური, ლექტინური და ალტერნატიული გზები, რეგულატორები, CH50/AH50",
      en: "Chapter 16.2 — Classical, Lectin & Alternative Pathways, Regulators & Deficiencies",
    },
    nodes: complementNodes,
  },
  {
    id: "immune_iei",
    title: {
      ka: "2. ლიმფოპოეზი და იმუნოდეფიციტები (IEI) (სურ. 1.1 & 2.3)",
      en: "2. Lymphopoiesis & Inborn Errors of Immunity (Fig. 1.1 & 2.3)",
    },
    subtitle: {
      ka: "თავი 16.1 და 16.2 — თანდაყოლილი/ადაპტაციური შტოები და გენეტიკური ბლოკირების წერტილები",
      en: "Chapters 16.1 & 16.2 — Innate/Adaptive Branches & Lymphopoiesis Genetic Blocks",
    },
    nodes: immuneLineageNodes,
  },
  {
    id: "sepsis_infection",
    title: {
      ka: "3. სეპტიური შოკი და MODS (სურ. 1.2)",
      en: "3. Septic Shock & MODS (Fig. 1.2)",
    },
    subtitle: {
      ka: "თავი 16.1 — ტოქსინები, ციტოკინური შტორმი, ვაზოდილატაცია, დსკ და MODS",
      en: "Chapter 16.1 — Toxins, Cytokine Storm, Vasodilation, DIC & MODS",
    },
    nodes: sepsisInfectionNodes,
  },
  {
    id: "hiv_reservoir",
    title: {
      ka: "4. აივ-1, პიროპტოზი და რეზერვუარი (სურ. 2.4)",
      en: "4. HIV-1, Pyroptosis & Reservoir (Fig. 2.4)",
    },
    subtitle: {
      ka: "თავი 16.2 — რეპლიკაცია, გასდერმინ D პიროპტოზი, დეფექტური პროვირუსები (>90%) და შიდს-ი",
      en: "Chapter 16.2 — Replication, Gasdermin D Pyroptosis, Defective Proviruses & AIDS",
    },
    nodes: hivReservoirNodes,
  },
  {
    id: "reactivity",
    title: {
      ka: "5. რეაქტიულობის იერარქია (სურ. 2.1)",
      en: "5. Reactivity Hierarchy (Fig. 2.1)",
    },
    subtitle: {
      ka: "თავი 16.2 — სახეობრივი, ჯგუფური, ინდივიდუალური დონეები და 4 კლინიკური ფენოტიპი",
      en: "Chapter 16.2 — Species, Group, Individual Levels & 4 Clinical Phenotypes",
    },
    nodes: reactivityNodes,
  },
];