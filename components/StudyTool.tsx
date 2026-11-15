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
  parent?: string | null;
  parents?: string[];
  isInhibitor?: boolean;
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

const DIAGRAM_WIDTH = 1150;
const DIAGRAM_HEIGHT = 720;

const uiText = {
  appTitle: {
    ka: "პათოფიზიოლოგიის ინტერაქტიული პლატფორმა (თავი 16.1 და 16.2)",
    en: "Pathophysiology Interactive Study Platform (Ch. 16.1 & 16.2)",
  },
  tabs: {
    lineage: { ka: "ინტერაქტიული დიაგრამები (5)", en: "Interactive Diagrams (5)" },
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
    ancestor: { ka: "წინამორბედი / რეგულატორი", en: "Ancestor / Regulator" },
    descendant: { ka: "შთამომავალი / შედეგი", en: "Descendant / Downstream" },
    inhibitor: { ka: "წყვეტილი ხაზი = ინჰიბიტორი / ბლოკი", en: "Dashed = Inhibitor / Block" },
  },
};

function getNodeParents(node: StudyNode): string[] {
  if (node.parents && node.parents.length > 0) return node.parents;
  if (node.parent) return [node.parent];
  return [];
}

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

  // Traverse multi-parent DAG for ancestors and descendants
  const { ancestors, descendants, activeInfo } = useMemo(() => {
    const ancestorSet = new Set<string>();
    const descendantSet = new Set<string>();

    if (!selectedId) {
      return { ancestors: ancestorSet, descendants: descendantSet, activeInfo: null };
    }

    const nodeMap = new Map<string, StudyNode>();
    nodes.forEach((n) => nodeMap.set(n.id, n));

    // Walk up all parent chains (BFS)
    const upQueue: string[] = [selectedId];
    while (upQueue.length > 0) {
      const currId = upQueue.shift()!;
      const currNode = nodeMap.get(currId);
      if (currNode) {
        for (const pId of getNodeParents(currNode)) {
          if (!ancestorSet.has(pId)) {
            ancestorSet.add(pId);
            upQueue.push(pId);
          }
        }
      }
    }

    // Walk down all child chains (BFS)
    const downQueue: string[] = [selectedId];
    while (downQueue.length > 0) {
      const currId = downQueue.shift()!;
      nodes.forEach((n) => {
        if (getNodeParents(n).includes(currId) && !descendantSet.has(n.id)) {
          descendantSet.add(n.id);
          downQueue.push(n.id);
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
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-8 flex flex-col">
      <div className="max-w-[1600px] w-full mx-auto flex-1 flex flex-col space-y-6">
        <header className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">
              {uiText.appTitle[lang]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                {uiText.legend.selected[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                {uiText.legend.ancestor[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
                {uiText.legend.descendant[lang]}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <span>---</span>
                {uiText.legend.inhibitor[lang]}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(["lineage", "theory", "cases", "quiz"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
              >
                {uiText.tabs[tab][lang]}
              </button>
            ))}

            <button
              onClick={() => setLang(lang === "ka" ? "en" : "ka")}
              className="ml-2 px-3 py-2 rounded-lg border-2 border-slate-400 text-xs font-bold uppercase text-slate-900 hover:bg-slate-200"
            >
              {lang === "ka" ? "EN" : "ქარ"}
            </button>
          </div>
        </header>

        {activeTab === "lineage" && (
          <div className="space-y-4 flex-1 flex flex-col">
            {/* Diagram Switcher */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-300 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {studyDiagrams.map((diag) => (
                  <button
                    key={diag.id}
                    onClick={() => {
                      setActiveDiagramId(diag.id);
                      setSelectedId(null);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeDiagramId === diag.id
                        ? "bg-indigo-600 text-white shadow"
                        : "bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    {diag.title[lang]}
                  </button>
                ))}
              </div>
              <div className="text-xs font-medium text-slate-600 px-1">
                {currentDiagram.subtitle[lang]}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 flex-1 items-start">
              <div className="flex-1 w-full bg-white rounded-xl shadow-xl border border-slate-300 overflow-x-auto custom-scrollbar flex justify-center">
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
                    <defs>
                      <marker
                        id="arrow-default"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
                      </marker>
                      <marker
                        id="arrow-ancestor"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
                      </marker>
                      <marker
                        id="arrow-descendant"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
                      </marker>
                      <marker
                        id="arrow-inhibitor"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path
                          d="M 8 1 L 8 9 M 0 5 L 8 5"
                          stroke="#059669"
                          strokeWidth="2.5"
                        />
                      </marker>
                    </defs>

                    {nodes.flatMap((node) =>
                      getNodeParents(node).map((parentId) => {
                        const parent = nodes.find((p) => p.id === parentId);
                        if (!parent) return null;

                        const isAncestorPath =
                          ancestors.has(parentId) &&
                          (ancestors.has(node.id) || selectedId === node.id);
                        const isDescendantPath =
                          descendants.has(node.id) &&
                          (descendants.has(parentId) || selectedId === parentId);

                        const sameRow = Math.abs(parent.top - node.top) < 35;
                        const startX = (parent.left / 100) * DIAGRAM_WIDTH;
                        const startY = sameRow ? parent.top + 32 : parent.top + 62;
                        const endX = (node.left / 100) * DIAGRAM_WIDTH;
                        const endY = sameRow ? node.top + 32 : node.top;

                        let strokeColor = parent.isInhibitor ? "#059669" : "#64748b";
                        let strokeWidth = 2.5;
                        let marker = parent.isInhibitor
                          ? "url(#arrow-inhibitor)"
                          : "url(#arrow-default)";

                        if (isAncestorPath) {
                          strokeColor = "#2563eb";
                          strokeWidth = 4;
                          marker = "url(#arrow-ancestor)";
                        }
                        if (isDescendantPath) {
                          strokeColor = "#dc2626";
                          strokeWidth = 4;
                          marker = "url(#arrow-descendant)";
                        }

                        const pathData = sameRow
                          ? `M ${startX} ${startY} C ${(startX + endX) / 2} ${
                              startY - 35
                            }, ${(startX + endX) / 2} ${endY - 35}, ${endX} ${endY}`
                          : `M ${startX} ${startY} C ${startX} ${
                              startY + 45
                            }, ${endX} ${endY - 45}, ${endX} ${endY}`;

                        return (
                          <path
                            key={`${parent.id}-${node.id}`}
                            d={pathData}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray={parent.isInhibitor ? "6,4" : undefined}
                            markerEnd={marker}
                            className="transition-colors duration-300"
                          />
                        );
                      })
                    )}
                  </svg>

                  {nodes.map((node) => {
                    const isSelected = selectedId === node.id;
                    const isAncestor = ancestors.has(node.id);
                    const isDescendant = descendants.has(node.id);

                    let baseStyles =
                      "absolute p-2.5 text-center rounded-xl border-2 cursor-pointer transition-all duration-300 transform -translate-x-1/2 z-10 shadow-md text-sm text-slate-900";
                    if (isSelected)
                      baseStyles +=
                        " bg-emerald-200 border-emerald-600 ring-4 ring-emerald-300 shadow-xl scale-105 z-30";
                    else if (isAncestor)
                      baseStyles +=
                        " bg-blue-100 border-blue-600 ring-2 ring-blue-300 shadow-lg scale-105 z-20";
                    else if (isDescendant)
                      baseStyles +=
                        " bg-red-100 border-red-600 ring-2 ring-red-300 shadow-lg scale-105 z-20";
                    else
                      baseStyles += ` ${
                        node.bgClass || "bg-white border-slate-400"
                      } hover:border-blue-600 hover:shadow-lg`;

                    if (node.isInhibitor && !isSelected) {
                      baseStyles += " border-dashed";
                    }

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
                        <div className="font-bold text-slate-900 leading-tight">
                          {node.label[lang]}
                        </div>
                        {node.subtitle && (
                          <div className="text-xs font-medium text-slate-700 mt-1 leading-snug">
                            {node.subtitle[lang]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full xl:w-[450px] shrink-0">
                <div className="sticky top-8 bg-white p-6 rounded-xl shadow-xl border border-slate-300 min-h-[500px] text-slate-900">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-4">
                    {activeInfo
                      ? activeInfo.name[lang]
                      : uiText.selectCell[lang]}
                  </h2>
                  {activeInfo ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          {uiText.roleHeader[lang]}
                        </h3>
                        <p className="text-slate-800 bg-blue-50 p-4 rounded-lg border border-blue-200 leading-relaxed text-sm">
                          {activeInfo.function[lang]}
                        </p>
                      </div>
                      {activeInfo.diseases &&
                        activeInfo.diseases.length > 0 && (
                          <div>
                            <h3 className="font-bold text-lg text-red-700 mb-3">
                              {uiText.pathoHeader[lang]}
                            </h3>
                            <div className="space-y-3">
                              {activeInfo.diseases.map((disease, i) => (
                                <div
                                  key={i}
                                  className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600"
                                >
                                  <h4 className="font-bold text-red-950 text-sm">
                                    {disease.name[lang]}
                                  </h4>
                                  <p className="text-xs md:text-sm text-red-900 mt-1.5 leading-relaxed">
                                    {disease.findings[lang]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ) : (
                    <div className="text-center text-slate-600 mt-20">
                      <p className="text-base leading-relaxed font-medium">
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
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-300 flex flex-wrap items-center justify-between gap-4">
              <span className="font-bold text-slate-900">
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
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                      chapterFilter === btn.id
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
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
                  className="bg-white rounded-xl shadow-md border border-slate-300 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">
                        {pearl.badge[lang]}
                      </span>
                      <span className="text-xs font-bold text-slate-600">
                        {lang === "ka" ? `თავი ${pearl.chapter}` : `Ch. ${pearl.chapter}`}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      {pearl.title[lang]}
                    </h3>
                    <ul className="space-y-3">
                      {pearl.points[lang].map((pt, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-800 bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-600 leading-relaxed"
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
                  className="bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden"
                >
                  <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
                    <h3 className="font-bold text-base md:text-lg">
                      {table.title[lang]}
                    </h3>
                    <span className="text-xs bg-slate-700 px-2.5 py-1 rounded font-bold">
                      {table.chapter}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-300">
                          {table.headers[lang].map((h, i) => (
                            <th
                              key={i}
                              className="py-3 px-4 font-bold text-slate-900"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {table.rows[lang].map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-blue-50/60 transition-colors"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 align-top leading-relaxed ${
                                  cIdx === 0
                                    ? "font-bold text-slate-900 whitespace-nowrap"
                                    : "text-slate-800"
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
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-bold">
                  {lang === "ka" ? `ვიცი: ${knownCount}` : `Mastered: ${knownCount}`}
                </div>
                <div className="px-4 py-2 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-sm font-bold">
                  {lang === "ka"
                    ? `გასამეორებელია: ${reviewCount}`
                    : `Needs Review: ${reviewCount}`}
                </div>
                <div className="text-xs font-bold text-slate-600">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                      chapterFilter === ch
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
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
                        ? "border-emerald-500"
                        : status === "review"
                        ? "border-amber-500"
                        : "border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                        {q.question[lang]}
                      </h3>
                      <span className="shrink-0 px-2.5 py-1 rounded text-xs font-bold bg-slate-200 text-slate-800">
                        {q.chapter}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {q.keyTerms.map((term, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-900 border border-blue-300 font-semibold"
                        >
                          {term}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                      <button
                        onClick={() =>
                          setRevealedAnswers((prev) => ({
                            ...prev,
                            [q.id]: !prev[q.id],
                          }))
                        }
                        className="px-4 py-2 rounded-lg text-xs md:text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition"
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
                              : "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100"
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
                              : "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100"
                          }`}
                        >
                          {lang === "ka" ? "↻ გასამეორებელია" : "↻ Review"}
                        </button>
                      </div>
                    </div>

                    {isRevealed && (
                      <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-slate-900 text-sm whitespace-pre-line leading-relaxed font-medium">
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