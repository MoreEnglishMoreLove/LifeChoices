import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Lock, Sparkles, KeyRound, MessageCircle, AlertCircle, ShieldCheck, User, ArrowLeft, GraduationCap } from "lucide-react";
import { verifyStudentCode, saveStudentSession } from "../utils/crypto";
import { TEACHER_INFO } from "../data/curriculumData";

interface LockScreenProps {
  onSuccess: (session: {
    studentName: string;
    activationCode: string;
    activatedAt: number;
    expiresAt: number;
  }) => void;
  onOpenTeacherPortal: () => void;
  expiredSessionName?: string | null;
}

export const LockScreen: React.FC<LockScreenProps> = ({
  onSuccess,
  onOpenTeacherPortal,
  expiredSessionName,
}) => {
  const [studentName, setStudentName] = useState(expiredSessionName || "");
  const [code, setCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Auto-format code as student types (MEML-XXXX-XXXX)
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (raw.startsWith("MEML")) {
      raw = raw.slice(4);
    }
    raw = raw.slice(0, 8); // 8 chars after MEML

    let formatted = "MEML";
    if (raw.length > 0) {
      formatted += "-" + raw.slice(0, 4);
    }
    if (raw.length > 4) {
      formatted += "-" + raw.slice(4, 8);
    }

    setCode(formatted);
    if (errorMsg) setErrorMsg("");
  };

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = studentName.trim();
    const cleanCode = code.trim().toUpperCase();

    if (!cleanName) {
      setErrorMsg("يرجى إدخال اسم الطالب الكامل");
      return;
    }

    if (!cleanCode || cleanCode === "MEML" || cleanCode.length < 10) {
      setErrorMsg("يرجى إدخال كود التفعيل الكامل المكون من 8 خانات (مثال: MEML-XXXX-XXXX)");
      return;
    }

    setIsVerifying(true);
    setErrorMsg("");

    setTimeout(() => {
      const isValid = verifyStudentCode(cleanName, cleanCode);
      if (isValid) {
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#6366f1", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"],
          });
        } catch {
          // ignore
        }

        const session = saveStudentSession(cleanName, cleanCode);
        onSuccess(session);
      } else {
        setIsVerifying(false);
        setErrorMsg("كود التفعيل غير متطابق مع هذا الاسم. يرجى التأكد من كتابة الاسم كما سجلته المعلمة بدقة وبدون أخطاء، أو التواصل مع المعلمة جيداء صقر عبر واتساب.");
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-900/20 via-blue-900/10 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Bar with Teacher Portal Trigger */}
      <header className="w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-wide text-white">
              MORE ENGLISH MORE LOVE
            </h1>
            <p className="text-xs text-indigo-300 font-medium">
              المعلمة جيداء صقر • T. Jaidaa Saqer
            </p>
          </div>
        </div>

        <button
          id="open-teacher-portal-top-btn"
          onClick={onOpenTeacherPortal}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all text-xs md:text-sm font-medium shadow-sm hover:border-indigo-500/50"
        >
          <KeyRound className="w-4 h-4 text-amber-400" />
          <span>بوابة المعلمة (Teacher Portal)</span>
        </button>
      </header>

      {/* Main Form Center */}
      <main className="w-full max-w-lg mx-auto px-4 py-8 my-auto">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60 relative">
          {/* Header icon badge */}
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-5 text-indigo-400">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              تفعيل المنهاج التعليمي
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              منهاج <span className="text-indigo-400 font-semibold">MORE ENGLISH MORE LOVE</span> التفاعلي الشامل. أدخل اسمك وكود التفعيل الحصري لفتح كامل الدروس والتمارين وأوراق العمل.
            </p>
          </div>

          {expiredSessionName && (
            <div className="mb-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">انتهت فترة الاشتراك السابقة (6 أشهر)</p>
                <p className="text-amber-200/90 text-xs">
                  يرجى تجديد الكود مع المعلمة جيداء صقر لإعادة تفعيل المنهاج.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleActivate} className="space-y-4" id="activation-form">
            <div>
              <label htmlFor="student-name-input" className="block text-xs font-semibold text-slate-300 mb-1.5">
                اسم الطالب الكامل (كما هو مسجل لدى المعلمة)
              </label>
              <div className="relative">
                <input
                  id="student-name-input"
                  type="text"
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  placeholder="مثال: أحمد محمد علي"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  dir="auto"
                  required
                />
                <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="activation-code-input" className="block text-xs font-semibold text-slate-300 mb-1.5">
                كود التفعيل الحصري (MEML-XXXX-XXXX)
              </label>
              <div className="relative">
                <input
                  id="activation-code-input"
                  type="text"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="MEML-XXXX-XXXX"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3 pl-11 text-sm font-mono tracking-wider text-indigo-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all uppercase"
                  dir="ltr"
                  required
                />
                <KeyRound className="w-5 h-5 text-indigo-400 absolute left-3.5 top-3 pointer-events-none" />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              id="submit-activate-btn"
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              {isVerifying ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>جارٍ التحقق وتفعيل المنهاج...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span>تفعيل الحساب والدخول للمنهاج</span>
                  <ArrowLeft className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick info feature badges */}
          <div className="grid grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-slate-800 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>تشفير دقيق ومحلي مستقل</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>صلاحية مستمرة لـ 6 أشهر</span>
            </div>
          </div>

          {/* Contact Teacher Jaidaa Saqer via WhatsApp */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-3">
              ليس لديك كود تفعيل بعد؟ تواصل مباشرة مع المعلمة جيداء صقر:
            </p>
            <a
              id="whatsapp-teacher-request-btn"
              href={TEACHER_INFO.greetingWhatsApp(studentName)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 hover:border-emerald-500/50 transition-all text-xs font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>طلب كود التفعيل عبر واتساب ({TEACHER_INFO.phone})</span>
            </a>
          </div>
        </div>
      </main>

      {/* Bottom info footer */}
      <footer className="w-full max-w-5xl mx-auto px-4 py-6 text-center text-xs text-slate-400 border-t border-slate-900">
        <p className="mb-1">
          منهاج MORE ENGLISH MORE LOVE • إشراف وإعداد المعلمة جيداء صقر (T. Jaidaa Saqer)
        </p>
        <p className="text-[11px] text-slate-500">
          تطبيق تعليمي مستقل بدون خوادم خارجية • يعمل على جميع الأجهزة والهواتف الذكية
        </p>
      </footer>
    </div>
  );
};
