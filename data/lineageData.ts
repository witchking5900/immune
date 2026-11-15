import { StudyNode, Lang } from "../components/StudyTool";

export interface DiagramCollection {
  id: "immune_iei" | "complement" | "sepsis_infection";
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  nodes: StudyNode[];
}

// ============================================================================
// 1. იმუნოგენეზი, ინფექციური რეზისტენტობა და იმუნოდეფიციტები (თავი 16.1 & 16.2)
// ============================================================================
export const immuneLineageNodes: StudyNode[] = [
  {
    id: "immune_root",
    parent: null,
    top: 20,
    left: 50,
    width: "w-64",
    bgClass: "bg-purple-50",
    label: {
      ka: "ინფექციური დაცვა და იმუნოგენეზი",
      en: "Infectious Defense & Immunogenesis",
    },
    subtitle: {
      ka: "ძვლის ტვინი და ბარიერული სისტემები",
      en: "Bone Marrow & Barrier Systems",
    },
    name: {
      ka: "ორგანიზმის ინფექციური რეზისტენტობა და რეაქტიულობა",
      en: "Host Infectious Resistance & Reactivity",
    },
    function: {
      ka: "მაკროორგანიზმის მდგრადობა ხორციელდება არასპეციფიკური (თანდაყოლილი) და სპეციფიკური (ადაპტაციური) მექანიზმებით. იმუნური სისტემა მოიცავს ცენტრალურ (ძვლის ტვინი, თიმუსი) და პერიფერიულ (ლიმფური კვანძები, ელენთა, MALT/GALT) ორგანოებს.",
      en: "Host resistance operates via innate (nonspecific) and adaptive (specific) mechanisms across central (bone marrow, thymus) and peripheral lymphoid organs.",
    },
    diseases: [
      {
        name: {
          ka: "ძვლის ტვინის უკმარისობა (IUIS კატეგორია 9)",
          en: "Bone Marrow Failure (IUIS Category 9)",
        },
        findings: {
          ka: "ფანკონის ანემია (FANCA–W), თანდაყოლილი დისკერატოზი (DKC1, TERT) და MIRAGE სინდრომი (SAMD9/9L): პანციტოპენია, ტელომერების დამოკლება, დნმ-ის რეპარაციის მოშლა, მიელოდისპლაზია და მწვავე ლეიკემია.",
          en: "Fanconi anemia, dyskeratosis congenita, MIRAGE syndrome: pancytopenia, telomere shortening, DNA repair defects, MDS, and acute leukemia.",
        },
      },
      {
        name: {
          ka: "VEXAS სინდრომი (IUIS კატეგორია 10 - ფენოკოპია)",
          en: "VEXAS Syndrome (Somatic Phenocopy)",
        },
        findings: {
          ka: "UBA1 გენის სომატური მუტაცია მიელოიდურ წინამორბედებში: ზრდასრულთა მძიმე რეფრაქტერული აუტოანთება, ვაკუოლიზაცია და ციტოპენია.",
          en: "Somatic UBA1 mutation causing adult-onset autoinflammation and cytopenias.",
        },
      },
    ],
  },

  // --- LEVEL 2: INNATE vs ADAPTIVE (CLP) ---
  {
    id: "innate_branch",
    parent: "immune_root",
    top: 135,
    left: 25,
    width: "w-60",
    bgClass: "bg-cyan-50",
    label: {
      ka: "თანდაყოლილი (არასპეციფიკური)",
      en: "Innate (Nonspecific) Immunity",
    },
    subtitle: {
      ka: "სწრაფი პასუხი, მეხსიერების გარეშე",
      en: "Rapid response, no memory",
    },
    name: {
      ka: "არასპეციფიკური რეზისტენტობა და PRR სენსორები",
      en: "Innate Resistance & Pattern Recognition Receptors (PRRs)",
    },
    function: {
      ka: "გერმინაციულად კოდირებული პატერნ-ამომცნობი რეცეპტორებით (TLRs, NLRs, RLRs, cGAS–STING, CLRs) ამოიცნობს მიკრობულ PAMP-ებს (LPS, პეპტიდოგლიკანი, დნმ/რნმ) და დაზიანებული უჯრედების DAMP-ებს (შარდმჟავა, ატფ, HMGB1).",
      en: "Recognizes conserved microbial PAMPs and host DAMPs via TLRs, NLRs, RLRs, cGAS-STING, and C-type lectins.",
    },
    diseases: [
      {
        name: {
          ka: "IRAK4 და MyD88 დეფიციტი (LOF)",
          en: "IRAK4 & MyD88 Deficiency (LOF)",
        },
        findings: {
          ka: "TIR–MyD88–IRAK4 კასკადის ბლოკი: მძიმე ინვაზიური პიოგენური ბაქტერიული ინფექციები (S. pneumoniae, S. aureus) ცხელებისა და ანთებითი მარკერების მატების გარეშე.",
          en: "Invasive pyogenic infections (S. pneumoniae, S. aureus) without fever.",
        },
      },
      {
        name: {
          ka: "TLR3–UNC93B1–TRIF–TBK1–IRF3 ღერძის დეფექტი",
          en: "TLR3 Axis Deficiency",
        },
        findings: {
          ka: "ვირუსული dsRNA სენსინგისა და ცნს-ში IFN-α/β სინთეზის ბლოკი: მარტივი ჰერპესის ვირუსით (HSV-1) გამოწვეული ენცეფალიტი (HSE), მძიმე გრიპი და COVID-19.",
          en: "Impaired CNS IFN-α/β production leading to Herpes Simplex Encephalitis (HSE).",
        },
      },
      {
        name: {
          ka: "ინფლამასომოპათიები და I ტიპის ინტერფერონოპათიები",
          en: "Inflammasomopathies & Type I Interferonopathies",
        },
        findings: {
          ka: "NLRP3 (CAPS) და MEFV (ოჯახური ხმელთაშუაზღვისპირული ცხელება - FMF) მუტაციები ააქტიურებს კასპაზა-1-ს, IL-1β/IL-18-ს და გასდერმინ D-ით პიროპტოზს. cGAS–STING (SAVI) და TREX1/RNASEH2 (აიკარდი-გუტიერესის სინდრომი) იწვევს ჭარბ IFN-α/β-ს.",
          en: "Excessive caspase-1/IL-1β activation (FMF, CAPS) or cytosolic DNA sensing (AGS, SAVI).",
        },
      },
    ],
  },
  {
    id: "clp_adaptive",
    parent: "immune_root",
    top: 135,
    left: 72,
    width: "w-64",
    bgClass: "bg-rose-50",
    label: {
      ka: "ლიმფოიდური წინამორბედი (CLP)",
      en: "Common Lymphoid Progenitor (CLP)",
    },
    subtitle: {
      ka: "შეძენილი (ადაპტაციური) იმუნიტეტი",
      en: "Specific Adaptive Immunity",
    },
    name: {
      ka: "საერთო ლიმფოიდური წინამორბედი (CLP) და V(D)J რეკომბინაცია",
      en: "Common Lymphoid Progenitor (CLP) & Lymphopoiesis",
    },
    function: {
      ka: "ძვლის ტვინის ღეროვანი უჯრედიდან წარმოქმნილი ლიმფოიდური წინამორბედი, რომელიც საწყისს აძლევს T-, B- და NK-ლიმფოციტებს. მოითხოვს პურინების ნორმალურ მეტაბოლიზმს (ADA, PNP) და რეცეპტორების სომატურ V(D)J რეკომბინაციას (RAG1/2).",
      en: "Gives rise to T, B, and NK lymphocytes; requires intact purine metabolism (ADA, PNP) and V(D)J recombination (RAG1/2).",
    },
    diseases: [
      {
        name: {
          ka: "T⁻B⁻NK⁻ SCID (ADA, PNP და AK2 დეფიციტი)",
          en: "T⁻B⁻NK⁻ SCID (ADA, PNP, AK2 Deficiency)",
        },
        findings: {
          ka: "ადენოზინდეზამინაზას (ADA) დეფიციტისას გროვდება ტოქსიკური dATP (PNP-ის დროს — dGTP), რომელიც თრგუნავს რიბონუკლეოტიდრედუქტაზას და კლავს T, B და NK წინამორბედებს. AK2 დეფიციტი იწვევს რეტიკულურ დისგენეზიას (SCID + აგრანულოციტოზი + სიყრუე).",
          en: "Toxic dATP/dGTP accumulation killing all lymphoid lineages; AK2 causes reticular dysgenesis.",
        },
      },
      {
        name: {
          ka: "T⁻B⁻NK⁺ SCID და ომენის სინდრომი (RAG1/2, Artemis, LIG4)",
          en: "T⁻B⁻NK⁺ SCID & Omenn Syndrome",
        },
        findings: {
          ka: "V(D)J რეკომბინაციის სრული ბლოკი იწვევს T და B უჯრედების არარსებობას (NK შენარჩუნებულია). RAG1/2-ის ნაწილობრივი აქტივობისას ვითარდება ომენის სინდრომი: ერითროდერმია, ალოპეცია, ჰეპატოსპლენომეგალია, ეოზინოფილია და მაღალი IgE.",
          en: "Blocked TCR/BCR assembly; hypomorphic RAG1/2 causes Omenn syndrome.",
        },
      },
    ],
  },

  // --- LEVEL 3: INNATE SUB-BRANCHES & PRE-T / PRE-B ---
  {
    id: "innate_barriers",
    parent: "innate_branch",
    top: 265,
    left: 10,
    width: "w-48",
    label: {
      ka: "ბარიერული / ჰუმორული",
      en: "Barriers & Humoral Innate",
    },
    subtitle: {
      ka: "ლიზოციმი, IFN, ლაქტოფერინი",
      en: "Lysozyme, IFN, Lactoferrin",
    },
    name: {
      ka: "გარეგანი ბარიერები და არასპეციფიკური ჰუმორული ფაქტორები",
      en: "Mechanical Barriers & Innate Humoral Factors",
    },
    function: {
      ka: "კანი, მუკოცილიარული კლირენსი, ნორმალური მიკრობიოტა (ბაზალური TLR-სიგნალიზაცია ენტეროციტების რეგენერაციისთვის), ლიზოციმი (შლის გრამ(+) პეპტიდოგლიკანს), ლაქტოფერინი (ბოჭავს რკინას), β-ლიზინები და ინტერფერონები (α, β, γ).",
      en: "Intact skin/mucosa, commensal microbiota, lysozyme, lactoferrin, β-lysins, complement, and interferons.",
    },
    diseases: [
      {
        name: {
          ka: "დისბაქტერიოზი და ანტიბიოტიკ-ასოცირებული კოლიტი",
          en: "Dysbiosis & C. difficile Invasion",
        },
        findings: {
          ka: "ფართო სპექტრის ანტიბიოტიკებით კომენსალური ფლორის ერადიკაცია წყვეტს აპიკალურ TLR-სიგნალიზაციას, აზიანებს ლორწოვანს და იწვევს C. difficile-ს ან C. albicans-ის ინვაზიას.",
          en: "Loss of commensal TLR signaling impairs mucosal regeneration, promoting C. difficile and C. albicans invasion.",
        },
      },
      {
        name: {
          ka: "ანტი-ციტოკინური აუტოანტისხეულები (IEI ფენოკოპიები)",
          en: "Anti-Cytokine Autoantibodies",
        },
        findings: {
          ka: "ანტი-IFN-α/ω აუტოანტისხეულები იწვევს კრიტიკულ COVID-19-ს, ანტი-IL-17 — ქრონიკულ კანდიდოზს, ხოლო ანტი-GM-CSF — ფილტვის ალვეოლურ პროტეინოზს.",
          en: "Autoantibodies against IFN-I (critical COVID-19), IL-17 (candidiasis), or GM-CSF (alveolar proteinosis).",
        },
      },
    ],
  },
  {
    id: "phagocytes",
    parent: "innate_branch",
    top: 265,
    left: 31,
    width: "w-52",
    label: {
      ka: "ფაგოციტები და NK უჯრედები",
      en: "Phagocytes & NK Cells",
    },
    subtitle: {
      ka: "ნეიტროფილები, მაკროფაგები",
      en: "Neutrophils, Macrophages",
    },
    name: {
      ka: "ფაგოციტოზის სისტემა (მიკრო- და მაკროფაგები)",
      en: "Phagocytic System (Neutrophils & Monocyte/Macrophages)",
    },
    function: {
      ka: "მოიცავს ენდოთელიუმზე გორვას (სელექტინები), მყარ ადჰეზიას (CD18/LFA-1 – ICAM-1), ქემოტაქსისს, ოფსონიზაციას (FcγR, CR1, CR3), ფაგოლიზოსომის ფორმირებასა და კილინგს ჟანგბადდამოკიდებული (NADPH-ოქსიდაზა, MPO) და ჟანგბადდამოუკიდებელი მექანიზმებით.",
      en: "Executes rolling, tight adhesion (CD18), chemotaxis, opsonophagocytosis, phagolysosome fusion, and respiratory burst killing.",
    },
    diseases: [
      {
        name: {
          ka: "ლეიკოციტების ადჰეზიის დეფიციტი (LAD I–III)",
          en: "Leukocyte Adhesion Deficiency (LAD I–III)",
        },
        findings: {
          ka: "LAD I (ITGB2 / CD18 მუტაცია): ნეიტროფილები ვერ გადიან ქსოვილში. ვლინდება ჭიპლარის მოვარდნის შეფერხებით, ომფალიტით, მორეციდივე ნეკროზული ინფექციებით ჩირქის სრული არარსებობის ფონზე და ექსტრემალური ნეიტროფილური ლეიკოციტოზით (20,000–150,000/μL).",
          en: "CD18 defect preventing diapedesis: delayed umbilical cord separation, non-purulent necrotic infections, and extreme neutrophilia.",
        },
      },
      {
        name: {
          ka: "ქრონიკული გრანულომატოზური დაავადება (CGD)",
          en: "Chronic Granulomatous Disease (CGD)",
        },
        findings: {
          ka: "NADPH-ოქსიდაზას (CYBB/gp91phox, NCF1) დეფექტი. პარადოქსი: პაციენტები რეზისტენტულნი არიან კატალაზა-უარყოფითი მიკრობების (სტრეპტოკოკი, პნევმოკოკი) მიმართ, მაგრამ კატალაზა-დადებითი ბაქტერიები და სოკოები (S. aureus, Serratia, Aspergillus, Candida) შლიან საკუთარ H₂O₂-ს და იწვევენ აბსცესებსა და გრანულომებს.",
          en: "NADPH oxidase defect causing susceptibility strictly to catalase-positive bacteria and fungi.",
        },
      },
      {
        name: {
          ka: "ჩედიაკ-ჰიგასის სინდრომი (LYST) და ნეიტროპენიები (ELANE, HAX1)",
          en: "Chediak-Higashi Syndrome & Congenital Neutropenia",
        },
        findings: {
          ka: "LYST მუტაცია არღვევს ფაგოლიზოსომის შერწყმას (გიგანტური გრანულები, დაუსრულებელი ფაგოციტოზი, ალბინიზმი, ნეიროპათია, HLH). ELANE იწვევს ციკლურ/მუდმივ ნეიტროპენიას, ხოლო HAX1 — კოსტმანის დაავადებას (<500/μL).",
          en: "LYST defect blocks phagolysosome fusion; ELANE/HAX1 mutations cause severe congenital neutropenia.",
        },
      },
    ],
  },
  {
    id: "pre_t_thymus",
    parent: "clp_adaptive",
    top: 265,
    left: 58,
    width: "w-52",
    bgClass: "bg-blue-50",
    label: {
      ka: "პრე-T და თიმოციტი",
      en: "Pre-T Cell & Thymocyte",
    },
    subtitle: {
      ka: "თიმუსი (AIRE სელექცია)",
      en: "Thymic Maturation & AIRE",
    },
    name: {
      ka: "თიმოციტების დიფერენცირება და ცენტრალური ტოლერანტობა",
      en: "Thymocyte Maturation & Central Tolerance",
    },
    function: {
      ka: "თიმუსში მიმდინარეობს T-ლიმფოციტების დიფერენცირება (IL-7-ზე დამოკიდებული), დადებითი სელექცია (MHC რესტრიქცია) და უარყოფითი სელექცია, სადაც ბირთვული ცილა AIRE უზრუნველყოფს ქსოვილოვანი აუტოანტიგენების ექსპრესიასა და აუტორეაქტიული კლონების დელეციას.",
      en: "Thymic T-cell differentiation, MHC restriction, and AIRE-mediated negative selection of autoreactive clones.",
    },
    diseases: [
      {
        name: {
          ka: "T⁻B⁺NK⁻ SCID (IL2RG / γc და JAK3 დეფიციტი)",
          en: "X-Linked T⁻B⁺NK⁻ SCID (IL2RG / JAK3)",
        },
        findings: {
          ka: "ყველაზე ხშირი SCID: ინტერლეიკინების (IL-2, 4, 7, 9, 15, 21) საერთო γc-ჯაჭვის (CD132) ან JAK3 კინაზას მუტაცია ბლოკავს IL-7-დამოკიდებულ T-ლიმფოპოეზს და IL-15-დამოკიდებულ NK მომწიფებას. IL-7Rα ან CD3 დეფიციტი იწვევს T⁻B⁺NK⁺ SCID-ს.",
          en: "Common gamma chain (CD132) or JAK3 mutation blocking T and NK development.",
        },
      },
      {
        name: {
          ka: "დი ჯორჯის სინდრომი (22q11.2 მიკროდელეცია / TBX1)",
          en: "DiGeorge Syndrome (22q11.2 Deletion)",
        },
        findings: {
          ka: "მე-3 და მე-4 ხახის ჯიბეების დისმორფოგენეზის კლასიკური ტრიადა: 1) თიმუსის აპლაზია/ჰიპოპლაზია (T-ლიმფოპენია, ვირუსული/სოკოვანი ინფექციები); 2) პარათირეოიდული აპლაზია (ჰიპოკალციემიური ტეტანია); 3) გულისა და აორტის რკალის მანკები.",
          en: "Thymic aplasia, hypocalcemic tetany, and conotruncal cardiac anomalies.",
        },
      },
      {
        name: {
          ka: "APECED სინდრომი (AIRE გენის მუტაცია)",
          en: "APECED Syndrome (AIRE Mutation)",
        },
        findings: {
          ka: "ცენტრალური ტოლერანტობის მოშლა: აუტოიმუნური პოლიენდოკრინოპათია (თირკმელზედა და ფარისებრახლო ჯირკვლების დაზიანება), ქრონიკული ლორწოვან-კანის კანდიდოზი და ექტოდერმული დისტროფია.",
          en: "Autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy due to defective thymic negative selection.",
        },
      },
    ],
  },
  {
    id: "pre_b_marrow",
    parent: "clp_adaptive",
    top: 265,
    left: 86,
    width: "w-52",
    bgClass: "bg-emerald-50",
    label: {
      ka: "პრო-B → პრე-B უჯრედი",
      en: "Pro-B → Pre-B Cell",
    },
    subtitle: {
      ka: "ძვლის ტვინი (BTK სიგნალი)",
      en: "Bone Marrow (BTK Signaling)",
    },
    name: {
      ka: "B-ლიმფოციტების ანტიგენდამოუკიდებელი მომწიფება",
      en: "Antigen-Independent B-Cell Maturation",
    },
    function: {
      ka: "მიმდინარეობს ძვლის ტვინში. პრო-B უჯრედის პრე-B და მწიფე B-ლიმფოციტად გარდაქმნა კრიტიკულად დამოკიდებულია პრე-BCR რეცეპტორისა და ციტოპლაზმური ბრუტონის თიროზინკინაზას (BTK) სასიგნალო კასკადზე.",
      en: "Occurs in bone marrow; transition past the pre-B stage requires pre-BCR and Bruton tyrosine kinase (BTK) signaling.",
    },
    diseases: [
      {
        name: {
          ka: "ბრუტონის X-შეჭიდული აგამაგლობულინემია (XLA - BTK)",
          en: "Bruton X-Linked Agammaglobulinemia (XLA)",
        },
        findings: {
          ka: "BTK მუტაცია აჩერებს B-უჯრედების მომწიფებას პრე-B სტადიაზე (CD19⁺ B-უჯრედები <1%, არ არის პლაზმური უჯრედები და ყველა კლასის ანტისხეული; KREC არ ვლინდება). ვლინდება ბიჭებში მე-5–12 თვიდან (დედისეული IgG-ის განლევის შემდეგ) კაფსულიანი ჩირქოვანი ბაქტერიებით, ენტეროვირუსებითა და Giardia lamblia-თი.",
          en: "Arrest at pre-B stage with absent B cells and all immunoglobulins, presenting at 5–12 months of age.",
        },
      },
    ],
  },

  // --- LEVEL 4: MATURE EFFECTOR CELLS ---
  {
    id: "cd4_t_helper",
    parent: "pre_t_thymus",
    top: 415,
    left: 44,
    width: "w-52",
    label: {
      ka: "CD4⁺ T-ჰელპერები",
      en: "CD4⁺ T-Helper Cells",
    },
    subtitle: {
      ka: "MHC II რესტრიქცია (~46%)",
      en: "MHC Class II Restricted",
    },
    name: {
      ka: "CD4⁺ T-ჰელპერები (Th1, Th2, Th17, Treg)",
      en: "CD4⁺ T-Helper Subsets (Th1, Th2, Th17, Treg)",
    },
    function: {
      ka: "ამოიცნობს ეგზოგენურ პეპტიდებს APC-ის MHC II მოლეკულაზე (სიგნალი 1) და CD28–B7 კოსტიმულაციით (სიგნალი 2) გამოყოფს IL-2-ს. დიფერენცირდება: Th1 (IFN-γ — მაკროფაგების აქტივაცია), Th2 (IL-4, IL-5, IL-13 — IgE/ეოზინოფილები), Th17 (IL-17 — ნეიტროფილები) და Treg (CD4⁺CD25⁺FoxP3⁺ — IL-10, TGF-β, CTLA-4 სუპრესია).",
      en: "Recognizes exogenous peptides on MHC II; differentiates into Th1, Th2, Th17, and immunosuppressive FoxP3⁺ Treg subsets.",
    },
    diseases: [
      {
        name: {
          ka: "შიშველი ლიმფოციტის სინდრომი — MHC II დეფიციტი (CIITA)",
          en: "Bare Lymphocyte Syndrome Type II (CIITA)",
        },
        findings: {
          ka: "MHC II-ის ტრანსაქტივატორების (CIITA, RFXANK) მუტაცია ბლოკავს თიმუსში CD4⁺ T-ჰელპერების სელექციას და იწვევს მძიმე კომბინირებულ იმუნოდეფიციტს.",
          en: "Defective MHC II expression causing selective CD4⁺ T-cell deficiency.",
        },
      },
      {
        name: {
          ka: "ჯობის სინდრომი (STAT3 LOF), MSMD და CMC",
          en: "Job Syndrome (STAT3 LOF), MSMD & CMC",
        },
        findings: {
          ka: "STAT3 LOF არღვევს Th17 დიფერენცირებას: სტაფილოკოკური „ცივი“ აბსცესები, პნევმატოცელე, ეგზემა, IgE > 3000 სე/მლ, სარძევე კბილების შეკავება. IL-12/IFN-γ ღერძის დეფექტი (MSMD) იწვევს დისემინირებულ BCG/მიკობაქტერიოზს, ხოლო CARD9/IL-17RA დეფექტი — ქრონიკულ კანდიდოზს.",
          en: "STAT3 LOF causes Hyper-IgE (Job) syndrome; IL-12/IFN-γ defects cause MSMD.",
        },
      },
      {
        name: {
          ka: "IPEX (FOXP3), CTLA-4/LRBA და ALPS (FAS/FASLG)",
          en: "IPEX Syndrome (FOXP3) & ALPS (FAS)",
        },
        findings: {
          ka: "FOXP3 მუტაცია იწვევს Treg უჯრედების არარსებობას და X-შეჭიდულ IPEX სინდრომს (ენტეროპათია, დიაბეტი, დერმატიტი). FAS/FASLG მუტაცია ბლოკავს აპოპტოზს და იწვევს ALPS-ს (CD4⁻CD8⁻ T-უჯრედების დაგროვება, ლიმფოპროლიფერაცია).",
          en: "FOXP3 defect causes IPEX; FAS mutation blocks lymphocyte apoptosis causing ALPS.",
        },
      },
    ],
  },
  {
    id: "cd8_ctl",
    parent: "pre_t_thymus",
    top: 415,
    left: 67,
    width: "w-52",
    label: {
      ka: "CD8⁺ ციტოტოქსიკური CTL",
      en: "CD8⁺ Cytotoxic T Cells",
    },
    subtitle: {
      ka: "MHC I რესტრიქცია (~19%)",
      en: "MHC Class I Restricted",
    },
    name: {
      ka: "CD8⁺ ციტოტოქსიკური T-ლიმფოციტები (CTL)",
      en: "CD8⁺ Cytotoxic T Lymphocytes (CTL)",
    },
    function: {
      ka: "ამოიცნობს ყველა ბირთვიან უჯრედზე MHC I კლასის (HLA-A, -B, -C) მოლეკულებით წარდგენილ ენდოგენურ (ვირუსულ და სიმსივნურ) პეპტიდებს. ანადგურებს სამიზნე უჯრედებს პერფორინ/გრანზიმების ეგზოციტოზითა და FasL–Fas აპოპტოზით.",
      en: "Recognizes endogenous viral/tumor peptides on MHC Class I; kills target cells via perforin/granzymes and FasL-Fas.",
    },
    diseases: [
      {
        name: {
          ka: "MHC I (TAP1/2) და ZAP-70 დეფიციტი",
          en: "MHC Class I (TAP1/2) & ZAP-70 Deficiency",
        },
        findings: {
          ka: "TAP1/TAP2 ტრანსპორტერების ან თიროზინკინაზა ZAP-70-ის მუტაცია იწვევს CD8⁺ T-უჯრედების სელექციურ დეფიციტს, ქრონიკულ რესპირატორულ ინფექციებსა და გრანულომატოზურ ვასკულიტს.",
          en: "Selective absence of CD8⁺ T cells with chronic respiratory infections and vasculitis.",
        },
      },
      {
        name: {
          ka: "ოჯახური ჰემოფაგოციტური ლიმფოჰისტიოციტოზი (HLH)",
          en: "Familial Hemophagocytic Lymphohistiocytosis (HLH)",
        },
        findings: {
          ka: "პერფორინის (PRF1) ან გრანულების ეგზოციტოზის (UNC13D) დეფექტის გამო CTL და NK უჯრედები ვერ კლავენ ინფიცირებულ უჯრედს, რაც იწვევს მაკროფაგების უკონტროლო აქტივაციას, ჰემოფაგოციტოზსა და ლეტალურ „ციტოკინურ შტორმს“.",
          en: "Perforin/granzyme release defects trigger uncontrolled macrophage activation and cytokine storm.",
        },
      },
    ],
  },
  {
    id: "mature_b_plasma",
    parent: "pre_b_marrow",
    top: 415,
    left: 89,
    width: "w-48",
    label: {
      ka: "მწიფე B → პლაზმური უჯრედი",
      en: "Mature B → Plasma Cell",
    },
    subtitle: {
      ka: "IgM, IgG, IgA, IgE სინთეზი",
      en: "Antibody Isotype Switching",
    },
    name: {
      ka: "ჰუმორული იმუნიტეტი და იმუნოგლობულინების კლასები",
      en: "Humoral Immunity & Immunoglobulin Classes",
    },
    function: {
      ka: "ანტიგენთან შეხვედრისა და T-ჰელპერების CD40L კოსტიმულაციის შემდეგ B-უჯრედი განიცდის იზოტიპურ გადართვას (AID, UNG ფერმენტებით): IgM (პირველადი პასუხი, კომპლემენტის აქტივაცია), IgG (მეორადი პასუხი, ოფსონიზაცია, FcRn-ით ტრანსპლაცენტური გადასვლა, t1/2 21–34 დღე), IgA (ლორწოვანების დაცვა), IgE (ანტიჰელმინთური დაცვა და ალერგია).",
      en: "Produces IgM, IgG, IgA, and IgE via CD40L/AID-mediated class-switch recombination.",
    },
    diseases: [
      {
        name: {
          ka: "ჰიპერ-IgM სინდრომი (CD40LG, AID, UNG)",
          en: "Hyper-IgM Syndrome (CD40LG, AICDA, UNG)",
        },
        findings: {
          ka: "იზოტიპური გადართვის ბლოკი: მაღალი ან ნორმალური IgM, ხოლო IgG, IgA და IgE არ არსებობს. X-შეჭიდული CD40L დეფიციტისას დამატებით ირღვევა მაკროფაგების აქტივაცია (Pneumocystis jirovecii პნევმონია, კრიპტოსპორიდიოზი).",
          en: "Failure of class switching resulting in high IgM and absent IgG/IgA/IgE.",
        },
      },
      {
        name: {
          ka: "საერთო ვარიაბელური იმუნოდეფიციტი (CVID) და IgA-ს დეფიციტი",
          en: "CVID (TACI, BAFF-R) & Selective IgA Deficiency",
        },
        findings: {
          ka: "CVID (10–30 წ.): B-უჯრედები შენარჩუნებულია, მაგრამ დარღვეულია პლაზმურ უჯრედებად დიფერენცირება (↓IgG, ↓IgA/IgM, ბრონქოექტაზიები, აუტოიმუნური ციტოპენიები). IgA-ს დეფიციტი (1:500): სისხლის/პლაზმის გადასხმისას ანტი-IgA ანტისხეულები იწვევს ანაფილაქსიურ შოკს!",
          en: "CVID causes hypogammaglobulinemia and bronchiectasis; IgA deficiency carries risk of anaphylaxis upon plasma transfusion.",
        },
      },
    ],
  },

  // --- LEVEL 5: HIV / AIDS & SYNDROMIC T/B DEFECTS ---
  {
    id: "hiv_aids_node",
    parent: "cd4_t_helper",
    top: 575,
    left: 36,
    width: "w-60",
    bgClass: "bg-red-50",
    label: {
      ka: "აივ-1 ინფექცია და შიდს-ი (AIDS)",
      en: "HIV-1 Infection & AIDS",
    },
    subtitle: {
      ka: "CD4⁺ < 200/μL, პიროპტოზი (GSDMD)",
      en: "CD4⁺ Depletion & Pyroptosis",
    },
    name: {
      ka: "შეძენილი იმუნოდეფიციტის სინდრომი (აივ-1 / შიდს-ი)",
      en: "Acquired Immunodeficiency Syndrome (HIV-1 / AIDS)",
    },
    function: {
      ka: "აივ-1-ის gp120/gp41 უკავშირდება CD4-სა და CCR5 (R5) ან CXCR4 (X4) კორეცეპტორებს. პარადოქსი: CD4⁺ T-უჯრედების >80–95% იღუპება არა პროდუქტიული რეპლიკაციით, არამედ აბორტული ინფექციით გამოწვეული პიროპტოზით (კასპაზა-1 ხლეჩს გასდერმინ D-ს + IL-1β/IL-18), აპოპტოზით, ნეკროპტოზითა და ფეროპტოზით.",
      en: "HIV-1 infects CD4⁺ cells via CCR5/CXCR4; >80-95% of CD4⁺ cells die via caspase-1/Gasdermin D pyroptosis triggered by abortive infection.",
    },
    diseases: [
      {
        name: {
          ka: "დეფექტური პროვირუსები (>90%), მიელოიდური რეზერვუარი და HAND",
          en: "Defective Proviruses, CNS Reservoir & HAND",
        },
        findings: {
          ka: "ART თერაპიის ფონზეც დეფექტური პროვირუსები (>90%) ასინთეზებენ კრიპტულ პეპტიდებს, რაც იწვევს CD8⁺ CTL-ების გამოფიტვას (↑PD-1) და „ანთებით დაბერებას“ (inflammaging). CD14⁺CD16⁺ მონოციტებს ვირუსი გადააქვთ ცნს-ის მიკროგლიაში (CoREST ლატენტობა, ნეიროკოგნიტური აშლილობა - HAND).",
          en: "Defective proviruses (>90%) drive CD8⁺ exhaustion and inflammaging; CNS microglia sustain latency causing HAND.",
        },
      },
      {
        name: {
          ka: "შიდს-ინდიკატორული დაავადებები (CDC კატეგორია C, CD4⁺ < 200/μL)",
          en: "AIDS-Defining Conditions (CDC Category C)",
        },
        findings: {
          ka: "ოპორტუნისტული ინფექციები: Pneumocystis jirovecii პნევმონია (75%), საყლაპავის კანდიდოზი, კრიპტოკოკური მენინგიტი, ცერებრული ტოქსოპლაზმოზი, ტუბერკულოზი, MAC და CMV რეტინიტი (<50/μL). სიმსივნეები: კაპოშის სარკომა (HHV-8 + Tat), EBV-ლიმფომები, საშვილოსნოს ყელის კარცინომა (HPV).",
          en: "Opportunistic infections (PCP, Toxoplasma, Cryptococcus, MAC, CMV) and malignancies (Kaposi sarcoma, EBV lymphomas).",
        },
      },
    ],
  },
  {
    id: "syndromic_iei_node",
    parent: "cd4_t_helper",
    top: 575,
    left: 65,
    width: "w-60",
    label: {
      ka: "სინდრომული IEI (WAS, ATM)",
      en: "Syndromic IEI (WAS, ATM)",
    },
    subtitle: {
      ka: "ციტოსკელეტის და დნმ-ის რეპარაცია",
      en: "Cytoskeleton & DNA Repair Defects",
    },
    name: {
      ka: "ვისკოტ-ოლდრიჩის (WAS) და ლუი-ბარის (ATM) სინდრომები",
      en: "Wiskott-Aldrich Syndrome & Ataxia-Telangiectasia",
    },
    function: {
      ka: "T- და B-ლიმფოციტების კოოპერაცია მოითხოვს აქტინის ციტოსკელეტის რეორგანიზაციას იმუნოლოგიურ სინაფსში (WAS ცილა) და დნმ-ის ორჯაჭვიანი წყვეტების რეპარაციას (ATM კინაზა TCR/Ig ლოკუსებში).",
      en: "Requires WAS protein for immunological synapse actin remodeling and ATM kinase for double-strand DNA repair.",
    },
    diseases: [
      {
        name: {
          ka: "ვისკოტ-ოლდრიჩის სინდრომი (WAS - X-შეჭიდული)",
          en: "Wiskott-Aldrich Syndrome (WAS)",
        },
        findings: {
          ka: "კლასიკური ტრიადა: 1) მიკროთრომბოციტოპენია და სისხლდენები; 2) მძიმე ეგზემა; 3) მორეციდივე ინფექციები (↓IgM, ↑IgA და ↑IgE).",
          en: "Triad of microthrombocytopenia, eczema, and recurrent infections.",
        },
      },
      {
        name: {
          ka: "ატაქსია-ტელეანგიექტაზია (ლუი-ბარის სინდრომი - ATM)",
          en: "Ataxia-Telangiectasia (Louis-Bar Syndrome)",
        },
        findings: {
          ka: "ATM გენის მუტაცია (აბერაციები მე-7 და მე-14 ქრომოსომებში): ნათხემის პროგრესირებადი ატაქსია, სკლერებისა და კანის ტელეანგიექტაზიები, IgA/IgE დეფიციტი, მაღალი რადიოსენსიტიურობა და ლიმფომების რისკი.",
          en: "Cerebellar ataxia, oculocutaneous telangiectasias, IgA deficiency, radiosensitivity, and lymphoma risk.",
        },
      },
    ],
  },
];

