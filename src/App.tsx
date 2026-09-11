import React, { useState, useEffect } from "react";
import { LockScreen } from "./components/LockScreen";
import { AdminPortalModal } from "./components/AdminPortalModal";
import { CurriculumNav, SectionTab } from "./components/CurriculumNav";
import { SectionListening } from "./components/SectionListening";
import { SectionReading } from "./components/SectionReading";
import { SectionGrammar } from "./components/SectionGrammar";
import { SectionVocabulary } from "./components/SectionVocabulary";
import { SectionPronunciation } from "./components/SectionPronunciation";
import { SectionSpeaking } from "./components/SectionSpeaking";
import { SectionWorksheets } from "./components/SectionWorksheets";
import { Footer } from "./components/Footer";
import { getStoredStudentSession, clearStudentSession } from "./utils/crypto";

export default function App() {
  const [session, setSession] = useState<{
    studentName: string;
    activationCode: string;
    activatedAt: number;
    expiresAt: number;
    deviceId: string;
  } | null>(null);

  const [isTeacherPortalOpen, setIsTeacherPortalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SectionTab>("listening");
  const [expiredStudentName, setExpiredStudentName] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const { isValid, isExpired, session: storedSession } = getStoredStudentSession();
    if (isValid && storedSession) {
      setSession(storedSession);
    } else if (isExpired && storedSession) {
      setExpiredStudentName(storedSession.studentName);
      clearStudentSession();
    }
    setIsLoaded(true);
  }, []);

  const handleActivationSuccess = (newSession: any) => {
    setSession(newSession);
    setExpiredStudentName(null);
  };

  const handleLogout = () => {
    clearStudentSession();
    setSession(null);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-indigo-400">
        <div className="w-8 h-8 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif]">
      {/* If student is not activated or session expired, show the LockScreen */}
      {!session ? (
        <LockScreen
          onSuccess={handleActivationSuccess}
          onOpenTeacherPortal={() => setIsTeacherPortalOpen(true)}
          expiredSessionName={expiredStudentName}
        />
      ) : (
        /* Authenticated Student Experience */
        <div className="flex-1 flex flex-col">
          <CurriculumNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            studentName={session.studentName}
            expiresAt={session.expiresAt}
            onLogout={handleLogout}
            onOpenTeacherPortal={() => setIsTeacherPortalOpen(true)}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
            {activeTab === "listening" && <SectionListening />}
            {activeTab === "reading" && <SectionReading />}
            {activeTab === "grammar" && <SectionGrammar />}
            {activeTab === "vocabulary" && <SectionVocabulary />}
            {activeTab === "pronunciation" && <SectionPronunciation />}
            {activeTab === "speaking" && <SectionSpeaking />}
            {activeTab === "worksheets" && <SectionWorksheets />}
          </main>

          <Footer />
        </div>
      )}

      {/* Teacher Admin Modal (accessible from lockscreen or authenticated view anytime) */}
      <AdminPortalModal
        isOpen={isTeacherPortalOpen}
        onClose={() => setIsTeacherPortalOpen(false)}
      />
    </div>
  );
}
