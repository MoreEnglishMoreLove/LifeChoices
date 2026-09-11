import React, { useState } from "react";
import {
  ClipboardList,
  CheckCircle2,
  Sparkles,
  Eye,
  FileCheck,
  Printer,
  ChevronDown,
  ChevronUp,
  Award,
} from "lucide-react";
import { WORKSHEETS_DATA, TEACHER_INFO } from "../data/curriculumData";

export const SectionWorksheets: React.FC = () => {
  const [activeWorksheetId, setActiveWorksheetId] = useState<number>(1);
  const [showModelSolutions, setShowModelSolutions] = useState<boolean>(true);

  const currentWorksheet = WORKSHEETS_DATA.find((w) => w.id === activeWorksheetId) || WORKSHEETS_DATA[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>المنهاج التفاعلي الكامل والموثق</span>
            </div>
            <h2 className="text-2xl font-black text-white">
              القسم 7: أوراق عمل المنهاج والحلول النموذجية (7 Curriculum Worksheets)
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              أوراق العمل السبع الرسمية والشاملة لكافة فروع الوحدة الأولى مع حلول المعلمة جيداء صقر النموذجية
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowModelSolutions(!showModelSolutions)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                showModelSolutions
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{showModelSolutions ? "الحلول النموذجية: مفعّلة" : "إظهار الحلول النموذجية"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة ورقة العمل</span>
            </button>
          </div>
        </div>

        {/* 7 Worksheets Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none mt-5 pt-4 border-t border-slate-800">
          {WORKSHEETS_DATA.map((ws) => (
            <button
              key={ws.id}
              onClick={() => setActiveWorksheetId(ws.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeWorksheetId === ws.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>ورقة {ws.id}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Worksheet Paper Card */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
        {/* Paper Header */}
        <div className="border-b-2 border-indigo-500/30 pb-5 mb-6 text-center">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>منهاج: MORE ENGLISH MORE LOVE</span>
            <span>إشراف: المعلمة جيداء صقر</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
            {currentWorksheet.titleAr}
          </h3>
          <h4 className="text-sm font-semibold text-indigo-300 mb-2" dir="ltr">
            {currentWorksheet.titleEn}
          </h4>
          <p className="text-xs text-slate-400 mb-3">{currentWorksheet.subtitle}</p>

          <div className="inline-block bg-indigo-950/60 border border-indigo-500/30 px-4 py-1.5 rounded-full text-xs text-indigo-200">
            {currentWorksheet.teacherNotes}
          </div>
        </div>

        {/* Exercises Container */}
        <div className="space-y-8">
          {currentWorksheet.exercises.map((sec: any, sIdx: number) => (
            <div key={sIdx} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-800 pb-2.5">
                <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold">
                  {String.fromCharCode(65 + sIdx)}
                </span>
                <span>{sec.title}</span>
              </h4>

              {/* QA Type */}
              {sec.type === "qa" && (
                <div className="space-y-4">
                  {sec.questions.map((qItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <p className="text-sm font-semibold text-white mb-1" dir="ltr">
                        {qIdx + 1}. {qItem.q}
                      </p>
                      <p className="text-xs text-slate-400 mb-2">{qItem.ar}</p>
                      {showModelSolutions ? (
                        <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-semibold" dir="ltr">
                          Model Answer: {qItem.answer}
                        </div>
                      ) : (
                        <div className="border-b border-dotted border-slate-700 h-6" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* TF Type */}
              {sec.type === "tf" && (
                <div className="space-y-3">
                  {sec.questions.map((tfItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white" dir="ltr">
                          {qIdx + 1}. {tfItem.q}
                        </p>
                        {showModelSolutions && tfItem.explanation && (
                          <p className="text-xs text-indigo-300 mt-1">{tfItem.explanation}</p>
                        )}
                      </div>

                      {showModelSolutions ? (
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold ${tfItem.isTrue ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
                          {tfItem.isTrue ? "True (صحيح)" : "False (خطأ)"}
                        </span>
                      ) : (
                        <div className="flex gap-2">
                          <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-400">[ True ]</span>
                          <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-400">[ False ]</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* MCQ Type */}
              {sec.type === "mcq" && (
                <div className="space-y-4">
                  {sec.questions.map((mcq: any, qIdx: number) => (
                    <div key={qIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <p className="text-sm font-semibold text-white mb-2" dir="ltr">
                        {qIdx + 1}. {mcq.q}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {mcq.options.map((opt: string, oIdx: number) => {
                          const isCorrect = oIdx === mcq.correctIndex;
                          return (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs border ${
                                showModelSolutions && isCorrect
                                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold"
                                  : "bg-slate-950/50 border-slate-800 text-slate-300"
                              }`}
                              dir="ltr"
                            >
                              {String.fromCharCode(97 + oIdx)}) {opt}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Fill in type */}
              {sec.type === "fill" && (
                <div className="space-y-3">
                  {sec.questions.map((fItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <p className="text-sm font-semibold text-white mb-1" dir="ltr">
                        {qIdx + 1}. {fItem.sentence}
                      </p>
                      <p className="text-xs text-slate-400 mb-2">{fItem.ar}</p>
                      {showModelSolutions && (
                        <div className="inline-block p-1.5 px-3 rounded bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300" dir="ltr">
                          Correct Word: {fItem.correctWord}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Match type */}
              {sec.type === "match" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sec.pairs.map((pItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <span className="font-mono font-bold text-sm text-indigo-400 block mb-1" dir="ltr">
                        {pItem.word}
                      </span>
                      <p className="text-xs text-slate-300" dir="ltr">
                        {pItem.def}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Correction type (Jane's letter) */}
              {sec.type === "correction" && (
                <div className="space-y-2.5">
                  {sec.items.map((cItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-white" dir="ltr">
                        {cItem.prompt}
                      </span>
                      {showModelSolutions && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30" dir="ltr">
                            {cItem.modelCorrection}
                          </span>
                          <span className="text-[11px] text-indigo-300">({cItem.reason})</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Choice type (Lucy & Ella) */}
              {sec.type === "choice" && (
                <div className="space-y-2.5">
                  {sec.items.map((chItem: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-white" dir="ltr">
                        {chItem.prompt}
                      </span>
                      {showModelSolutions && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30" dir="ltr">
                            {chItem.answer}
                          </span>
                          <span className="text-[11px] text-indigo-300">({chItem.explanation})</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Phrasal fill type */}
              {sec.type === "phrasal_fill" && (
                <div className="space-y-3">
                  {sec.items.map((pf: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-white" dir="ltr">
                          {pf.sentence}
                        </p>
                        <p className="text-[11px] text-slate-400">{pf.ar}</p>
                      </div>
                      {showModelSolutions && (
                        <span className="font-mono font-bold text-xs text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 shrink-0" dir="ltr">
                          {pf.answer}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Word derivation */}
              {sec.type === "word_derivation" && (
                <div className="space-y-3">
                  {sec.items.map((wd: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-white" dir="ltr">
                        {wd.prompt}
                      </span>
                      {showModelSolutions && (
                        <span className="font-mono font-bold text-xs text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 shrink-0" dir="ltr">
                          {wd.answer} ({wd.pos})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Homophone quiz in sheet */}
              {sec.type === "homophone_quiz" && (
                <div className="space-y-3">
                  {sec.items.map((hq: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-white" dir="ltr">
                          {hq.prompt}
                        </p>
                        <p className="text-[11px] text-slate-400">المعنى: {hq.meaning}</p>
                      </div>
                      {showModelSolutions && (
                        <span className="font-mono font-bold text-xs text-amber-300 px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30 shrink-0" dir="ltr">
                          {hq.answer}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Advice match */}
              {sec.type === "advice_match" && (
                <div className="space-y-2.5">
                  {sec.items.map((am: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-white" dir="ltr">
                        "{am.expr}"
                      </span>
                      {showModelSolutions && (
                        <span className="text-xs font-bold text-rose-300 px-2.5 py-1 rounded bg-rose-950/40 border border-rose-500/30 shrink-0">
                          {am.category}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Composition review */}
              {sec.type === "composition_review" && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 space-y-2">
                  <p className="font-bold text-white">{sec.prompt}</p>
                  <p className="text-slate-400 leading-relaxed">{sec.modelSample}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
