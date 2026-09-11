import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Clock,
  LogOut,
  KeyRound,
  Headphones,
  BookOpen,
  HelpCircle,
  FileText,
  Volume2,
  MessageSquare,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { TEACHER_INFO } from "../data/curriculumData";

export type SectionTab =
  | "listening"
  | "reading"
  | "grammar"
  | "vocabulary"
  | "pronunciation"
  | "speaking"
  | "worksheets";

interface CurriculumNavProps {
  activeTab: SectionTab;
  onTabChange: (tab: SectionTab) => void;
  studentName: string;
  expiresAt: number;
  onLogout: () => void;
  onOpenTeacherPortal: () => void;
}

export const CurriculumNav: React.FC<CurriculumNavProps> = ({
  activeTab,
  onTabChange,
  studentName,
  expiresAt,
  onLogout,
  onOpenTeacherPortal,
}) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, expiresAt - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // every minute
    return () => clearInterval(interval);
  }, [expiresAt]);

  const tabs: { id: SectionTab; labelAr: string; labelEn: string; icon: any; badge?: string }[] = [
    {
      id: "listening",
      labelAr: "1. المعاينة والاستماع",
      labelEn: "Preview & Listening",
      icon: Headphones,
    },
    {
      id: "reading",
      labelAr: "2. نصوص القراءة والفهم",
      labelEn: "Reading Texts",
      icon: BookOpen,
    },
    {
      id: "grammar",
      labelAr: "3. القواعد النحوية والأزمنة",
      labelEn: "Grammar & Tenses",
      icon: HelpCircle,
    },
    {
      id: "vocabulary",
      labelAr: "4. المفردات والأفعال المركبة",
      labelEn: "Vocabulary & Verbs",
      icon: FileText,
    },
    {
      id: "pronunciation",
      labelAr: "5. النطق والكلمات المتشابهة",
      labelEn: "Homophones",
      icon: Volume2,
    },
    {
      id: "speaking",
      labelAr: "6. الإنجليزية اليومية والتعبير",
      labelEn: "Everyday English & Writing",
      icon: MessageSquare,
    },
    {
      id: "worksheets",
      labelAr: "7. أوراق العمل والحلول النموذجية",
      labelEn: "7 Curriculum Worksheets",
      icon: ClipboardList,
      badge: "المنهاج الكامل",
    },
  ];

  return (
    <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 shadow-xl shadow-black/40">
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Teacher */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-wide">
                MORE ENGLISH MORE LOVE
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Unit 1: Life Choices
              </span>
            </div>
            <p className="text-xs text-indigo-300">
              بإشراف وتدريس المعلمة جيداء صقر • T. Jaidaa Saqer
            </p>
          </div>
        </div>

        {/* Student Session & Subscription Badge */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">الطالب:</span>
            <span className="font-bold text-white">{studentName}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-200">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>متبقي:</span>
            <span className="font-mono font-bold text-amber-300">
              {timeLeft.days} يوماً و {timeLeft.hours} س
            </span>
          </div>

          <button
            onClick={onOpenTeacherPortal}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition-colors"
            title="بوابة المعلمة"
          >
            <KeyRound className="w-4 h-4" />
          </button>

          <button
            onClick={onLogout}
            className="p-2 rounded-xl bg-slate-900 hover:bg-red-950/40 border border-slate-800 hover:border-red-500/30 text-slate-400 hover:text-red-300 transition-colors"
            title="تسجيل الخروج"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 7 Curriculum Section Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-none border-t border-slate-900">
        <div className="flex items-center gap-1 py-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span className="font-['Cairo']">{tab.labelAr}</span>
                {tab.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
