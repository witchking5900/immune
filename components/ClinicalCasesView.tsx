"use client";

import React, { useState } from "react";
import { Lang } from "./StudyTool";
import { clinicalCases } from "../data/clinicalCasesData";

interface ClinicalCasesViewProps {
  lang: Lang;
}

export default function ClinicalCasesView({ lang }: ClinicalCasesViewProps) {
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showPathogenesis, setShowPathogenesis] = useState<Record<string, boolean>>({});

  const currentCase = clinicalCases[activeCaseIdx];
  const chosenOptionId = selectedOptions[currentCase.id];
  const isPathoVisible = !!showPathogenesis[currentCase.id];

  // Calculate score
  const solvedCorrectlyCount = clinicalCases.filter((c) => {
    const picked = selectedOptions[c.id];
    const correctOpt = c.options.find((o) => o.isCorrect);
    return picked && correctOpt && picked === correctOpt.id;
  }).length;

  return (
    <div className="space-y-6">
      {/* Top Case Selector & Scoreboard */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {clinicalCases.map((c, idx) => {
            const picked = selectedOptions[c.id];
            const isCorrect =
              picked && c.options.find((o) => o.id === picked)?.isCorrect;

            let btnStyle = "bg-gray-100 text-gray-700 hover:bg-gray-200";
            if (idx === activeCaseIdx) {
              btnStyle = "bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300";
            } else if (picked) {
              btnStyle = isCorrect
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-red-100 text-red-800 border border-red-300";
            }

            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseIdx(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${btnStyle}`}
              >
                {lang === "ka" ? `ქეისი #${idx + 1}` : `Case #${idx + 1}`}
                <span className="ml-1.5 text-[11px] opacity-80">
                  ({c.chapter})
                </span>
              </button>
            );
          })}
        </div>

        <div className="px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs md:text-sm font-bold shrink-0">
          {lang === "ka"
            ? `სწორად ამოხსნილია: ${solvedCorrectlyCount} / ${clinicalCases.length}`
            : `Solved Correctly: ${solvedCorrectlyCount} / ${clinicalCases.length}`}
        </div>
      </div>

      {/* Main Clinical Case Card */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Column: Patient Presentation & Labs (5 cols) */}
        <div className="xl:col-span-5 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-slate-800 text-white p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-500 text-white">
                {lang === "ka"
                  ? `თავი ${currentCase.chapter}`
                  : `Chapter ${currentCase.chapter}`}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {lang === "ka" ? "სირთულე: " : "Difficulty: "}
                {currentCase.difficulty[lang]}
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold leading-snug">
              {currentCase.title[lang]}
            </h2>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                {lang === "ka" ? "პაციენტის პროფილი" : "Patient Profile"}
              </div>
              <div className="text-sm font-semibold text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-200">
                {currentCase.patientInfo[lang]}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                {lang === "ka"
                  ? "ანამნეზი და კლინიკური სურათი"
                  : "History & Presentation"}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                {currentCase.presentation[lang]}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                {lang === "ka"
                  ? "ვიტალური და ლაბორატორიული მონაცემები"
                  : "Vitals & Laboratory Findings"}
              </div>
              <ul className="space-y-2">
                {currentCase.labsAndVitals[lang].map((lab, i) => (
                  <li
                    key={i}
                    className="text-xs md:text-sm font-mono text-gray-800 bg-amber-50/70 px-3.5 py-2.5 rounded-lg border-l-4 border-amber-500"
                  >
                    {lab}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic Question, Options & Pathogenesis Breakdown (7 cols) */}
        <div className="xl:col-span-7 bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              {lang === "ka" ? "კლინიკური შეკითხვა" : "Clinical Question"}
            </span>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mt-1 leading-snug">
              {currentCase.question[lang]}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentCase.options.map((opt) => {
              const isSelected = chosenOptionId === opt.id;
              let cardClass =
                "border-gray-200 hover:border-indigo-400 bg-white";

              if (chosenOptionId) {
                if (opt.isCorrect) {
                  cardClass = "border-emerald-500 bg-emerald-50/70";
                } else if (isSelected && !opt.isCorrect) {
                  cardClass = "border-red-500 bg-red-50/70";
                } else {
                  cardClass = "border-gray-200 bg-gray-50 opacity-75";
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [currentCase.id]: opt.id,
                    }))
                  }
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${cardClass}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 uppercase">
                      {opt.id}
                    </span>
                    <div className="text-sm font-medium text-gray-900 leading-relaxed">
                      {opt.text[lang]}
                    </div>
                  </div>

                  {/* Immediate Feedback if Selected or if Correct after answering */}
                  {chosenOptionId && (isSelected || opt.isCorrect) && (
                    <div
                      className={`mt-3 pt-3 border-t text-xs md:text-sm leading-relaxed ${
                        opt.isCorrect
                          ? "border-emerald-200 text-emerald-900 font-medium"
                          : "border-red-200 text-red-900"
                      }`}
                    >
                      {opt.feedback[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Toggle Full Pathophysiological Mechanism */}
          <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() =>
                setShowPathogenesis((prev) => ({
                  ...prev,
                  [currentCase.id]: !prev[currentCase.id],
                }))
              }
              className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-slate-800 text-white hover:bg-slate-900 transition"
            >
              {isPathoVisible
                ? lang === "ka"
                  ? "პათოგენეზის დამალვა"
                  : "Hide Pathogenesis Breakdown"
                : lang === "ka"
                ? "სრული პათოფიზიოლოგიური ანალიზის ნახვა"
                : "Show Full Pathophysiological Breakdown"}
            </button>

            <div className="flex gap-2">
              <button
                disabled={activeCaseIdx === 0}
                onClick={() => setActiveCaseIdx((i) => Math.max(0, i - 1))}
                className="px-3 py-2 rounded-lg text-xs font-bold border border-gray-300 text-gray-700 disabled:opacity-40 hover:bg-gray-100"
              >
                {lang === "ka" ? "← წინა ქეისი" : "← Previous"}
              </button>
              <button
                disabled={activeCaseIdx === clinicalCases.length - 1}
                onClick={() =>
                  setActiveCaseIdx((i) =>
                    Math.min(clinicalCases.length - 1, i + 1)
                  )
                }
                className="px-3 py-2 rounded-lg text-xs font-bold bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-700"
              >
                {lang === "ka" ? "შემდეგი ქეისი →" : "Next Case →"}
              </button>
            </div>
          </div>

          {(isPathoVisible || chosenOptionId) && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-sm text-gray-800 leading-relaxed">
                <div className="font-bold text-indigo-900 mb-1">
                  {lang === "ka"
                    ? "პათოფიზიოლოგიური მექანიზმი:"
                    : "Pathophysiological Mechanism:"}
                </div>
                {currentCase.pathogenesisSummary[lang]}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 text-xs md:text-sm font-bold text-emerald-950">
                {lang === "ka" ? "დასამახსოვრებელი ფორმულა: " : "Key Takeaway: "}
                {currentCase.keyTakeaway[lang]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}