// ============================================================================
// 2. კომპლემენტის სისტემის კასკადი და კომპლემენტოპათიები (თავი 16.2)
// ============================================================================
export const complementNodes: StudyNode[] = [
  {
    id: "comp_classical",
    parent: null,
    top: 25,
    left: 20,
    width: "w-56",
    bgClass: "bg-blue-50",
    label: {
      ka: "კლასიკური გზა (C1q–r₂s₂)",
      en: "Classical Pathway (C1q–r₂s₂)",
    },
    subtitle: {
      ka: "Ag–Ab კომპლექსი (IgM, IgG₁₋₃) → C4, C2",
      en: "Ag–Ab Complex → C4 & C2 Cleavage",
    },
    name: {
      ka: "კომპლემენტის კლასიკური გზა და C1-ინჰიბიტორი",
      en: "Classical Complement Pathway & C1-Inhibitor",
    },
    function: {
      ka: "ირთვება ანტიგენ-ანტისხეულის (IgM ან IgG1-3) კომპლექსით, რომელსაც უკავშირდება მონოციტ/მაკროფაგების მიერ სინთეზირებული ჰექსამერული C1q. ააქტიურებს C1r₂s₂ სერინულ პროტეაზებს, რომლებიც ხლეჩენ C4-სა და C2-ს. კონტროლდება C1-ინჰიბიტორით (C1-Inh / SERPING1).",
      en: "Initiated by IgM/IgG immune complexes binding C1q, activating C1r2s2 to cleave C4 and C2; regulated by C1-Inh.",
    },
    diseases: [
      {
        name: {
          ka: "C1q, C1r/s, C4 (C4A) და C2 დეფიციტი → სისტემური წითელი მგლურა (SLE)",
          en: "Early Classical Deficiency → Systemic Lupus Erythematosus (SLE)",
        },
        findings: {
          ka: "ჰომოზიგოტური C1q დეფიციტისას მგლურა ვითარდება 88%-ში, C4 დეფიციტისას — 78.6%-ში, C1r/s — 65%-ში, C2 — 10%-ში. ირღვევა აპოპტოზური ნუკლეოსომებისა და იმუნური კომპლექსების კლირენსი და იზრდება IFN-α. ლაბორატორიულად: დაბალი CH50 და ნორმალური AH50.",
          en: "Impaired clearance of apoptotic debris and immune complexes leading to SLE (↓CH50, normal AH50).",
        },
      },
      {
        name: {
          ka: "მემკვიდრული ანგიონევროზული შეშუპება (კვინკეს შეშუპება - SERPING1)",
          en: "Hereditary Angioedema (C1-Inh Deficiency)",
        },
        findings: {
          ka: "C1-Inh დეფიციტი იწვევს კლასიკური გზისა და კალიკრეინ-კინინური სისტემის უკონტროლო აქტივაციას ბრადიკინინის ჭარბი წარმოქმნით, რაც ვლინდება სახის, ხორხისა და ნაწლავის ლორწოვანის სიცოცხლისთვის საშიში შეშუპებით.",
          en: "C1-Inh deficiency causes bradykinin-mediated facial, laryngeal, and intestinal edema.",
        },
      },
    ],
  },
  {
    id: "comp_lectin",
    parent: null,
    top: 25,
    left: 50,
    width: "w-56",
    bgClass: "bg-teal-50",
    label: {
      ka: "ლექტინური გზა (MBL / ფიკოლინები)",
      en: "Lectin Pathway (MBL / Ficolins)",
    },
    subtitle: {
      ka: "მიკრობული მანოზა + MASP-1/2",
      en: "Microbial Carbohydrates + MASP-1/2",
    },
    name: {
      ka: "კომპლემენტის ლექტინური გზა",
      en: "Lectin Pathway of Complement",
    },
    function: {
      ka: "ირთვება ანტისხეულების გარეშე: პლაზმის მანოზა-დამაკავშირებელი ლექტინი (MBL) ან ფიკოლინები უკავშირდება მიკრობის ზედაპირულ ნახშირწყლებს და MASP-1/2 პროტეაზების მეშვეობით ხლეჩს C4-სა და C2-ს.",
      en: "Antibody-independent activation via MBL and ficolins binding microbial mannose and activating MASP-1/2.",
    },
    diseases: [
      {
        name: {
          ka: "MBL და MASP-2 დეფიციტი",
          en: "MBL & MASP-2 Deficiency",
        },
        findings: {
          ka: "ზრდის მგრძნობელობას რესპირატორული და ჩირქოვანი ბაქტერიული ინფექციების მიმართ, განსაკუთრებით ადრეულ ბავშვობაში (ფიზიოლოგიური ჰიპოგამაგლობულინემიის ფანჯრის პერიოდში).",
          en: "Predisposes infants and immunocompromised patients to recurrent pyogenic respiratory infections.",
        },
      },
    ],
  },
  {
    id: "comp_alternative",
    parent: null,
    top: 25,
    left: 80,
    width: "w-56",
    bgClass: "bg-amber-50",
    label: {
      ka: "ალტერნატიული გზა (LPS, B, D)",
      en: "Alternative Pathway (Factors B, D, P)",
    },
    subtitle: {
      ka: "C3 ჰიდროლიზი + ფაქტორი B, D, პროპერდინი",
      en: "Spontaneous C3 Hydrolysis + Properdin",
    },
    name: {
      ka: "კომპლემენტის ალტერნატიული გზა",
      en: "Alternative Pathway of Complement",
    },
    function: {
      ka: "ირთვება C3-ის სპონტანური ჰიდროლიზით ან მიკრობულ ზედაპირზე (LPS) C3b-ის ფიქსაციით. C3b იერთებს ფაქტორ B-ს, რომელსაც ხლეჩს ფაქტორი D და წარმოიქმნება ალტერნატიული C3-კონვერტაზა C3bBb (სტაბილიზდება პროპერდინით).",
      en: "Triggered by spontaneous C3 hydrolysis or microbial LPS with Factors B, D, and properdin.",
    },
    diseases: [
      {
        name: {
          ka: "ფაქტორ B, ფაქტორ D და პროპერდინის დეფიციტი",
          en: "Factor B, Factor D & Properdin Deficiency",
        },
        findings: {
          ka: "ლაბორატორიულად: ნორმალური CH50 და დაბალი AH50. პროპერდინის (X-შეჭიდული) და ფაქტორ D-ს დეფიციტი იწვევს ელვისებურ მენინგოკოკურ (Neisseria meningitidis) სეფსისს.",
          en: "Normal CH50 with low AH50; predisposes to fulminant Neisseria meningitidis infections.",
        },
      },
    ],
  },

  // --- LEVEL 2: C3 CONVERTASES ---
  {
    id: "c3_conv_cl",
    parent: "comp_lectin",
    top: 175,
    left: 35,
    width: "w-60",
    label: {
      ka: "C3-კონვერტაზა: C4b2a",
      en: "Classical/Lectin C3 Convertase (C4b2a)",
    },
    subtitle: {
      ka: "რეგულაცია: CD55, C4bp, FI, CD46",
      en: "Regulated by CD55, C4bp, FI, CD46",
    },
    name: {
      ka: "კლასიკური და ლექტინური გზის C3-კონვერტაზა (C4b2a)",
      en: "Classical/Lectin C3 Convertase (C4b2a)",
    },
    function: {
      ka: "აერთიანებს კლასიკურ და ლექტინურ გზებს C3-ის გახლეჩამდე. მის აქტივობას აკონტროლებენ კონვერტაზას დისოციაციის ფაქტორები (CD55/DAF, CR1, C4bp) და სერინული პროტეაზა ფაქტორი I (CD46/MCP კოფაქტორით).",
      en: "Cleaves C3 into C3a and C3b; regulated on host cells by CD55 (DAF), C4bp, and Factor I.",
    },
    diseases: [
      {
        name: {
          ka: "CHAPLE დაავადება (CD55 / DAF დეფიციტი)",
          en: "CHAPLE Disease (CD55 Deficiency)",
        },
        findings: {
          ka: "მემბრანული რეგულატორ CD55-ის დეფიციტი იწვევს კომპლემენტის ჰიპერაქტივაციას, მძიმე თრომბოზებსა და ცილის კარგვით მიმდინარე ენტეროპათიას.",
          en: "Complement hyperactivation, angiopathic thrombosis, and protein-losing enteropathy.",
        },
      },
    ],
  },
  {
    id: "c3_conv_ap",
    parent: "comp_alternative",
    top: 175,
    left: 80,
    width: "w-60",
    label: {
      ka: "C3-კონვერტაზა: C3bBb",
      en: "Alternative C3 Convertase (C3bBb)",
    },
    subtitle: {
      ka: "რეგულაცია: ფაქტორი H (FH), FI, CD46",
      en: "Regulated by Factor H, Factor I, CD46",
    },
    name: {
      ka: "ალტერნატიული C3-კონვერტაზა (C3bBb) და ამპლიფიკაციის მარყუჟი",
      en: "Alternative C3 Convertase (C3bBb) & Amplification Loop",
    },
    function: {
      ka: "უზრუნველყოფს კომპლემენტის მძლავრ ამპლიფიკაციას (+C3b). საკუთარი სისხლძარღვების ენდოთელიუმს დაზიანებისგან იცავს პლაზმური ფაქტორი H (FH), ფაქტორი I (FI) და მემბრანული CD46 (MCP).",
      en: "Amplifies C3 cleavage; host endothelium is protected by Factor H, Factor I, and CD46.",
    },
    diseases: [
      {
        name: {
          ka: "ატიპური ჰემოლიზურ-ურემიული სინდრომი (aHUS - FH, FI, CD46)",
          en: "Atypical Hemolytic Uremic Syndrome (aHUS)",
        },
        findings: {
          ka: "ფაქტორ H-ის, ფაქტორ I-ის ან CD46-ის დეფიციტი იწვევს ალტერნატიული გზის ჰიპერაქტივაციას თირკმლის ენდოთელიუმზე: მიკროანგიოპათიური ჰემოლიზური ანემია, თრომბოციტოპენია და თირკმლის მწვავე უკმარისობა. იკურნება ეკულიზუმაბით.",
          en: "Uncontrolled endothelial complement activation causing MAHA, thrombocytopenia, and acute kidney injury.",
        },
      },
      {
        name: {
          ka: "C3 ნეფრიტული ფაქტორი (C3NeF)",
          en: "C3 Nephritic Factor Autoantibodies",
        },
        findings: {
          ka: "აუტოანტისხეული, რომელიც ასტაბილიზებს C3bBb კონვერტაზას, იწვევს C3-ის მუდმივ განლევას და მემბრანოპროლიფერაციულ გლომერულონეფრიტს.",
          en: "Autoantibody stabilizing C3bBb, causing C3 consumption and glomerulonephritis.",
        },
      },
    ],
  },

  // --- LEVEL 3: CENTRAL C3 ---
  {
    id: "c3_central",
    parent: "c3_conv_cl",
    top: 325,
    left: 55,
    width: "w-64",
    bgClass: "bg-yellow-50",
    label: {
      ka: "ცენტრალური C3 → C3b + C3a",
      en: "Central C3 → C3b + C3a",
    },
    subtitle: {
      ka: "ოფსონიზაცია (CR1, CR3) და ანაფილატოქსინი",
      en: "Opsonization & Anaphylatoxin",
    },
    name: {
      ka: "ცენტრალური კომპონენტი C3 (C3b ოფსონინი და C3a)",
      en: "Central Complement Component C3",
    },
    function: {
      ka: "კომპლემენტის სამივე გზა ერთიანდება C3-ის გახლეჩის ეტაპზე. C3b წარმოადგენს მთავარ ოფსონინს (უკავშირდება ფაგოციტების CR1/CR3 რეცეპტორებს და უზრუნველყოფს იმუნური კომპლექსების კლირენსს), ხოლო C3a არის ანაფილატოქსინი.",
      en: "Convergence point of all 3 pathways; C3b mediates opsonophagocytosis and immune complex clearance.",
    },
    diseases: [
      {
        name: {
          ka: "C3-ის გენეტიკური ან შეძენილი დეფიციტი",
          en: "C3 Deficiency",
        },
        findings: {
          ka: "ლაბორატორიულად ქვეითდება როგორც CH50, ისე AH50. ოფსონიზაციისა და ქემოტაქსისის მოშლის გამო ვითარდება უმძიმესი მორეციდივე ჩირქოვანი ინფექციები (S. pneumoniae, H. influenzae) და იმუნოკომპლექსური გლომერულონეფრიტი.",
          en: "Decreased CH50 and AH50 with severe recurrent pyogenic infections and glomerulonephritis.",
        },
      },
    ],
  },

  // --- LEVEL 4: C5 CONVERTASES & ANAPHYLATOXINS ---
  {
    id: "c5_convertase",
    parent: "c3_central",
    top: 465,
    left: 55,
    width: "w-64",
    label: {
      ka: "C5-კონვერტაზები → C5b + C5a",
      en: "C5 Convertases (C4b2a3b / C3bBb3b)",
    },
    subtitle: {
      ka: "C5a ქემოტაქსისი | ბლოკი: ეკულიზუმაბი",
      en: "C5a Chemotaxis | Blocked by Eculizumab",
    },
    name: {
      ka: "C5-კონვერტაზები და ანაფილატოქსინი C5a",
      en: "C5 Convertases & Potent Anaphylatoxin C5a",
    },
    function: {
      ka: "C3b-ის მიერთებით C3-კონვერტაზები გარდაიქმნება C5-კონვერტაზებად (C4b2a3b და C3bBb3b), რომლებიც ხლეჩენ C5-ს. C5a არის უძლიერესი ქემოატრაქტანტი და ანაფილატოქსინი (ააქტიურებს პოხიერ უჯრედებს), ხოლო C5b იწყებს MAC-ის აწყობას.",
      en: "Cleaves C5 into C5a (potent neutrophil chemoattractant and anaphylatoxin) and C5b.",
    },
    diseases: [
      {
        name: {
          ka: "თერაპიული სამიზნე — ეკულიზუმაბი (Anti-C5)",
          en: "Therapeutic Blockade: Eculizumab",
        },
        findings: {
          ka: "მონოკლონური ანტისხეული ეკულიზუმაბი ბლოკავს C5-ის გახლეჩას C5a-დ და C5b-დ, რაც გამოიყენება ატიპური ჰემოლიზურ-ურემიული სინდრომისა (aHUS) და პაროქსიზმული ღამის ჰემოგლობინურიის სამკურნალოდ.",
          en: "Monoclonal antibody inhibiting C5 cleavage, used to treat aHUS and PNH.",
        },
      },
    ],
  },

  // --- LEVEL 5: MAC ---
  {
    id: "mac_complex",
    parent: "c5_convertase",
    top: 605,
    left: 55,
    width: "w-68",
    bgClass: "bg-red-50",
    label: {
      ka: "მემბრანა-შემტევი კომპლექსი (MAC)",
      en: "Membrane Attack Complex (C5b–C9)",
    },
    subtitle: {
      ka: "C5b–C6–C7–C8–C9ₙ | რეგულატორი: CD59",
      en: "Osmotic Lysis | Inhibited by CD59",
    },
    name: {
      ka: "მემბრანა-შემტევი კომპლექსი (MAC: C5b–C9)",
      en: "Membrane Attack Complex (MAC: C5b–C9)",
    },
    function: {
      ka: "C5b იერთებს C6, C7, C8 და პოლიმერიზებულ C9 კომპონენტებს, წარმოქმნის ტრანსმემბრანულ არხს და იწვევს მიკრობის (განსაკუთრებით თხელკედლიანი გრამ-უარყოფითი დიპლოკოკების) ოსმოსურ ლიზისს. საკუთარ ერითროციტებს იცავს მემბრანული CD59 და S-ცილა.",
      en: "Forms transmembrane pores causing osmotic lysis of target cells; host cells are protected by CD59.",
    },
    diseases: [
      {
        name: {
          ka: "ტერმინალური კომპონენტების (C5–C9) დეფიციტი → ნეისერიული ინფექციები",
          en: "Terminal Complement (C5–C9) Deficiency",
        },
        findings: {
          ka: "C5–C9 დეფიციტი (↓CH50 და ↓AH50) არღვევს MAC-ით ბაქტერიოლიზისს და იწვევს სელექციურ მგრძნობელობას დისემინირებული ნეისერიული ინფექციების (Neisseria meningitidis, Neisseria gonorrhoeae) მიმართ.",
          en: "Selective susceptibility to disseminated Neisseria meningitidis and N. gonorrhoeae infections.",
        },
      },
      {
        name: {
          ka: "CD59 დეფიციტი → სისხლძარღვშიდა ჰემოლიზი",
          en: "CD59 Deficiency",
        },
        findings: {
          ka: "CD59-ის არარსებობისას MAC კომპლექსი აზიანებს საკუთარ ერითროციტებსა და ენდოთელიუმს, რაც იწვევს ქრონიკულ სისხლძარღვშიდა ჰემოლიზსა და თრომბოზებს.",
          en: "Loss of MAC inhibition on host RBCs leads to intravascular hemolysis.",
        },
      },
    ],
  },
];

