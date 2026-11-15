import { Lang } from "../components/StudyTool";

export interface CaseOption {
  id: string;
  text: Record<Lang, string>;
  isCorrect: boolean;
  feedback: Record<Lang, string>;
}

export interface ClinicalCase {
  id: string;
  chapter: "16.1" | "16.2";
  title: Record<Lang, string>;
  difficulty: Record<Lang, string>;
  patientInfo: Record<Lang, string>;
  presentation: Record<Lang, string>;
  labsAndVitals: Record<Lang, string[]>;
  question: Record<Lang, string>;
  options: CaseOption[];
  pathogenesisSummary: Record<Lang, string>;
  keyTakeaway: Record<Lang, string>;
}

export const clinicalCases: ClinicalCase[] = [
  // ==========================================================================
  // CASE 1 (16.1): ტოქსიკური შოკის სინდრომი (სუპერანტიგენი)
  // ==========================================================================
  {
    id: "case_tss",
    chapter: "16.1",
    title: {
      ka: "ქეისი #1: პოსტოპერაციული ცხელება, დიფუზური ერითემა და რეფრაქტერული ჰიპოტენზია",
      en: "Case #1: Postoperative Fever, Diffuse Erythema & Refractory Hypotension",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "24 წლის ქალი, რინოპლასტიკის შემდგომი ნაზალური ტამპონადით",
      en: "24-year-old female with nasal packing post-rhinoplasty",
    },
    presentation: {
      ka: "ოპერაციიდან 48 საათში პაციენტს უეცრად განუვითარდა შემცივნება, ფებრილური ცხელება, ღებინება, მიალგია და მზის დამწვრობის მსგავსი დიფუზური მაკულარული ერითემა მთელ სხეულზე. სისხლის კულტურა უარყოფითია, თუმცა ნაზალური ტამპონიდან ამოითესა ოქროსფერი სტაფილოკოკი (Staphylococcus aureus).",
      en: "48 hours post-op, the patient develops sudden high fever, vomiting, myalgia, and a diffuse 'sunburn-like' macular erythroderma. Blood cultures are negative, but nasal packing grows Staphylococcus aureus.",
    },
    labsAndVitals: {
      ka: [
        "ტემპერატურა: 39.8 °C | არტერიული წნევა: 78/45 მმ.ვწყ.სვ | პულსი: 132/წთ",
        "კრეატინინი: 2.6 მგ/დლ (↑) | ბილირუბინი და ტრანსამინაზები (AST/ALT): მომატებული (↑)",
        "თრომბოციტები: 82,000/μL (↓) | სისხლის ბაქტერიოლოგიური კულტურა: სტერილური",
      ],
      en: [
        "Temp: 39.8 °C | BP: 78/45 mmHg | HR: 132 bpm",
        "Creatinine: 2.6 mg/dL (↑) | AST/ALT & Bilirubin: Elevated (↑)",
        "Platelets: 82,000/μL (↓) | Blood cultures: Negative",
      ],
    },
    question: {
      ka: "რა მოლეკულური მექანიზმით იწვევს აღნიშნული პათოგენის ტოქსინი ამ კლინიკურ სურათს სისხლში ბაქტერიების გამრავლების (ბაქტერიემიის) გარეშე?",
      en: "By what molecular mechanism does this pathogen's toxin cause this clinical syndrome without bacteremia?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "ლიპიდ A-ს დაკავშირება მაკროფაგების TLR4 რეცეპტორთან ბაქტერიის ლიზისის შემდეგ",
          en: "Lipid A binding to macrophage TLR4 following bacterial lysis",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ლიპიდ A და TLR4 არის გრამ-უარყოფითი ბაქტერიების ენდოტოქსინის (LPS) მოქმედების მექანიზმი, ხოლო S. aureus გრამ-დადებითი ბაქტერიაა.",
          en: "Incorrect. Lipid A/TLR4 is the mechanism of Gram-negative LPS endotoxin.",
        },
      },
      {
        id: "b",
        text: {
          ka: "სუპერანტიგენით APC-ის MHC II-ისა და T-ლიმფოციტების TCR-ის Vβ დომენის პირდაპირი დაკავშირება და T-უჯრედების 20%-მდე პოლიკლონური აქტივაცია",
          en: "Superantigen directly cross-linking APC MHC II and TCR Vβ domain, activating up to 20% of T cells",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! S. aureus-ის სუპერანტიგენი (TSST-1) ანტიგენის პროცესინგის გარეშე გარედან აკავშირებს MHC II-სა და TCR-ის Vβ უბანს, რაც იწვევს T-ლიმფოციტების მასობრივ (20%-მდე) აქტივაციასა და „ციტოკინურ შტორმს“.",
          en: "Correct! S. aureus superantigen bypasses intracellular processing and cross-links MHC II to TCR Vβ, triggering a massive cytokine storm.",
        },
      },
      {
        id: "c",
        text: {
          ka: "ქოლინერგული ნერვული დაბოლოებებიდან აცეტილქოლინის ეგზოციტოზის ბლოკირება",
          en: "Blockade of acetylcholine release from cholinergic nerve terminals",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. აცეტილქოლინის გამოყოფას ბლოკავს Clostridium botulinum-ის ნეიროტოქსინი, რაც იწვევს დუნე დამბლას.",
          en: "Incorrect. That is the mechanism of Clostridium botulinum toxin.",
        },
      },
      {
        id: "d",
        text: {
          ka: "თირკმლის გორგლების ენდოთელიუმის პირდაპირი დაზიანება შიგა-ტოქსინით",
          en: "Direct damage to renal glomerular endothelium via Shiga-toxin",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. შიგა-ტოქსინს გამოიმუშავებს E. coli და იწვევს ჰემოლიზურ-ურემიულ სინდრომს (HUS).",
          en: "Incorrect. Shiga-toxin is produced by E. coli and causes HUS.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "ტოქსიკური შოკის სინდრომი (TSS): ადგილობრივ კერაში მყოფი S. aureus გამოყოფს ეგზოტოქსინ-სუპერანტიგენს, რომელიც გადადის სისხლში. ჩვეულებრივი ანტიგენი ააქტიურებს T-ლიმფოციტების მხოლოდ 0.01%-ს, ხოლო სუპერანტიგენი MHC II – TCR Vβ ხიდის მეშვეობით ააქტიურებს T-უჯრედების 20%-მდე პოპულაციას. გამოთავისუფლებული IL-1, IL-2, TNF-α და IFN-γ იწვევს კაპილარულ გაჟონვას, სისტემურ ვაზოდილატაციას, მაკულარულ ერითემასა და მულტიორგანულ უკმარისობას (MODS).",
      en: "Toxic Shock Syndrome (TSS): Local S. aureus secretes a superantigen exotoxin into the bloodstream, cross-linking MHC II to TCR Vβ on up to 20% of T cells. Massive release of TNF-α, IL-1, and IL-2 leads to capillary leak, hypotension, diffuse erythroderma, and MODS.",
    },
    keyTakeaway: {
      ka: "სუპერანტიგენი = MHC II + TCR Vβ პირდაპირი შეკავშირება → T-უჯრედების 20%-ის აქტივაცია → ციტოკინური შტორმი და TSS.",
      en: "Superantigen = Direct MHC II + TCR Vβ binding → 20% T-cell activation → Cytokine storm & TSS.",
    },
  },

  // ==========================================================================
  // CASE 2 (16.1): ჰემოლიზურ-ურემიული სინდრომი (E. coli შიგა-ტოქსინი vs aHUS)
  // ==========================================================================
  {
    id: "case_hus",
    chapter: "16.1",
    title: {
      ka: "ქეისი #2: სისხლიანი დიარეის შემდგომი ანურია, ანემია და თრომბოციტოპენია ბავშვში",
      en: "Case #2: Post-Diarrheal Anuria, Anemia & Thrombocytopenia in a Child",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "4 წლის ბიჭი, მწვავე გასტროენტერიტის გადატანიდან მე-5 დღეს",
      en: "4-year-old boy, 5 days after acute bloody gastroenteritis",
    },
    presentation: {
      ka: "თერმულად ცუდად დამუშავებული ხორცის მიღებიდან 3 დღეში ბავშვს განუვითარდა მუცლის სპაზმური ტკივილი და სისხლიანი დიარეა. 5 დღის შემდეგ დიარეა შეწყდა, მაგრამ ბავშვი გახდა მკვეთრად ფერმკრთალი, ლეთარგიული, კანზე გაუჩნდა პეტექიები და ბოლო 18 საათის განმავლობაში შეუწყდა შარდვა (ოლიგოანურია).",
      en: "3 days after eating undercooked beef, the child developed abdominal cramps and bloody diarrhea. 5 days later, he became pale, lethargic, developed petechiae, and has been oliguric for 18 hours.",
    },
    labsAndVitals: {
      ka: [
        "ჰემოგლობინი: 6.8 გ/დლ (↓) | სისხლის ნაცხში: ფრაგმენტირებული ერითროციტები (შიზოციტები), LDH ↑↑",
        "თრომბოციტები: 38,000/μL (↓↓) | კოაგულოგრამა (PT, aPTT, ფიბრინოგენი): ნორმაშია",
        "კრეატინინი: 3.9 მგ/დლ (↑↑) | შარდოვანა (BUN): 85 მგ/დლ (↑↑)",
      ],
      en: [
        "Hb: 6.8 g/dL (↓) | Peripheral smear: Schistocytes, LDH ↑↑",
        "Platelets: 38,000/μL (↓↓) | PT/aPTT/Fibrinogen: Normal",
        "Creatinine: 3.9 mg/dL (↑↑) | BUN: 85 mg/dL (↑↑)",
      ],
    },
    question: {
      ka: "რომელი ეტიოპათოგენეზური ჯაჭვი ხსნის აღნიშნული ტრიადის განვითარებას ამ პაციენტში?",
      en: "Which etiopathogenetic chain explains the triad seen in this patient?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "E. coli-ს შიგა-ტოქსინით ნაწლავისა და თირკმლის გორგლების ენდოთელიუმის დაზიანება → თრომბოციტების აგრეგაცია → მიკროანგიოპათიური ჰემოლიზი და თირკმლის მწვავე უკმარისობა",
          en: "E. coli Shiga-toxin damaging glomerular endothelium → platelet aggregation → MAHA and acute renal failure",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! ეს არის კლასიკური (ტიპური) ჰემოლიზურ-ურემიული სინდრომი (HUS), გამოწვეული შიგა-ტოქსინ-წარმომქმნელი E. coli-თ.",
          en: "Correct! Classic Shiga-toxin-induced Hemolytic Uremic Syndrome (HUS).",
        },
      },
      {
        id: "b",
        text: {
          ka: "Vibrio cholerae-ს ეგზოტოქსინით წვრილი ნაწლავის ეპითელიუმში cAMP-ის მატება და პრერენული დეჰიდრატაცია",
          en: "Vibrio cholerae exotoxin increasing enterocyte cAMP and causing prerenal dehydration",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ქოლერა იწვევს წყლიან („ბრინჯის ნახარშისებრ“) დიარეასა და დეჰიდრატაციას, მაგრამ არ იწვევს მიკროანგიოპათიურ ჰემოლიზსა და თრომბოციტოპენიას.",
          en: "Incorrect. Cholera causes secretory watery diarrhea without MAHA or thrombocytopenia.",
        },
      },
      {
        id: "c",
        text: {
          ka: "კომპლემენტის C1-ინჰიბიტორის (SERPING1) დეფიციტი და ბრადიკინინის ჭარბი პროდუქცია",
          en: "C1-Inhibitor (SERPING1) deficiency and excess bradykinin production",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. C1-Inh დეფიციტი იწვევს მემკვიდრულ ანგიონევროზულ (კვინკეს) შეშუპებას. (შენიშვნა: ატიპურ HUS-ს იწვევს ფაქტორ H, ფაქტორ I ან CD46-ის დეფიციტი).",
          en: "Incorrect. C1-Inh deficiency causes Hereditary Angioedema.",
        },
      },
      {
        id: "d",
        text: {
          ka: "ანტი-ერითროციტული IgM იზოჰემაგლუტინინებით კომპლემენტის კლასიკური გზის აქტივაცია",
          en: "Anti-erythrocyte IgM isohemagglutinins activating the classical complement pathway",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ეს არის შეუთავსებელი სისხლის გადასხმით გამოწვეული ჰემოტრანსფუზიული შოკის მექანიზმი.",
          en: "Incorrect. That describes incompatible ABO blood transfusion shock.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "ჰემოლიზურ-ურემიული სინდრომი (HUS): ალიმენტური გზით მოხვედრილი ენტეროჰემორაგიული Escherichia coli გამოიმუშავებს შიგა-ტოქსინს, რომელიც სისხლში გადასვლის შემდეგ აზიანებს თირკმლის გორგლების კაპილარების ენდოთელიუმს. დაზიანებულ ენდოთელიუმზე ფორმირდება თრომბოციტულ-ფიბრინული მიკროთრომბები (ხარჯვის თრომბოციტოპენია), რომლებთან შეჯახებისას ერითროციტები მექანიკურად იშლება (მიკროანგიოპათიური ჰემოლიზური ანემია), ხოლო გორგლოვანი ფილტრაციის შეწყვეტა იწვევს თირკმლის მწვავე უკმარისობას. (შეადარეთ თავი 16.2-ის ატიპურ HUS-ს, სადაც მიზეზი ფაქტორ H/I ან CD46-ის დეფიციტია და მკურნალობენ ეკულიზუმაბით).",
      en: "Shiga-toxin from E. coli damages glomerular capillary endothelium, inducing platelet microthrombi (thrombocytopenia), mechanical shearing of RBCs (microangiopathic hemolytic anemia), and acute kidney injury. Contrast with atypical HUS (Chapter 16.2), caused by Factor H/I or CD46 deficiency and treated with eculizumab.",
    },
    keyTakeaway: {
      ka: "ტიპური HUS = E. coli შიგა-ტოქსინი; ატიპური HUS (aHUS) = ფაქტორ H / ფაქტორ I / CD46 დეფიციტი (მკურნალობა: ეკულიზუმაბი).",
      en: "Typical HUS = E. coli Shiga-toxin; Atypical HUS (aHUS) = Factor H/I/CD46 deficiency (treated with eculizumab).",
    },
  },

  // ==========================================================================
  // CASE 3 (16.1): სეპტიური შოკი, დსკ და MODS
  // ==========================================================================
  {
    id: "case_septic_shock",
    chapter: "16.1",
    title: {
      ka: "ქეისი #3: უროსეფსისი, ინფუზია-რეფრაქტერული ჰიპოტენზია და სისხლდენა",
      en: "Case #3: Urosepsis, Fluid-Refractory Hypotension & Coagulopathy",
    },
    difficulty: { ka: "რთული", en: "Advanced" },
    patientInfo: {
      ka: "68 წლის მამაკაცი, ობსტრუქციული პიელონეფრიტის გართულებით",
      en: "68-year-old male with complicated obstructive pyelonephritis",
    },
    presentation: {
      ka: "პაციენტი შემოიყვანეს რეანიმაციულ განყოფილებაში მაღალი ცხელებით, ცნობიერების დაბინდვითა და მძიმე არტერიული ჰიპოტენზიით. 2.5 ლიტრი კრისტალოიდური ხსნარის ინფუზიის მიუხედავად, არტერიული წნევა რჩება 75/40 მმ.ვწყ.სვ. კათეტერიზაციისა და ვენეპუნქციის ადგილებიდან აღინიშნება უწყვეტი სისხლდენა, ხოლო კიდურების თითებზე — აკროციანოზი და მიკროთრომბოზის ნიშნები.",
      en: "Admitted to the ICU with high fever, confusion, and severe hypotension. Despite 2.5 L of IV crystalloids, BP remains 75/40 mmHg. He is oozing blood from venipuncture sites while showing digital ischemia/microthrombosis.",
    },
    labsAndVitals: {
      ka: [
        "სისტოლური წნევა: 75 მმ.ვწყ.სვ (<90 მმ.ვწყ.სვ ინფუზიის ფონზე) | ლაქტატი: 6.4 მმოლ/ლ (↑↑)",
        "C-რეაქტიული ცილა (CRP) და SAA: მკვეთრად მომატებული | შრატის ალბუმინი და ტრანსფერინი: დაქვეითებული",
        "თრომბოციტები: 32,000/μL (↓↓) | D-დიმერი: ↑↑↑ | PaO2/FiO2 < 150 (ARDS)",
      ],
      en: [
        "SBP: 75 mmHg (<90 mmHg despite fluids) | Lactate: 6.4 mmol/L (↑↑)",
        "CRP & SAA: Markedly elevated | Serum Albumin & Transferrin: Decreased",
        "Platelets: 32,000/μL (↓↓) | D-dimer: ↑↑↑ | PaO2/FiO2 < 150 (ARDS)",
      ],
    },
    question: {
      ka: "რომელი მედიატორები განაპირობებს ამ პაციენტში ერთდროულად დისტრიბუციულ სისხლძარღვოვან კოლაფსს, მიოკარდიუმის დეპრესიასა და უარყოფითი მწვავე ფაზის ცილების ვარდნას?",
      en: "Which mediators drive the distributive vascular collapse, myocardial depression, and negative acute-phase protein shift in this patient?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "NO-ს ჭარბი სინთეზი იწვევს სისტემურ ვაზოდილატაციას (დისტრიბუციული შოკი), TNF-α თრგუნავს მიოკარდიუმის კუმშვადობას, ხოლო ენდოთელიუმის დაზიანება რთავს დსკ სინდრომს; ალბუმინი და ტრანსფერინი უარყოფითი მწვავე ფაზის ცილებია",
          en: "Excess NO causes systemic vasodilation (distributive shock), TNF-α depresses myocardium, endothelial injury triggers DIC, and albumin/transferrin drop as negative acute-phase proteins",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! ეს არის სეპტიური შოკის, დსკ-ის, ARDS-ისა და MODS-ის სრული პათოგენეზური ჯაჭვი.",
          en: "Correct! This captures the complete cascade of septic shock, DIC, ARDS, and MODS.",
        },
      },
      {
        id: "b",
        text: {
          ka: "აზოტის ოქსიდი (NO) იწვევს ძლიერ ვაზოკონსტრიქციას, ხოლო ალბუმინი და ტრანსფერინი დადებითი მწვავე ფაზის ცილებია",
          en: "Nitric oxide (NO) causes severe vasoconstriction, while albumin and transferrin are positive acute-phase proteins",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. NO არის უძლიერესი ვაზოდილატატორი, ხოლო ალბუმინი, ტრანსფერინი და IGF-1 წარმოადგენს უარყოფით მწვავე ფაზის ცილებს (მათი სინთეზი ღვიძლში მცირდება).",
          en: "Incorrect. NO is a potent vasodilator, and albumin/transferrin are negative acute-phase proteins.",
        },
      },
      {
        id: "c",
        text: {
          ka: "პროცესი წარმოადგენს ტრანზიტორულ ბაქტერიემიას სისტემური ანთებითი პასუხის გარეშე",
          en: "The process represents transient bacteremia without a systemic inflammatory response",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. სახეზეა სეφსისის ტერმინალური სტადია — სეპტიური შოკი (რეფრაქტერული ჰიპოტენზია <90 მმ.ვწყ.სვ) და MODS.",
          en: "Incorrect. This is septic shock with DIC and MODS.",
        },
      },
      {
        id: "d",
        text: {
          ka: "ჰიპოტენზია გამოწვეულია მხოლოდ ციკლოოქსიგენაზას ბლოკირებით და ლეიკოტრიენების (LTC4, LTD4) სინთეზით",
          en: "Hypotension is caused solely by COX blockade and leukotriene (LTC4, LTD4) synthesis",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. COX-ის ბლოკირება და ლეიკოტრიენების სინთეზი არის ასპირინული ბრონქული ასთმის (ფსევდოალერგიის) მექანიზმი.",
          en: "Incorrect. That is the mechanism of aspirin-induced asthma.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "სეპტიური შოკი და MODS: გრამ-უარყოფითი ბაქტერიების LPS (ლიპიდ A) TLR4-ის გზით ააქტიურებს მაკროფაგებსა და ენდოთელიოციტებს. 1) NO-ს ჭარბი სინთეზი იწვევს სისტემურ ვაზოდილატაციასა და დისტრიბუციულ შოკს; 2) კაპილარული გაჟონვა იწვევს შეფარდებით ჰიპოვოლემიას; 3) TNF-α თრგუნავს მიოკარდიუმის კუმშვადობას; 4) ენდოთელიუმის დაზიანება რთავს კოაგულაციას — ყალიბდება დსკ სინდრომი (მიკროთრომბოზებისა და ჰემორაგიების ერთდროული განვითარებით), ARDS და მულტიორგანული უკმარისობა (MODS).",
      en: "Gram-negative LPS via TLR4 induces TNF-α, IL-1, IL-6, and excess NO. NO drives vasodilation (distributive shock), capillary leak causes relative hypovolemia, TNF-α depresses the myocardium, and endothelial damage triggers DIC, ARDS, and MODS.",
    },
    keyTakeaway: {
      ka: "LPS → TLR4 → TNF-α, IL-1, IL-6, NO → ვაზოდილატაცია + კაპილარული გაჟონვა + მიოკარდიუმის დეპრესია + დსკ → სეპტიური შოკი და MODS.",
      en: "LPS → TLR4 → TNF-α, IL-1, IL-6, NO → Vasodilation + Capillary Leak + Myocardial Depression + DIC → Septic Shock & MODS.",
    },
  },

  // ==========================================================================
  // CASE 4 (16.2): ლეიკოციტების ადჰეზიის დეფიციტი (LAD I)
  // ==========================================================================
  {
    id: "case_lad1",
    chapter: "16.2",
    title: {
      ka: "ქეისი #4: ომფალიტი, უჩირქო ნეკროზული ინფექციები და ექსტრემალური ლეიკოციტოზი ახალშობილში",
      en: "Case #4: Omphalitis, Non-Purulent Necrotic Infections & Extreme Leukocytosis",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "5 კვირის ჩვილი, ჭიპლარის მოვარდნის შეფერხებით",
      en: "5-week-old infant with delayed umbilical cord separation",
    },
    presentation: {
      ka: "ახალშობილს ჭიპლარი მოძვრა მხოლოდ დაბადებიდან 29-ე დღეს, რასაც მოჰყვა ჭიპის არის მძიმე ბაქტერიული ანთება (ომფალიტი) და პერიანალური ნეკროზული წყლულები. გასინჯვისას დაზიანების კერები მკვეთრად ჰიპერემიული და ნეკროზულია, თუმცა მათში ჩირქი საერთოდ არ აღინიშნება.",
      en: "The umbilical cord separated at day 29, followed by severe omphalitis and necrotic perianal ulcers. Physical exam reveals erythematous, necrotic lesions with a complete absence of pus.",
    },
    labsAndVitals: {
      ka: [
        "სისხლის საერთო ანალიზი: ლეიკოციტები — 92,000/μL (88% ნეიტროფილები)",
        "ჭრილობის ბიოფსია: ბაქტერიების სიმრავლე, ნეიტროფილური ინფილტრაცია არ ვლინდება",
        "გამდინარე ციტომეტრია: ნეიტროფილების ზედაპირზე არ ვლინდება CD18 მოლეკულა",
      ],
      en: [
        "CBC: WBC 92,000/μL (88% neutrophils)",
        "Wound biopsy: Abundant bacteria with virtually zero neutrophils",
        "Flow cytometry: Absent CD18 expression on neutrophils",
      ],
    },
    question: {
      ka: "რომელი გენის მუტაცია და მოლეკულური დეფექტი განაპირობებს სისხლში ნეიტროფილების ექსტრემალურ მატებას ქსოვილებში ჩირქის არარსებობის ფონზე?",
      en: "Which gene mutation and molecular defect explain extreme blood neutrophilia with absent tissue pus?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "21-ე ქრომოსომაზე ITGB2 გენის მუტაცია (β2-ინტეგრინის CD18 სუბერთეულის დეფექტი), რაც არღვევს LFA-1-ის დაკავშირებას ენდოთელურ ICAM-1-თან და C3bi-ოფსონიზაციას (CR3)",
          en: "Chromosome 21 ITGB2 mutation (β2-integrin CD18 defect) blocking LFA-1 binding to endothelial ICAM-1 and CR3 opsonophagocytosis",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! ეს არის ლეიკოციტების ადჰეზიის დეფიციტი ტიპი I (LAD I). ნეიტროფილები ვერ ემაგრებიან ენდოთელიუმს და ვერ გადიან ქსოვილში.",
          en: "Correct! In LAD I, neutrophils cannot adhere tightly to ICAM-1 or extravasate into tissues.",
        },
      },
      {
        id: "b",
        text: {
          ka: "SLC35C1 გენის დეფექტი და სელექტინების ლიგანდების ფუკოზილირების მოშლა",
          en: "SLC35C1 defect impairing fucosylation of selectin ligands",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. SLC35C1 დეფექტი და ნეიტროფილების „გორვის“ მოშლა ახასიათებს LAD II-ს, ხოლო CD18-ის არარსებობა არის LAD I.",
          en: "Incorrect. SLC35C1 fucosylation defect is LAD II.",
        },
      },
      {
        id: "c",
        text: {
          ka: "LYST გენის მუტაცია და ლიზოსომური ტრაფიკინგის მოშლა გიგანტური გრანულების წარმოქმნით",
          en: "LYST mutation impairing lysosomal trafficking and forming giant granules",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. LYST გენის მუტაცია იწვევს ჩედიაკ-ჰიგასის სინდრომს (დაუსრულებელი ფაგოციტოზი, ალბინიზმი, ნეიროპათია).",
          en: "Incorrect. LYST mutation causes Chediak-Higashi syndrome.",
        },
      },
      {
        id: "d",
        text: {
          ka: "ELANE ან HAX1 გენის მუტაციით გამოწვეული მიელოიდური მომწიფების ბლოკი",
          en: "Myeloid maturation arrest due to ELANE or HAX1 mutation",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ELANE და HAX1 (კოსტმანის დაავადება) იწვევს მძიმე თანდაყოლილ ნეიტროპენიას (<500/μL) და არა ნეიტროფილურ ლეიკოციტოზს.",
          en: "Incorrect. ELANE and HAX1 cause severe congenital neutropenia, not neutrophilia.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "ლეიკოციტების ადჰეზიის დეფიციტი I (LAD I): აუტოსომურ-რეცესიული მუტაცია ITGB2 გენში, რომელიც აკოდირებს β2-ინტეგრინების საერთო CD18 ჯაჭვს (LFA-1, CR3, p150,95). ნეიტროფილები ვერ უკავშირდებიან ენდოთელურ ICAM-1-ს, ვერ გადიან სისხლძარღვიდან ქსოვილში (დიაპედეზის ბლოკი) და ვერ წარმოქმნიან ჩირქს, ხოლო სისხლის ნაკადში ჩარჩენილი ნეიტროფილები იწვევს ექსტრემალურ ლეიკოციტოზს (20,000–150,000/μL). (შენიშვნა: LAD III-ის დროს FERMT3 დეფექტის გამო ინფექციებს ემატება თრომბოციტოპათიური მძიმე სისხლდენები).",
      en: "LAD I is caused by an autosomal recessive ITGB2 (CD18) mutation. Without LFA-1 binding to endothelial ICAM-1, neutrophils cannot extravasate into tissues to form pus, remaining trapped in the bloodstream (20,000–150,000/μL).",
    },
    keyTakeaway: {
      ka: "ჭიპლარის გვიანი მოვარდნა + უჩირქო ნეკროზული ინფექციები + ექსტრემალური ნეიტროფილია = LAD I (ITGB2 / CD18 დეფექტი).",
      en: "Delayed cord separation + Non-purulent infections + Extreme neutrophilia = LAD I (ITGB2 / CD18 defect).",
    },
  },

  // ==========================================================================
  // CASE 5 (16.2): ქრონიკული გრანულომატოზური დაავადება (CGD)
  // ==========================================================================
  {
    id: "case_cgd",
    chapter: "16.2",
    title: {
      ka: "ქეისი #5: სერაციული და ასპერგილოზური აბსცესები და მაობსტრუირებელი გრანულომები",
      en: "Case #5: Serratia & Aspergillus Abscesses with Obstructive Granulomas",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "6 წლის ბიჭი, მორეციდივე ღრმა აბსცესებითა და პილორუსის გრანულომატოზური ობსტრუქციით",
      en: "6-year-old boy with recurrent deep abscesses and gastric outlet granulomas",
    },
    presentation: {
      ka: "ბიჭს ადრეული ასაკიდან აღენიშნება მორეციდივე პნევმონიები, ჩირქოვანი ლიმფადენიტი და ღვიძლის აბსცესები, საიდანაც ამოითესა Staphylococcus aureus, Serratia marcescens და Aspergillus fumigatus. ამავდროულად, მას უპრობლემოდ აქვს გადატანილი სტრეპტოკოკური და პნევმოკოკური ინფექციები. კუჭის ანტრალურ ნაწილში აღმოაჩნდა არაკაზეოზური მაობსტრუირებელი გრანულომები.",
      en: "History of recurrent pneumonia, suppurative lymphadenitis, and hepatic abscesses growing S. aureus, Serratia marcescens, and Aspergillus, but no severe infections with Streptococci or Pneumococci. Biopsy shows non-caseating obstructive granulomas.",
    },
    labsAndVitals: {
      ka: [
        "ნეიტროფილების რიცხვი და CD18 ექსპრესია: ნორმაშია | ანტისხეულების დონე (IgG, IgM, IgA): ნორმაშია",
        "დიჰიდროროდამინის (DHR-123) და ნიტროლურჯი ტეტრაზოლიუმის (NBT) ტესტი: რესპირატორული აფეთქება არ ვლინდება",
        "გენეტიკური კვლევა: X-შეჭიდული CYBB გენის (gp91phox) მუტაცია",
      ],
      en: [
        "Neutrophil count & CD18: Normal | Serum IgG, IgM, IgA: Normal",
        "DHR-123 & NBT assay: Absent oxidative respiratory burst",
        "Genetics: X-linked CYBB (gp91phox) mutation",
      ],
    },
    question: {
      ka: "რატომ არის ეს პაციენტი რეზისტენტული პნევმოკოკებისა და სტრეპტოკოკების მიმართ, მაგრამ უკიდურესად მოწყვლადი S. aureus-ის, Serratia-სა და Aspergillus-ის მიმართ?",
      en: "Why is this patient resistant to Pneumococci and Streptococci, yet highly susceptible to S. aureus, Serratia, and Aspergillus?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "კატალაზა-უარყოფითი სტრეპტოკოკები თავად გამოიმუშავებენ H2O2-ს, რომელსაც მასპინძლის მიელოპეროქსიდაზა (MPO) იყენებს ჰიპოქლორიტის (HOCl⁻) შესაქმნელად; კატალაზა-დადებითი მიკრობები კი საკუთარი კატალაზით შლიან პეროქსიდს",
          en: "Catalase-negative streptococci generate their own H2O2 used by host MPO to form HOCl⁻, whereas catalase-positive microbes neutralize their own peroxide",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! ეს არის ქრონიკული გრანულომატოზური დაავადების (CGD) კლასიკური პათოფიზიოლოგიური პარადოქსი.",
          en: "Correct! This is the classic pathophysiological paradox of Chronic Granulomatous Disease (CGD).",
        },
      },
      {
        id: "b",
        text: {
          ka: "პაციენტს აღენიშნება STAT3 გენის დომინანტურ-ნეგატიური მუტაცია და Th17 უჯრედების დეფიციტი",
          en: "The patient has a dominant-negative STAT3 mutation and Th17 deficiency",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. STAT3 LOF მუტაცია იწვევს ჯობის (ჰიპერ-IgE) სინდრომს („ცივი“ აბსცესები, ეგზემა, IgE > 3000 სე/მლ, სარძევე კბილების შეკავება), სადაც NADPH-ოქსიდაზა ნორმალურია.",
          en: "Incorrect. STAT3 LOF causes Job (Hyper-IgE) syndrome.",
        },
      },
      {
        id: "c",
        text: {
          ka: "პაციენტს დარღვეული აქვს IL-12/IFN-γ ღერძის სიგნალიზაცია მაკროფაგებსა და T-ჰელპერებს შორის",
          en: "The patient has defective IL-12/IFN-γ signaling between macrophages and Th1 cells",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. IL-12/IFN-γ ღერძის დეფიციტი იწვევს მიკობაქტერიული დაავადებებისადმი მენდელისეულ მიდრეკილებას (MSMD).",
          en: "Incorrect. IL-12/IFN-γ defects cause MSMD (susceptibility to BCG/Mycobacteria and Salmonella).",
        },
      },
      {
        id: "d",
        text: {
          ka: "სტრეპტოკოკების განადგურება ხდება მხოლოდ CD8+ ციტოტოქსიკური T-ლიმფოციტების პერფორინ/გრანზიმების სისტემით",
          en: "Streptococci are killed exclusively by CD8+ CTL perforin/granzyme exocytosis",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. სტრეპტოკოკები უჯრედგარე ბაქტერიებია და ნადგურდება ოფსონოფაგოციტოზით.",
          en: "Incorrect. Streptococci are extracellular bacteria cleared by opsonophagocytosis.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "ქრონიკული გრანულომატოზური დაავადება (CGD): NADPH-ოქსიდაზას (CYBB / gp91phox ან NCF1, CYBA, NCF2) დეფექტის გამო ფაგოციტები ვერ წარმოქმნიან სუპეროქსიდ-ანიონსა (O2•⁻) და H2O2-ს. კატალაზა-დადებითი ბაქტერიები და სოკოები (S. aureus, Serratia marcescens, Burkholderia cepacia, Nocardia, Aspergillus, Candida) შლიან საკუთარ მეტაბოლურ პეროქსიდს, გადარჩებიან ფაგოციტების შიგნით და იწვევენ მაკროფაგულ-ლიმფოციტური გრანულომების ჩამოყალიბებას. პაციენტებისთვის კატეგორიულად უკუნაჩვენებია ცოცხალი BCG ვაქცინა!",
      en: "In CGD, NADPH oxidase deficiency prevents superoxide/H2O2 generation. Catalase-positive bacteria and fungi degrade their own peroxide, survive intracellularly, and provoke granuloma formation. Live BCG vaccination is strictly contraindicated.",
    },
    keyTakeaway: {
      ka: "CGD = NADPH-ოქსიდაზას დეფექტი (CYBB) → ინფექციები მხოლოდ კატალაზა-დადებითი მიკრობებით (S. aureus, Serratia, Burkholderia, Nocardia, Aspergillus).",
      en: "CGD = NADPH oxidase defect (CYBB) → Infections strictly with catalase-positive organisms.",
    },
  },

  // ==========================================================================
  // CASE 6 (16.2): ბრუტონის X-შეჭიდული აგამაგლობულინემია (XLA) და ვაქცინა/ტრანსფუზია
  // ==========================================================================
  {
    id: "case_xla",
    chapter: "16.2",
    title: {
      ka: "ქეისი #6: მორეციდივე ჩირქოვანი ოტიტი და პნევმონია 8 თვის ბიჭში ნუშურა ჯირკვლების გარეშე",
      en: "Case #6: Recurrent Purulent Otitis & Pneumonia in an 8-Month-Old Boy Without Tonsils",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "8 თვის ბიჭი, დაბადებიდან მე-6 თვემდე სრულიად ჯანმრთელი",
      en: "8-month-old boy, completely healthy during the first 6 months of life",
    },
    presentation: {
      ka: "სიცოცხლის მე-6 თვიდან ბავშვს განუვითარდა მორეციდივე ჩირქოვანი შუა ყურის ანთება, სინუსიტი, პნევმონია (Streptococcus pneumoniae და Haemophilus influenzae) და გახანგრძლივებული დიარეა (Giardia lamblia). ფიზიკური გასინჯვით ხახის ნუშურა ჯირკვლები (ტონზილები) და პერიფერიული ლიმფური კვანძები პრაქტიკულად არ ისინჯება.",
      en: "Starting at 6 months of age, the infant developed recurrent purulent otitis media, sinusitis, pneumonia (S. pneumoniae, H. influenzae), and Giardia lamblia enteritis. Physical exam shows absent tonsils and non-palpable lymph nodes.",
    },
    labsAndVitals: {
      ka: [
        "CD3+ T-ლიმფოციტები: ნორმაშია (TREC ნორმალური) | CD19+ B-ლიმფოციტები: < 0.5% (KREC არ ვლინდება)",
        "შრატის IgG, IgA, IgM და IgE: უკიდურესად დაბალი / არ ისაზღვრება",
        "დედის ძმას ანამნეზში აღენიშნებოდა მსგავსი სიმპტომები ბავშვობაში",
      ],
      en: [
        "CD3+ T cells: Normal (Normal TREC) | CD19+ B cells: < 0.5% (Absent KREC)",
        "Serum IgG, IgA, IgM, IgE: Undetectable / Profoundly decreased",
        "Family history: Maternal uncle had similar recurrent infections in infancy",
      ],
    },
    question: {
      ka: "რა არის დაავადების მოლეკულური მიზეზი და რატომ გამოვლინდა სიმპტომატიკა მხოლოდ სიცოცხლის მე-6 თვიდან?",
      en: "What is the molecular cause of this disorder, and why did symptoms only appear after 6 months of age?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "ბრუტონის თიროზინკინაზას (BTK) მუტაცია აჩერებს B-უჯრედების მომწიფებას ძვლის ტვინში პრე-B სტადიაზე; პირველ 6 თვეში ბავშვს იცავდა დედისგან FcRn რეცეპტორით ტრანსპლაცენტურად მიღებული IgG",
          en: "Bruton tyrosine kinase (BTK) mutation arrests B-cell maturation at the pre-B stage; transplacental maternal IgG (via FcRn) protected the infant for the first 6 months",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! ეს არის ბრუტონის X-შეჭიდული აგამაგლობულინემია (XLA). დედისეული IgG-ის კატაბოლიზმის შემდეგ (5–12 თვე) ვლინდება კაფსულიანი ბაქტერიებით, ენტეროვირუსებითა და Giardia-თი გამოწვეული ინფექციები.",
          en: "Correct! Bruton XLA presents at 5–12 months once maternal IgG wanes.",
        },
      },
      {
        id: "b",
        text: {
          ka: "CD40L (CD40LG) გენის მუტაცია, რომელიც ბლოკავს იზოტიპურ გადართვას IgM-დან IgG/IgA-ზე",
          en: "CD40L (CD40LG) mutation blocking class switching from IgM to IgG/IgA",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ჰიპერ-IgM სინდრომის დროს CD19+ B-ლიმფოციტების რიცხვი ნორმალურია, ხოლო შრატში IgM მაღალია.",
          en: "Incorrect. In Hyper-IgM syndrome, circulating CD19+ B cells are normal and serum IgM is elevated.",
        },
      },
      {
        id: "c",
        text: {
          ka: "TACI ან BAFF-R რეცეპტორების დეფექტი (საერთო ვარიაბელური იმუნოდეფიციტი - CVID)",
          en: "TACI or BAFF-R defect (Common Variable Immunodeficiency - CVID)",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. CVID ვლინდება მოგვიანებით (10–30 წლის ასაკში) და სისხლში B-უჯრედები შენარჩუნებულია (დარღვეულია პლაზმურ უჯრედებად დიფერენცირება).",
          en: "Incorrect. CVID typically manifests at ages 10–30 with preserved circulating B cells.",
        },
      },
      {
        id: "d",
        text: {
          ka: "22q11.2 მიკროდელეცია (TBX1) და მე-3/მე-4 ხახის ჯიბეების აპლაზია",
          en: "22q11.2 microdeletion (TBX1) and 3rd/4th pharyngeal pouch aplasia",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. დი ჯორჯის სინდრომი იწვევს თიმუსის აპლაზიას (T-ლიმფოპენიას), ჰიპოკალციემიურ ტეტანიასა და გულის მანკებს.",
          en: "Incorrect. DiGeorge syndrome causes T-cell deficiency, hypocalcemia, and cardiac defects.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "ბრუტონის აგამაგლობულინემია (XLA): X-შეჭიდული BTK მუტაცია ბლოკავს პრე-BCR სასიგნალო გზას ძვლის ტვინში. პერიფერიულ სისხლში CD19+ B-უჯრედები <1%-ია, არ ყალიბდება ლიმფური კვანძებისა და ნუშურების გერმინაციული ცენტრები და არ სინთეზდება არცერთი კლასის იმუნოგლობულინი. ახალშობილთა სკრინინგში ვლინდება KREC-ის არარსებობით (ნორმალური TREC-ის ფონზე). მკურნალობა: IgG-ით მუდმივი ჩანაცვლებითი თერაპია (IVIG/SCIG).",
      en: "X-linked BTK mutation blocks pre-BCR signaling in bone marrow, causing absent CD19+ B cells (<1%), absent tonsils/germinal centers, and panhypogammaglobulinemia. Detected at birth via absent KREC with normal TREC.",
    },
    keyTakeaway: {
      ka: "BTK მუტაცია → პრე-B ბლოკი → CD19+ < 1%, KREC = 0, ტონზილების არარსებობა → მანიფესტაცია მე-5–12 თვიდან.",
      en: "BTK mutation → Pre-B arrest → CD19+ < 1%, absent KREC, absent tonsils → Onset at 5–12 months.",
    },
  },

  // ==========================================================================
  // CASE 7 (16.2): კომპლემენტის სისტემის დეფიციტები (CH50 / AH50 დიფერენციალური დიაგნოზი)
  // ==========================================================================
  {
    id: "case_complement",
    chapter: "16.2",
    title: {
      ka: "ქეისი #7: მორეციდივე მენინგოკოკური სეფსისი 19 წლის სტუდენტში (CH50 და AH50 ანალიზი)",
      en: "Case #7: Recurrent Meningococcal Sepsis in a 19-Year-Old Student (CH50/AH50 Analysis)",
    },
    difficulty: { ka: "საშუალო", en: "Intermediate" },
    patientInfo: {
      ka: "19 წლის სტუდენტი, ანამნეზში მეორე ეპიზოდით Neisseria meningitidis სეპტიცემიით",
      en: "19-year-old student with a second episode of Neisseria meningitidis septicemia",
    },
    presentation: {
      ka: "პაციენტი მოთავსდა კლინიკაში მაღალი ცხელებით, მენინგეალური ნიშნებითა და ჰემორაგიული გამონაყარით. სისხლისა და თავ-ზურგტვინის სითხის კულტურიდან კვლავ ამოითესა მენინგოკოკი (Neisseria meningitidis). 3 წლის წინ მას ასევე გადატანილი ჰქონდა დისემინირებული გონოკოკური ინფექცია (N. gonorrhoeae). სხვა ბაქტერიული, ვირუსული ან სოკოვანი ინფექციებისა და აუტოიმუნური დაავადებების ანამნეზი არ აქვს.",
      en: "Admitted with fever, meningeal signs, and petechial rash; CSF/blood grow Neisseria meningitidis. He had a prior episode of disseminated N. gonorrhoeae infection 3 years ago, but no other infections or autoimmune disease.",
    },
    labsAndVitals: {
      ka: [
        "ჰემოლიზური ტესტი CH50 (კლასიკური გზა): მკვეთრად დაქვეითებული / 0",
        "ჰემოლიზური ტესტი AH50 (ალტერნატიული გზა): მკვეთრად დაქვეითებული / 0",
        "შრატის C3 და C4 კონცენტრაცია: ნორმაშია | იმუნოგლობულინები და ფაგოციტოზი: ნორმაშია",
      ],
      en: [
        "CH50 hemolytic assay: Undetectable / 0",
        "AH50 hemolytic assay: Undetectable / 0",
        "Serum C3 and C4 levels: Normal | Immunoglobulins & Phagocytosis: Normal",
      ],
    },
    question: {
      ka: "კომპლემენტის რომელი რგოლის დეფიციტი ახასიათებს ამ პაციენტს და რა განსხვავებული კლინიკა განვითარდებოდა მხოლოდ C1q/C4-ის დეფიციტის დროს?",
      en: "Which complement defect is present here, and what clinical phenotype would occur if C1q/C4 were deficient instead?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "ტერმინალური კომპონენტების (C5–C9 / MAC) დეფიციტი (↓CH50 და ↓AH50 ნორმალური C3-ის ფონზე); ხოლო C1q/C4 დეფიციტი (↓CH50, ნორმალური AH50) იწვევს აპოპტოზური სხეულაკების კლირენსის მოშლასა და სისტემურ წითელ მგლურას (SLE 78–88%-ში)",
          en: "Terminal C5–C9 (MAC) deficiency (↓CH50 & ↓AH50 with normal C3); whereas C1q/C4 deficiency (↓CH50, normal AH50) causes impaired apoptotic clearance and SLE (78–88%)",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! როდესაც როგორც CH50, ისე AH50 დაქვეითებულია, ხოლო C3 ნორმაშია, დეფექტი მდებარეობს C5–C9 (მემბრანა-შემტევ კომპლექსში), რაც იწვევს სელექციურ მგრძნობელობას Neisseria-ს მიმართ.",
          en: "Correct! Both CH50 and AH50 are low with normal C3, localizing the defect to C5–C9 (MAC).",
        },
      },
      {
        id: "b",
        text: {
          ka: "ფაქტორ D-ს ან პროპერდინის დეფიციტი, რადგან ამ დროს ორივე (CH50 და AH50) ნულის ტოლია",
          en: "Factor D or Properdin deficiency, because both CH50 and AH50 drop to zero",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ფაქტორ B, D ან პროპერდინის დეფიციტის დროს ქვეითდება მხოლოდ AH50, ხოლო კლასიკური გზის CH50 ნორმალურია.",
          en: "Incorrect. Factor B, D, or Properdin deficiency results in normal CH50 and low AH50.",
        },
      },
      {
        id: "c",
        text: {
          ka: "CD59-ის დეფიციტი, რომელიც ბლოკავს ნეისერიების ოფსონიზაციას",
          en: "CD59 deficiency blocking opsonization of Neisseria",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. CD59 იცავს მასპინძლის ერითროციტებს MAC-ისგან; მისი დეფიციტი იწვევს სისხლძარღვშიდა ჰემოლიზს.",
          en: "Incorrect. CD59 protects host cells from MAC; its deficiency causes intravascular hemolysis.",
        },
      },
      {
        id: "d",
        text: {
          ka: "C1-ინჰიბიტორის დეფიციტი, რომელიც იწვევს ნეისერიულ მენინგიტს",
          en: "C1-Inhibitor deficiency causing meningococcal meningitis",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. C1-Inh დეფიციტი იწვევს ბრადიკინინ-განპირობებულ მემკვიდრულ ანგიონევროზულ (კვინკეს) შეშუპებას.",
          en: "Incorrect. C1-Inh deficiency causes bradykinin-mediated hereditary angioedema.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "კომპლემენტის სკრინინგის ალგორითმი: 1) ↓CH50 და ნორმალური AH50 = C1q, C1r/s, C4 ან C2 დეფიციტი (აპოპტოზური ნუკლეოსომების კლირენსის მოშლა → სისტემური წითელი მგლურა); 2) ნორმალური CH50 და ↓AH50 = ფაქტორ B, D ან პროპერდინის დეფიციტი; 3) ↓CH50 და ↓AH50 = ცენტრალური C3-ის (მძიმე პიოგენური ინფექციები + გლომერულონეფრიტი) ან ტერმინალური C5–C9-ის დეფიციტი (MAC-ის არარსებობა → დისემინირებული Neisseria meningitidis / N. gonorrhoeae ინფექციები).",
      en: "Complement Diagnostics: 1) ↓CH50 + Normal AH50 = C1q/C4/C2 deficiency (SLE); 2) Normal CH50 + ↓AH50 = Factor B/D/Properdin deficiency; 3) ↓CH50 + ↓AH50 = C3 deficiency or terminal C5–C9 (MAC) deficiency (selective susceptibility to Neisseria).",
    },
    keyTakeaway: {
      ka: "C5–C9 (MAC) დეფიციტი = ↓CH50 + ↓AH50 (C3 ნორმა) → მორეციდივე Neisseria; C1q/C4 დეფიციტი = ↓CH50 + ნორმალური AH50 → სისტემური წითელი მგლურა.",
      en: "C5–C9 deficiency = ↓CH50 + ↓AH50 → Recurrent Neisseria; C1q/C4 deficiency = ↓CH50 + normal AH50 → SLE.",
    },
  },

  // ==========================================================================
  // CASE 8 (16.2): აივ-1 / შიდს-ი, პიროპტოზი, IRIS და დეფექტური პროვირუსები
  // ==========================================================================
  {
    id: "case_hiv_iris",
    chapter: "16.2",
    title: {
      ka: "ქეისი #8: პნევმოცისტური პნევმონია, CD4+ განლევა და პარადოქსული გაუარესება ART-ის დაწყების შემდეგ",
      en: "Case #8: Pneumocystis Pneumonia, CD4+ Depletion & Paradoxical Worsening on ART",
    },
    difficulty: { ka: "რთული", en: "Advanced" },
    patientInfo: {
      ka: "35 წლის მამაკაცი, ახლად დიაგნოსტირებული აივ-1 ინფექციით (CDC კატეგორია C3)",
      en: "35-year-old male with newly diagnosed HIV-1 infection (CDC Category C3)",
    },
    presentation: {
      ka: "პაციენტმა მიმართა კლინიკას მშრალი ხველით, პროგრესირებადი ქოშინით, ყლაპვის გაძნელებითა (საყლაპავის კანდიდოზი) და წონაში კლებით. დაუდგინდა Pneumocystis jirovecii პნევმონია (PCP). ანტიმიკრობული მკურნალობის შემდეგ დაეწყო კომბინირებული ანტირეტროვირუსული თერაპია (ART). 3 კვირის შემდეგ ვირუსული დატვირთვა მკვეთრად დაეცა, CD4+ რიცხვი გაიზარდა, თუმცა პაციენტს უეცრად განუვითარდა 39.5 °C ცხელება, კისრის ლიმფური კვანძების მტკივნეული გადიდება და ფილტვში ფარული ტუბერკულოზური კერის მწვავე ანთებითი დესტრუქცია.",
      en: "Presented with dry cough, dyspnea, esophageal candidiasis, and Pneumocystis jirovecii pneumonia (PCP). Started on combined ART; 3 weeks later, viral load dropped and CD4+ count rose, but he abruptly developed high fever, painful cervical lymphadenitis, and acute inflammatory flare of occult pulmonary tuberculosis.",
    },
    labsAndVitals: {
      ka: [
        "საწყისი CD4+ T-ლიმფოციტები: 65 უჯრედი/μL (<200/μL = შიდს-ი) | CD4/CD8 ინდექსი: 0.25 (<0.9)",
        "ART-იდან 3 კვირაში: აივ-რნმ მკვეთრად დაქვეითდა, CD4+ გაიზარდა 210/μL-მდე",
        "ლიმფოიდური ქსოვილის კვლევა: მოსვენებულ CD4+ უჯრედებში კასპაზა-1-ისა და გასდერმინ D-ის აქტივაცია",
      ],
      en: [
        "Baseline CD4+ T cells: 65 cells/μL (<200/μL = AIDS) | CD4/CD8 ratio: 0.25 (<0.9)",
        "3 weeks on ART: HIV RNA suppressed, CD4+ rose to 210/μL",
        "Lymphoid biopsy: High caspase-1 and Gasdermin D cleavage in bystander CD4+ T cells",
      ],
    },
    question: {
      ka: "რა არის ლიმფოიდურ ქსოვილში CD4+ T-უჯრედების განლევის დომინანტური (>80–95%) მოდალობა და რა ეწოდება ART-ის დაწყებიდან 3 კვირაში განვითარებულ პარადოქსულ ანთებით გართულებას?",
      en: "What is the dominant (>80–95%) modality of CD4+ T-cell death in lymphoid tissue, and what is the paradoxical inflammatory syndrome seen 3 weeks after starting ART?",
    },
    options: [
      {
        id: "a",
        text: {
          ka: "აბორტული ინფექციით ინდუცირებული პიროპტოზი (კასპაზა-1 ხლეჩს გასდერმინ D-ს + IL-1β/IL-18), ხოლო ART-ის შემდგომი გამწვავება არის იმუნური რეკონსტიტუციის ანთებითი სინდრომი (IRIS)",
          en: "Abortive infection-induced pyroptosis (caspase-1 cleaving Gasdermin D + IL-1β/IL-18), followed by Immune Reconstitution Inflammatory Syndrome (IRIS) on ART",
        },
        isCorrect: true,
        feedback: {
          ka: "სწორია! CD4+ T-უჯრედების >80–95% იღუპება აბორტული ინფექციით გაშვებული პიროპტოზით, ხოლო ART-ის ფონზე სწრაფად აღდგენილი CD4+ უჯრედების მძაფრ ანთებით შეტევას ფარულ პათოგენებზე (ტუბერკულოზი, კრიპტოკოკი, CMV) ეწოდება IRIS.",
          en: "Correct! Bystander pyroptosis via caspase-1/GSDMD depletes CD4+ cells, and rapid immune recovery on ART triggers IRIS against occult TB.",
        },
      },
      {
        id: "b",
        text: {
          ka: "CD4+ უჯრედების 95% იღუპება მხოლოდ პროდუქტიული ვირუსული რეპლიკაციით, ხოლო გამწვავება არის რეაქცია „ტრანსპლანტატი მასპინძლის წინააღმდეგ“ (GVHD)",
          en: "95% of CD4+ cells die via productive viral replication, and the flare is Graft-versus-Host Disease (GVHD)",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. პროდუქტიული რეპლიკაციით იღუპება CD4+ უჯრედების მხოლოდ <5–20%, ხოლო GVHD ვითარდება დაუსხივებელი სისხლის გადასხმის ან ტრანსპლანტაციის დროს.",
          en: "Incorrect. Productive replication accounts for <5–20% of CD4+ cell death.",
        },
      },
      {
        id: "c",
        text: {
          ka: "პროვირუსული რეზერვუარის 95% ინტაქტურია და ART-ის ფონზე სრულად ქრება 3 კვირაში",
          en: "95% of the proviral reservoir is replication-competent and completely eradicated within 3 weeks of ART",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. ART-ის ფონზე პროვირუსული რეზერვუარის მხოლოდ 2–5%-ია ინტაქტური, ხოლო >90% დეფექტურია (თუმცა განაგრძობს კრიპტული პეპტიდების სინთეზს და იწვევს CD8+ უჯრედების გამოფიტვას).",
          en: "Incorrect. Over 90% of integrated proviruses are defective, yet they transcribe cryptic peptides causing CD8+ exhaustion.",
        },
      },
      {
        id: "d",
        text: {
          ka: "აივ-1 აინფიცირებს მხოლოდ B-ლიმფოციტებს CD19 რეცეპტორის მეშვეობით",
          en: "HIV-1 exclusively infects B lymphocytes via the CD19 receptor",
        },
        isCorrect: false,
        feedback: {
          ka: "არასწორია. აივ-1-ის gp120/gp41 უკავშირდება CD4 რეცეპტორსა და CCR5 (R5) ან CXCR4 (X4) კორეცეპტორებს T-ჰელპერებზე, მონოციტ/მაკროფაგებსა და მიკროგლიაზე.",
          en: "Incorrect. HIV-1 binds CD4 and CCR5/CXCR4 on T-helper cells, macrophages, and microglia.",
        },
      },
    ],
    pathogenesisSummary: {
      ka: "აივ/შიდს-ის საკვანძო მექანიზმები: 1) GALT-ის CD4+ T-უჯრედების მასობრივი განლევა და „მჟონავი ნაწლავი“ (LPS ტრანსლოკაცია); 2) უჯრედების >80–95% იღუპება აბორტული ინფექციით გამოწვეული პიროპტოზით (კასპაზა-1 → გასდერმინ D + IL-1β/IL-18), აგრეთვე აპოპტოზით, ნეკროპტოზითა (RIPK1/3–MLKL) და ფეროპტოზით (NCOA4); 3) ART-ის დაწყებისას სწრაფად აღდგენილი იმუნური პასუხი ფარულ ინფექციებზე (ტუბერკულოზი, კრიპტოკოკი, CMV) იწვევს იმუნური რეკონსტიტუციის ანთებით სინდრომს (IRIS); 4) ხანგრძლივი ART-ის ფონზე დეფექტური პროვირუსები (>90%) და ცნს-ის მიკროგლიური რეზერვუარი იწვევს CD8+ CTL გამოფიტვას (↑PD-1), „ანთებით დაბერებას“ (inflammaging) და HAND-ს.",
      en: "HIV/AIDS Pathogenesis: 1) GALT CD4+ depletion & microbial translocation; 2) >80–95% of CD4+ cells die via abortive infection-driven caspase-1/GSDMD pyroptosis; 3) Rapid immune recovery on ART triggers IRIS against occult infections (TB, Cryptococcus, CMV); 4) Defective proviruses (>90%) and CNS microglial reservoirs drive CD8+ exhaustion and HAND.",
    },
    keyTakeaway: {
      ka: "CD4+ სიკვდილის >80–95% = აბორტული ინფექცია → კასპაზა-1 / გასდერმინ D პიროპტოზი; ART-ის შემდგომი ანთებითი აფეთქება = IRIS.",
      en: ">80–95% CD4+ death = Abortive infection → Caspase-1/GSDMD Pyroptosis; Post-ART inflammatory flare = IRIS.",
    },
  },
];