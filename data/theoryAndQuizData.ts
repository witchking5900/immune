import { Lang } from "../components/StudyTool";

export interface ClinicalPearl {
  id: string;
  chapter: "16.1" | "16.2";
  title: Record<Lang, string>;
  badge: Record<Lang, string>;
  points: Record<Lang, string[]>;
}

export interface StudyTableData {
  id: string;
  chapter: "16.1" | "16.2";
  title: Record<Lang, string>;
  headers: Record<Lang, string[]>;
  rows: Record<Lang, string[][]>;
}

export interface QuizQuestion {
  id: number;
  chapter: "16.1" | "16.2";
  question: Record<Lang, string>;
  keyTerms: string[];
  answer: Record<Lang, string>;
}

// ============================================================================
// კლინიკური ბლოკები და საკვანძო კონცეფციები (თავი 16.1 და 16.2)
// ============================================================================
export const clinicalPearls: ClinicalPearl[] = [
  {
    id: "tss_hus",
    chapter: "16.1",
    title: {
      ka: "ტოქსიკური შოკის სინდრომი (TSS) და ჰემოლიზურ-ურემიული სინდრომი (HUS)",
      en: "Toxic Shock Syndrome (TSS) & Hemolytic Uremic Syndrome (HUS)",
    },
    badge: { ka: "კლინიკური კორელაცია 16.1", en: "Clinical Box 16.1" },
    points: {
      ka: [
        "ტოქსიკური შოკის სინდრომი (TSS): გამოწვეულია S. aureus-ის ან β-ჰემოლიზური სტრეპტოკოკის სუპერანტიგენით, რომელიც პირდაპირ აკავშირებს APC-ის MHC II-ს და T-ლიმფოციტების TCR-ის Vβ დომენს (T-უჯრედების 20%-მდე პოლიკლონური აქტივაცია, „ციტოკინური შტორმი“, მწვავე ცხელება, ჰიპოტენზია, დიფუზური მაკულარული ერითემა და MODS).",
        "ჰემოლიზურ-ურემიული სინდრომი (HUS): ნაწლავის ჩხირის (E. coli) შიგა-ტოქსინი აზიანებს ნაწლავისა და თირკმლის გორგლების ენდოთელიუმს → თრომბოციტების აგრეგაცია, მიკროანგიოპათიური ჰემოლიზური ანემია და თირკმლის მწვავე უკმარისობა (განსაკუთრებით მძიმეა ბავშვებში).",
      ],
      en: [
        "Toxic Shock Syndrome (TSS): S. aureus superantigen cross-links MHC II to TCR Vβ, activating up to 20% of T cells, causing cytokine storm, fever, hypotension, diffuse macular erythema, and MODS.",
        "Hemolytic Uremic Syndrome (HUS): E. coli Shiga-toxin damages glomerular endothelium, causing platelet aggregation, microangiopathic hemolytic anemia, and acute renal failure.",
      ],
    },
  },
  {
    id: "stages_and_periods",
    chapter: "16.1",
    title: {
      ka: "ინფექციის 5 პათოგენეზური რგოლი, 5 კლინიკური პერიოდი და ლატენტობა",
      en: "5 Pathogenetic Links, 5 Clinical Periods & Latency",
    },
    badge: { ka: "პათოგენეზი 16.1", en: "Pathogenesis 16.1" },
    points: {
      ka: [
        "შეჭრის 4 გზა: 1) პენეტრაცია (ჭრილობა, დამწვრობა, ნაკბენი); 2) პირდაპირი კონტაქტი (სქესობრივი, ვერტიკალური/ტრანსპლაცენტური); 3) ალიმენტური (ქოლერა, მუცლის ტიფი, სალმონელოზი, A ჰეპატიტი); 4) ინჰალაციური/აეროგენული (გრიპი, ტუბერკულოზი).",
        "პათოგენეზის 5 რგოლი: 1) ცხელება (IL-1, IL-6, TNF-α ჰიპოთალამუსში); 2) ანთება; 3) ჰიპოქსია (რესპირატორული, ცირკულაციური, ჰემური, ქსოვილოვანი); 4) მეტაბოლიზმის მოშლა (საწყისად კატაბოლიზმი, აღდგენისას ანაბოლიზმი); 5) მწვავე ფაზის პასუხი (↑CRP, ↑SAA, ↑ფიბრინოგენი/ედს; ↓ალბუმინი, ↓ტრანსფერინი, ↓IGF-1).",
        "კლინიკური მიმდინარეობის 5 პერიოდი: 1) ინკუბაციური (სალმონელოზი 6–24 სთ, B ჰეპატიტი 50–150 დღე); 2) პროდრომული (არასპეციფიკური ნიშნები); 3) ძირითადი კლინიკური გამოვლინებების (პათოგნომური სიმპტომები); 4) აღდგენის (რეკონვალესცენციის); 5) სრული გამოჯანმრთელების.",
        "ბაქტერიომტარებლობა და ლატენტობა: Salmonella typhi პაციენტთა 2%-ში უსიმპტომოდ პერსისტირებს ნაღვლის ბუშტში; HSV-1 ლატენტურია სამწვერა ნერვის კვანძში, HSV-2 — გავის განგლიებში, ხოლო Varicella-zoster — სპინალურ განგლიებში (რეაქტივაცია იწვევს Herpes Zoster-ს).",
      ],
      en: [
        "4 Entry Routes: Penetration, Direct Contact, Alimentary, Inhalation.",
        "5 Pathogenetic Links: Fever, Inflammation, Hypoxia, Metabolic shift, Acute phase response (↑CRP, ↑SAA, ↑Fibrinogen; ↓Albumin, ↓Transferrin).",
        "5 Clinical Periods: Incubation, Prodromal, Peak clinical manifestations, Convalescence, Complete recovery.",
        "Carriage & Latency: S. typhi persists in the gallbladder (2%); VZV remains latent in spinal ganglia and reactivates as Herpes Zoster.",
      ],
    },
  },
  {
    id: "ch50_ah50_box",
    chapter: "16.2",
    title: {
      ka: "კომპლემენტის ლაბორატორიული დიაგნოსტიკა (CH50, AH50 და E-C4d)",
      en: "Complement Laboratory Diagnostics (CH50, AH50 & E-C4d)",
    },
    badge: { ka: "კლინიკური კორელაცია 16.2", en: "Clinical Box 16.2" },
    points: {
      ka: [
        "დაბალი CH50 და ნორმალური AH50: მიუთითებს კლასიკური გზის ადრეული კომპონენტების — C1q, C1r/s, C4 ან C2 დეფიციტზე (ასოცირებულია სისტემურ წითელ მგლურასთან).",
        "ნორმალური CH50 და დაბალი AH50: მიუთითებს ალტერნატიული გზის კომპონენტების — ფაქტორ B, ფაქტორ D ან პროპერდინის დეფიციტზე.",
        "ორივეს (CH50 და AH50) დაქვეითება: მიუთითებს ცენტრალური C3-ის ან ტერმინალური C5–C9 კომპონენტების დეფიციტზე (ნეისერიული ინფექციები).",
        "ერითროციტებზე ფიქსირებული C4d (E-C4d): ასახავს კომპლემენტის აქტიურ ანთებით მოხმარებას ბოლო 60 დღის განმავლობაში.",
      ],
      en: [
        "Low CH50 + Normal AH50: C1q, C1r/s, C4, or C2 deficiency (associated with SLE).",
        "Normal CH50 + Low AH50: Factor B, Factor D, or Properdin deficiency.",
        "Both CH50 & AH50 Low: Central C3 or terminal C5–C9 deficiency (Neisseria susceptibility).",
        "Erythrocyte-bound C4d (E-C4d): Reflects active complement consumption over the past 60 days.",
      ],
    },
  },
  {
    id: "trec_krec_contraindications",
    chapter: "16.2",
    title: {
      ka: "ახალშობილთა სკრინინგი (TREC/KREC) და 3 აბსოლუტური უკუჩვენება IEI-ის მართვაში",
      en: "Newborn Screening (TREC/KREC) & 3 Absolute Contraindications in IEI",
    },
    badge: { ka: "კრიტიკული უსაფრთხოება 16.2", en: "Critical Safety 16.2" },
    points: {
      ka: [
        "TREC და KREC სკრინინგი: V(D)J რეარანჟირებისას ამოჭრილი ეპისომური დნმ-რგოლების განსაზღვრა ახალშობილის მშრალი სისხლის წვეთში ავლენს SCID-სა (↓TREC) და აგამაგლობულინემიას (↓KREC) სიმპტომების გამოვლენამდე.",
        "უკუჩვენება 1 — ცოცხალი ატენუირებული ვაქცინები: SCID-ის, T-უჯრედული, CGD-ის და IFN-γ გზის დეფექტების დროს კატეგორიულად აკრძალულია BCG, პერორალური პოლიომიელიტის და MMR ვაქცინები (ფატალური გენერალიზებული ვაქცინური ინფექციის რისკი).",
        "უკუჩვენება 2 — დაუსხივებელი სისხლის ტრანსფუზია: T-უჯრედული დეფიციტისას დონორის T-ლიმფოციტები იწვევს ლეტალურ რეაქციას „ტრანსპლანტატი მასპინძლის წინააღმდეგ“ (GVHD).",
        "უკუჩვენება 3 — IgA-ს შემცველი პლაზმის გადასხმა IgA-ს დეფიციტის დროს: პაციენტებს გააჩნიათ ანტი-IgA ანტისხეულები, რაც ტრანსფუზიისას იწვევს მძიმე ანაფილაქსიურ შოკს.",
      ],
      en: [
        "TREC & KREC Screening: Detects SCID (↓TREC) and B-cell agammaglobulinemia (↓KREC) at birth from dried blood spots.",
        "Contraindication 1: Live attenuated vaccines (BCG, oral polio, MMR) in SCID, T-cell defects, CGD, and MSMD.",
        "Contraindication 2: Non-irradiated blood products in T-cell deficiencies due to fatal transfusion-associated GVHD.",
        "Contraindication 3: IgA-containing plasma/blood in selective IgA deficiency due to anti-IgA anaphylactic shock.",
      ],
    },
  },
  {
    id: "hygiene_and_hyperergia",
    chapter: "16.2",
    title: {
      ka: "ჰიგიენის ჰიპოთეზა, ჰემოტრანსფუზიული შოკი vs. ასპირინული ასთმა და IRIS",
      en: "Hygiene Hypothesis, Pseudoallergy vs True Allergy & HIV IRIS",
    },
    badge: { ka: "პათოფიზიოლოგია 16.2", en: "Pathophysiology 16.2" },
    points: {
      ka: [
        "ჰიგიენის ჰიპოთეზა: ადრეულ ბავშვობაში მიკრობულ ანტიგენებთან კონტაქტის ჭარბი შეზღუდვა ასუსტებს ანტივირუსულ/უჯრედულ Th1 შტოს და ხრის ბალანსს Th2-ისკენ (↑IgE, ალერგია) და აუტოიმუნიტეტისკენ.",
        "ჰემოტრანსფუზიული შოკი vs. ასპირინული ასთმა: შეუთავსებელი სისხლის გადასხმა არის სპეციფიკური იმუნოლოგიური ჰიპერერგია (IgM იზოჰემაგლუტინინებით კომპლემენტის აქტივაცია და ჰემოლიზი), ხოლო ასპირინული ასთმა — არაიმუნოლოგიური ფსევდოალერგია (ციკლოოქსიგენაზას ბლოკირება არაქიდონის მჟავას რთავს ლიპოოქსიგენაზურ გზაზე → ბრონქოსპაზმური ლეიკოტრიენების LTC4, LTD4, LTE4 ჭარბი სინთეზი სენსიბილიზაციის გარეშე).",
        "იმუნური რეკონსტიტუციის ანთებითი სინდრომი (IRIS) და განკურნების სტრატეგიები: ART-ის დაწყების შემდეგ სწრაფად აღდგენილი CD4⁺ უჯრედები იწვევენ მძაფრ ანთებით შეტევას ფარულ პათოგენებზე (ტუბერკულოზი, კრიპტოკოკი, CMV). ლატენტური რეზერვუარის წინააღმდეგ მუშავდება „Shock-and-Kill“, „Block-and-Lock“ (Tat ინჰიბიტორ დიდეჰიდრო-კორტისტატინ A-თი დადუმება) და CRISPR-Cas9.",
      ],
      en: [
        "Hygiene Hypothesis: Reduced early microbial exposure skews Th1/Th2 balance toward Th2-mediated allergy.",
        "Hemotransfusion Shock vs Aspirin Asthma: Incompatible transfusion is an IgM/complement immunological reaction; aspirin asthma is a non-immunological pseudoallergy (COX blockade shunts arachidonic acid to leukotrienes LTC4/LTD4/LTE4).",
        "HIV IRIS & Cure Strategies: Rapid CD4⁺ recovery on ART triggers hyperinflammation against occult infections (IRIS). Cure strategies include Shock-and-Kill, Block-and-Lock (Tat inhibition), and CRISPR-Cas9.",
      ],
    },
  },
];

