import React, { useState } from "react";
import {
  BookOpen,
  Volume2,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Languages,
} from "lucide-react";
import { READING_DATA } from "../data/curriculumData";
import { speakEnglish } from "../utils/speech";

export const SectionReading: React.FC = () => {
  const [activeTextId, setActiveTextId] = useState<"text1" | "text2">("text1");
  const [showArabic, setShowArabic] = useState<boolean>(true);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [tfSelections, setTfSelections] = useState<Record<number, boolean>>({});
  const [showTfResults, setShowTfResults] = useState<boolean>(false);

  const toggleAnswer = (key: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentText = activeTextId === "text1" ? READING_DATA.text1 : READING_DATA.text2;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Selector Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>نصوص القراءة والفهم والاستيعاب</span>
            </div>
            <h2 className="text-2xl font-black text-white">
              القسم 2: نصوص القراءة والتحليل (Reading Texts & Comprehension)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              نصوص المنهاج المقررة مع الترجمة الموازية، الكلمات المفتاحية، والأسئلة النموذجية
            </p>
          </div>

          {/* Text Switcher */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => {
                setActiveTextId("text1");
                setRevealedAnswers({});
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTextId === "text1"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              1. Future Careers (المهن المستقبلية)
            </button>
            <button
              onClick={() => {
                setActiveTextId("text2");
                setRevealedAnswers({});
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTextId === "text2"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2. A Learned Lesson (الدرس المتعلم)
            </button>
          </div>
        </div>

        {/* Global Translation Toggle */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-slate-400">
            النص النشط: <strong className="text-white">{currentText.titleEn}</strong> ({currentText.titleAr})
          </span>
          <button
            onClick={() => setShowArabic(!showArabic)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
          >
            <Languages className="w-4 h-4 text-indigo-400" />
            <span>{showArabic ? "إخفاء الترجمة العربية الموازية" : "إظهار الترجمة العربية الموازية"}</span>
          </button>
        </div>
      </div>

      {/* Paragraphs Grid */}
      <div className="space-y-4">
        {currentText.paragraphs.map((p, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                الفقرة {idx + 1}
              </span>
              <button
                onClick={() => speakEnglish(p.en)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white text-xs transition-colors"
                title="استمع للفقرة باللغة الإنجليزية"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>استماع للفقرة</span>
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] mb-3" dir="ltr">
              {p.en}
            </p>

            {showArabic && (
              <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed pt-3 border-t border-slate-800/80">
                {p.ar}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Vocabulary Cards for Text 1 */}
      {activeTextId === "text1" && READING_DATA.text1.vocabulary && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>المفردات المفتاحية للنص (Key Vocabulary)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {READING_DATA.text1.vocabulary.map((vocab, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono font-bold text-base text-indigo-400" dir="ltr">
                      {vocab.word}
                    </span>
                    <button
                      onClick={() => speakEnglish(vocab.word)}
                      className="p-1 text-slate-400 hover:text-indigo-300"
                      title="نطق الكلمة"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 block mb-1">نوع الكلمة: {vocab.pos}</span>
                  <p className="text-xs font-bold text-slate-200 mb-1">{vocab.meaningAr}</p>
                </div>
                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80" dir="ltr">
                  Def: {vocab.definitionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vocabulary Match for Text 2 */}
      {activeTextId === "text2" && READING_DATA.text2.vocabularyMatch && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>تعاريف المفردات وقيم الحياة (Life Values Definitions)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {READING_DATA.text2.vocabularyMatch.map((item, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-base text-amber-400" dir="ltr">
                    {item.word}
                  </span>
                  <button onClick={() => speakEnglish(item.word)} className="p-1 text-slate-400 hover:text-amber-300">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs font-bold text-slate-200 mb-1">المعنى: {item.meaningAr}</p>
                <p className="text-xs text-slate-300" dir="ltr">{item.defEn}</p>
                <p className="text-[11px] text-slate-400">{item.defAr}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comprehension Questions (Text 1) */}
      {activeTextId === "text1" && READING_DATA.text1.comprehension && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <span>أسئلة الفهم والاستيعاب مع الحلول النموذجية (1 - 6)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {READING_DATA.text1.comprehension.map((item, idx) => {
              const key = `text1_comp_${idx}`;
              const isRevealed = revealedAnswers[key];
              return (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <button
                        onClick={() => speakEnglish(item.q)}
                        className="p-1 text-slate-400 hover:text-blue-400"
                        title="استمع للسؤال"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-white mb-1" dir="ltr">
                      {item.q}
                    </p>
                    <p className="text-xs text-indigo-300 mb-3">{item.qAr}</p>
                  </div>

                  <div className="border-t border-slate-800 pt-3">
                    <button
                      onClick={() => toggleAnswer(key)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5"
                    >
                      <span>{isRevealed ? "إخفاء الحل النموذجي" : "عرض الحل النموذجي للمعلمة جيداء صقر"}</span>
                      {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isRevealed && (
                      <div className="mt-2.5 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs animate-fadeIn">
                        <p className="text-emerald-300 font-semibold mb-1" dir="ltr">
                          {item.a}
                        </p>
                        <p className="text-slate-300 text-[11px]">{item.aAr}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* True/False Statements (Text 2) */}
      {activeTextId === "text2" && READING_DATA.text2.trueFalse && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>تمرين صح أو خطأ للنص الثاني (True or False Statements)</span>
            </h3>
            <button
              onClick={() => setShowTfResults(true)}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
            >
              فحص إجاباتي
            </button>
          </div>

          <div className="space-y-3">
            {READING_DATA.text2.trueFalse.map((item, idx) => {
              const selected = tfSelections[idx];
              const isCorrect = selected === item.isTrue;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-100 mb-0.5" dir="ltr">
                      {item.statement}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.ar}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setTfSelections((prev) => ({ ...prev, [idx]: true }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                        selected === true
                          ? "bg-emerald-600 text-white border-emerald-500"
                          : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      True (صحيح)
                    </button>
                    <button
                      onClick={() => setTfSelections((prev) => ({ ...prev, [idx]: false }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                        selected === false
                          ? "bg-red-600 text-white border-red-500"
                          : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      False (خطأ)
                    </button>

                    {showTfResults && (
                      <span className="mr-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
