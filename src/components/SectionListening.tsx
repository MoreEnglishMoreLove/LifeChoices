import React, { useState } from "react";
import {
  Headphones,
  Play,
  Square,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { PREVIEW_DATA } from "../data/curriculumData";
import { speakEnglish, stopSpeaking } from "../utils/speech";

export const SectionListening: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [activeDialogueId, setActiveDialogueId] = useState<string>("sofia");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [tfSelections, setTfSelections] = useState<Record<number, boolean>>({});
  const [showTfResults, setShowTfResults] = useState(false);

  const toggleAnswer = (key: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePlayLine = async (lineId: string, text: string) => {
    if (isPlaying === lineId) {
      stopSpeaking();
      setIsPlaying(null);
    } else {
      setIsPlaying(lineId);
      await speakEnglish(text);
      setIsPlaying(null);
    }
  };

  const handlePlayFullDialogue = async (dialogueId: string, lines: { en: string }[]) => {
    if (isPlaying === dialogueId) {
      stopSpeaking();
      setIsPlaying(null);
      return;
    }

    setIsPlaying(dialogueId);
    for (const line of lines) {
      await speakEnglish(line.en);
    }
    setIsPlaying(null);
  };

  const currentDialogue = PREVIEW_DATA.dialogues.find((d) => d.id === activeDialogueId) || PREVIEW_DATA.dialogues[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Unit Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{PREVIEW_DATA.unit} • {PREVIEW_DATA.unitTitleEn}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              القسم 1: المعاينة والاستماع (Preview & Listening)
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              محور الوحدة: <span className="text-indigo-400 font-bold">{PREVIEW_DATA.unitTitleAr}</span>. استمع إلى المقابلات الحقيقية، تدرب على مهارات الاستماع الدقيق، واختبر فهمك مع الحلول المعتمدة للمعلمة جيداء صقر.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => handlePlayFullDialogue(currentDialogue.id, currentDialogue.lines)}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
            >
              {isPlaying === currentDialogue.id ? (
                <>
                  <Square className="w-4 h-4 text-red-400 fill-current" />
                  <span>إيقاف الصوت</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>تشغيل المحادثة صوتياً بالكامل</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Unit Breakdown Matrix */}
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {PREVIEW_DATA.overview.slice(0, 4).map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5">
              <span className="text-indigo-400 font-semibold block">{item.skill}</span>
              <span className="text-slate-300 text-[11px]">{item.detailAr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Discussion Questions Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span>أسئلة المعاينة والنقاش التمهيدي (Preview Discussion Questions)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PREVIEW_DATA.discussionQuestions.map((q, idx) => {
            const isRevealed = revealedAnswers[`disc_${q.id}`];
            return (
              <div
                key={q.id}
                className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <button
                      onClick={() => handlePlayLine(`disc_${q.id}`, q.questionEn)}
                      className="text-slate-400 hover:text-indigo-400 transition-colors p-1"
                      title="استمع للنطق الإنجليزي"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1" dir="ltr">
                    {q.questionEn}
                  </h4>
                  <p className="text-xs text-indigo-300 mb-3">{q.questionAr}</p>
                </div>

                <div className="border-t border-slate-800 pt-3">
                  <button
                    onClick={() => toggleAnswer(`disc_${q.id}`)}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5"
                  >
                    <span>{isRevealed ? "إخفاء نموذج الإجابة" : "عرض نموذج الإجابة المعتمد"}</span>
                    {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isRevealed && (
                    <div className="mt-2.5 p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs space-y-1 animate-fadeIn">
                      <p className="text-slate-200 font-medium" dir="ltr">
                        {q.sampleAnswerEn}
                      </p>
                      <p className="text-indigo-300 text-[11px]">{q.sampleAnswerAr}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Listening Audio Lab */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Headphones className="w-5 h-5 text-indigo-400" />
              <span>مختبر الاستماع التفاعلي (Interactive Audio Lab)</span>
            </h3>
            <p className="text-xs text-slate-400">
              اختر التسجيل الصوتي للاستماع والمتابعة سطراً بسطر باللغتين الإنجليزية والعربية
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {PREVIEW_DATA.dialogues.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  stopSpeaking();
                  setIsPlaying(null);
                  setActiveDialogueId(d.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeDialogueId === d.id
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {d.id === "sofia" ? "1. صوفيا في دمشق" : "2. إيميلي وروبرت"}
              </button>
            ))}
          </div>
        </div>

        {/* Current Active Dialogue Script */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <h4 className="text-base font-bold text-white mb-1">{currentDialogue.title}</h4>
            <p className="text-xs text-indigo-300 mb-4">{currentDialogue.description}</p>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {currentDialogue.lines.map((line, idx) => {
                const lineId = `${currentDialogue.id}_line_${idx}`;
                const isCurrentPlaying = isPlaying === lineId;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all ${
                      isCurrentPlaying
                        ? "bg-indigo-950/60 border-indigo-500 shadow-md"
                        : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                        {line.speaker}
                      </span>
                      <button
                        onClick={() => handlePlayLine(lineId, line.en)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isCurrentPlaying
                            ? "bg-indigo-500 text-white"
                            : "text-slate-400 hover:text-indigo-300 hover:bg-slate-800"
                        }`}
                        title="استمع لهذه العبارة"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-sm text-slate-100 mb-1" dir="ltr">
                      {line.en}
                    </p>
                    <p className="text-xs text-slate-400">{line.ar}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comprehension Questions if Sofia */}
          {currentDialogue.quiz && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>أسئلة استيعاب المحادثة (Comprehension Questions)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentDialogue.quiz.map((item, idx) => {
                  const key = `quiz_${idx}`;
                  const isRevealed = revealedAnswers[key];
                  return (
                    <div key={idx} className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
                      <p className="text-xs font-bold text-white mb-1" dir="ltr">
                        {item.q}
                      </p>
                      <p className="text-[11px] text-slate-400 mb-2">{item.qAr}</p>

                      <button
                        onClick={() => toggleAnswer(key)}
                        className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                      >
                        <span>{isRevealed ? "إخفاء الإجابة النموذجية" : "عرض الإجابة النموذجية"}</span>
                        {isRevealed ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      {isRevealed && (
                        <div className="mt-2 p-2.5 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-xs animate-fadeIn">
                          <p className="text-emerald-300 font-semibold" dir="ltr">
                            {item.answer}
                          </p>
                          <p className="text-slate-300 text-[11px] mt-0.5">{item.answerAr}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* True/False if Emily & Robert */}
          {currentDialogue.trueFalse && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>تمرين صح أو خطأ تفاعلي (True or False)</span>
                </h4>
                <button
                  onClick={() => setShowTfResults(true)}
                  className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
                >
                  فحص الإجابات
                </button>
              </div>

              <div className="space-y-3">
                {currentDialogue.trueFalse.map((item, idx) => {
                  const selected = tfSelections[idx];
                  const isSubmitted = showTfResults;
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

                        {isSubmitted && (
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
      </div>
    </div>
  );
};