// ============================================================================
// შედარებითი ცხრილები (თავი 16.1 და 16.2)
// ============================================================================
export const studyTables: StudyTableData[] = [
  {
    id: "immune_evasion_table",
    chapter: "16.1",
    title: {
      ka: "პათოგენების მიერ მასპინძლის იმუნური პასუხის არიდების მექანიზმები (ცხრილი 16.1)",
      en: "Pathogen Immune Evasion Mechanisms (Table 16.1)",
    },
    headers: {
      ka: ["მასპინძლის დაცვის რგოლი", "პათოგენის ანტი-იმუნური სტრატეგია", "კლინიკური მაგალითი"],
      en: ["Host Defense Arm", "Pathogen Evasion Strategy", "Representative Pathogens"],
    },
    rows: {
      ka: [
        [
          "ფაგოციტოზი",
          "პოლისაქარიდული კაფსულის წარმოქმნა; ფაგოლიზოსომის შერწყმის ბლოკირება; ლეიკოციდინებით ფაგოციტების მემბრანის დაშლა; კოაგულაზათი ფიბრინული კოლტის შექმნა.",
          "Streptococcus pneumoniae; Mycobacterium tuberculosis; Staphylococcus aureus.",
        ],
        [
          "ანტისხეულები და კომპლემენტი",
          "ანტიგენური ცვალებადობა; პროტეინ A-თი IgG-ს Fc-ფრაგმენტის შებოჭვა; სეკრეტორული IgA-პროტეაზების გამოყოფა.",
          "გრიპის ვირუსი; S. aureus; Neisseria gonorrhoeae, Haemophilus influenzae.",
        ],
        [
          "უჯრედული იმუნიტეტი",
          "იმუნოსუპრესიული ციტოკინების (IL-10) ინდუქცია; MHC I კლასის მოლეკულებით ანტიგენის წარდგენის ბლოკირება; CD4⁺ T-უჯრედების დაზიანება.",
          "Leishmania spp.; ციტომეგალოვირუსი (CMV); აივ (HIV).",
        ],
        [
          "კუჭის მჟავე ბარიერი",
          "შოლტებით ლორწოვან შრეში ჩაღრმავება და ფერმენტ ურეაზას სეკრეცია (შლის შარდოვანას ამიაკის წარმოქმნით და ანეიტრალებს H⁺ იონებს).",
          "Helicobacter pylori.",
        ],
      ],
      en: [
        [
          "Phagocytosis",
          "Polysaccharide capsule; inhibition of phagolysosome fusion; leukocidins; coagulase clot formation.",
          "S. pneumoniae; M. tuberculosis; S. aureus.",
        ],
        [
          "Antibodies & Complement",
          "Antigenic variation; Protein A binding IgG Fc; secretory IgA proteases.",
          "Influenza virus; S. aureus; N. gonorrhoeae, H. influenzae.",
        ],
        [
          "Cellular Immunity",
          "IL-10 induction; blockade of MHC Class I antigen presentation; CD4⁺ T-cell destruction.",
          "Leishmania spp.; CMV; HIV.",
        ],
        [
          "Gastric Acid Barrier",
          "Flagellar burrowing into mucus and urease secretion (producing ammonia to neutralize H⁺).",
          "Helicobacter pylori.",
        ],
      ],
    },
  },
  {
    id: "reactivity_resistance_table",
    chapter: "16.2",
    title: {
      ka: "რეაქტიულობისა და რეზისტენტობის თანაფარდობის ვარიანტები (ცხრილი 16.2)",
      en: "Reactivity vs. Resistance Correlation Variants (Table 16.2)",
    },
    headers: {
      ka: ["რეაქტიულობა", "რეზისტენტობა", "კლინიკურ-ფიზიოლოგიური მაგალითები", "მექანიზმი"],
      en: ["Reactivity", "Resistance", "Clinical-Physiological Examples", "Mechanism"],
    },
    rows: {
      ka: [
        [
          "მომატებული (↑)",
          "მომატებული (↑)",
          "აქტიური იმუნიტეტი (ვაქცინაციის/ინფექციის შემდეგ), აკლიმატიზაცია.",
          "ნერვული, ენდოკრინული და იმუნური სისტემების კოორდინირებული მობილიზაცია.",
        ],
        [
          "მომატებული (↑)",
          "დაქვეითებული (↓)",
          "ჰიპერერგიული ანთება, ატოპიური ალერგია, ანაფილაქსიური და სეპტიური შოკი.",
          "დისრეგულირებული აგზნება; აუტოდამაზიანებელი მედიატორებისა და ციტოკინების გადმოტყორცნა.",
        ],
        [
          "დაქვეითებული (↓)",
          "მომატებული (↑)",
          "ზამთრის ძილი (ჰიბერნაცია), მართვადი ჰიპოთერმია, ღრმა ნარკოზი.",
          "დადებითი ჰიპერგია: ცნს-ში შეკავების დომინირება, ჟანგბადზე მოთხოვნილების მკვეთრი შემცირება.",
        ],
        [
          "დაქვეითებული (↓)",
          "დაქვეითებული (↓)",
          "მოხუცებულობა, უარყოფითი ანერგია, მძიმე შიმშილი, შიდს-ის ტერმინალური სტადია.",
          "ნეიროენდოკრინული და იმუნოკომპეტენტური აპარატის სტრუქტურულ-ფუნქციური გამოფიტვა.",
        ],
      ],
      en: [
        [
          "Increased (↑)",
          "Increased (↑)",
          "Active post-vaccination/post-infection immunity, acclimatization.",
          "Coordinated mobilization of neuroendocrine and immune systems.",
        ],
        [
          "Increased (↑)",
          "Decreased (↓)",
          "Hyperergic inflammation, atopic allergy, anaphylactic and septic shock.",
          "Dysregulated excitation; massive release of tissue-damaging mediators and cytokines.",
        ],
        [
          "Decreased (↓)",
          "Increased (↑)",
          "Hibernation, controlled hypothermia, deep anesthesia.",
          "Positive hypergia: CNS inhibition and sharp reduction in oxygen demand.",
        ],
        [
          "Decreased (↓)",
          "Decreased (↓)",
          "Senescence, negative anergy, severe starvation, terminal AIDS.",
          "Structural and functional exhaustion of neuroendocrine and immune apparatus.",
        ],
      ],
    },
  },
  {
    id: "iuis_2024_table",
    chapter: "16.2",
    title: {
      ka: "იმუნიტეტის თანდაყოლილი შეცდომების (IEI) IUIS 2024 წლის 10-ჯგუფიანი კლასიფიკაცია (559 დაავადება)",
      en: "IUIS 2024 10-Category Classification of Inborn Errors of Immunity (559 Diseases)",
    },
    headers: {
      ka: ["#", "IUIS 2024 კატეგორია", "ძირითადი ნოზოლოგიები და გენები", "დამახასიათებელი კლინიკური ფენოტიპი"],
      en: ["#", "IUIS 2024 Category", "Key Nosologies & Genes", "Characteristic Clinical Phenotype"],
    },
    rows: {
      ka: [
        [
          "1",
          "კომბინირებული იმუნოდეფიციტები (73 გენი)",
          "T⁻B⁺ SCID (IL2RG, JAK3, IL7R); T⁻B⁻ SCID (RAG1/2, DCLRE1C, ADA, AK2); CID (CD40LG, ZAP70, TAP1/2, CIITA).",
          "ღრმა T-ლიმფოპენია (CD3⁺ < 300/μL), ჰიპოგამაგლობულინემია; ადრეული ლეტალური ვირუსული, სოკოვანი (P. jirovecii) და ბაქტერიული ინფექციები.",
        ],
        [
          "2",
          "სინდრომული კომბინირებული იმუნოდეფიციტები (83 გენი)",
          "დი ჯორჯი (22q11.2/TBX1), ვისკოტ-ოლდრიჩი (WAS), ატაქსია-ტელეანგიექტაზია (ATM), ჯობის სინდრომი (STAT3 LOF), PNP.",
          "თიმუსის აპლაზია + ჰიპოკალციემია + გულის მანკი (დი ჯორჯი); მიკროთრომბოციტოპენია + ეგზემა (WAS); ატაქსია + ტელეანგიექტაზია (ATM); „ცივი“ აბსცესები + ↑IgE (ჯობი).",
        ],
        [
          "3",
          "უპირატესად ანტისხეულების დეფიციტები (48 გენი)",
          "ბრუტონის XLA (BTK); CVID (TACI, BAFF-R, NFKB1/2, PIK3CD); ჰიპერ-IgM (AICDA, UNG); IgA-ს დეფიციტი.",
          "B-უჯრედების არარსებობა (XLA) ან იზოტიპური გადართვის ბლოკი; მორეციდივე სინოპულმონური ინფექციები კაფსულიანი ბაქტერიებით, ლამბლიოზი.",
        ],
        [
          "4",
          "იმუნური დისრეგულაციის დაავადებები (72 გენი)",
          "ფამილური HLH (PRF1, UNC13D); Treg დეფექტები (FOXP3 [IPEX], CTLA4, LRBA); APECED (AIRE); ALPS (FAS, FASLG).",
          "ჰემოფაგოციტური „ციტოკინური შტორმი“ (HLH), აუტოიმუნური ენტეროპათია/ენდოკრინოპათია (IPEX, APECED), ლიმფოპროლიფერაცია (ALPS).",
        ],
        [
          "5",
          "ფაგოციტების რიცხვის ან ფუნქციის დეფექტები (45 გენი)",
          "თანდაყოლილი ნეიტროპენია (ELANE, HAX1); LAD I–III (ITGB2); CGD (CYBB, NCF1); ჩედიაკ-ჰიგასი (LYST).",
          "აგრანულოციტოზი; უჩირქო ნეკროზული ინფექციები და ლეიკოციტოზი (LAD I); კატალაზა-დადებითი აბსცესები და გრანულომები (CGD).",
        ],
        [
          "6",
          "შინაგანი და თანდაყოლილი იმუნიტეტის დეფექტები (86 გენი)",
          "MSMD (IFNGR1/2, IL12RB1, STAT1 LOF); HSE (TLR3, UNC93B1, TBK1); CMC (CARD9, IL17RA); პიოგენური (IRAK4, MYD88).",
          "სელექციური მოწყვლადობა BCG/მიკობაქტერიების (MSMD), HSV-1 ენცეფალიტის (HSE), კანდიდოზისა (CMC) და პიოგენური ბაქტერიების მიმართ.",
        ],
        [
          "7",
          "აუტოანთებითი დაავადებები (69 გენი)",
          "ინფლამასომოპათიები (MEFV [FMF], NLRP3 [CAPS]); ინტერფერონოპათიები (TMEM173 [SAVI], TREX1 [AGS]); NOD2.",
          "სტერილური სისტემური ანთება პერიოდული ცხელებით, პოლისეროზიტით, ურტიკარიით, ვასკულიტითა და AA-ამილოიდოზით (↑IL-1β ან ↑IFN-I).",
        ],
        [
          "8",
          "კომპლემენტის დეფიციტები (36 გენი)",
          "C1QA–C, C4, C2, C3, C5–C9; რეგულატორები: SERPING1 (C1-Inh), CFH, CFI, CD46, CD55, CD59.",
          "სისტემური წითელი მგლურა (C1q/C4/C2), ნეისერიული ინფექციები (C5–C9), კვინკეს შეშუპება (C1-Inh), aHUS (CFH/CFI/CD46), CHAPLE (CD55).",
        ],
        [
          "9",
          "ძვლის ტვინის უკმარისობა (47 გენი)",
          "ფანკონის ანემია (FANCA–W), თანდაყოლილი დისკერატოზი (DKC1, TERT), MIRAGE (SAMD9/9L).",
          "პანციტოპენია, ტელომერების დამოკლება ან დნმ-ის რეპარაციის მოშლა, მიელოდისპლაზია და მწვავე ლეიკემია.",
        ],
        [
          "10",
          "IEI-ის ფენოკოპიები (17 მდგომარეობა)",
          "სომატური მუტაციები: VEXAS (UBA1), ALPS-sFAS; აუტოანტისხეულები: ანტი-IFN-α/ω, ანტი-IFN-γ, ანტი-IL-17, ანტი-GM-CSF.",
          "გერმინაციული მუტაციის გარეშე იმეორებს IEI-ს: ზრდასრულთა აუტოანთება (VEXAS), კრიტიკული COVID-19 (ანტი-IFN-I), ალვეოლური პროტეინოზი.",
        ],
      ],
      en: [
        ["1", "Combined Immunodeficiencies (73 genes)", "T⁻B⁺ SCID (IL2RG, JAK3); T⁻B⁻ SCID (RAG1/2, ADA)", "Severe T-lymphopenia (<300/μL), early fatal opportunistic infections."],
        ["2", "Syndromic Combined IDs (83 genes)", "DiGeorge (22q11.2), Wiskott-Aldrich (WAS), ATM, Job (STAT3 LOF)", "Thymic aplasia/hypocalcemia; microthrombocytopenia; ataxia; cold abscesses."],
        ["3", "Predominantly Antibody Deficiencies (48 genes)", "Bruton XLA (BTK), CVID, Hyper-IgM, Selective IgA Deficiency", "Recurrent sinopulmonary infections with encapsulated bacteria, Giardia."],
        ["4", "Diseases of Immune Dysregulation (72 genes)", "HLH (PRF1), IPEX (FOXP3), APECED (AIRE), ALPS (FAS)", "Hemophagocytic cytokine storm, autoimmune enteropathy/endocrinopathy."],
        ["5", "Phagocyte Defects (45 genes)", "ELANE, HAX1, LAD I–III (ITGB2), CGD (CYBB), Chediak-Higashi (LYST)", "Non-purulent necrotic infections (LAD I); catalase-positive abscesses (CGD)."],
        ["6", "Intrinsic & Innate Immunity Defects (86 genes)", "MSMD (IL-12/IFN-γ), HSE (TLR3), CMC (CARD9), IRAK4/MYD88", "Susceptibility to Mycobacteria, HSV-1 encephalitis, Candida, pyogens."],
        ["7", "Autoinflammatory Disorders (69 genes)", "FMF (MEFV), CAPS (NLRP3), SAVI (STING), AGS (TREX1)", "Sterile periodic fever, polyserositis, vasculitis, AA amyloidosis."],
        ["8", "Complement Deficiencies (36 genes)", "C1q/C4/C2, C3, C5–C9, C1-Inh (SERPING1), CFH/CFI/CD46, CD55", "SLE, disseminated Neisseria, Hereditary Angioedema, aHUS, CHAPLE."],
        ["9", "Bone Marrow Failure (47 genes)", "Fanconi anemia, Dyskeratosis congenita (DKC1), MIRAGE", "Pancytopenia, telomere defects, MDS, and acute leukemia."],
        ["10", "Phenocopies of IEI (17 conditions)", "Somatic VEXAS (UBA1); Autoantibodies to IFN-I, IFN-γ, IL-17, GM-CSF", "Adult autoinflammation (VEXAS), critical COVID-19, alveolar proteinosis."],
      ],
    },
  },
];

