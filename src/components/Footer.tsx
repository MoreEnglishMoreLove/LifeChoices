import React from "react";
import {
  MessageCircle,
  Youtube,
  Facebook,
  Instagram,
  Send,
  GraduationCap,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { TEACHER_INFO } from "../data/curriculumData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 mt-16 text-slate-400 text-xs selection:bg-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base">MORE ENGLISH MORE LOVE</h4>
                <p className="text-xs text-indigo-300 font-medium">
                  المعلمة جيداء صقر • T. Jaidaa Saqer
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              منظومة تعليمية متكاملة وتفاعلية لمادة اللغة الإنجليزية لتمكين الطلاب وتدريبهم على مهارات الاستماع، القراءة، القواعد، المفردات، النطق، والتعبير بأعلى معايير التميز والتفوق.
            </p>
          </div>

          {/* Teacher Contact */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400">
              التواصل المباشر مع المعلمة
            </h5>
            <p className="text-xs text-slate-300">
              <strong className="text-white">الهاتف والواتساب:</strong> {TEACHER_INFO.phone}
            </p>
            <p className="text-xs text-slate-400">
              لتسجيل الطلاب الجدد، وتوليد أو تجديد أكواد التفعيل الحصرية المعتمدة.
            </p>
            <a
              href={TEACHER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors text-xs font-semibold mt-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400">
              منصات MORE ENGLISH MORE LOVE
            </h5>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={TEACHER_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>صفحة فيسبوك الرسمية</span>
              </a>
              <a
                href={TEACHER_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>قناة يوتيوب التعليمية</span>
              </a>
              <a
                href={TEACHER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>حساب إنستغرام</span>
              </a>
              <a
                href={TEACHER_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>قناة تيليجرام</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} • منهاج MORE ENGLISH MORE LOVE • المعلمة جيداء صقر
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>نظام التحقق الرياضي الحصري • 100% Client-Side Algorithm</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
