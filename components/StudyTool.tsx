"use client";

import React, { useState, useMemo } from "react";
import { studyDiagrams } from "../data/lineageData";
import {
  clinicalPearls,
  studyTables,
  quizQuestions,
} from "../data/theoryAndQuizData";
import ClinicalCasesView from "./ClinicalCasesView";

export type Lang = "ka" | "en";

export interface DiseaseItem {
  name: Record<Lang, string>;
  findings: Record<Lang, string>;
}

export interface StudyNode {
  id: string;
  parent: string | null;
  top: number;
  left: number;
  width: string;
  bgClass?: string;
  colorClass?: string;
  label: Record<Lang, string>;
  subtitle?: Record<Lang, string>;
  name: Record<Lang, string>;
  function: Record<Lang, string>;
  diseases?: DiseaseItem[];
}

const DIAGRAM_WIDTH = 1100;
const DIAGRAM_HEIGHT = 720;

const uiText = {
  appTitle: {
    ka: "პათოფიზიოლოგიის ინტერაქტიული პლატფორმა (თავი 16.1 და 16.2)",
    en: "Pathophysiology Interactive Study Platform (Ch. 16.1 & 16.2)",
  },
  tabs: {
    lineage: { ka: "ინტერაქტიული დიაგრამები (3)", en: "Interactive Diagrams (3)" },
    theory: { ka: "თეორია და ცხრილები", en: "Theory & Tables" },
    cases: { ka: "კლინიკური ქეისები (8)", en: "Clinical Cases (8)" },
    quiz: { ka: "თვითშემოწმება (17 კითხვა)", en: "Self-Test (17 Questions)" },
  },
  selectCell: {
    ka: "აირჩიეთ ელემენტი დიაგრამაზე",
    en: "Select a node on the diagram",
  },
  roleHeader: {
    ka: "ფუნქცია და მოლეკულური მექანიზმი",
    en: "Function & Molecular Mechanism",
  },
  pathoHeader: {
    ka: "დაკავშირებული პათოლოგიები და კლინიკა",
    en: "Associated Pathologies & Clinical Findings",
  },
  placeholder: {
    ka: "დააწკაპუნეთ დიაგრამის ნებისმიერ კვანძზე, რათა იხილოთ მისი წინამორბედები (ლურჯად), შთამომავლები (წითლად), ფუნქცია და კლინიკური კორელაციები.",
    en: "Click any node on the diagram to highlight its ancestors (blue), descendants (red), function, and clinical correlations.",
  },
  legend: {
    selected: { ka: "არჩეული კვანძი", en: "Selected Node" },
    ancestor: { ka: "წინამორბედი რგოლი", en: "Ancestor / Upstream" },
    descendant: { ka: "შთამომავალი / შედეგი", en: "Descendant / Downstream" },
  },
};