// ============================================================================
// თვითშემოწმების 17 საკონტროლო კითხვა (თავი 16.1 [1–9] და თავი 16.2 [10–17])
// ============================================================================
export const quizQuestions: QuizQuestion[] = [
  // --- თავი 16.1 (BiologicalFactors.tex) ---
  {
    id: 1,
    chapter: "16.1",
    question: {
      ka: "1. განმარტეთ განსხვავება ბაქტერიემიას, სეფსისს, სეპტიკოპიემიას, რეინფექციასა და სუპერინფექციას შორის.",
      en: "1. Explain the difference between bacteremia, sepsis, septicopyemia, reinfection, and superinfection.",
    },
    keyTerms: ["ბაქტერიემია", "სეფსისი", "სეპტიკოპიემია", "რეინფექცია", "სუპერინფექცია", "მეორადი ინფექცია"],
    answer: {
      ka: "• ბაქტერიემია (და ვირუსემია): სისხლში ბაქტერიების ან ვირუსების არსებობა მათი გამრავლების ნიშნების გარეშე (ხშირად ტრანზიტორულია).\n• სეფსისი (სეპტიცემია): ინფექციური პროცესის მძიმე, გენერალიზებული ფორმა, რომელიც განპირობებულია იმუნური დაცვის უკმარისობის ფონზე სისხლსა და სხვა ბიოლოგიურ სითხეებში მიკროორგანიზმების გამრავლებითა და სისტემური ანთებითი პასუხით (SIRS).\n• სეპტიკოპიემია: სეფსისის ფორმა, რომლის დროსაც სხვადასხვა ქსოვილსა და ორგანოში ყალიბდება მეორადი (მეტასტაზური) ჩირქოვანი კერები.\n• რეინფექცია: სრული გამოჯანმრთელების შემდეგ იმავე სახეობის მიკროორგანიზმით ინფექციური პროცესის განმეორებითი განვითარება.\n• სუპერინფექცია: ორგანიზმის განმეორებითი დაინფიცირება იმავე გამომწვევით გამოჯანმრთელებამდე (განსხვავებით მეორადი ინფექციისგან, სადაც პირველად ინფექციას ემატება სხვა სახეობის მიკრობი).",
      en: "• Bacteremia: Presence of bacteria in blood without multiplication.\n• Sepsis: Generalized infection with microbial proliferation in blood and systemic inflammatory response (SIRS) due to immune failure.\n• Septicopyemia: Sepsis accompanied by secondary metastatic purulent foci in organs.\n• Reinfection: Repeat infection by the same pathogen after complete recovery.\n• Superinfection: Repeat infection by the same pathogen before recovery is complete.",
    },
  },
  {
    id: 2,
    chapter: "16.1",
    question: {
      ka: "2. რით განსხვავდება ბაქტერიული ენდოტოქსინი ეგზოტოქსინისგან წარმოშობისა და მოქმედების მექანიზმის მიხედვით?",
      en: "2. How does bacterial endotoxin differ from exotoxin in origin and mechanism of action?",
    },
    keyTerms: ["ეგზოტოქსინი", "ენდოტოქსინი", "LPS", "ლიპიდ A", "TLR4", "დსკ"],
    answer: {
      ka: "• ეგზოტოქსინები: ცოცხალი ბაქტერიის ცხოველმყოფელობის პროცესში სეკრეტირებული ცილებია, რომლებიც ავლენენ უმაღლეს ქსოვილოვან და მოლეკულურ სპეციფიკურობას (მაგ., დიფტერიის ტოქსინი თრგუნავს ცილის სინთეზს; ბოტულიზმის ტოქსინი ბლოკავს აცეტილქოლინის გამოყოფას → დუნე დამბლა; ტეტანუსის ტოქსინი ბლოკავს შემაკავებელ ნეირონებს → სპასტიური კრუნჩხვა; ქოლერის ტოქსინი იწვევს წყლისა და ელექტროლიტების სეკრეციას).\n• ენდოტოქსინები: წარმოადგენს გრამ-უარყოფითი ბაქტერიების გარეთა მემბრანის სტრუქტურულ კომპონენტს — ლიპოპოლისაქარიდს (LPS), რომელიც თავისუფლდება მხოლოდ ბაქტერიული უჯრედის დაშლის (ლიზისის) დროს. მისი ტოქსიკურობა განპირობებულია ლიპიდ A კომპონენტით, რომელიც უკავშირდება მაკროფაგების TLR4-ს და იწვევს TNF-α, IL-1, IL-6 და NO-ს მასობრივ გამოთავისუფლებას, ცხელებას, დსკ სინდრომსა და სეპტიურ შოკს.",
      en: "• Exotoxins: Proteins actively secreted by living bacteria with high target specificity (diphtheria, botulinum, tetanus, cholera toxins).\n• Endotoxins: Outer membrane lipopolysaccharide (LPS) of Gram-negative bacteria released upon cell lysis; Lipid A binds macrophage TLR4, triggering massive TNF-α, IL-1, IL-6 release, fever, DIC, and septic shock.",
    },
  },
  {
    id: 3,
    chapter: "16.1",
    question: {
      ka: "3. ახსენით სუპერანტიგენების მოქმედების მოლეკულური მექანიზმი ტოქსიკური შოკის სინდრომის დროს.",
      en: "3. Explain the molecular mechanism of superantigens in Toxic Shock Syndrome (TSS).",
    },
    keyTerms: ["სუპერანტიგენი", "S. aureus", "MHC II", "TCR Vβ", "20%", "ციტოკინური შტორმი"],
    answer: {
      ka: "სუპერანტიგენები (მაგ., Staphylococcus aureus-ისა და β-ჰემოლიზური სტრეპტოკოკის ტოქსინები) ანტიგენის წინასწარი პროცესინგის გარეშე, არასპეციფიკურად და პირდაპირ აკავშირებენ ანტიგენ-წარმდგენი უჯრედების (APC) MHC II კლასის მოლეკულებსა და T-ლიმფოციტების რეცეპტორის (TCR) Vβ დომენებს. შედეგად ხდება მთელი T-ლიმფოციტური პოპულაციის 20%-მდე მასობრივი პოლიკლონური აქტივაცია, პროანთებითი ციტოკინების უკონტროლო გადმოტყორცნა („ციტოკინური შტორმი“), მწვავე ცხელება, არტერიული ჰიპოტენზია, დიფუზური მაკულარული ერითემა და მულტიორგანული უკმარისობა (MODS).",
      en: "Superantigens (S. aureus, S. pyogenes) bypass normal antigen processing and directly cross-link APC MHC Class II molecules to the Vβ domain of T-cell receptors (TCR), polyclonally activating up to 20% of all T lymphocytes and unleashing a cytokine storm, fever, hypotension, diffuse erythema, and MODS.",
    },
  },
  {
    id: 4,
    chapter: "16.1",
    question: {
      ka: "4. დაახასიათეთ რიკეტსიებისა და ქლამიდიების ბიოლოგიური თავისებურებები, გადაცემის გზები და უჯრედების დაზიანების მექანიზმი.",
      en: "4. Characterize the biological features, transmission routes, and cellular damage mechanisms of Rickettsia and Chlamydia.",
    },
    keyTerms: ["ობლიგატური უჯრედშიდა", "ენდოთელიუმი", "ელემენტარული ნაწილაკი", "რეტიკულური სხეულაკი", "ორნითოზი"],
    answer: {
      ka: "• რიკეტსიები (Rickettsia): გრამ-უარყოფითი ობლიგატური უჯრედშიდა პარაზიტებია (გააჩნიათ უჯრედის კედელი, დნმ და რნმ). გადაეცემა ფეხსახსრიანი გადამტანებით (ტილები, რწყილები, ტკიპები — გამომწვევი გადამტანის ექსკრემენტებთან ერთად ხვდება კანში ნაკბენის დაფხანისას). მრავლდებიან სისხლძარღვთა ენდოთელიუმის ციტოპლაზმაში, იწვევენ უჯრედის ნეკროზს, ვასკულიტსა და მძიმე რიკეტსიოზებს (ეპიდემიური პარტახტიანი ტიფი, კლდოვანი მთების ლაქოვანი ცხელება).\n• ქლამიდიები (Chlamydia): უფრო მცირე ზომის ობლიგატური უჯრედშიდა პარაზიტებია, რომლებიც გადაეცემა გადამტანების გარეშე — პირდაპირი კონტაქტით ან აეროზოლით. ახასიათებთ განვითარების ორფაზიანი ციკლი: ინფექციური „ელემენტარული ნაწილაკი“ იჭრება უჯრედში და გარდაიქმნება მეტაბოლურად აქტიურ „რეტიკულურ სხეულაკად“, რომელიც მრავლდება და წარმოქმნის ახალ ელემენტარულ ნაწილაკებს. იწვევენ უროგენიტალურ ინფექციებს, ტრაქომას, ახალშობილთა პნევმონიასა და ფსიტაკოზს/ორნითოზს (ფრინველების ექსკრემენტების შესუნთქვით).",
      en: "• Rickettsia: Gram-negative obligate intracellular bacteria transmitted via arthropods (lice, fleas, ticks). They replicate in vascular endothelial cytoplasm, causing necrosis and typhus/spotted fevers.\n• Chlamydia: Obligate intracellular bacteria transmitted by direct contact or inhalation with a biphasic cycle (infectious elementary body → replicative reticulate body), causing urogenital infections, trachoma, and psittacosis.",
    },
  },
  {
    id: 5,
    chapter: "16.1",
    question: {
      ka: "5. აღწერეთ პრიონული ინფექციების პათოგენეზის უნიკალური ცილოვანი მექანიზმი.",
      en: "5. Describe the unique protein-based pathogenesis of prion infections.",
    },
    keyTerms: ["PrPSc", "PrPc", "β-სტრუქტურა", "ამილოიდური ფოლაქები", "სპონგიოფორმული ენცეფალოპათია"],
    answer: {
      ka: "პრიონები არ შეიცავენ ნუკლეინის მჟავებს (არც დნმ-ს, არც რნმ-ს) და წარმოადგენენ ანომალური მესამეული სტრუქტურის (β-ფურცლოვანი სტრუქტურით მდიდარ) ინფექციურ ცილოვან მოლეკულებს — PrPSc-ს. ორგანიზმში ალიმენტური ან იატროგენული გზით მოხვედრისას პათოლოგიური PrPSc კონტაქტურად გარდაქმნის მასპინძლის ნორმალურ ნეირონულ ცილას (PrPc) პათოლოგიურ, პროტეოლიზის მიმართ მდგრად PrPSc იზოფორმად. ეს ცილები გროვდება ცნს-ში ამილოიდური ფოლაქების სახით, რთავს ნეირონების აპოპტოზს და იწვევს ფატალურ სპონგიოფორმულ (ღრუბლისებრ) ენცეფალოპათიებს (კროიცფელდ-იაკობის დაავადება, კურუ, ფატალური ოჯახური უძილობა).",
      en: "Prions (PrPSc) lack nucleic acids and consist of misfolded, β-sheet-rich proteins that template the conformational conversion of normal host neuronal PrPc into protease-resistant PrPSc. Resulting amyloid plaques trigger neuronal apoptosis and fatal spongiform encephalopathies (CJD, Kuru, FFI).",
    },
  },
  {
    id: 6,
    chapter: "16.1",
    question: {
      ka: "6. ჩამოთვალეთ ინფექციური პროცესის პათოგენეზის ხუთი ძირითადი რგოლი და მწვავე ფაზის პასუხის მთავარი მარკერები.",
      en: "6. List the five main pathogenetic links of the infectious process and the main markers of the acute phase response.",
    },
    keyTerms: ["ცხელება", "ანთება", "ჰიპოქსია", "C-რეაქტიული ცილა", "ალბუმინი", "ტრანსფერინი"],
    answer: {
      ka: "პათოგენეზის 5 ძირითადი რგოლი:\n1. ცხელება (ენდოგენური პიროგენები IL-1, IL-6, TNF-α ჰიპოთალამუსში წევენ ტემპერატურულ ნიშნულს).\n2. ანთება (კერის შემოფარგვლა და პათოგენის ელიმინაცია, მაგრამ ჭარბი აქტივაციისას — ქსოვილოვანი დესტრუქცია).\n3. ჰიპოქსია (რესპირატორული, ცირკულაციური, ჰემური და ქსოვილოვანი).\n4. მეტაბოლიზმის დარღვევა (საწყის ფაზაში კატაბოლიზმი — პროტეოლიზი, ლიპოლიზი, გლიკოგენოლიზი; გამოჯანმრთელებისას — ანაბოლიზმი).\n5. ორგანოთა ფუნქციის მოშლა და სისტემური მწვავე ფაზის პასუხი: ღვიძლში იზრდება დადებითი მწვავე ფაზის ცილები (C-რეაქტიული ცილა [CRP], შრატის ამილოიდი A [SAA], ფიბრინოგენი, კომპლემენტის კომპონენტები — რაც ზრდის ედს-ს) და მცირდება უარყოფითი მწვავე ფაზის ცილები (ალბუმინი, ტრანსფერინი, IGF-1).",
      en: "5 Links: 1) Fever (IL-1, IL-6, TNF-α); 2) Inflammation; 3) Hypoxia (respiratory, circulatory, hemic, histotoxic); 4) Metabolic disturbances (catabolism → anabolism); 5) Organ dysfunction & Acute Phase Response: increased positive acute phase proteins (CRP, SAA, fibrinogen, complement → ↑ESR) and decreased negative acute phase proteins (albumin, transferrin, IGF-1).",
    },
  },
  {
    id: 7,
    chapter: "16.1",
    question: {
      ka: "7. დაასახელეთ და მოკლედ აღწერეთ ინფექციური დაავადების კლინიკური მიმდინარეობის ხუთი პერიოდი.",
      en: "7. Name and briefly describe the five clinical periods of an infectious disease.",
    },
    keyTerms: ["ინკუბაციური", "პროდრომული", "პათოგნომური", "რეკონვალესცენცია"],
    answer: {
      ka: "1. ინკუბაციური (ფარული) პერიოდი: პათოგენის შეჭრიდან პირველ კლინიკურ ნიშნებამდე (სალმონელოზი 6–24 სთ, B ჰეპატიტი 50–150 დღე, აივ — წლები).\n2. პროდრომული პერიოდი: პირველი არასპეციფიკური სიმპტომების გამოვლენა (საერთო სისუსტე, უგუნებობა, თავისა და კუნთების ტკივილი, სუბფებრილიტეტი).\n3. ძირითადი კლინიკური გამოვლინებების პერიოდი: გამომწვევის პროლიფერაცია და ტოქსინების კონცენტრაცია აღწევს პიკს; ვლინდება დაავადებისთვის დამახასიათებელი სპეციფიკური (პათოგნომური) სიმპტომები.\n4. აღდგენის (რეკონვალესცენციის) პერიოდი: პათოგენის ელიმინაცია, ქსოვილების რეპარაცია და სიმპტომების თანდათანობითი შესუსტება.\n5. სრული გამოჯანმრთელების პერიოდი: პათოგენის სრული გამოდევნა და ყველა სიმპტომის გაქრობა.",
      en: "1) Incubation period (entry to first symptoms); 2) Prodromal period (non-specific symptoms); 3) Peak clinical manifestations (pathognomonic symptoms); 4) Convalescence (elimination & tissue repair); 5) Complete recovery.",
    },
  },
  {
    id: 8,
    chapter: "16.1",
    question: {
      ka: "8. რა როლს ასრულებს არასპეციფიკური ბარიერები, ჰუმორული იმუნიტეტი და CD8+/CD4+ T-ლიმფოციტები უჯრედგარე და უჯრედშიდა ინფექციებისგან დაცვაში?",
      en: "8. What roles do nonspecific barriers, humoral immunity, and CD8+/CD4+ T lymphocytes play in defense against extracellular and intracellular infections?",
    },
    keyTerms: ["ლიზოციმი", "IgM", "IgG", "IgA", "IgE", "MHC I", "CD8+ CTL", "CD4+ Th1", "IFN-γ"],
    answer: {
      ka: "• არასპეციფიკური დაცვა: მექანიკური ბარიერები (კანი, მუკოცილიარული კლირენსი), ფაგოციტოზი (ნეიტროფილები, მაკროფაგები) და ჰუმორული ფაქტორები (ლიზოციმი — შლის გრამ(+) პეპტიდოგლიკანს; ლაქტოფერინი — ბოჭავს რკინას; კომპლემენტი; ინტერფერონები).\n• ჰუმორული იმუნიტეტი (B-ლიმფოციტები): იცავს უჯრედგარე ბაქტერიებისა და ტოქსინებისგან (IgM — პირველადი პასუხი და კომპლემენტის აქტივაცია; IgG — ოფსონიზაცია და ტრანსპლაცენტური დაცვა; IgA — ლორწოვანების დაცვა; IgE — ანტიჰელმინთური დაცვა).\n• უჯრედული იმუნიტეტი (T-ლიმფოციტები): იცავს უჯრედშიდა პათოგენებისგან. ვირუსით ინფიცირებული უჯრედები ვირუსულ პეპტიდებს წარადგენენ MHC I-ზე, რომლებსაც ანადგურებენ CD8⁺ ციტოტოქსიკური T-ლიმფოციტები; ხოლო მაკროფაგებში მცხოვრები მიკრობების (მიკობაქტერიები) განადგურება ხდება CD4⁺ Th1-ის მიერ გამოყოფილი IFN-γ-ით.",
      en: "• Nonspecific: Barriers, phagocytes, lysozyme, lactoferrin, complement, interferons.\n• Humoral (B cells/IgM, IgG, IgA, IgE): Targets extracellular bacteria and toxins.\n• Cellular (T cells): Targets intracellular pathogens; CD8⁺ CTLs lyse virus-infected cells presenting peptides on MHC Class I, while CD4⁺ Th1 cells secrete IFN-γ to activate macrophage killing of intravesicular bacteria.",
    },
  },
  {
    id: 9,
    chapter: "16.1",
    question: {
      ka: "9. ჩამოთვალეთ ინფექციური პროცესის თერაპიის სამი ძირითადი პრინციპი.",
      en: "9. List the three main principles of therapy for the infectious process.",
    },
    keyTerms: ["ეტიოტროპული", "პათოგენეზური", "სიმპტომური"],
    answer: {
      ka: "1. ეტიოტროპული თერაპია: მიმართულია უშუალოდ გამომწვევის განადგურების ან მისი რეპლიკაციის დათრგუნვისკენ (ანტიბიოტიკები, ანტივირუსული, სოკოს საწინააღმდეგო და ანტიპროტოზოული პრეპარატები).\n2. პათოგენეზური თერაპია: მიზნად ისახავს ინფექციური პროცესის პათოგენეზური რგოლების ბლოკირებას — დეზინტოქსიკაციური და ინფუზიური თერაპია, ანთების საწინააღმდეგო საშუალებები, იმუნოკორექცია, მიკროცირკულაციისა და დაზიანებულ ორგანოთა ფუნქციების აღდგენა.\n3. სიმპტომური თერაპია: ამსუბუქებს პაციენტის ზოგად მდგომარეობას და ხსნის სუბიექტურად მძიმე სიმპტომებს (სიცხის დამწევი, ტკივილგამაყუჩებელი, სედაციური საშუალებები).",
      en: "1) Etiotropic therapy (antimicrobials targeting the pathogen); 2) Pathogenetic therapy (detoxification, fluid resuscitation, anti-inflammatories, microcirculatory and organ support); 3) Symptomatic therapy (antipyretics, analgesics, sedatives).",
    },
  },

  // --- თავი 16.2 (ImmuneSystem.tex) ---
  {
    id: 10,
    chapter: "16.2",
    question: {
      ka: "10. (16.2 #1) განმარტეთ რეაქტიულობის სახეობრივი, ჯგუფური და ინდივიდუალური დონეები და ახსენით პათოფიზიოლოგიური განსხვავება დადებით და უარყოფით ჰიპერგიას (ანერგიას) შორის.",
      en: "10. (16.2 #1) Define species, group, and individual levels of reactivity and explain the pathophysiological difference between positive and negative hypergia (anergy).",
    },
    keyTerms: ["სახეობრივი", "ჯგუფური", "ინდივიდუალური", "დადებითი ჰიპერგია", "უარყოფითი ანერგია"],
    answer: {
      ka: "• სახეობრივი რეაქტიულობა: განისაზღვრება სახეობის მემკვიდრული თავისებურებებითა და რეცეპტორული ქიმიური არაკომპლემენტარობით (მაგ., ადამიანის აბსოლუტური რეზისტენტობა ძაღლის ჭირისა და მსხვილფეხა პირუტყვის თურქულის ვირუსების მიმართ).\n• ჯგუფური რეაქტიულობა: ასახავს პოპულაციური ჯგუფების რეაგირებას კონსტიტუციის, სისხლის ჯგუფების (I ჯგუფი — თორმეტგოჯას წყლული; Duffy-უარყოფითი — მდგრადობა P. vivax-ის მიმართ), HLA ჰაპლოტიპების, სქესისა (SLE ქალებში 9:1) და ასაკის მიხედვით.\n• ინდივიდუალური რეაქტიულობა: განისაზღვრება უნიკალური გენოტიპით, ეპიგენეტიკითა და გადატანილი დაავადებებით.\n• დადებითი ჰიპერგია vs. უარყოფითი ჰიპერგია/ანერგია: დადებითი ჰიპერგიის დროს რეაქტიულობის დაქვეითება ზოგავს ენერგორესურსებს და ზრდის რეზისტენტობას (ჰიბერნაცია, მართვადი ჰიპოთერმია, ღრმა ნარკოზი, ფიზიოლოგიური აუტოტოლერანტობა); ხოლო უარყოფითი ჰიპერგიის/ანერგიის დროს როგორც რეაქტიულობა, ისე რეზისტენტობა დაქვეითებულია დაცვითი სისტემების გამოფიტვის გამო (მძიმე შიმშილი, ტერმინალური ტუბერკულოზი, შიდს-ი).",
      en: "• Species reactivity: Receptor non-complementarity (human immunity to canine distemper).\n• Group reactivity: Determined by blood groups (O group → duodenal ulcer; Duffy-negative → P. vivax resistance), HLA, sex (SLE 9:1 in females), and age.\n• Individual reactivity: Unique genotype/epigenetics.\n• Positive vs Negative Hypergia/Anergy: Positive hypergia conserves energy and increases resistance (hibernation, hypothermia, self-tolerance), whereas negative anergy reflects immune/neuroendocrine exhaustion with low resistance (starvation, terminal AIDS/TB).",
    },
  },
  {
    id: 11,
    chapter: "16.2",
    question: {
      ka: "11. (16.2 #2) რა მოლეკულური მექანიზმით იწვევს β2-ინტეგრინის (CD18) გენეტიკური დეფექტი (LAD I) სისხლში ექსტრემალურ ნეიტროფილურ ლეიკოციტოზს ანთების კერაში ჩირქის წარმოქმნის სრული არარსებობის ფონზე?",
      en: "11. (16.2 #2) By what molecular mechanism does β2-integrin (CD18) genetic defect (LAD I) cause extreme neutrophilic leukocytosis in blood with complete absence of pus in the inflammatory focus?",
    },
    keyTerms: ["ITGB2", "CD18", "LFA-1", "ICAM-1", "CR3", "ომფალიტი", "უჩირქო ნეკროზი"],
    answer: {
      ka: "LAD I გამოწვეულია 21-ე ქრომოსომაზე ITGB2 გენის აუტოსომურ-რეცესიული მუტაციით, რომელიც აკოდირებს β2-ინტეგრინების საერთო სუბერთეულს — CD18-ს (LFA-1, CR3, p150,95). LFA-1-ის არარსებობის გამო ნეიტროფილები ვერ ემაგრებიან სისხლძარღვის ენდოთელიუმის ICAM-1 მოლეკულას, ვერ ახორციელებენ დიაპედეზს (ემიგრაციას) და ვერ გადადიან სისხლიდან ინფიცირებულ ქსოვილებში. შედეგად, ქსოვილებში ნეიტროფილების არარსებობის გამო ანთების კერაში ჩირქი საერთოდ არ წარმოიქმნება (ვლინდება ჭიპლარის მოვარდნის შეფერხებით, ომფალიტითა და ნეკროზული ინფექციებით), ხოლო სისხლძარღვთა სანათურში ჩარჩენილი ნეიტროფილებისა და კოლონიამასტიმულირებელი ფაქტორების (G-CSF) ჭარბი სტიმულაციის გამო პერიფერიულ სისხლში ვითარდება ექსტრემალური ნეიტროფილური ლეიკოციტოზი (20,000–150,000/μL).",
      en: "ITGB2 mutation eliminates CD18 (β2-integrin subunit of LFA-1 and CR3). Without LFA-1 binding to endothelial ICAM-1, neutrophils cannot extravasate into tissues, resulting in complete absence of pus at infection sites (delayed cord separation, omphalitis) while neutrophils remain trapped in circulation, causing extreme neutrophilia (20,000–150,000/μL).",
    },
  },
  {
    id: 12,
    chapter: "16.2",
    question: {
      ka: "12. (16.2 #3) ახსენით ქრონიკული გრანულომატოზური დაავადების (CGD) პათოფიზიოლოგიური პარადოქსი კატალაზა-უარყოფითი და კატალაზა-დადებითი მიკროორგანიზმების მიმართ.",
      en: "12. (16.2 #3) Explain the pathophysiological paradox of Chronic Granulomatous Disease (CGD) regarding catalase-negative versus catalase-positive microorganisms.",
    },
    keyTerms: ["NADPH-ოქსიდაზა", "CYBB", "gp91phox", "H2O2", "მიელოპეროქსიდაზა", "კატალაზა-დადებითი"],
    answer: {
      ka: "CGD-ის დროს მუტირებულია ფაგოციტების NADPH-ოქსიდაზას სუბერთეულები (ყველაზე ხშირად X-შეჭიდული CYBB [gp91phox] ან NCF1), რის გამოც ფაგოციტი ვერ წარმოქმნის სუპეროქსიდ-ანიონსა (O2•⁻) და წყალბადის პეროქსიდს (H2O2).\n• პარადოქსი: კატალაზა-უარყოფითი ბაქტერიები (სტრეპტოკოკები, პნევმოკოკები) საკუთარი მეტაბოლიზმის შედეგად თავად გამოიმუშავებენ H2O2-ს და ვერ შლიან მას; მასპინძლის ფაგოციტის ინტაქტური მიელოპეროქსიდაზა (MPO) იყენებს მიკრობისავე H2O2-ს ჰიპოქლორიტის (HOCl⁻) წარმოსაქმნელად და კლავს ბაქტერიას.\n• კატალაზა-დადებითი მიკრობები (S. aureus, Serratia marcescens, Burkholderia cepacia, Nocardia, Aspergillus, Candida) კი საკუთარი კატალაზით შლიან H2O2-ს, ცოცხალი რჩებიან ფაგოლიზოსომაში და იწვევენ მძიმე აბსცესებსა და მაობსტრუირებელ გრანულომებს.",
      en: "In CGD, defective NADPH oxidase (CYBB/gp91phox) fails to generate superoxide and H2O2. Catalase-negative bacteria (Streptococci, Pneumococci) produce their own H2O2, allowing host myeloperoxidase (MPO) to generate bactericidal HOCl⁻. Catalase-positive microbes (S. aureus, Serratia, Aspergillus) degrade their own H2O2, surviving inside phagocytes and inducing granulomas.",
    },
  },
  {
    id: 13,
    chapter: "16.2",
    question: {
      ka: "13. (16.2 #4) რატომ იწვევს კომპლემენტის კლასიკური გზის ადრეული კომპონენტების (C1q, C1r/s, C4) დეფიციტი სისტემურ წითელ მგლურას, ხოლო ტერმინალური კომპონენტების (C5–C9) დეფიციტი — სელექციურ მგრძნობელობას Neisseria-ს გვარის ბაქტერიების მიმართ?",
      en: "13. (16.2 #4) Why does deficiency of early classical complement components (C1q, C1r/s, C4) cause Systemic Lupus Erythematosus (SLE), whereas terminal component (C5–C9) deficiency causes selective susceptibility to Neisseria species?",
    },
    keyTerms: ["C1q", "C4A", "აპოპტოზური სხეულაკები", "IFN-α", "MAC (C5b–C9)", "Neisseria"],
    answer: {
      ka: "• C1q, C1r/s და C4 (განსაკუთრებით C4A) დეფიციტი და მგლურა (SLE ვითარდება C1q დეფიციტის 88%-ში და C4 დეფიციტის 78.6%-ში): ეს კომპონენტები აუცილებელია აპოპტოზური უჯრედების ბირთვული ნუკლეოსომებისა და იმუნური კომპლექსების ოფსონიზაციისა და ფაგოციტური კლირენსისთვის, აგრეთვე პლაზმაციტოიდური დენდრიტული უჯრედების მიერ IFN-α-ის სეკრეციის დასათრგუნად. მათი დეფიციტისას აპოპტოზური ბირთვული აუტოანტიგენები გროვდება და რთავს აუტოიმუნურ რეაქციას.\n• C5–C9 დეფიციტი და Neisseria: ტერმინალური კომპონენტები აყალიბებენ მემბრანა-შემტევ კომპლექსს (MAC: C5b–C9). C3b-ოფსონიზაცია და ანაფილატოქსინები ამ დროს შენარჩუნებულია, მაგრამ თხელკედლიანი გრამ-უარყოფითი დიპლოკოკების — Neisseria meningitidis და N. gonorrhoeae — განადგურება კრიტიკულად მოითხოვს MAC-ით უშუალო ოსმოსურ ბაქტერიოლიზისს.",
      en: "• Early Classical (C1q, C4) Deficiency: Essential for clearing apoptotic nuclear debris and immune complexes and suppressing pDC IFN-α secretion; failure leads to autoantigen accumulation and SLE (88% in C1q deficiency).\n• Terminal (C5–C9) Deficiency: Prevents formation of the Membrane Attack Complex (MAC), which is strictly required for intravascular osmotic lysis of Gram-negative Neisseria diplococci.",
    },
  },
  {
    id: 14,
    chapter: "16.2",
    question: {
      ka: "14. (16.2 #5) როგორ განვასხვავოთ ერთმანეთისგან T⁻B⁺NK⁻ და T⁻B⁻NK⁺ მძიმე კომბინირებული იმუნოდეფიციტის (SCID) ფენოტიპები მოლეკულური პათოგენეზის მიხედვით და რა როლს ასრულებს ახალშობილთა სკრინინგში TREC და KREC მარკერები?",
      en: "14. (16.2 #5) How do we distinguish T⁻B⁺NK⁻ and T⁻B⁻NK⁺ SCID phenotypes by molecular pathogenesis, and what role do TREC and KREC markers play in newborn screening?",
    },
    keyTerms: ["IL2RG (γc)", "JAK3", "RAG1/2", "Artemis", "TREC", "KREC"],
    answer: {
      ka: "• T⁻B⁺NK⁻ SCID: გამოწვეულია X-შეჭიდული IL2RG გენის (ინტერლეიკინების IL-2, 4, 7, 9, 15, 21 საერთო γc-ჯაჭვი / CD132) ან აუტოსომურ-რეცესიული JAK3 კინაზას მუტაციით. იბლოკება IL-7-დამოკიდებული T-ლიმფოპოეზი და IL-15-დამოკიდებული NK-უჯრედების მომწიფება, ხოლო B-უჯრედები შენარჩუნებულია (თუმცა არაფუნქციურია T-ჰელპერების გარეშე).\n• T⁻B⁻NK⁺ SCID: გამოწვეულია V(D)J სომატური რეკომბინაციის ფერმენტების (RAG1/RAG2) ან დნმ-ის რეპარაციის ფაქტორების (Artemis [DCLRE1C], LIG4) მუტაციით. რადგან TCR-ისა და BCR-ის აწყობა ვერ ხერხდება, იღუპება როგორც T-, ისე B-უჯრედები, ხოლო NK-უჯრედები (რომლებსაც V(D)J რეკომბინაცია არ სჭირდებათ) შენარჩუნებულია.\n• TREC და KREC: წარმოადგენს T- და B-უჯრედული რეცეპტორების V(D)J რეარანჟირებისას ამოჭრილ ეპისომურ დნმ-რგოლებს. ახალშობილის მშრალი სისხლის წვეთში მათი PCR-განსაზღვრა ავლენს T-ლიმფოპენიას (↓TREC — ყველა ფორმის SCID) და B-ლიმფოპენიას (↓KREC — T⁻B⁻ SCID და ბრუტონის აგამაგლობულინემია) დაბადებისთანავე, ინფექციების განვითარებამდე.",
      en: "• T⁻B⁺NK⁻ SCID: Caused by IL2RG (common γc chain) or JAK3 defects, blocking IL-7 (T-cell) and IL-15 (NK-cell) signaling.\n• T⁻B⁻NK⁺ SCID: Caused by RAG1/2 or Artemis defects blocking V(D)J recombination required for both TCR and BCR assembly, sparing NK cells.\n• TREC & KREC: Episomal DNA circles excised during TCR and BCR rearrangement; newborn blood spot PCR detects SCID (↓TREC) and B-cell absence/XLA (↓KREC) presymptomatically.",
    },
  },
  {
    id: 15,
    chapter: "16.2",
    question: {
      ka: "15. (16.2 #6) რა მოლეკულური დეფექტი უდევს საფუძვლად ბრუტონის X-შეჭიდულ აგამაგლობულინემიას (XLA), რატომ ვლინდება დაავადება სიცოცხლის მე-5–12 თვიდან და რატომ არის უკუნაჩვენები IgA-ს სელექციური დეფიციტის დროს ნატიური პლაზმის გადასხმა?",
      en: "15. (16.2 #6) What molecular defect underlies Bruton X-linked agammaglobulinemia (XLA), why does it manifest at 5–12 months of age, and why is native plasma transfusion contraindicated in selective IgA deficiency?",
    },
    keyTerms: ["BTK", "პრე-B უჯრედი", "CD19+ < 1%", "ტრანსპლაცენტური IgG", "ანტი-IgA ანაფილაქსია"],
    answer: {
      ka: "• ბრუტონის XLA-ს მოლეკულური დეფექტი: გამოწვეულია ციტოპლაზმური ბრუტონის თიროზინკინაზას (BTK) გენის მუტაციით, რაც წყვეტს პრე-BCR სიგნალიზაციას და აჩერებს B-ლიმფოციტების მომწიფებას ძვლის ტვინში პრე-B სტადიაზე (სისხლში CD19⁺ B-უჯრედები <1%, არ არის პლაზმური უჯრედები და ყველა კლასის იმუნოგლობულინი).\n• მე-5–12 თვიდან გამოვლენის მიზეზი: სიცოცხლის პირველ თვეებში ახალშობილს იცავს დედისგან ნეონატალური FcRn რეცეპტორით ტრანსპლაცენტურად მიღებული IgG. მე-5–12 თვისთვის დედისეული IgG კატაბოლიზდება და იწურება, რის შემდეგაც იწყება მორეციდივე ჩირქოვანი სინოპულმონური ინფექციები.\n• ნატიური პლაზმის უკუჩვენება IgA-ს დეფიციტისას: სელექციური IgA დეფიციტის მქონე პაციენტების იმუნური სისტემა IgA-ს აღიქვამს უცხო ანტიგენად და გამოიმუშავებს ანტი-IgA (IgG/IgE კლასის) ანტისხეულებს; დონორის IgA-ს შემცველი სისხლის ან პლაზმის გადასხმა იწვევს მძიმე, სიცოცხლისთვის საშიშ ანაფილაქსიურ შოკს.",
      en: "• XLA Defect: BTK mutation arrests B-cell maturation at the pre-B stage in bone marrow (absent CD19⁺ B cells and all Ig classes).\n• Onset at 5–12 Months: Transplacentally acquired maternal IgG (via FcRn) protects the infant initially until it is catabolized by 5–12 months.\n• IgA Deficiency Contraindication: Patients possess anti-IgA antibodies; transfusing IgA-containing plasma/blood triggers fatal anaphylactic shock.",
    },
  },
  {
    id: 16,
    chapter: "16.2",
    question: {
      ka: "16. (16.2 #7) რა როლს ასრულებს აბორტული აივ-ინფექცია, კასპაზა-1 და გასდერმინ D (GSDMD) CD4+ T-ლიმფოციტების განლევასა და ქრონიკული სისტემური ანთების შენარჩუნებაში?",
      en: "16. (16.2 #7) What role do abortive HIV infection, caspase-1, and Gasdermin D (GSDMD) play in CD4+ T-lymphocyte depletion and chronic systemic inflammation?",
    },
    keyTerms: ["აბორტული ინფექცია", ">80–95%", "კასპაზა-1", "გასდერმინ D (GSDMD)", "პიროპტოზი", "IL-1β / IL-18"],
    answer: {
      ka: "აივ-ინფექციის დროს დაღუპული CD4⁺ T-ლიმფოციტების მხოლოდ <5–20% იღუპება პროდუქტიული ვირუსული რეპლიკაციით, ხოლო უდიდესი ნაწილი (>80–95%) წარმოადგენს ლიმფოიდურ ქსოვილში მოსვენებულ „გვერდით დამკვირვებელ“ (bystander) CD4⁺ T-უჯრედებს. როდესაც ვირუსი ვირუსოლოგიური სინაფსით გადადის მოსვენებულ CD4⁺ T-უჯრედში, ვითარდება აბორტული ინფექცია: უკუტრანსკრიფცია წყდება და ციტოზოლში გროვდება არასრული ვირუსული დნმ-ფრაგმენტები. უჯრედშიდა დნმ-სენსორები ამოიცნობენ ამ ფრაგმენტებს და ააქტიურებენ ინფლამასომასა და კასპაზა-1-ს. კასპაზა-1 ხლეჩს გასდერმინ D-ს (GSDMD), რომელიც მემბრანაში წარმოქმნის ფორებს და იწვევს უჯრედის მძაფრ ანთებით სიკვდილს — პიროპტოზს, პროანთებითი ციტოკინების (IL-1β და IL-18) გამოთავისუფლებით. ეს ციტოკინები ანთების კერაში იზიდავს ახალ CD4⁺ T-ლიმფოციტებს და კრავს უჯრედების განლევისა და ქრონიკული ანთების მანკიერ წრეს.",
      en: "Over 80–95% of dying CD4⁺ T cells in HIV are resting bystander cells undergoing abortive infection via cell-to-cell virological synapses. Incomplete cytosolic viral DNA fragments trigger inflammasome and caspase-1 activation, which cleaves Gasdermin D (GSDMD) to form membrane pores, causing inflammatory pyroptosis and releasing IL-1β and IL-18 to recruit more CD4⁺ T cells into a vicious cycle.",
    },
  },
  {
    id: 17,
    chapter: "16.2",
    question: {
      ka: "17. (16.2 #8) როგორ ხდება, რომ ანტირეტროვირუსული თერაპიის (ART) ფონზე პლაზმური ვირემიის სრული დათრგუნვის მიუხედავად, აივ-ინფიცირებულ პირებში გრძელდება CD8+ T-ლიმფოციტების გამოფიტვა, „ანთებითი დაბერება“ (inflammaging) და ნეიროკოგნიტური აშლილობა (HAND)?",
      en: "17. (16.2 #8) How does CD8+ T-cell exhaustion, inflammaging, and HIV-associated neurocognitive disorder (HAND) persist despite complete suppression of plasma viremia on ART?",
    },
    keyTerms: ["დეფექტური პროვირუსები (>90%)", "კრიპტული პეპტიდები", "PD-1", "CD14+CD16+ მონოციტები", "მიკროგლია", "მჟონავი ნაწლავი"],
    answer: {
      ka: "ამ ფენომენს განაპირობებს სამი ძირითადი მექანიზმი:\n1. დეფექტური პროვირუსების ტრანსკრიფციული აქტივობა: ART-ის ფონზე ინტეგრირებული ვირუსული რეზერვუარის მხოლოდ 2–5%-ია ინტაქტური, ხოლო >90% რეპლიკაციურად დეფექტურია. მიუხედავად იმისა, რომ დეფექტური პროვირუსები ვერ ქმნიან ინფექციურ ვირიონებს, ისინი შიდაგენური პრომოტორებით მუდმივად ასინთეზებენ აბერანტულ რნმ-ებსა და კრიპტულ პეპტიდებს, რაც ქრონიკულად ასტიმულირებს და ფუნქციურად ფიტავს აივ-სპეციფიკურ CD8⁺ T-კილერებს (↑PD-1, TIGIT, LAG-3) და იწვევს დაჩქარებულ „ანთებით დაბერებას“ (inflammaging).\n2. ცნს-ის მიელოიდური რეზერვუარი: ინფიცირებული CD14⁺CD16⁺ მონოციტები (CCR2, JAM-A, ALCAM მოლეკულებით) გადიან ჰემატოენცეფალურ ბარიერს და აყალიბებენ მდგრად რეზერვუარს თავის ტვინის პერივასკულურ მაკროფაგებსა და მიკროგლიაში (სადაც ლატენტობას ინარჩუნებს CoREST კომპლექსი), რაც იწვევს ნეიროანთებასა და აივ-ასოცირებულ ნეიროკოგნიტურ აშლილობას (HAND).\n3. GALT-ის დაზიანება და აუტოფაგიის ბლოკი: „მჟონავი ნაწლავიდან“ სისხლში LPS-ის მუდმივი ტრანსლოკაცია და Nef/Tat ცილებით აუტოფაგიის დათრგუნვა (დაზიანებული მიტოქონდრიებიდან დნმ-ის გამოსვლა → cGAS–STING აქტივაცია) ინარჩუნებს ქრონიკულ სისტემურ ანთებას.",
      en: "1) Defective Proviruses (>90% of reservoir): Continue transcribing aberrant RNAs and cryptic peptides via internal promoters, driving chronic CD8⁺ CTL exhaustion (↑PD-1) and inflammaging.\n2) CNS Myeloid Reservoir: Infected CD14⁺CD16⁺ monocytes cross the BBB to seed perivascular macrophages and microglia (CoREST latency), causing neuroinflammation and HAND.\n3) Gut microbial translocation (LPS) and Nef/Tat-mediated autophagy blockade (activating cGAS–STING).",
    },
  },
];