import React, { useState } from "react";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GRAMMAR_DATA } from "../data/curriculumData";

export const SectionGrammar: React.FC = () => {
  const [activeRuleId, setActiveRuleId] = useState<string>("present_simple");
  const [showJaneAnswers, setShowJaneAnswers] = useState(false);
  const [pastChoices, setPastChoices] = useState<Record<number, string>>({});
  const [showPastResults, setShowPastResults] = useState(false);
  const [showContAnswers, setShowContAnswers] = useState(false);

  const currentRule = GRAMMAR_DATA.rules.find((r) => r.id === activeRuleId) || GRAMMAR_DATA.rules[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>مراجعة الأزمنة والتراكيب النحوية (Revision of Tenses 1)</span>
        </div>
        <h2 className="text-2xl font-black text-white">
          القسم 3: القواعد النحوية والأزمنة (Grammar Mastery)
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          شرح تفصيلي مبسط لجميع أزمنة الوحدة الأولى مع التمارين التفاعلية وحلول المعلمة النموذجية
        </p>

        {/* Rule Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none mt-4 pt-4 border-t border-slate-800">
          {GRAMMAR_DATA.rules.map((rule) => (
            <button
              key={rule.id}
              onClick={() => setActiveRuleId(rule.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeRuleId === rule.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {rule.titleAr} ({rule.titleEn})
            </button>
          ))}
        </div>
      </div>

      {/* Active Rule Details Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              {currentRule.titleAr} - {currentRule.titleEn}
            </h3>
            <p className="text-xs text-indigo-300 font-medium mt-1">{currentRule.usageAr}</p>
          </div>
          <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
            Rule #{currentRule.id}
          </span>
        </div>

        {/* Formula Box */}
        <div className="bg-slate-950/80 border border-purple-500/30 rounded-xl p-4 my-4 font-mono text-xs sm:text-sm text-purple-200">
          <div className="text-[11px] text-slate-400 mb-1 font-sans">الصيغة والتركيب (Structure):</div>
          <div className="font-bold tracking-wide">{currentRule.structure}</div>
        </div>

        {/* Signal Words */}
        {currentRule.keyWords && (
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-xs text-slate-400">الكلمات الدالة (Keywords):</span>
            {currentRule.keyWords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700"
              >
                {kw}
              </span>
            ))}
          </div>
        )}

        {/* Examples */}
        <div className="space-y-2 mt-4">
          <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>أمثلة تطبيقية توضيحية:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentRule.examples.map((ex, i) => (
              <div key={i} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                <p className="text-sm font-semibold text-white" dir="ltr">
                  {ex.en}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{ex.ar}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Exercise 1: Jane's Letter */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>تمرين 1: رسالة جين إلى ديفيد (Jane's Letter to David)</span>
            </h3>
            <p className="text-xs text-slate-400">
              صحح أشكال الأفعال الخاطئة (المضارع البسيط vs المضارع المستمر) مع بيان السبب
            </p>
          </div>
          <button
            onClick={() => setShowJaneAnswers(!showJaneAnswers)}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
          >
            {showJaneAnswers ? "إخفاء الحلول" : "عرض الحلول مع التعليل"}
          </button>
        </div>

        <div className="space-y-2.5">
          {GRAMMAR_DATA.exercises[0].items?.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span className="text-xs text-red-400 line-through font-mono mr-2" dir="ltr">
                  {item.original}
                </span>
                <span className="text-xs text-slate-400">←</span>
                <span className="text-xs text-emerald-400 font-bold font-mono ml-2" dir="ltr">
                  {showJaneAnswers ? item.corrected : "???"}
                </span>
              </div>

              {showJaneAnswers && (
                <div className="text-xs text-indigo-300 bg-indigo-950/40 px-3 py-1 rounded-lg border border-indigo-500/20">
                  {item.reasonAr}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Exercise 2: Past Simple vs Present Perfect Choices */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              <span>تمرين 2: الماضي البسيط أم المضارع التام؟ (Past Simple or Present Perfect)</span>
            </h3>
            <p className="text-xs text-slate-400">
              اختر الصيغة الصحيحة المناسبة لسياق الحوار
            </p>
          </div>
          <button
            onClick={() => setShowPastResults(true)}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
          >
            فحص إجاباتي
          </button>
        </div>

        <div className="space-y-3">
          {GRAMMAR_DATA.exercises[1].items?.map((item: any, idx: number) => {
            const chosen = pastChoices[idx];
            const isCorrect = chosen === item.answer;

            return (
              <div
                key={idx}
                className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white mb-1" dir="ltr">
                    {item.q}
                  </p>
                  {showPastResults && (
                    <p className="text-xs text-indigo-300">التعليل: {item.reasonAr}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.options.map((opt: string) => {
                    const isSelected = chosen === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setPastChoices((prev) => ({ ...prev, [idx]: opt }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          isSelected
                            ? "bg-purple-600 text-white border-purple-500"
                            : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}

                  {showPastResults && (
                    <span className="mr-1">
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

      {/* Interactive Exercise 3: Present Perfect Continuous */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>تمرين 3: المضارع التام المستمر والنتائج الحالية (Why are they...?)</span>
            </h3>
            <p className="text-xs text-slate-400">
              التعبير عن أفعال مستمرة أدت إلى نتائج واضحة حالياً (have/has been + v-ing)
            </p>
          </div>
          <button
            onClick={() => setShowContAnswers(!showContAnswers)}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
          >
            {showContAnswers ? "إخفاء الحلول" : "عرض نموذج الحلول"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GRAMMAR_DATA.exercises[2].items?.map((item: any, idx: number) => (
            <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
              <p className="text-xs font-bold text-indigo-400 mb-1" dir="ltr">
                {item.q}
              </p>
              {showContAnswers ? (
                <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs animate-fadeIn">
                  <p className="text-emerald-300 font-bold" dir="ltr">
                    {item.answer}
                  </p>
                  <p className="text-slate-300 text-[11px] mt-0.5">{item.ar}</p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 mt-2">اضغط على عرض نموذج الحل لرؤية الإجابة المعيارية.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
