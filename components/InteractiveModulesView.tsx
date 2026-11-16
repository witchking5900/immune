"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Lang } from "./StudyTool";

interface InteractiveModulesViewProps {
  lang: Lang;
}

// ============================================================================
// 1. FLASHCARDS DATASET (Chapters 16.1 & 16.2)
// ============================================================================
interface FlashcardItem {
  id: string;
  chapter: "16.1" | "16.2";
  category: Record<Lang, string>;
  front: Record<Lang, string>;
  back: Record<Lang, string>;
}

const flashcardsData: FlashcardItem[] = [
  {
    id: "fc1",
    chapter: "16.1",
    category: { ka: "ბაქტერიული ტოქსინები", en: "Bacterial Toxins" },
    front: {
      ka: "ბოტულიზმის ტოქსინი vs. ტეტანუსის ტოქსინი (მოქმედების მექანიზმი და კლინიკა)",
      en: "Botulinum Toxin vs. Tetanus Toxin (Mechanism & Clinical Effect)",
    },
    back: {
      ka: "• ბოტულიზმის ტოქსინი (C. botulinum): ბლოკავს ქოლინერგული ნერვული დაბოლოებებიდან აცეტილქოლინის გამოყოფას → იწვევს დუნე დამბლას.\n• ტეტანუსის ტოქსინი (C. tetani): ბლოკავს ზურგის ტვინის შემაკავებელ ნეირონებში მედიატორების (გლიცინი/გაემ) გამოყოფას → იწვევს სპასტიურ კრუნჩხვებს.",
      en: "• Botulinum toxin: Blocks acetylcholine release at cholinergic terminals → Flaccid paralysis.\n• Tetanus toxin: Blocks inhibitory neurotransmitters in spinal interneurons → Spastic paralysis.",
    },
  },
  {
    id: "fc2",
    chapter: "16.1",
    category: { ka: "სუპერანტიგენები", en: "Superantigens" },
    front: {
      ka: "Staphylococcus aureus-ის სუპერანტიგენის მოლეკულური სამიზნე ტოქსიკური შოკის სინდრომის (TSS) დროს",
      en: "Molecular target of S. aureus Superantigen in Toxic Shock Syndrome (TSS)",
    },
    back: {
      ka: "პირდაპირ (პროცესინგის გარეშე) აკავშირებს APC-ის MHC II კლასის მოლეკულას და T-ლიმფოციტების TCR-ის Vβ დომენს → T-უჯრედების 20%-მდე პოლიკლონური აქტივაცია → „ციტოკინური შტორმი“, ცხელება, ჰიპოტენზია, დიფუზური ერითემა და MODS.",
      en: "Directly bridges APC MHC Class II and TCR Vβ domain → Polyclonal activation of up to 20% of T cells → Cytokine storm, hypotension, diffuse erythema, and MODS.",
    },
  },
  {
    id: "fc3",
    chapter: "16.1",
    category: { ka: "ენდოტოქსინი და სეფსისი", en: "Endotoxin & Sepsis" },
    front: {
      ka: "გრამ-უარყოფითი ბაქტერიების ენდოტოქსინის (LPS) ტოქსიკური კომპონენტი, რეცეპტორი და მთავარი ეფექტები",
      en: "Toxic moiety, receptor, and downstream effects of Gram-negative Endotoxin (LPS)",
    },
    back: {
      ka: "ტოქსიკური კომპონენტია ლიპიდ A (თავისუფლდება ბაქტერიის ლიზისის დროს). უკავშირდება მაკროფაგების TLR4-ს → TNF-α, IL-1, IL-6 და NO-ს ჭარბი სინთეზი → ცხელება, სისტემური ვაზოდილატაცია (დისტრიბუციული შოკი), დსკ სინდრომი და MODS.",
      en: "Lipid A binds macrophage TLR4 → Massive release of TNF-α, IL-1, IL-6, and NO → Fever, distributive shock, DIC, and MODS.",
    },
  },
  {
    id: "fc4",
    chapter: "16.1",
    category: { ka: "უჯრედშიდა პათოგენები", en: "Intracellular Pathogens" },
    front: {
      ka: "რიკეტსიები (Rickettsia) vs. ქლამიდიები (Chlamydia) — გადაცემა და განვითარების ციკლი",
      en: "Rickettsia vs. Chlamydia — Transmission & Developmental Cycle",
    },
    back: {
      ka: "• რიკეტსიები: გადაეცემა ფეხსახსრიანებით (ტილი, რწყილი, ტკიპა), მრავლდება სისხლძარღვთა ენდოთელიუმში → ნეკროზი/ვასკულიტი (პარტახტიანი ტიფი).\n• ქლამიდიები: გადაეცემა პირდაპირი კონტაქტით/აეროზოლით; აქვს ორფაზიანი ციკლი (ელემენტარული ნაწილაკი → რეტიკულური სხეულაკი). იწვევს ტრაქომას, უროგენიტალურ ინფექციებსა და ორნითოზს.",
      en: "• Rickettsia: Arthropod-borne, replicates in vascular endothelium (typhus).\n• Chlamydia: Direct contact/aerosol; biphasic cycle (elementary body → reticulate body); causes trachoma, STI, psittacosis.",
    },
  },
  {
    id: "fc5",
    chapter: "16.1",
    category: { ka: "პრიონები", en: "Prions" },
    front: {
      ka: "პრიონული ინფექციების (PrPSc) პათოგენეზის მექანიზმი და კლინიკური ფორმები",
      en: "Pathogenesis of Prion (PrPSc) Infections & Clinical Syndromes",
    },
    back: {
      ka: "ნუკლეინის მჟავის არმქონე, β-სტრუქტურით მდიდარი ცილა PrPSc კონფორმაციულად გარდაქმნის ნორმალურ ნეირონულ PrPc ცილას პროტეოლიზისადმი მდგრად ფორმად → ამილოიდური ფოლაქები და სპონგიოფორმული ენცეფალოპათია (კროიცფელდ-იაკობის დაავადება, კურუ, ფატალური ოჯახური უძილობა).",
      en: "Nucleic acid-free β-sheet-rich PrPSc converts normal neuronal PrPc into protease-resistant amyloid plaques → Spongiform encephalopathy (CJD, Kuru, FFI).",
    },
  },
  {
    id: "fc6",
    chapter: "16.1",
    category: { ka: "მწვავე ფაზის პასუხი", en: "Acute Phase Response" },
    front: {
      ka: "დადებითი vs. უარყოფითი მწვავე ფაზის ცილები ღვიძლში ინფექციის დროს",
      en: "Positive vs. Negative Acute Phase Proteins synthesized in the liver",
    },
    back: {
      ka: "• დადებითი (იზრდება ↑): C-რეაქტიული ცილა (CRP), სისხლის შრატის ამილოიდი A (SAA), ფიბრინოგენი (ზრდის ედს-ს), კომპლემენტის კომპონენტები.\n• უარყოფითი (მცირდება ↓): ალბუმინი, ტრანსფერინი, ინსულინის მსგავსი ზრდის ფაქტორი-1 (IGF-1).",
      en: "• Positive (↑): CRP, Serum Amyloid A (SAA), Fibrinogen (↑ESR), Complement.\n• Negative (↓): Albumin, Transferrin, IGF-1.",
    },
  },
  {
    id: "fc7",
    chapter: "16.1",
    category: { ka: "იმუნური არიდება", en: "Immune Evasion" },
    front: {
      ka: "როგორ აღწევს თავს იმუნურ პასუხს S. aureus (პროტეინ A), N. gonorrhoeae და H. pylori?",
      en: "How do S. aureus, N. gonorrhoeae, and H. pylori evade host defenses?",
    },
    back: {
      ka: "• S. aureus: პროტეინ A ბოჭავს IgG-ს Fc-ფრაგმენტს (ბლოკავს ოფსონიზაციას), კოაგულაზა ქმნის ფიბრინულ კოლტს.\n• N. gonorrhoeae / H. influenzae: გამოყოფენ სეკრეტორულ IgA-პროტეაზებს.\n• H. pylori: შოლტებით ჩადის ლორწოვანში და ურეაზათი შლის შარდოვანას ამიაკად (ანეიტრალებს H⁺-ს).",
      en: "• S. aureus: Protein A binds IgG Fc; coagulase forms fibrin clot.\n• N. gonorrhoeae: Secretes IgA protease.\n• H. pylori: Urease generates ammonia to neutralize gastric acid.",
    },
  },
  {
    id: "fc8",
    chapter: "16.2",
    category: { ka: "რეაქტიულობა და რეზისტენტობა", en: "Reactivity & Resistance" },
    front: {
      ka: "დადებითი ჰიპერგია vs. უარყოფითი ჰიპერგია (ანერგია) — რეზისტენტობასთან კავშირი",
      en: "Positive Hypergia vs. Negative Hypergia (Anergy) — Relation to Resistance",
    },
    back: {
      ka: "• დადებითი ჰიპერგია (↓რეაქტიულობა, ↑რეზისტენტობა): ცნს-ში შეკავების დომინირება ზოგავს ენერგორესურსებსა და ჟანგბადს (ზამთრის ძილი/ჰიბერნაცია, მართვადი ჰიპოთერმია, ღრმა ნარკოზი, აუტოტოლერანტობა).\n• უარყოფითი ანერგია (↓რეაქტიულობა, ↓რეზისტენტობა): დაცვითი სისტემების გამოფიტვა (მძიმე შიმშილი, ტერმინალური ტუბერკულოზი, შიდს-ი).",
      en: "• Positive Hypergia (↓Reactivity, ↑Resistance): Hibernation, hypothermia, deep anesthesia.\n• Negative Anergy (↓Reactivity, ↓Resistance): Exhaustion in starvation, terminal TB, or AIDS.",
    },
  },
  {
    id: "fc9",
    chapter: "16.2",
    category: { ka: "დიზერგია / ფსევდოალერგია", en: "Pseudoallergy" },
    front: {
      ka: "ასპირინული ბრონქული ასთმის პათოგენეზი (რატომ არის ფსევდოალერგიული რეაქცია?)",
      en: "Pathogenesis of Aspirin-Induced Asthma (Why is it a pseudoallergy?)",
    },
    back: {
      ka: "ვითარდება იმუნოლოგიური სენსიბილიზაციისა და IgE-ს გარეშე: ასპირინი ბლოკავს ციკლოოქსიგენაზას (COX), რის გამოც არაქიდონის მჟავა მთლიანად გადაერთვება ლიპოოქსიგენაზურ გზაზე და ჭარბად სინთეზდება ბრონქოსპაზმური ცისტეინილ-ლეიკოტრიენები (LTC4, LTD4, LTE4).",
      en: "Non-immunological reaction: COX blockade shunts arachidonic acid into the lipoxygenase pathway, causing overproduction of bronchoconstrictive leukotrienes (LTC4, LTD4, LTE4).",
    },
  },
  {
    id: "fc10",
    chapter: "16.2",
    category: { ka: "PRR დეფექტები", en: "Innate PRR Defects" },
    front: {
      ka: "IRAK4 / MyD88 დეფიციტი vs. TLR3–UNC93B1–TRIF–TBK1–IRF3 ღერძის დეფიციტი",
      en: "IRAK4 / MyD88 Deficiency vs. TLR3–UNC93B1–TRIF–TBK1–IRF3 Axis Defect",
    },
    back: {
      ka: "• IRAK4 / MyD88 დეფიციტი (LOF): მძიმე ინვაზიური პიოგენური ბაქტერიული ინფექციები (S. pneumoniae, S. aureus) ცხელების გარეშე.\n• TLR3 ღერძის დეფიციტი: ცნს-ში ვირუსული dsRNA სენსინგისა და IFN-α/β სინთეზის ბლოკი → მარტივი ჰერპესის ვირუსით (HSV-1) გამოწვეული ენცეფალიტი (HSE).",
      en: "• IRAK4/MyD88 LOF: Invasive pyogenic infections without fever.\n• TLR3 Axis LOF: Impaired CNS IFN-α/β synthesis → Herpes Simplex Encephalitis (HSE).",
    },
  },
  {
    id: "fc11",
    chapter: "16.2",
    category: { ka: "ინფლამასომა და პიროპტოზი", en: "Inflammasome & Pyroptosis" },
    front: {
      ka: "ინფლამასომის (NLRP3, MEFV) აქტივაციის კასკადი და პიროპტოზის მექანიზმი",
      en: "Inflammasome (NLRP3, MEFV) Activation Cascade & Pyroptosis Mechanism",
    },
    back: {
      ka: "DAMP-ებისა და ტოქსინების საპასუხოდ ინფლამასომა ააქტიურებს კასპაზა-1-ს, რომელიც წარმოქმნის აქტიურ IL-1β-სა და IL-18-ს და ხლეჩს გასდერმინ D-ს (GSDMD). გასდერმინ D მემბრანაში ქმნის ფორებს და იწვევს უჯრედის ანთებით ლიზისს — პიროპტოზს (მუტაცია იწვევს FMF-სა და CAPS-ს).",
      en: "Inflammasome activates Caspase-1 → Maturation of IL-1β/IL-18 + cleavage of Gasdermin D (GSDMD) → Membrane pores & inflammatory pyroptosis (FMF, CAPS).",
    },
  },
  {
    id: "fc12",
    chapter: "16.2",
    category: { ka: "ფაგოციტოზის დეფექტები", en: "Phagocyte Defects" },
    front: {
      ka: "LAD I (ITGB2 / CD18) vs. ქრონიკული გრანულომატოზური დაავადება (CGD - CYBB)",
      en: "LAD I (ITGB2 / CD18) vs. Chronic Granulomatous Disease (CGD - CYBB)",
    },
    back: {
      ka: "• LAD I: β2-ინტეგრინის (CD18) დეფექტი → ნეიტროფილები ვერ გადიან ქსოვილში → ჭიპლარის მოვარდნის შეფერხება, უჩირქო ნეკროზული ინფექციები და ექსტრემალური ლეიკოციტოზი (20,000–150,000/μL).\n• CGD: NADPH-ოქსიდაზას (gp91phox) დეფექტი → მძიმე აბსცესები და გრანულომები მხოლოდ კატალაზა-დადებითი ბაქტერიებითა და სოკოებით (S. aureus, Serratia, Aspergillus).",
      en: "• LAD I (CD18): Delayed cord separation, non-purulent infections, extreme blood neutrophilia.\n• CGD (NADPH oxidase): Abscesses and granulomas strictly with catalase-positive microbes.",
    },
  },
  {
    id: "fc13",
    chapter: "16.2",
    category: { ka: "კომპლემენტის პათოლოგია", en: "Complement Pathology" },
    front: {
      ka: "C1q / C4 / C2 დეფიციტი vs. C5–C9 დეფიციტი vs. ფაქტორ H / I / CD46 დეფიციტი",
      en: "C1q/C4/C2 Deficiency vs. C5–C9 Deficiency vs. Factor H/I/CD46 Deficiency",
    },
    back: {
      ka: "• C1q, C4, C2 დეფიციტი (↓CH50, ნორმ. AH50): აპოპტოზური სხეულაკების კლირენსის მოშლა → სისტემური წითელი მგლურა (SLE 88%-მდე).\n• C5–C9 დეფიციტი (↓CH50, ↓AH50): MAC-ის არარსებობა → დისემინირებული ნეისერიული ინფექციები.\n• FH, FI, CD46 დეფიციტი: ალტერნატიული გზის ჰიპერაქტივაცია → ატიპური HUS (მკურნალობა: ეკულიზუმაბი).",
      en: "• C1q/C4/C2: SLE (88% in C1q).\n• C5–C9 (MAC): Disseminated Neisseria infections.\n• Factor H/I/CD46: Atypical HUS (treated with anti-C5 eculizumab).",
    },
  },
  {
    id: "fc14",
    chapter: "16.2",
    category: { ka: "აუტოტოლერანტობა", en: "Immune Tolerance" },
    front: {
      ka: "AIRE (APECED) vs. FOXP3 (IPEX) vs. FAS / CD95 (ALPS) მუტაციები",
      en: "AIRE (APECED) vs. FOXP3 (IPEX) vs. FAS (ALPS) Mutations",
    },
    back: {
      ka: "• AIRE (თიმუსის ცენტრალური ტოლერანტობა): APECED (აუტოიმუნური პოლიენდოკრინოპათია, კანდიდოზი, ექტოდერმული დისტროფია).\n• FOXP3 (Treg უჯრედების არარსებობა): X-შეჭიდული IPEX სინდრომი (ენტეროპათია, ენდოკრინოპათია, დერმატიტი).\n• FAS/FASLG (აპოპტოზის ბლოკი): ALPS (CD4⁻CD8⁻ ორმაგად უარყოფითი T-უჯრედების დაგროვება, ლიმფოპროლიფერაცია).",
      en: "• AIRE: APECED.\n• FOXP3 (absent Tregs): X-linked IPEX syndrome.\n• FAS/FASLG (defective apoptosis): ALPS with CD4⁻CD8⁻ double-negative T cells.",
    },
  },
  {
    id: "fc15",
    chapter: "16.2",
    category: { ka: "მძიმე კომბინირებული იმუნოდეფიციტი", en: "SCID Phenotypes" },
    front: {
      ka: "T⁻B⁺NK⁻ SCID vs. T⁻B⁻NK⁺ SCID vs. T⁻B⁻NK⁻ SCID (გენები და მექანიზმები)",
      en: "T⁻B⁺NK⁻ SCID vs. T⁻B⁻NK⁺ SCID vs. T⁻B⁻NK⁻ SCID (Genes & Mechanisms)",
    },
    back: {
      ka: "• T⁻B⁺NK⁻ SCID: IL2RG (საერთო γc ჯაჭვი) ან JAK3 მუტაცია (IL-7 და IL-15 სიგნალის ბლოკი).\n• T⁻B⁻NK⁺ SCID: RAG1/2, Artemis ან LIG4 მუტაცია (V(D)J რეკომბინაციის ბლოკი; ნაწილობრივი RAG1/2 იწვევს ომენის სინდრომს).\n• T⁻B⁻NK⁻ SCID: ADA (dATP ტოქსიკურობა), PNP (dGTP) ან AK2 (რეტიკულური დისგენეზია).",
      en: "• T⁻B⁺NK⁻: IL2RG (γc) or JAK3.\n• T⁻B⁻NK⁺: RAG1/2 or Artemis (V(D)J block).\n• T⁻B⁻NK⁻: ADA (dATP toxicity) or AK2 (reticular dysgenesis).",
    },
  },
  {
    id: "fc16",
    chapter: "16.2",
    category: { ka: "სინდრომული IEI", en: "Syndromic IEI" },
    front: {
      ka: "დი ჯორჯის (22q11.2), ვისკოტ-ოლდრიჩის (WAS) და ლუი-ბარის (ATM) სინდრომების კლასიკური ნიშნები",
      en: "Classic Triads of DiGeorge (22q11.2), Wiskott-Aldrich (WAS) & Ataxia-Telangiectasia (ATM)",
    },
    back: {
      ka: "• დი ჯორჯი (TBX1): თიმუსის აპლაზია (T-ლიმფოპენია) + პარათირეოიდული აპლაზია (ჰიპოკალციემიური ტეტანია) + აორტის რკალის/გულის მანკი.\n• WAS: მიკროთრომბოციტოპენია + ეგზემა + ინფექციები (↓IgM, ↑IgA/IgE).\n• ATM: ნათხემის ატაქსია + ტელეანგიექტაზია + ↓IgA + მაღალი რადიოსენსიტიურობა.",
      en: "• DiGeorge: Thymic aplasia + Hypocalcemic tetany + Cardiac defects.\n• WAS: Microthrombocytopenia + Eczema + Infections.\n• ATM: Cerebellar ataxia + Telangiectasia + Radiosensitivity.",
    },
  },
  {
    id: "fc17",
    chapter: "16.2",
    category: { ka: "B-უჯრედული დეფიციტები", en: "B-Cell Deficiencies" },
    front: {
      ka: "ბრუტონის XLA (BTK) vs. საერთო ვარიაბელური იმუნოდეფიციტი (CVID) vs. ჰიპერ-IgM (CD40L)",
      en: "Bruton XLA (BTK) vs. CVID vs. Hyper-IgM Syndrome (CD40L)",
    },
    back: {
      ka: "• ბრუტონის XLA (BTK): პრე-B ბლოკი, CD19⁺ B-უჯრედები <1%, KREC=0, ყველა Ig დაბალია; ვლინდება მე-5–12 თვიდან.\n• CVID (TACI, BAFF-R): ვლინდება 10–30 წლის ასაკში; B-უჯრედები არის, მაგრამ არ გარდაიქმნება პლაზმურ უჯრედებად (↓IgG, ↓IgA/IgM, აუტოიმუნიტეტი).\n• ჰიპერ-IgM (CD40L, AID): იზოტიპური გადართვის ბლოკი (მაღალი IgM, არ არის IgG/IgA/IgE).",
      en: "• XLA (BTK): Absent B cells (<1%), all Igs absent, onset 5–12 mo.\n• CVID: Present B cells but impaired plasma cell differentiation, onset 10–30 yr.\n• Hyper-IgM: High IgM, absent IgG/IgA/IgE.",
    },
  },
  {
    id: "fc18",
    chapter: "16.2",
    category: { ka: "3 აბსოლუტური უკუჩვენება", en: "3 Absolute Contraindications" },
    front: {
      ka: "დაასახელეთ 3 აბსოლუტური სამედიცინო უკუჩვენება პირველადი იმუნოდეფიციტების (IEI) მართვაში",
      en: "Name the 3 Absolute Contraindications in managing Inborn Errors of Immunity (IEI)",
    },
    back: {
      ka: "1. ცოცხალი ატენუირებული ვაქცინები (BCG, პერორალური პოლიო, MMR) — SCID-ის, T-უჯრედული, CGD-ის და IFN-γ დეფექტების დროს.\n2. დაუსხივებელი სისხლის გადასხმა — T-უჯრედული დეფიციტისას (ლეტალური ტრანსფუზიული GVHD-ის რისკი).\n3. IgA-ს შემცველი პლაზმის/სისხლის გადასხმა — სელექციური IgA დეფიციტის დროს (ანტი-IgA ანაფილაქსიური შოკი).",
      en: "1. Live vaccines (BCG, OPV, MMR) in SCID/T-cell/CGD defects.\n2. Non-irradiated blood products in T-cell defects (fatal GVHD).\n3. IgA-containing plasma in selective IgA deficiency (anaphylactic shock).",
    },
  },
  {
    id: "fc19",
    chapter: "16.2",
    category: { ka: "აივ-1 / შიდს-ი", en: "HIV-1 / AIDS" },
    front: {
      ka: "CD4⁺ T-ლიმფოციტების განლევის დომინანტური (>80–95%) მექანიზმი აივ-ინფექციის დროს",
      en: "Dominant (>80–95%) Mechanism of CD4⁺ T-Cell Depletion in HIV-1 Infection",
    },
    back: {
      ka: "მოსვენებულ „გვერდით დამკვირვებელ“ (bystander) CD4⁺ T-უჯრედებში ვირუსოლოგიური სინაფსით გადაცემული აბორტული ინფექცია → არასრული დნმ-ფრაგმენტების დაგროვება → ინფლამასომისა და კასპაზა-1-ის აქტივაცია → გასდერმინ D-ის გახლეჩა → პიროპტოზი და IL-1β/IL-18-ის გამოყოფა.",
      en: "Abortive infection in resting bystander CD4⁺ T cells activates inflammasome/Caspase-1 → Gasdermin D cleavage → Inflammatory pyroptosis and IL-1β/IL-18 release.",
    },
  },
  {
    id: "fc20",
    chapter: "16.2",
    category: { ka: "აივ რეზერვუარი", en: "HIV Reservoir & HAND" },
    front: {
      ka: "რატომ გრძელდება CD8⁺ CTL გამოფიტვა, Inflammaging და ნეიროკოგნიტური აშლილობა (HAND) ART-ის ფონზე?",
      en: "Why do CD8⁺ Exhaustion, Inflammaging & HAND persist despite suppressive ART?",
    },
    back: {
      ka: "1) პროვირუსული რეზერვუარის >90% დეფექტურია, მაგრამ ასინთეზებს კრიპტულ პეპტიდებს → ფიტავს CD8⁺ კილერებს (↑PD-1).\n2) CD14⁺CD16⁺ მონოციტებს ვირუსი გადააქვთ ცნს-ის მიკროგლიაში (CoREST ლატენტობა → HAND).\n3) „მჟონავი ნაწლავიდან“ LPS ტრანსლოკაცია და Nef/Tat-ით აუტოფაგიის ბლოკი (cGAS–STING აქტივაცია).",
      en: "1) Defective proviruses (>90%) transcribe cryptic peptides → CD8⁺ exhaustion (↑PD-1).\n2) CD14⁺CD16⁺ monocytes seed CNS microglia → HAND.\n3) Gut LPS translocation & Nef/Tat autophagy blockade.",
    },
  },
];

