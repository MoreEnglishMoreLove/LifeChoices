import React, { useState } from "react";
import {
  MessageSquare,
  Volume2,
  Sparkles,
  PenTool,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Send,
  Languages,
} from "lucide-react";
import { EVERYDAY_ENGLISH_DATA } from "../data/curriculumData";
import { speakEnglish } from "../utils/speech";

export const SectionSpeaking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"advice" | "situations" | "writing">("advice");
  const [showArabicWriting, setShowArabicWriting] = useState(true);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>التواصل اليومي ومهارات التعبير الكتابي والمحادثة</span>
        </div>
        <h2 className="text-2xl font-black text-white">
          القسم 6: الإنجليزية اليومية والتعبير (Everyday English & Writing)
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          أساليب تقديم النصيحة، السيناريوهات الحوارية الواقعية، ونماذج مواضيع التعبير المعيارية المعتمدة
        </p>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab("advice")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "advice"
                ? "bg-rose-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            1. عبارات تقديم النصيحة (Giving Advice)
          </button>
          <button
            onClick={() => setActiveTab("situations")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "situations"
                ? "bg-rose-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            2. مواقف حوارية واقعية (Everyday Scenarios)
          </button>
          <button
            onClick={() => setActiveTab("writing")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "writing"
                ? "bg-rose-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            3. نماذج مواضيع التعبير (Model Compositions)
          </button>
        </div>
      </div>

      {/* Tab 1: Advice Expressions */}
      {activeTab === "advice" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EVERYDAY_ENGLISH_DATA.givingAdvice.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-white mb-3 border-b border-slate-800 pb-2.5 flex items-center justify-between">
                    <span>{cat.type}</span>
                    <Sparkles className="w-4 h-4 text-rose-400" />
                  </h3>

                  <div className="space-y-2.5">
                    {cat.phrases.map((phrase, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="font-mono font-bold text-xs sm:text-sm text-slate-100" dir="ltr">
                            {phrase.en}
                          </p>
                          <button
                            onClick={() => speakEnglish(phrase.en)}
                            className="text-slate-400 hover:text-rose-400 p-1"
                            title="استمع للعبارة"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-rose-300/80">{phrase.ar}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Situations & Dialogues */}
      {activeTab === "situations" && (
        <div className="space-y-6">
          {EVERYDAY_ENGLISH_DATA.givingAdvice.situations.map((sit, idx) => (
            <div
              key={sit.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 mb-1 inline-block">
                    الموقف الحواري {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white" dir="ltr">
                    {sit.prompt}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">{sit.promptAr}</p>
                </div>
              </div>

              {/* Dialogue Transcript */}
              <div className="space-y-3">
                {sit.dialogue.map((line, lIdx) => (
                  <div
                    key={lIdx}
                    className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-rose-400 block uppercase font-mono">
                        {line.speaker}:
                      </span>
                      <p className="text-sm font-medium text-slate-100" dir="ltr">
                        {line.text}
                      </p>
                      <p className="text-xs text-slate-400">{line.ar}</p>
                    </div>

                    <button
                      onClick={() => speakEnglish(line.text)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors shrink-0"
                      title="استمع"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Model Compositions */}
      {activeTab === "writing" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <PenTool className="w-5 h-5 text-rose-400" />
              <span>نماذج مواضيع التعبير المعيارية المعتمدة للامتحان</span>
            </h3>
            <button
              onClick={() => setShowArabicWriting(!showArabicWriting)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700"
            >
              <Languages className="w-4 h-4 text-rose-400" />
              <span>{showArabicWriting ? "إخفاء الترجمة" : "إظهار الترجمة"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EVERYDAY_ENGLISH_DATA.modelWriting.map((comp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="text-base font-bold text-white" dir="ltr">
                        {comp.titleEn}
                      </h4>
                      <p className="text-xs text-rose-300 mt-0.5">{comp.titleAr}</p>
                    </div>
                    <button
                      onClick={() => speakEnglish(comp.contentEn, 0.85)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
                      title="استمع للموضوع كاملاً"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Essay English text */}
                  <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-4 mb-4">
                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
                      {comp.contentEn}
                    </p>
                  </div>

                  {/* Arabic Translation */}
                  {showArabicWriting && (
                    <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-4 mb-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {comp.contentAr}
                    </div>
                  )}

                  {/* Tips or Structure */}
                  {comp.tips && (
                    <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-3.5">
                      <h5 className="text-xs font-bold text-rose-300 mb-1.5">نصائح ذهبية للمعلمة جيداء صقر:</h5>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {comp.tips.map((t, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
