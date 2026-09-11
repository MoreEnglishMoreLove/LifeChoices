import React, { useState } from "react";
import {
  FileText,
  Volume2,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { VOCABULARY_DATA } from "../data/curriculumData";
import { speakEnglish } from "../utils/speech";

export const SectionVocabulary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"phrasal" | "family" | "general">("phrasal");
  const [searchTerm, setSearchTerm] = useState("");
  const [quizSelections, setQuizSelections] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Quick interactive test on phrasal verbs
  const phrasalQuiz = [
    {
      q: "You can always ______ me if you are feeling tired or having difficulties.",
      options: ["reach out to", "run into", "fit in"],
      answer: "reach out to",
      ar: "التواصل لطلب المساعدة والدعم",
    },
    {
      q: "She tried very hard to ______ with the locals in her new village.",
      options: ["fit in", "follow through", "keep up with"],
      answer: "fit in",
      ar: "الانسجام والتأقلم مع المجموعة",
    },
    {
      q: "If you ______ any trouble during your trip, please give me a call.",
      options: ["get into", "run into", "reach out to"],
      answer: "run into",
      ar: "مواجهة المشاكل والتعثر غير المتوقع",
    },
    {
      q: "It's essential to ______ the latest developments in educational technology.",
      options: ["keep up with", "fit in", "run into"],
      answer: "keep up with",
      ar: "مواكبة المستجدات والتطورات",
    },
    {
      q: "They started the campaign with high spirits but failed to ______.",
      options: ["follow through", "get into", "run into"],
      answer: "follow through",
      ar: "المتابعة لإكمال العمل بنجاح",
    },
  ];

  const filteredGeneral = VOCABULARY_DATA.generalVocabulary.filter(
    (item) =>
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaningAr.includes(searchTerm)
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
          <FileText className="w-3.5 h-3.5" />
          <span>المفردات وعائلات الكلمات والأفعال المركبة</span>
        </div>
        <h2 className="text-2xl font-black text-white">
          القسم 4: بنك المفردات وعائلات الكلمات (Vocabulary & Phrasal Verbs)
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          الأفعال المركبة الستة الأساسية، اشتقاقات عائلات الكلمات، والنطق الصوتي لجميع الكلمات
        </p>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab("phrasal")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "phrasal"
                ? "bg-emerald-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            1. الأفعال المركبة (6 Phrasal Verbs)
          </button>
          <button
            onClick={() => setActiveTab("family")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "family"
                ? "bg-emerald-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            2. عائلات الكلمات والاشتقاقات (Word Families)
          </button>
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "general"
                ? "bg-emerald-600 text-white shadow"
                : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            3. معجم الكلمات الشامل (General Vocabulary)
          </button>
        </div>
      </div>

      {/* Tab 1: Phrasal Verbs */}
      {activeTab === "phrasal" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VOCABULARY_DATA.phrasalVerbs.map((pv) => (
              <div
                key={pv.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-black font-mono text-emerald-400" dir="ltr">
                      {pv.verb}
                    </span>
                    <button
                      onClick={() => speakEnglish(pv.verb)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-colors"
                      title="استمع للنطق"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs font-bold text-slate-200 mb-1">{pv.meaningAr}</p>
                  <p className="text-xs text-slate-400 mb-3" dir="ltr">
                    Def: {pv.meaningEn}
                  </p>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                    <span>مثال تطبيقي (Example):</span>
                    <button onClick={() => speakEnglish(pv.exampleEn)} className="hover:text-emerald-300">
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="font-medium text-slate-100 mb-0.5" dir="ltr">
                    "{pv.exampleEn}"
                  </p>
                  <p className="text-[11px] text-emerald-300/80">{pv.exampleAr}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phrasal Verbs Interactive Test */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span>اختبر فهمك للأفعال المركبة (Interactive Phrasal Verbs Quiz)</span>
                </h3>
                <p className="text-xs text-slate-400">اختر الفعل المركب المناسب لسياق الجملة</p>
              </div>
              <button
                onClick={() => setShowQuizResults(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow"
              >
                فحص الإجابات والدرجة
              </button>
            </div>

            <div className="space-y-3">
              {phrasalQuiz.map((item, idx) => {
                const selected = quizSelections[idx];
                const isCorrect = selected === item.answer;
                return (
                  <div
                    key={idx}
                    className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white mb-1" dir="ltr">
                        {item.q}
                      </p>
                      <p className="text-xs text-slate-400">المعنى المطلوب: {item.ar}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                      {item.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setQuizSelections((prev) => ({ ...prev, [idx]: opt }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors ${
                            selected === opt
                              ? "bg-emerald-600 text-white border-emerald-500"
                              : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}

                      {showQuizResults && (
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
        </div>
      )}

      {/* Tab 2: Word Families */}
      {activeTab === "family" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VOCABULARY_DATA.wordFamilies.map((fam, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                <span className="font-bold text-base text-white">{fam.root}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {fam.meaningAr}
                </span>
              </div>

              <div className="space-y-2">
                {fam.forms.map((form, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakEnglish(form.word)}
                        className="text-slate-400 hover:text-emerald-400"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono font-bold text-sm text-slate-100" dir="ltr">
                        {form.word}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 bg-slate-900 rounded border border-slate-700">
                        {form.pos}
                      </span>
                      <span className="text-xs text-indigo-300 font-medium">{form.meaningAr}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: General Vocabulary Table */}
      {activeTab === "general" && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              <span>معجم كلمات الوحدة الأولى ({filteredGeneral.length})</span>
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث بالإنجليزية أو العربية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 pl-8 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredGeneral.map((v, i) => (
              <div
                key={i}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex flex-col justify-between hover:border-slate-700"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-sm text-indigo-300" dir="ltr">
                    {v.word}
                  </span>
                  <button onClick={() => speakEnglish(v.word)} className="text-slate-400 hover:text-white">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 mb-1">{v.pos}</span>
                <p className="text-xs font-bold text-slate-200">{v.meaningAr}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