// ============================================================================
// 2. DIAGNOSTIC LAB PRESETS (Complement & IEI)
// ============================================================================
interface LabPreset {
  id: string;
  category: "complement" | "iei";
  name: Record<Lang, string>;
  labs: Record<Lang, string[]>;
  diagnosis: Record<Lang, string>;
  defectAndGene: Record<Lang, string>;
  mechanism: Record<Lang, string>;
  contraindicationOrTherapy: Record<Lang, string>;
}

const labPresets: LabPreset[] = [
  {
    id: "comp_early",
    category: "complement",
    name: {
      ka: "↓ CH50 | ნორმალური AH50 | ნორმალური C3",
      en: "↓ CH50 | Normal AH50 | Normal C3",
    },
    labs: {
      ka: ["CH50: მკვეთრად დაქვეითებული (↓↓)", "AH50: ნორმაშია (N)", "C1q, C4 (C4A) ან C2: დაქვეითებული", "ANA / ანტი-dsDNA: დადებითი (+)"],
      en: ["CH50: Markedly decreased (↓↓)", "AH50: Normal", "C1q, C4 (C4A), or C2: Decreased", "ANA / anti-dsDNA: Positive (+)"],
    },
    diagnosis: {
      ka: "კლასიკური გზის ადრეული კომპონენტების (C1q, C1r/s, C4, C2) დეფიციტი → სისტემური წითელი მგლურა (SLE)",
      en: "Early Classical Pathway Deficiency (C1q, C1r/s, C4, C2) → Systemic Lupus Erythematosus (SLE)",
    },
    defectAndGene: {
      ka: "C1QA–C (88% SLE), C4A/C4B (78.6% SLE), C1R/S (65% SLE), C2 (10% SLE)",
      en: "C1q (88% SLE), C4 (78.6% SLE), C1r/s (65% SLE), C2 (10% SLE)",
    },
    mechanism: {
      ka: "ირღვევა აპოპტოზური უჯრედების ბირთვული ნუკლეოსომებისა და იმუნური კომპლექსების კლირენსი; იხსნება C1q-ს შემაკავებელი ეფექტი პლაზმაციტოიდურ დენდრიტულ უჯრედებზე (↑IFN-α).",
      en: "Impaired clearance of apoptotic nuclear debris and immune complexes with uninhibited pDC IFN-α secretion.",
    },
    contraindicationOrTherapy: {
      ka: "მონიტორინგი: ერითროციტებზე ფიქსირებული C4d (E-C4d) ასახავს კომპლემენტის ანთებით მოხმარებას ბოლო 60 დღის განმავლობაში.",
      en: "Monitoring: Erythrocyte-bound C4d (E-C4d) tracks active complement consumption over 60 days.",
    },
  },
  {
    id: "comp_alt",
    category: "complement",
    name: {
      ka: "ნორმალური CH50 | ↓ AH50 | ნორმალური C3",
      en: "Normal CH50 | ↓ AH50 | Normal C3",
    },
    labs: {
      ka: ["CH50: ნორმაშია (N)", "AH50: მკვეთრად დაქვეითებული (↓↓)", "C3 და C4: ნორმაშია", "სისხლის კულტურა: Neisseria meningitidis"],
      en: ["CH50: Normal", "AH50: Markedly decreased (↓↓)", "C3 & C4: Normal", "Blood culture: Neisseria meningitidis"],
    },
    diagnosis: {
      ka: "ალტერნატიული გზის ფაქტორების (ფაქტორი B, ფაქტორი D ან პროპერდინი) დეფიციტი",
      en: "Alternative Pathway Deficiency (Factor B, Factor D, or Properdin)",
    },
    defectAndGene: {
      ka: "CFB, CFD ან X-შეჭიდული CFP (პროპერდინის გენი)",
      en: "CFB, CFD, or X-linked CFP (Properdin)",
    },
    mechanism: {
      ka: "ვერ ფორმირდება ან ვერ სტაბილიზდება ალტერნატიული გზის C3-კონვერტაზა (C3bBb), რაც არღვევს კომპლემენტის ამპლიფიკაციის მარყუჟს.",
      en: "Failure to form or stabilize alternative C3 convertase (C3bBb), impairing the amplification loop.",
    },
    contraindicationOrTherapy: {
      ka: "პროფილაქტიკა: მენინგოკოკური ვაქცინაცია და ანტიბაქტერიული მართვა ელვისებური ნეისერიული სეფსისის რისკის გამო.",
      en: "Prophylaxis: Meningococcal vaccination against fulminant Neisseria sepsis.",
    },
  },
  {
    id: "comp_c3",
    category: "complement",
    name: {
      ka: "↓ CH50 | ↓ AH50 | ↓↓ C3 (დაბალი C3)",
      en: "↓ CH50 | ↓ AH50 | ↓↓ C3 (Low C3)",
    },
    labs: {
      ka: ["CH50: დაქვეითებული (↓↓)", "AH50: დაქვეითებული (↓↓)", "შრატის C3: უკიდურესად დაბალი (↓↓)", "კლინიკა: ჩირქოვანი სინოპულმონური ინფექციები + ნეფრიტი"],
      en: ["CH50: Decreased (↓↓)", "AH50: Decreased (↓↓)", "Serum C3: Profoundly low (↓↓)", "Clinic: Severe pyogenic infections + glomerulonephritis"],
    },
    diagnosis: {
      ka: "ცენტრალური C3 კომპონენტის დეფიციტი (ან C3 ნეფრიტული ფაქტორით განლევა)",
      en: "Central C3 Deficiency (or Consumption via C3 Nephritic Factor)",
    },
    defectAndGene: {
      ka: "C3 გენის მუტაცია ან C3NeF აუტოანტისხეული",
      en: "C3 gene mutation or C3NeF autoantibody",
    },
    mechanism: {
      ka: "C3b ოფსონინისა და C3a/C5a ანაფილატოქსინების არარსებობის გამო პარალიზებულია როგორც ოფსონოფაგოციტოზი, ისე ქემოტაქსისი და MAC-ის ფორმირება.",
      en: "Loss of C3b opsonization, C3a/C5a chemotaxis, and downstream MAC assembly.",
    },
    contraindicationOrTherapy: {
      ka: "უმძიმესი მორეციდივე ინფექციები კაფსულიანი ბაქტერიებით (S. pneumoniae, H. influenzae) და იმუნოკომპლექსური გლომერულონეფრიტი.",
      en: "High risk of recurrent encapsulated pyogenic infections and membranoproliferative glomerulonephritis.",
    },
  },
  {
    id: "comp_mac",
    category: "complement",
    name: {
      ka: "↓ CH50 | ↓ AH50 | ნორმალური C3 და C4",
      en: "↓ CH50 | ↓ AH50 | Normal C3 & C4",
    },
    labs: {
      ka: ["CH50: დაქვეითებული (↓↓)", "AH50: დაქვეითებული (↓↓)", "შრატის C3 და C4: ნორმაშია (N)", "კლინიკა: მორეციდივე N. meningitidis / N. gonorrhoeae"],
      en: ["CH50: Decreased (↓↓)", "AH50: Decreased (↓↓)", "Serum C3 & C4: Normal", "Clinic: Recurrent N. meningitidis / N. gonorrhoeae"],
    },
    diagnosis: {
      ka: "ტერმინალური კომპონენტების (C5–C9 / მემბრანა-შემტევი კომპლექსის MAC) დეფიციტი",
      en: "Terminal Pathway (C5–C9 / MAC) Deficiency",
    },
    defectAndGene: {
      ka: "C5, C6, C7, C8 ან C9 გენების მუტაცია",
      en: "C5, C6, C7, C8, or C9 mutations",
    },
    mechanism: {
      ka: "ოფსონიზაცია (C3b) შენარჩუნებულია, მაგრამ ვერ იწყობა მემბრანა-შემტევი კომპლექსი (C5b–C9), რაც აუცილებელია Neisseria-ს გვარის დიპლოკოკების ოსმოსური ბაქტერიოლიზისისთვის.",
      en: "Opsonization is intact, but failure to assemble MAC (C5b–C9) prevents intravascular lysis of Neisseria species.",
    },
    contraindicationOrTherapy: {
      ka: "სელექციური მგრძნობელობა დისემინირებული მენინგოკოკური და გონოკოკური ინფექციების მიმართ.",
      en: "Selective susceptibility to disseminated Neisseria infections.",
    },
  },
  {
    id: "comp_reg",
    category: "complement",
    name: {
      ka: "რეგულატორების დეფიციტი: C1-Inh vs. FH/FI/CD46",
      en: "Regulator Defects: C1-Inh vs. FH/FI/CD46",
    },
    labs: {
      ka: ["C1-Inh დეფიციტი: ↓C4, ↑ბრადიკინინი, ხორხის/სახის შეშუპება", "FH/FI/CD46 დეფიციტი: შიზოციტები, ↓თრომბოციტები, ↑კრეატინინი (aHUS)", "CD55 დეფიციტი: თრომბოზი + ცილის კარგვით ენტეროპათია (CHAPLE)"],
      en: ["C1-Inh defect: ↓C4, ↑Bradykinin, laryngeal edema", "FH/FI/CD46 defect: MAHA, ↓Platelets, AKI (aHUS)", "CD55 defect: Thrombosis + PLE (CHAPLE)"],
    },
    diagnosis: {
      ka: "კვინკეს შეშუპება (C1-Inh) | ატიპური HUS (FH/FI/CD46) | CHAPLE (CD55)",
      en: "Hereditary Angioedema (C1-Inh) | Atypical HUS (FH/FI/CD46) | CHAPLE (CD55)",
    },
    defectAndGene: {
      ka: "SERPING1 (C1-Inh) | CFH, CFI, CD46 (aHUS) | CD55 (CHAPLE) | CD59 (ჰემოლიზი)",
      en: "SERPING1 | CFH, CFI, CD46 | CD55 | CD59",
    },
    mechanism: {
      ka: "C1-Inh დეფიციტი რთავს კალიკრეინ-ბრადიკინინის კასკადს; ხოლო FH, FI ან CD46 დეფიციტი იწვევს ალტერნატიული გზის უკონტროლო აქტივაციას თირკმლის გორგლების ენდოთელიუმზე.",
      en: "C1-Inh loss causes bradykinin overproduction; FH/FI/CD46 loss causes alternative pathway endothelial injury.",
    },
    contraindicationOrTherapy: {
      ka: "თერაპია: aHUS-ისა და CD59 დეფიციტის დროს გამოიყენება C5-ის მონოკლონური ბლოკატორი — ეკულიზუმაბი.",
      en: "Targeted Therapy: Anti-C5 monoclonal antibody Eculizumab for aHUS.",
    },
  },

  // --- IEI PRESETS ---
  {
    id: "iei_scid_x",
    category: "iei",
    name: {
      ka: "↓ TREC | ნორმ. KREC | T⁻ B⁺ NK⁻ SCID",
      en: "↓ TREC | Normal KREC | T⁻ B⁺ NK⁻ SCID",
    },
    labs: {
      ka: ["ახალშობილთა სკრინინგი: TREC = 0 (↓↓), KREC = ნორმა", "CD3⁺ T-უჯრედები: < 300/μL (არ არის) | NK უჯრედები: არ არის", "CD19⁺ B-უჯრედები: ნორმალური რაოდენობა (არაფუნქციური)"],
      en: ["Newborn screen: TREC = 0 (↓↓), KREC = Normal", "CD3⁺ T cells: < 300/μL | NK cells: Absent", "CD19⁺ B cells: Present (non-functional)"],
    },
    diagnosis: {
      ka: "X-შეჭიდული (ან JAK3) მძიმე კომბინირებული იმუნოდეფიციტი (T⁻B⁺NK⁻ SCID)",
      en: "X-Linked (or JAK3) Severe Combined Immunodeficiency (T⁻B⁺NK⁻ SCID)",
    },
    defectAndGene: {
      ka: "IL2RG გენი (ინტერლეიკინების IL-2, 4, 7, 9, 15, 21 საერთო γc-ჯაჭვი / CD132) ან JAK3 კინაზა",
      en: "IL2RG (Common γc chain / CD132) or JAK3 kinase",
    },
    mechanism: {
      ka: "IL-7 რეცეპტორული სიგნალის ბლოკი აჩერებს T-ლიმფოპოეზს თიმუსში, ხოლო IL-15 სიგნალის ბლოკი — NK-უჯრედების მომწიფებას.",
      en: "Blocked IL-7 signaling arrests T-cell development; blocked IL-15 signaling arrests NK-cell development.",
    },
    contraindicationOrTherapy: {
      ka: "აბსოლუტური უკუჩვენება: 1) ცოცხალი ვაქცინები (BCG, OPV, MMR); 2) დაუსხივებელი სისხლის გადასხმა (ლეტალური GVHD)! მკურნალობა: HSCT / გენური თერაპია.",
      en: "ABSOLUTE CONTRAINDICATIONS: 1) Live vaccines (BCG, MMR); 2) Non-irradiated blood transfusion (fatal GVHD)!",
    },
  },
  {
    id: "iei_scid_rag",
    category: "iei",
    name: {
      ka: "↓ TREC | ↓ KREC | T⁻ B⁻ NK⁺ (ან T⁻ B⁻ NK⁻)",
      en: "↓ TREC | ↓ KREC | T⁻ B⁻ NK⁺ (or T⁻ B⁻ NK⁻)",
    },
    labs: {
      ka: ["ახალშობილთა სკრინინგი: TREC = 0 (↓↓) და KREC = 0 (↓↓)", "CD3⁺ T-უჯრედები: არ არის | CD19⁺ B-უჯრედები: არ არის", "NK უჯრედები: შენარჩუნებულია (RAG1/2) ან არ არის (ADA/AK2)"],
      en: ["Newborn screen: TREC = 0 (↓↓) and KREC = 0 (↓↓)", "CD3⁺ T cells: Absent | CD19⁺ B cells: Absent", "NK cells: Present (RAG1/2) or Absent (ADA/AK2)"],
    },
    diagnosis: {
      ka: "შვეიცარიული ტიპის T⁻B⁻ SCID (RAG1/2, Artemis ან ADA/PNP/AK2 დეფიციტი)",
      en: "T⁻B⁻ SCID (RAG1/2, Artemis, or ADA/PNP/AK2 Deficiency)",
    },
    defectAndGene: {
      ka: "T⁻B⁻NK⁺: RAG1/2, DCLRE1C (Artemis), LIG4 | T⁻B⁻NK⁻: ADA, PNP, AK2",
      en: "T⁻B⁻NK⁺: RAG1/2, Artemis, LIG4 | T⁻B⁻NK⁻: ADA, PNP, AK2",
    },
    mechanism: {
      ka: "RAG1/2 დეფიციტი ბლოკავს TCR-ისა და BCR-ის V(D)J სომატურ რეკომბინაციას (ნაწილობრივი აქტივობა იწვევს ომენის სინდრომს). ADA დეფიციტისას დაგროვილი ტოქსიკური dATP კლავს T, B და NK წინამორბედებს.",
      en: "RAG1/2 defects block V(D)J recombination; ADA deficiency causes toxic dATP accumulation killing all lymphocytes.",
    },
    contraindicationOrTherapy: {
      ka: "აბსოლუტური უკუჩვენება: ცოცხალი ვაქცინები (BCG) და დაუსხივებელი სისხლი! ADA-SCID-ის დროს გამოიყენება აუტოლოგიური გენური თერაპია (Strimvelis).",
      en: "ABSOLUTE CONTRAINDICATIONS: Live vaccines & non-irradiated blood! Treated with HSCT or Strimvelis gene therapy.",
    },
  },
  {
    id: "iei_xla",
    category: "iei",
    name: {
      ka: "ნორმ. TREC | ↓ KREC | CD19⁺ < 1% (ბრუტონის XLA)",
      en: "Normal TREC | ↓ KREC | CD19⁺ < 1% (Bruton XLA)",
    },
    labs: {
      ka: ["ახალშობილთა სკრინინგი: TREC ნორმაშია, KREC = 0 (↓↓)", "CD19⁺ B-ლიმფოციტები: < 1% | CD3⁺ T-ლიმფოციტები: ნორმა", "შრატის IgG, IgA, IgM, IgE: მკვეთრად დაქვეითებული / არ ისაზღვრება"],
      en: ["Newborn screen: Normal TREC, Absent KREC (↓↓)", "CD19⁺ B cells: < 1% | CD3⁺ T cells: Normal", "Serum IgG, IgA, IgM, IgE: Absent / Pan-hypogammaglobulinemia"],
    },
    diagnosis: {
      ka: "ბრუტონის X-შეჭიდული აგამაგლობულინემია (XLA)",
      en: "Bruton X-Linked Agammaglobulinemia (XLA)",
    },
    defectAndGene: {
      ka: "BTK გენი (ბრუტონის თიროზინკინაზა) — B-უჯრედების ბლოკი პრე-B სტადიაზე",
      en: "BTK gene (Bruton tyrosine kinase) — Arrest at pre-B cell stage",
    },
    mechanism: {
      ka: "ძვლის ტვინში პრე-B უჯრედები ვერ გარდაიქმნება მწიფე B-ლიმფოციტებად; არ ყალიბდება ნუშურა ჯირკვლები და გერმინაციული ცენტრები. კლინიკურად ვლინდება მე-5–12 თვიდან (დედისეული ტრანსპლაცენტური IgG-ის განლევის შემდეგ).",
      en: "Pre-B cells fail to mature in bone marrow; absent tonsils and germinal centers. Manifests at 5–12 months as maternal IgG wanes.",
    },
    contraindicationOrTherapy: {
      ka: "მკურნალობა: რეგულარული ჩანაცვლებითი თერაპია ინტრავენური ან კანქვეშა იმუნოგლობულინით (IVIG / SCIG). უკუნაჩვენებია პერორალური ცოცხალი პოლიოვაქცინა (OPV).",
      en: "Therapy: Lifelong IgG replacement (IVIG/SCIG); avoid live oral polio vaccine.",
    },
  },
  {
    id: "iei_iga",
    category: "iei",
    name: {
      ka: "ნორმ. TREC/KREC | IgA = 0 | ნორმ. IgG და IgM",
      en: "Normal TREC/KREC | Absent IgA | Normal IgG & IgM",
    },
    labs: {
      ka: ["შრატის და სეკრეტორული IgA: < 7 მგ/დლ (არ ისაზღვრება)", "შრატის IgG და IgM: ნორმაშია", "სისხლში ვლინდება ანტი-IgA ანტისხეულები (IgG/IgE კლასის)"],
      en: ["Serum & Secretory IgA: Undetectable (< 7 mg/dL)", "Serum IgG & IgM: Normal", "Circulating anti-IgA antibodies present"],
    },
    diagnosis: {
      ka: "IgA-ს სელექციური დეფიციტი (ყველაზე ხშირი IEI — 1:500–1:700)",
      en: "Selective IgA Deficiency (Most common IEI — 1:500–1:700)",
    },
    defectAndGene: {
      ka: "IgA-ს იზოტიპური დიფერენცირების ბლოკი (TACI / TNFRSF13B ასოციაცია)",
      en: "Impaired IgA class-switch differentiation",
    },
    mechanism: {
      ka: "ლორწოვანი გარსების სეკრეტორული IgA-ს დეფიციტი იწვევს მორეციდივე რესპირატორულ და გასტროინტესტინურ ინფექციებს (Giardia lamblia), ატოპიასა და აუტოიმუნიტეტს (ცელიაკია).",
      en: "Mucosal sIgA absence predisposes to sinopulmonary infections, giardiasis, atopy, and celiac disease.",
    },
    contraindicationOrTherapy: {
      ka: "აბსოლუტური უკუჩვენება (#3): IgA-ს შემცველი ნატიური პლაზმის, სისხლის ან სტანდარტული IVIG-ის გადასხმა იწვევს ფატალურ ანტი-IgA ანაფილაქსიურ შოკს!",
      en: "ABSOLUTE CONTRAINDICATION (#3): Transfusion of IgA-containing plasma or blood causes fatal anti-IgA anaphylactic shock!",
    },
  },
  {
    id: "iei_phago",
    category: "iei",
    name: {
      ka: "ფაგოციტების ტესტი: CD18 = 0 (LAD I) vs. DHR-123 = 0 (CGD)",
      en: "Phagocyte Panel: Absent CD18 (LAD I) vs. Abnormal DHR-123 (CGD)",
    },
    labs: {
      ka: ["LAD I: ლეიკოციტები 90,000/μL (↑↑), ნეიტროფილებზე CD18 = 0%, ჭრილობაში ჩირქი არ არის", "CGD: DHR-123 და NBT ტესტი = 0 (რესპირატორული აფეთქება არ ხდება), კატალაზა(+) აბსცესები"],
      en: ["LAD I: WBC 90,000/μL (↑↑), Absent CD18 on flow cytometry, zero pus in wounds", "CGD: Flat DHR-123 & Negative NBT test, catalase(+) abscesses & granulomas"],
    },
    diagnosis: {
      ka: "LAD I (ITGB2 მუტაცია) vs. ქრონიკული გრანულომატოზური დაავადება (CGD - CYBB მუტაცია)",
      en: "LAD I (ITGB2) vs. Chronic Granulomatous Disease (CGD - CYBB)",
    },
    defectAndGene: {
      ka: "LAD I: ITGB2 (β2-ინტეგრინი CD18) | CGD: CYBB (gp91phox) ან NCF1 (NADPH-ოქსიდაზა)",
      en: "LAD I: ITGB2 (CD18) | CGD: CYBB (gp91phox) / NCF1",
    },
    mechanism: {
      ka: "LAD I-ის დროს ნეიტროფილები ვერ უკავშირდებიან ICAM-1-ს და ვერ გადიან ქსოვილში; CGD-ის დროს ფაგოციტი ვერ წარმოქმნის O₂•⁻ და H₂O₂-ს, რის გამოც კატალაზა-დადებითი ბაქტერიები და სოკოები ცოცხალი რჩებიან ფაგოლიზოსომაში.",
      en: "LAD I blocks neutrophil diapedesis; CGD blocks superoxide/H2O2 production against catalase-positive microbes.",
    },
    contraindicationOrTherapy: {
      ka: "CGD-ის დროს კატეგორიულად აკრძალულია ცოცხალი BCG ვაქცინა (იწვევს დისემინირებულ BCG-იტს)! სამკურნალოდ გამოიყენება ანტიმიკრობული პროფილაქტიკა და IFN-γ.",
      en: "CONTRAINDICATION: Live BCG vaccine is strictly contraindicated in CGD! Prophylaxis includes TMP-SMX, itraconazole, and IFN-γ.",
    },
  },
];