// ============================================================================
// 3. ინფექციური პროცესი და სეპტიური შოკის კასკადი (თავი 16.1)
// ============================================================================
export const sepsisInfectionNodes: StudyNode[] = [
  {
    id: "inf_agents",
    parent: null,
    top: 20,
    left: 50,
    width: "w-68",
    bgClass: "bg-orange-50",
    label: {
      ka: "ინფექცია და მიკრობული ტოქსინები",
      en: "Pathogens & Microbial Toxins",
    },
    subtitle: {
      ka: "LPS (ლიპიდ A), ეგზოტოქსინები, სუპერანტიგენები",
      en: "LPS, Exotoxins, Superantigens",
    },
    name: {
      ka: "ბიოლოგიური დამაზიანებელი ფაქტორები და ბაქტერიული ტოქსინები",
      en: "Biological Factors, Exotoxins & Endotoxins",
    },
    function: {
      ka: "მოიცავს მიკროპათოგენებს (პრიონები PrPSc, ვირუსები, რიკეტსიები, ქლამიდიები, მიკოპლაზმები, ბაქტერიები, სოკოები, უმარტივესები, ჰელმინთები) და ზოოტოქსინებს. ბაქტერიები აზიანებენ ადჰეზინებით, ბიოაპკით, ინვაზიის ფერმენტებით (ჰიალურონიდაზა, კოლაგენაზა), ეგზოტოქსინებითა და გრამ(-) ენდოტოქსინით (LPS / ლიპიდ A).",
      en: "Encompasses micro-/macropathogens, specific protein exotoxins, superantigens, and Gram-negative LPS endotoxin.",
    },
    diseases: [
      {
        name: {
          ka: "სპეციფიკური ბაქტერიული ეგზოტოქსინები და HUS",
          en: "Specific Bacterial Exotoxins & Shiga-Toxin HUS",
        },
        findings: {
          ka: "დიფტერიის ტოქსინი თრგუნავს ცილის სინთეზს; ბოტულიზმის ტოქსინი ბლოკავს აცეტილქოლინის გამოყოფას (დუნე დამბლა); ტეტანუსის ტოქსინი ბლოკავს ზურგის ტვინის შემაკავებელ ნეირონებს (სპასტიური კრუნჩხვა); ქოლერის ტოქსინი იწვევს სეკრეტორულ დიარეას; E. coli-ს შიგა-ტოქსინი აზიანებს თირკმლის გორგლების ენდოთელიუმს და იწვევს ჰემოლიზურ-ურემიულ სინდრომს (HUS).",
          en: "Diphtheria, botulinum, tetanus, cholera toxins, and E. coli Shiga-toxin causing HUS.",
        },
      },
      {
        name: {
          ka: "ტოქსიკური შოკის სინდრომი (TSS - სუპერანტიგენები)",
          en: "Toxic Shock Syndrome (Superantigens)",
        },
        findings: {
          ka: "S. aureus-ისა და β-ჰემოლიზური სტრეპტოკოკის სუპერანტიგენები პირდაპირ აკავშირებენ APC-ის MHC II-სა და T-ლიმფოციტების TCR-ის Vβ დომენს, იწვევენ T-უჯრედების 20%-მდე პოლიკლონურ აქტივაციას, „ციტოკინურ შტორმს“, ცხელებას, ჰიპოტენზიასა და ერითემას.",
          en: "Non-specific MHC II to TCR Vβ cross-linking activates up to 20% of T cells, triggering cytokine storm and TSS.",
        },
      },
      {
        name: {
          ka: "პრიონული და უჯრედშიდა ინფექციები (რიკეტსია, ქლამიდია)",
          en: "Prion Encephalopathies, Rickettsioses & Chlamydia",
        },
        findings: {
          ka: "პრიონები (PrPSc) ნუკლეინის მჟავის გარეშე გარდაქმნიან ნორმალურ PrPc ცილას ამილოიდურ ფოლაქებად (კროიცფელდ-იაკობის დაავადება, კურუ). რიკეტსიები (გადამტანი: ტილი, ტკიპა) აზიანებენ სისხლძარღვთა ენდოთელიუმს (პარტახტიანი ტიფი), ხოლო ქლამიდიებს ახასიათებთ ელემენტარული და რეტიკულური სხეულაკების ორფაზიანი ციკლი (ტრაქომა, ორნითოზი).",
          en: "PrPSc conformational neurodegeneration; endothelial necrosis in Rickettsia; biphasic cycle in Chlamydia.",
        },
      },
    ],
  },
  {
    id: "sepsis_cytokines",
    parent: "inf_agents",
    top: 165,
    left: 50,
    width: "w-68",
    bgClass: "bg-emerald-50",
    label: {
      ka: "მაკროფაგების აქტივაცია (TLR4)",
      en: "Macrophage Activation (TLR4)",
    },
    subtitle: {
      ka: "TNF-α, IL-1, IL-6 და აზოტის ოქსიდი (NO)",
      en: "Cytokine Storm: TNF-α, IL-1, IL-6, NO",
    },
    name: {
      ka: "სისტემური ანთებითი პასუხი (SIRS), ცხელება და მწვავე ფაზის რეაქცია",
      en: "Macrophage Activation, Fever & Acute Phase Response",
    },
    function: {
      ka: "გრამ(-) ბაქტერიების LPS (ლიპიდ A) უკავშირდება მაკროფაგების TLR4-ს და იწვევს მეორადი პიროგენებისა და პროანთებითი მედიატორების (TNF-α, IL-1, IL-6, IFN-γ, NO) მასობრივ გამოთავისუფლებას. ჰიპოთალამუსში იწევს თერმორეგულაციის ნიშნული (ცხელება).",
      en: "LPS-TLR4 binding drives massive release of TNF-α, IL-1, IL-6, and NO, inducing fever and the acute phase response.",
    },
    diseases: [
      {
        name: {
          ka: "მწვავე ფაზის პასუხი და ქრონიკული დაავადების ანემია",
          en: "Acute Phase Response & Cachexia",
        },
        findings: {
          ka: "ღვიძლში იზრდება დადებითი მწვავე ფაზის ცილები (C-რეაქტიული ცილა, შრატის ამილოიდი A, ფიბრინოგენი — ზრდის ედს-ს) და მცირდება უარყოფითი მწვავე ფაზის ცილები (ალბუმინი, ტრანსფერინი, IGF-1). ქრონიკულ ფაზაში ვითარდება კახექსია და რკინის მობილიზაციის ბლოკით გამოწვეული ანემია.",
          en: "Elevated CRP, SAA, and fibrinogen with decreased albumin/transferrin, leading to cachexia and anemia of chronic disease.",
        },
      },
    ],
  },
  {
    id: "sepsis_vasodilation",
    parent: "sepsis_cytokines",
    top: 315,
    left: 28,
    width: "w-60",
    label: {
      ka: "სისტემური ვაზოდილატაცია (NO)",
      en: "Systemic Vasodilation (Excess NO)",
    },
    subtitle: {
      ka: "პერიფერიული წინააღმდეგობის ვარდნა",
      en: "Drop in Systemic Vascular Resistance",
    },
    name: {
      ka: "აზოტის ოქსიდით (NO) გამოწვეული ვაზოდილატაცია და დისტრიბუციული შოკი",
      en: "NO-Mediated Vasodilation & Distributive Shock",
    },
    function: {
      ka: "აზოტის ოქსიდის (NO) ჭარბი სინთეზი სისხლძარღვთა კედელში იწვევს გლუვი კუნთების მოდუნებას, პერიფერიული სისხლძარღვოვანი წინააღმდეგობის მკვეთრ დაქვეითებასა და დისტრიბუციულ ჰემოდინამიკურ კოლაფსს.",
      en: "Excessive NO synthesis causes profound systemic vasodilation, plummeting vascular resistance, and distributive shock.",
    },
    diseases: [
      {
        name: {
          ka: "ცირკულაციური და ქსოვილოვანი ჰიპოქსია",
          en: "Circulatory & Histotoxic Hypoxia",
        },
        findings: {
          ka: "არტერიული ჰიპოტენზია იწვევს ცირკულაციურ ჰიპოქსიას, ხოლო ბაქტერიული ენდოტოქსინებით მიტოქონდრიული მჟანგავი ფოსფორილირების გათიშვა — ქსოვილოვან ჰიპოქსიასა და რძემჟავა აციდოზს.",
          en: "Hypotension combined with endotoxin-induced mitochondrial uncoupling causes severe lactic acidosis.",
        },
      },
    ],
  },
  {
    id: "sepsis_endothelium",
    parent: "sepsis_cytokines",
    top: 315,
    left: 72,
    width: "w-60",
    label: {
      ka: "ენდოთელიუმის დაზიანება",
      en: "Endothelial Injury & Capillary Leak",
    },
    subtitle: {
      ka: "კაპილარული გაჟონვა და შეფარდებითი ჰიპოვოლემია",
      en: "Plasma Extravasation & Hypovolemia",
    },
    name: {
      ka: "ენდოთელიუმის დისფუნქცია და კაპილარული გაჟონვა",
      en: "Endothelial Damage & Capillary Leak Syndrome",
    },
    function: {
      ka: "ციტოკინებისა და ადჰეზირებული ნეიტროფილების მოქმედებით ზიანდება სისხლძარღვთა ენდოთელიუმი, მკვეთრად იზრდება კაპილარების განვლადობა, პლაზმა გადადის ქსოვილებში და ვითარდება შეფარდებითი ჰიპოვოლემია.",
      en: "Neutrophil adhesion and cytokines damage vascular endothelium, causing plasma leakage into tissues.",
    },
  },
  {
    id: "sepsis_heart",
    parent: "sepsis_vasodilation",
    top: 460,
    left: 28,
    width: "w-60",
    label: {
      ka: "მიოკარდიუმის დეპრესია",
      en: "Myocardial Depression",
    },
    subtitle: {
      ka: "რეფრაქტერული ჰიპოტენზია (<90 მმ.ვწყ.სვ)",
      en: "Fluid-Refractory Hypotension",
    },
    name: {
      ka: "მიოკარდიუმის დეპრესია და სეპტიური შოკი",
      en: "Myocardial Depression & Septic Shock",
    },
    function: {
      ka: "TNF-α და IL-1 პირდაპირ თრგუნავენ კარდიომიოციტების კუმშვადობას. ყალიბდება სეპტიური შოკი — ინფუზიური თერაპიის მიმართ რეფრაქტერული ჰიპოტენზია (სისტოლური წნევა < 90 მმ.ვწყ.სვ) და კრიტიკული ჰიპოპერფუზია.",
      en: "TNF-α depresses myocardial contractility, resulting in fluid-refractory septic shock (SBP < 90 mmHg).",
    },
  },
  {
    id: "sepsis_dic",
    parent: "sepsis_endothelium",
    top: 460,
    left: 72,
    width: "w-60",
    label: {
      ka: "მიკროცირკულაციის კოლაფსი და დსკ",
      en: "Microvascular Collapse & DIC",
    },
    subtitle: {
      ka: "მიკროთრომბოზები და ჰემორაგიები",
      en: "Thrombosis & Consumptive Coagulopathy",
    },
    name: {
      ka: "დისემინირებული სისხლძარღვშიდა კოაგულაცია (დსკ სინდრომი)",
      en: "Disseminated Intravascular Coagulation (DIC)",
    },
    function: {
      ka: "დაზიანებული ენდოთელიუმი და ქსოვილოვანი ფაქტორი რთავს კოაგულაციის კასკადს. მიკროცირკულაციაში ყალიბდება დიფუზური მიკროთრომბოზები, ხოლო შედედების ფაქტორებისა და თრომბოციტების განლევის გამო ერთდროულად იწყება მასობრივი სისხლდენები.",
      en: "Widespread microvascular thrombosis followed by consumption of platelets and clotting factors, causing simultaneous bleeding.",
    },
  },
  {
    id: "sepsis_mods",
    parent: "sepsis_heart",
    top: 605,
    left: 50,
    width: "w-72",
    bgClass: "bg-red-50",
    label: {
      ka: "მულტიორგანული უკმარისობა (MODS)",
      en: "Multi-Organ Dysfunction Syndrome (MODS)",
    },
    subtitle: {
      ka: "ARDS, თირკმლის მწვავე უკმარისობა, კომა",
      en: "ARDS, Acute Kidney Injury, CNS Failure",
    },
    name: {
      ka: "მულტიორგანული უკმარისობის სინდრომი (MODS) და თერაპიის პრინციპები",
      en: "Multi-Organ Dysfunction Syndrome (MODS) & Therapy",
    },
    function: {
      ka: "სეპტიური შოკისა და დსკ-ის ტერმინალური შედეგი: ვითარდება მწვავე რესპირაციული დისტრეს სინდრომი (ARDS), ოლიგურია/თირკმლის მწვავე უკმარისობა, ღვიძლის უკმარისობა და ცნობიერების მოშლა.",
      en: "Terminal culmination of septic shock and DIC featuring ARDS, acute renal failure, and hepatic/CNS dysfunction.",
    },
    diseases: [
      {
        name: {
          ka: "ინფექციური პროცესის თერაპიის 3 პრინციპი",
          en: "Three Principles of Infectious Disease Therapy",
        },
        findings: {
          ka: "1) ეტიოტროპული თერაპია (ანტიბაქტერიული, ანტივირუსული, ანტიმიკოზური, ანტიპროტოზოული); 2) პათოგენეზური თერაპია (დეზინტოქსიკაცია, ინფუზია, ანთების საწინააღმდეგო, იმუნოკორექცია, მიკროცირკულაციის აღდგენა); 3) სიმპტომური თერაპია (ანალგეზიური, ანტიპირეტული, სედაციური).",
          en: "1) Etiotropic (antimicrobials); 2) Pathogenetic (fluid resuscitation, immunomodulation, organ support); 3) Symptomatic (antipyretics, analgesics).",
        },
      },
    ],
  },
];

