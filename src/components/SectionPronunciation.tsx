import React, { useState } from "react";
import {
  Volume2,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { HOMOPHONES_DATA } from "../data/curriculumData";
import { speakEnglish } from "../utils/speech";

export const SectionPronunciation: React.FC = () => {
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const [revealedSingle, setRevealedSingle] = useState<Record<string, boolean>>({});

  const toggleSingle = (id: string) => {
    setRevealedSingle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
          <Volume2 className="w-3.5 h-3.5" />
          <span>النطق والكلمات المتشابهة في اللفظ (Homophones)</span>
        </div>
        <h2 className="text-2xl font-black text-white">
          القسم 5: النطق وإتقان الكلمات المتجانسة (Homophones Mastery)
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
          {HOMOPHONES_DATA.definitionAr}
        </p>
        <p className="text-xs text-indigo-300 font-mono mt-1" dir="ltr">
          "{HOMOPHONES_DATA.definitionEn}"
        </p>

        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-slate-400">
            مجموع الأزواج المقررة في منهاج المعلمة جيداء صقر: <strong className="text-amber-400">14 زوجاً</strong>
          </span>
          <button
            onClick={() => setShowAllSolutions(!showAllSolutions)}
            className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/30 text-xs font-bold transition-colors"
          >
            {showAllSolutions ? "إخفاء كل الحلول النموذجية" : "إظهار كافة الحلول والشروحات النموذجية"}
          </button>
        </div>
      </div>

      {/* 14 Homophones Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HOMOPHONES_DATA.pairs.map((item, idx) => {
          const isSingleOpen = showAllSolutions || revealedSingle[item.id];

          return (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
            >
              <div>
                {/* Header pair & sounds */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div className="flex items-center gap-2 font-mono font-black text-base text-white" dir="ltr">
                      <span className="text-amber-400">{item.word1}</span>
                      <span className="text-slate-500">/</span>
                      <span className="text-sky-400">{item.word2}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => speakEnglish(item.word1)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-amber-600 text-amber-300 hover:text-white text-xs flex items-center gap-1 transition-colors"
                      title={`نطق ${item.word1}`}
                    >
                      <Volume2 className="w-3 h-3" />
                      <span className="font-mono">{item.word1}</span>
                    </button>
                    <button
                      onClick={() => speakEnglish(item.word2)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-sky-600 text-sky-300 hover:text-white text-xs flex items-center gap-1 transition-colors"
                      title={`نطق ${item.word2}`}
                    >
                      <Volume2 className="w-3 h-3" />
                      <span className="font-mono">{item.word2}</span>
                    </button>
                  </div>
                </div>

                {/* Meanings */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-mono font-bold block" dir="ltr">{item.word1}</span>
                    <span className="text-slate-300 text-[11px]">{item.meaning1}</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-sky-400 font-mono font-bold block" dir="ltr">{item.word2}</span>
                    <span className="text-slate-300 text-[11px]">{item.meaning2}</span>
                  </div>
                </div>

                {/* Sentence Prompt */}
                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 mb-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>جملة التمرين (Exam Sentence):</span>
                    <button onClick={() => speakEnglish(item.sentence)} className="hover:text-amber-300">
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-100 mb-1" dir="ltr">
                    {item.sentence}
                  </p>
                  <p className="text-xs text-indigo-300/80">{item.sentenceAr}</p>
                </div>
              </div>

              {/* Solution Toggle */}
              <div className="border-t border-slate-800/80 pt-2.5">
                <button
                  onClick={() => toggleSingle(item.id)}
                  className="w-full text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center justify-between py-1"
                >
                  <span>{isSingleOpen ? "إخفاء الحل النموذجي" : "عرض الحل النموذجي المعتمد"}</span>
                  {isSingleOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isSingleOpen && (
                  <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs animate-fadeIn space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">الفراغ الأول:</span>
                      <span className="font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-500/20" dir="ltr">
                        {item.slot1Correct}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">الفراغ الثاني:</span>
                      <span className="font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-500/20" dir="ltr">
                        {item.slot2Correct}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
