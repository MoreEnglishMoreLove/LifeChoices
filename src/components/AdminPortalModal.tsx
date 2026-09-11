import React, { useState, useEffect } from "react";
import {
  X,
  Lock,
  KeyRound,
  Sparkles,
  Copy,
  Check,
  Send,
  Search,
  ShieldCheck,
  UserCheck,
  History,
  Trash2,
  Phone,
  AlertCircle,
} from "lucide-react";
import {
  TEACHER_ADMIN_PIN,
  generateStudentCode,
  verifyStudentCode,
  getTeacherCodesHistory,
  saveTeacherCodeToHistory,
} from "../utils/crypto";
import { TEACHER_INFO } from "../data/curriculumData";

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [pinInput, setPinInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState("");

  // Code generator state
  const [studentName, setStudentName] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Array<{ id: string; studentName: string; code: string; createdAt: number }>>([]);
  const [searchFilter, setSearchFilter] = useState("");

  // Tester state
  const [testName, setTestName] = useState("");
  const [testCode, setTestCode] = useState("");
  const [testResult, setTestResult] = useState<null | boolean>(null);

  useEffect(() => {
    if (isOpen && isUnlocked) {
      setHistory(getTeacherCodesHistory());
    }
  }, [isOpen, isUnlocked]);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === TEACHER_ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError("");
      setHistory(getTeacherCodesHistory());
    } else {
      setPinError("رمز المرور السري غير صحيح. يرجى إدخال PIN الصحيح المخصص للمعلمة جيداء صقر.");
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    const code = generateStudentCode(studentName.trim());
    setGeneratedCode(code);
    saveTeacherCodeToHistory(studentName.trim(), code);
    setHistory(getTeacherCodesHistory());
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const createWhatsAppShareUrl = (name: string, code: string) => {
    const text = `مرحباً ${name}،\nيسعد المعلمة جيداء صقر تزويدك بكود التفعيل الحصري الخاص بك لمنهاج:\n✨ MORE ENGLISH MORE LOVE ✨\n\n🔑 كود التفعيل: ${code}\n⏳ مدة الصلاحية: 6 أشهر كاملة (180 يوماً)\n\nرابط المنهاج: ${window.location.origin}\nنتمنى لك كل التميز والتفوق الدراسي! 🎓`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  const handleTestVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !testCode.trim()) return;
    const isValid = verifyStudentCode(testName.trim(), testCode.trim());
    setTestResult(isValid);
  };

  const filteredHistory = history.filter((item) =>
    item.studentName.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.code.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-black my-8 relative flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">بوابة المعلمة جيداء صقر</h3>
              <p className="text-xs text-amber-300 font-medium">نظام توليد وإدارة أكواد التفعيل الحصرية (180 يوماً)</p>
            </div>
          </div>
          <button
            id="close-admin-portal-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          {!isUnlocked ? (
            /* PIN Gate */
            <div className="max-w-md mx-auto py-6 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-amber-400">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">أدخل الرمز السري للمعلمة (PIN)</h4>
              <p className="text-xs text-slate-400 mb-6">
                هذه اللوحة خاصة بالمعلمة جيداء صقر فقط لتوليد أكواد التفعيل المعتمدة للطلاب.
              </p>

              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <input
                    id="admin-pin-input"
                    type="password"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError("");
                    }}
                    placeholder="رمز PIN السري"
                    className="w-full text-center tracking-widest text-lg font-mono bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    autoFocus
                  />
                </div>

                {pinError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{pinError}</span>
                  </div>
                )}

                <button
                  id="unlock-admin-btn"
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
                >
                  فتح لوحة التحكم
                </button>
              </form>
            </div>
          ) : (
            /* Unlocked Teacher Dashboard */
            <>
              {/* Generator Section */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>توليد كود تفعيل جديد باسم الطالب</span>
                </div>

                <form onSubmit={handleGenerate} className="space-y-4">
                  <div>
                    <label htmlFor="gen-student-name" className="block text-xs text-slate-300 font-medium mb-1">
                      اسم الطالب الكامل (رباعي أو ثلاثي):
                    </label>
                    <input
                      id="gen-student-name"
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="مثال: أحمد محمد علي حسن"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      dir="auto"
                      required
                    />
                  </div>

                  <button
                    id="generate-code-btn"
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>توليد كود التفعيل الحصري (MEML-XXXX-XXXX)</span>
                  </button>
                </form>

                {generatedCode && (
                  <div className="mt-4 p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40 text-center animate-fadeIn">
                    <p className="text-xs text-indigo-300 mb-1">كود التفعيل الرياضي المعتمد للطالب ({studentName}):</p>
                    <div className="text-xl sm:text-2xl font-mono font-black text-indigo-100 tracking-wider my-2 select-all bg-slate-950/80 py-2 px-4 rounded-lg border border-indigo-500/30">
                      {generatedCode}
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
                      <button
                        id="copy-generated-code-btn"
                        onClick={() => handleCopy(generatedCode)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? "تم النسخ بنجاح!" : "نسخ الكود"}</span>
                      </button>

                      <a
                        id="send-whatsapp-code-btn"
                        href={createWhatsAppShareUrl(studentName, generatedCode)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>إرسال للطالب عبر واتساب</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Code Tester Tool */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-300 font-bold text-xs mb-3">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>أداة فحص ومطابقة كود طالب للتأكد السريع</span>
                </div>
                <form onSubmit={handleTestVerify} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="اسم الطالب"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="الكود (MEML-XXXX-XXXX)"
                    value={testCode}
                    onChange={(e) => setTestCode(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-white uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-700 transition-colors"
                  >
                    فحص التطابق
                  </button>
                </form>

                {testResult !== null && (
                  <div className={`mt-2.5 p-2 rounded-lg text-xs font-medium flex items-center gap-2 ${testResult ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"}`}>
                    {testResult ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-red-400" />}
                    <span>{testResult ? "الكود صحيح ومتطابق 100% مع اسم الطالب!" : "الكود غير متطابق مع هذا الاسم."}</span>
                  </div>
                )}
              </div>

              {/* History Table */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                    <History className="w-4 h-4 text-amber-400" />
                    <span>سجل الأكواد التي تم توليدها مؤخراً ({history.length})</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="بحث بالاسم أو الكود..."
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg text-xs px-2.5 py-1 text-white pr-7"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-1.5 pointer-events-none" />
                  </div>
                </div>

                {filteredHistory.length === 0 ? (
                  <p className="text-xs text-slate-500 text-center py-4">لا توجد أكواد مسجلة تطابق البحث حالياً.</p>
                ) : (
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {filteredHistory.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between text-xs hover:border-slate-700 transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-white">{item.studentName}</p>
                          <p className="text-[11px] font-mono text-indigo-300">{item.code}</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleCopy(item.code)}
                            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                            title="نسخ الكود"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <a
                            href={createWhatsAppShareUrl(item.studentName, item.code)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-emerald-700/60 hover:bg-emerald-600 text-emerald-100 transition-colors"
                            title="إرسال عبر واتساب"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>هاتف المعلمة: {TEACHER_INFO.phone}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