export default function StudyTool() {
  const [activeTab, setActiveTab] = useState<"lineage" | "theory" | "cases" | "quiz">("lineage");
  const [activeDiagramId, setActiveDiagramId] = useState<string>(studyDiagrams[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("ka");

  const [chapterFilter, setChapterFilter] = useState<"all" | "16.1" | "16.2">("all");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [masteredIds, setMasteredIds] = useState<Record<number, "known" | "review">>({});

  const currentDiagram = useMemo(
    () => studyDiagrams.find((d) => d.id === activeDiagramId) || studyDiagrams[0],
    [activeDiagramId]
  );

  const nodes = currentDiagram.nodes;

  const { ancestors, descendants, activeInfo } = useMemo(() => {
    const ancestorSet = new Set<string>();
    const descendantSet = new Set<string>();

    if (!selectedId) {
      return { ancestors: ancestorSet, descendants: descendantSet, activeInfo: null };
    }

    const nodeMap = new Map<string, StudyNode>();
    nodes.forEach((n) => nodeMap.set(n.id, n));

    let current = nodeMap.get(selectedId);
    while (current && current.parent) {
      ancestorSet.add(current.parent);
      current = nodeMap.get(current.parent);
    }

    const queue: string[] = [selectedId];
    while (queue.length > 0) {
      const currentId = queue.shift()!;
      nodes.forEach((n) => {
        if (n.parent === currentId && !descendantSet.has(n.id)) {
          descendantSet.add(n.id);
          queue.push(n.id);
        }
      });
    }

    return {
      ancestors: ancestorSet,
      descendants: descendantSet,
      activeInfo: nodeMap.get(selectedId) || null,
    };
  }, [selectedId, nodes]);

  const filteredPearls = useMemo(
    () =>
      chapterFilter === "all"
        ? clinicalPearls
        : clinicalPearls.filter((p) => p.chapter === chapterFilter),
    [chapterFilter]
  );

  const filteredTables = useMemo(
    () =>
      chapterFilter === "all"
        ? studyTables
        : studyTables.filter((t) => t.chapter === chapterFilter),
    [chapterFilter]
  );

  const filteredQuiz = useMemo(
    () =>
      chapterFilter === "all"
        ? quizQuestions
        : quizQuestions.filter((q) => q.chapter === chapterFilter),
    [chapterFilter]
  );

  const knownCount = Object.values(masteredIds).filter((v) => v === "known").length;
  const reviewCount = Object.values(masteredIds).filter((v) => v === "review").length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col">
      <div className="max-w-[1600px] w-full mx-auto flex-1 flex flex-col space-y-6">
        <header className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {uiText.appTitle[lang]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                {uiText.legend.selected[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
                {uiText.legend.ancestor[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                {uiText.legend.descendant[lang]}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(["lineage", "theory", "cases", "quiz"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {uiText.tabs[tab][lang]}
              </button>
            ))}

            <button
              onClick={() => setLang(lang === "ka" ? "en" : "ka")}
              className="ml-2 px-3 py-2 rounded-lg border border-gray-300 text-xs font-bold uppercase text-gray-700 hover:bg-gray-100"
            >
              {lang === "ka" ? "EN" : "ქარ"}
            </button>
          </div>
        </header>

        {activeTab === "lineage" && (
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {studyDiagrams.map((diag) => (
                  <button
                    key={diag.id}
                    onClick={() => {
                      setActiveDiagramId(diag.id);
                      setSelectedId(null);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                      activeDiagramId === diag.id
                        ? "bg-indigo-600 text-white shadow"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {diag.title[lang]}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-500 px-2">
                {currentDiagram.subtitle[lang]}
              </span>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 flex-1 items-start">
              <div className="flex-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-x-auto custom-scrollbar flex justify-center">
                <div
                  className="relative shrink-0"
                  style={{
                    width: `${DIAGRAM_WIDTH}px`,
                    height: `${DIAGRAM_HEIGHT}px`,
                  }}
                >
                  <svg
                    width={DIAGRAM_WIDTH}
                    height={DIAGRAM_HEIGHT}
                    className="absolute inset-0 pointer-events-none z-0"
                  >
                    {nodes
                      .filter((n) => n.parent)
                      .map((node) => {
                        const parent = nodes.find((p) => p.id === node.parent);
                        if (!parent) return null;
                        const isAncestorPath =
                          ancestors.has(node.parent!) &&
                          (ancestors.has(node.id) || selectedId === node.id);
                        const isDescendantPath =
                          descendants.has(node.id) &&
                          (descendants.has(node.parent!) ||
                            selectedId === node.parent);
                        const startX = (parent.left / 100) * DIAGRAM_WIDTH,
                          startY = parent.top + 55,
                          endX = (node.left / 100) * DIAGRAM_WIDTH,
                          endY = node.top;
                        let strokeColor = "#e5e7eb",
                          strokeWidth = 2;
                        if (isAncestorPath) {
                          strokeColor = "#3b82f6";
                          strokeWidth = 4;
                        }
                        if (isDescendantPath) {
                          strokeColor = "#ef4444";
                          strokeWidth = 4;
                        }
                        return (
                          <path
                            key={`${parent.id}-${node.id}`}
                            d={`M ${startX} ${startY} C ${startX} ${
                              startY + 40
                            }, ${endX} ${endY - 40}, ${endX} ${endY}`}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            className="transition-colors duration-300"
                          />
                        );
                      })}
                  </svg>
                  {nodes.map((node) => {
                    const isSelected = selectedId === node.id,
                      isAncestor = ancestors.has(node.id),
                      isDescendant = descendants.has(node.id);
                    let baseStyles =
                      "absolute p-2 text-center rounded-lg border-2 cursor-pointer transition-all duration-300 transform -translate-x-1/2 z-10 shadow-sm text-sm";
                    if (isSelected)
                      baseStyles +=
                        " bg-emerald-50 border-emerald-500 shadow-lg scale-110 z-20";
                    else if (isAncestor)
                      baseStyles +=
                        " bg-blue-50 border-blue-500 shadow-md scale-105 z-20";
                    else if (isDescendant)
                      baseStyles +=
                        " bg-red-50 border-red-500 shadow-md scale-105 z-20 text-red-900";
                    else
                      baseStyles += ` border-gray-200 hover:border-blue-400 hover:shadow-md ${
                        node.bgClass || "bg-white"
                      }`;
                    return (
                      <div
                        key={node.id}
                        onClick={() =>
                          setSelectedId(isSelected ? null : node.id)
                        }
                        className={`${baseStyles} ${node.width} ${
                          node.colorClass || ""
                        }`}
                        style={{
                          top: `${node.top}px`,
                          left: `${(node.left / 100) * DIAGRAM_WIDTH}px`,
                        }}
                      >
                        <div className="font-bold">{node.label[lang]}</div>
                        {node.subtitle && (
                          <div className="text-xs font-normal text-gray-500 mt-1">
                            {node.subtitle[lang]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full xl:w-[450px] shrink-0">
                <div className="sticky top-8 bg-white p-6 rounded-xl shadow-xl border border-gray-200 min-h-[500px]">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                    {activeInfo
                      ? activeInfo.name[lang]
                      : uiText.selectCell[lang]}
                  </h2>
                  {activeInfo ? (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">
                          {uiText.roleHeader[lang]}
                        </h3>
                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100 leading-relaxed">
                          {activeInfo.function[lang]}
                        </p>
                      </div>
                      {activeInfo.diseases &&
                        activeInfo.diseases.length > 0 && (
                          <div>
                            <h3 className="font-semibold text-xl text-red-700 mb-4">
                              {uiText.pathoHeader[lang]}
                            </h3>
                            <div className="space-y-4">
                              {activeInfo.diseases.map((disease, i) => (
                                <div
                                  key={i}
                                  className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500"
                                >
                                  <h4 className="font-bold text-red-900">
                                    {disease.name[lang]}
                                  </h4>
                                  <p className="text-sm text-red-800 mt-2 leading-relaxed">
                                    {disease.findings[lang]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 mt-20">
                      <p className="text-lg leading-relaxed">
                        {uiText.placeholder[lang]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "theory" && (
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <span className="font-semibold text-gray-800">
                {lang === "ka"
                  ? "აირჩიეთ ჰენდაუთის თავი:"
                  : "Filter by Handout Chapter:"}
              </span>
              <div className="flex gap-2">
                {[
                  { id: "all", label: { ka: "ყველა (16.1 + 16.2)", en: "All (16.1 + 16.2)" } },
                  { id: "16.1", label: { ka: "16.1 ბიოლოგიური ფაქტორები", en: "16.1 Biological Factors" } },
                  { id: "16.2", label: { ka: "16.2 იმუნური სისტემა & IEI", en: "16.2 Immune System & IEI" } },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setChapterFilter(btn.id as "all" | "16.1" | "16.2")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                      chapterFilter === btn.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {btn.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPearls.map((pearl) => (
                <div
                  key={pearl.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {pearl.badge[lang]}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        {lang === "ka" ? `თავი ${pearl.chapter}` : `Ch. ${pearl.chapter}`}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {pearl.title[lang]}
                    </h3>
                    <ul className="space-y-3">
                      {pearl.points[lang].map((pt, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-500 leading-relaxed"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {filteredTables.map((table) => (
                <div
                  key={table.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                    <h3 className="font-bold text-base md:text-lg">
                      {table.title[lang]}
                    </h3>
                    <span className="text-xs bg-gray-700 px-2.5 py-1 rounded">
                      {table.chapter}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          {table.headers[lang].map((h, i) => (
                            <th
                              key={i}
                              className="py-3 px-4 font-bold text-gray-800"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {table.rows[lang].map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-blue-50/40 transition-colors"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 align-top leading-relaxed ${
                                  cIdx === 0
                                    ? "font-semibold text-gray-900 whitespace-nowrap"
                                    : "text-gray-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "cases" && <ClinicalCasesView lang={lang} />}

        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold">
                  {lang === "ka" ? `ვიცი: ${knownCount}` : `Mastered: ${knownCount}`}
                </div>
                <div className="px-4 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm font-bold">
                  {lang === "ka"
                    ? `გასამეორებელია: ${reviewCount}`
                    : `Needs Review: ${reviewCount}`}
                </div>
                <div className="text-xs text-gray-500">
                  {lang === "ka"
                    ? `სულ: ${filteredQuiz.length} კითხვა`
                    : `Total: ${filteredQuiz.length} questions`}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {(["all", "16.1", "16.2"] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setChapterFilter(ch)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      chapterFilter === ch
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {ch === "all"
                      ? lang === "ka"
                        ? "ყველა (17)"
                        : "All (17)"
                      : lang === "ka"
                      ? `თავი ${ch}`
                      : `Ch. ${ch}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredQuiz.map((q) => {
                const isRevealed = !!revealedAnswers[q.id];
                const status = masteredIds[q.id];

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-xl shadow-sm border-2 p-6 transition-all ${
                      status === "known"
                        ? "border-emerald-400"
                        : status === "review"
                        ? "border-amber-400"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                        {q.question[lang]}
                      </h3>
                      <span className="shrink-0 px-2.5 py-1 rounded text-xs font-bold bg-gray-100 text-gray-700">
                        {q.chapter}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {q.keyTerms.map((term, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                        >
                          {term}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                      <button
                        onClick={() =>
                          setRevealedAnswers((prev) => ({
                            ...prev,
                            [q.id]: !prev[q.id],
                          }))
                        }
                        className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                      >
                        {isRevealed
                          ? lang === "ka"
                            ? "პასუხის დამალვა"
                            : "Hide Answer"
                          : lang === "ka"
                          ? "პასუხის ნახვა"
                          : "Show Model Answer"}
                      </button>

                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setMasteredIds((prev) => ({
                              ...prev,
                              [q.id]: "known",
                            }))
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                            status === "known"
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                          }`}
                        >
                          {lang === "ka" ? "✓ ვიცი" : "✓ Got It"}
                        </button>
                        <button
                          onClick={() =>
                            setMasteredIds((prev) => ({
                              ...prev,
                              [q.id]: "review",
                            }))
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                            status === "review"
                              ? "bg-amber-500 text-white border-amber-500"
                              : "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                          }`}
                        >
                          {lang === "ka" ? "↻ გასამეორებელია" : "↻ Review"}
                        </button>
                      </div>
                    </div>

                    {isRevealed && (
                      <div className="mt-4 p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                        {q.answer[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}