export default function InteractiveModulesView({
  lang,
}: InteractiveModulesViewProps) {
  const [subTab, setSubTab] = useState<"simulator" | "flashcards">("simulator");

  // Simulator State
  const [simCategory, setSimCategory] = useState<"complement" | "iei">("complement");
  const [selectedPresetId, setSelectedPresetId] = useState<string>(labPresets[0].id);

  // Flashcards State
  const [fcChapter, setFcChapter] = useState<"all" | "16.1" | "16.2">("all");
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  // Load saved flashcard progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("patho_mastered_flashcards");
      if (saved) setMasteredCards(JSON.parse(saved));
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleMasteredCard = (id: string) => {
    setMasteredCards((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("patho_mastered_flashcards", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const filteredPresets = useMemo(
    () => labPresets.filter((p) => p.category === simCategory),
    [simCategory]
  );

  const activePreset = useMemo(
    () =>
      filteredPresets.find((p) => p.id === selectedPresetId) ||
      filteredPresets[0],
    [filteredPresets, selectedPresetId]
  );

  const filteredCards = useMemo(
    () =>
      fcChapter === "all"
        ? flashcardsData
        : flashcardsData.filter((c) => c.chapter === fcChapter),
    [fcChapter]
  );

  const activeCard = filteredCards[currentCardIdx] || filteredCards[0];
  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Sub-navigation between Lab Simulator & Flashcards */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-300 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSubTab("simulator")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition ${
              subTab === "simulator"
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-200 text-slate-800 hover:bg-slate-300"
            }`}
          >
            {lang === "ka"
              ? "🔬 ლაბორატორიული და ფენოტიპური ინტერპრეტატორი"
              : "🔬 Diagnostic Lab & Phenotype Simulator"}
          </button>
          <button
            onClick={() => setSubTab("flashcards")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition ${
              subTab === "flashcards"
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-200 text-slate-800 hover:bg-slate-300"
            }`}
          >
            {lang === "ka"
              ? `🗂️ სწრაფი ფლეშ-ბარათები (20 ბარათი | ნასწავლია: ${masteredCount})`
              : `🗂️ Rapid Flashcards (20 Cards | Mastered: ${masteredCount})`}
          </button>
        </div>
      </div>

      {/* ====================================================================
          MODULE 1: INTERACTIVE LAB & PHENOTYPE INTERPRETER
         ==================================================================== */}
      {subTab === "simulator" && (
        <div className="space-y-6">
          {/* Category Switcher */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-300 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSimCategory("complement");
                  setSelectedPresetId("comp_early");
                }}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition ${
                  simCategory === "complement"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200"
                }`}
              >
                {lang === "ka"
                  ? "1. კომპლემენტის პანელი (CH50 / AH50 / C3 / რეგულატორები)"
                  : "1. Complement Panel (CH50 / AH50 / C3 / Regulators)"}
              </button>
              <button
                onClick={() => {
                  setSimCategory("iei");
                  setSelectedPresetId("iei_scid_x");
                }}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition ${
                  simCategory === "iei"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200"
                }`}
              >
                {lang === "ka"
                  ? "2. იმუნოდეფიციტების პანელი (TREC / KREC / T,B,NK / CD18 / DHR)"
                  : "2. Immunodeficiency Panel (TREC / KREC / T,B,NK / CD18 / DHR)"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Selector Column (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-xl shadow-md border border-slate-300 p-5 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                {lang === "ka"
                  ? "აირჩიეთ ლაბორატორიული პროფილი:"
                  : "Select Laboratory Profile:"}
              </h3>
              {filteredPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 font-bold text-xs md:text-sm transition-all ${
                    activePreset.id === preset.id
                      ? "bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-400"
                  }`}
                >
                  {preset.name[lang]}
                </button>
              ))}
            </div>

            {/* Right Output Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-300 p-6 space-y-5 text-slate-900">
              <div>
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {lang === "ka" ? "ლაბორატორიული სურათი" : "Laboratory Readout"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {activePreset.labs[lang].map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-100 border-l-4 border-indigo-600 text-xs md:text-sm font-mono font-semibold text-slate-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
                <div className="text-xs font-bold uppercase text-emerald-800">
                  {lang === "ka" ? "კლინიკური დიაგნოზი" : "Clinical Diagnosis"}
                </div>
                <div className="text-base md:text-lg font-bold text-emerald-950 mt-1">
                  {activePreset.diagnosis[lang]}
                </div>
                <div className="text-xs md:text-sm font-semibold text-emerald-900 mt-1">
                  {lang === "ka" ? "გენი / დეფექტი: " : "Gene / Defect: "}
                  {activePreset.defectAndGene[lang]}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                <div className="text-xs font-bold uppercase text-blue-800 mb-1">
                  {lang === "ka"
                    ? "პათოფიზიოლოგიური მექანიზმი"
                    : "Pathophysiological Mechanism"}
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {activePreset.mechanism[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-50 border-l-4 border-red-600">
                <div className="text-xs font-bold uppercase text-red-800 mb-1">
                  {lang === "ka"
                    ? "უკუჩვენება / თერაპიული მართვა"
                    : "Contraindication / Clinical Management"}
                </div>
                <p className="text-xs md:text-sm font-bold text-red-950 leading-relaxed">
                  {activePreset.contraindicationOrTherapy[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODULE 2: RAPID ACTIVE-RECALL FLASHCARDS
         ==================================================================== */}
      {subTab === "flashcards" && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Controls */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-300 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {(["all", "16.1", "16.2"] as const).map((ch) => (
                <button
                  key={ch}
                  onClick={() => {
                    setFcChapter(ch);
                    setCurrentCardIdx(0);
                    setIsFlipped(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    fcChapter === ch
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                  }`}
                >
                  {ch === "all"
                    ? lang === "ka"
                      ? "ყველა (20)"
                      : "All (20)"
                    : lang === "ka"
                    ? `თავი ${ch}`
                    : `Ch. ${ch}`}
                </button>
              ))}
            </div>

            <div className="text-xs md:text-sm font-bold text-slate-700">
              {lang === "ka"
                ? `ბარათი ${currentCardIdx + 1} / ${filteredCards.length}`
                : `Card ${currentCardIdx + 1} / ${filteredCards.length}`}
            </div>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer rounded-2xl shadow-xl border-2 p-8 min-h-[300px] flex flex-col justify-between transition-all duration-200 ${
              isFlipped
                ? "bg-indigo-50 border-indigo-500"
                : "bg-white border-slate-300 hover:border-blue-500"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">
                {activeCard.category[lang]} ({activeCard.chapter})
              </span>
              <span className="text-xs font-bold text-indigo-600">
                {isFlipped
                  ? lang === "ka"
                    ? "პასუხი (დააწკაპუნეთ გადასაბრუნებლად)"
                    : "Answer (Click to flip)"
                  : lang === "ka"
                  ? "შეკითხვა (დააწკაპუნეთ პასუხის სანახავად)"
                  : "Question (Click to reveal answer)"}
              </span>
            </div>

            <div className="my-6">
              {!isFlipped ? (
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 text-center leading-snug">
                  {activeCard.front[lang]}
                </h3>
              ) : (
                <p className="text-sm md:text-base font-medium text-slate-900 whitespace-pre-line leading-relaxed">
                  {activeCard.back[lang]}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                {lang === "ka"
                  ? "დააწკაპუნეთ ბარათზე გადასაბრუნებლად"
                  : "Click anywhere on card to flip"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMasteredCard(activeCard.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition ${
                  masteredCards[activeCard.id]
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-slate-100 text-slate-800 border-slate-300 hover:bg-emerald-50"
                }`}
              >
                {masteredCards[activeCard.id]
                  ? lang === "ka"
                    ? "✓ ნასწავლია"
                    : "✓ Mastered"
                  : lang === "ka"
                  ? "მონიშნე ნასწავლად"
                  : "Mark Mastered"}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              disabled={currentCardIdx === 0}
              onClick={() => {
                setCurrentCardIdx((i) => Math.max(0, i - 1));
                setIsFlipped(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs md:text-sm disabled:opacity-40 hover:bg-slate-100"
            >
              {lang === "ka" ? "← წინა ბარათი" : "← Previous Card"}
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs md:text-sm hover:bg-indigo-700 shadow"
            >
              {isFlipped
                ? lang === "ka"
                  ? "კითხვაზე დაბრუნება"
                  : "Show Question"
                : lang === "ka"
                ? "პასუხის ჩვენება"
                : "Flip Card"}
            </button>

            <button
              disabled={currentCardIdx === filteredCards.length - 1}
              onClick={() => {
                setCurrentCardIdx((i) =>
                  Math.min(filteredCards.length - 1, i + 1)
                );
                setIsFlipped(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs md:text-sm disabled:opacity-40 hover:bg-slate-100"
            >
              {lang === "ka" ? "შემდეგი ბარათი →" : "Next Card →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}