export const studyDiagrams: DiagramCollection[] = [
  {
    id: "immune_iei",
    title: {
      ka: "1. იმუნოგენეზი, რეზისტენტობა და იმუნოდეფიციტები (IEI & აივ)",
      en: "1. Immunogenesis, Resistance & Immunodeficiencies (IEI & HIV)",
    },
    subtitle: {
      ka: "თავი 16.1 და 16.2 — თანდაყოლილი/ადაპტაციური შტოები, ლიმფოპოეზის ბლოკები და შიდს-ი",
      en: "Chapters 16.1 & 16.2 — Innate/Adaptive Branches, Lymphopoiesis Blocks & AIDS",
    },
    nodes: immuneLineageNodes,
  },
  {
    id: "complement",
    title: {
      ka: "2. კომპლემენტის სისტემის კასკადი და პათოლოგია",
      en: "2. Complement System Cascade & Pathology",
    },
    subtitle: {
      ka: "თავი 16.2 — კლასიკური, ლექტინური და ალტერნატიული გზები, რეგულატორები, CH50/AH50",
      en: "Chapter 16.2 — Classical, Lectin & Alternative Pathways, Regulators & Deficiencies",
    },
    nodes: complementNodes,
  },
  {
    id: "sepsis_infection",
    title: {
      ka: "3. ინფექციური აგენტები და სეპტიური შოკის კასკადი (MODS)",
      en: "3. Infectious Agents & Septic Shock Cascade (MODS)",
    },
    subtitle: {
      ka: "თავი 16.1 — ტოქსინები, სუპერანტიგენები, ციტოკინური შტორმი, დსკ და თერაპია",
      en: "Chapter 16.1 — Toxins, Superantigens, Cytokine Storm, DIC & Therapy",
    },
    nodes: sepsisInfectionNodes,
  },
];