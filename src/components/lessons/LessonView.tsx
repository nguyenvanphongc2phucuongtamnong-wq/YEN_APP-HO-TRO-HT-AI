import React from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Lightbulb, Sparkles, HelpCircle, FlaskConical, FileQuestion } from 'lucide-react';
import { Lesson } from '../../types';
import { playSound } from '../../utils/audio';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onStartPractice: (lesson: Lesson) => void;
  onOpenLab?: (labId: string) => void;
  onAskAI?: (context: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onBack,
  onStartPractice,
  onOpenLab,
  onAskAI,
}) => {
  // Map lesson to corresponding lab if applicable
  const getRelatedLab = () => {
    if (lesson.id === 2 || lesson.id === 3) return { id: 'energy', name: 'Thí nghiệm: Bảo toàn cơ năng' };
    if (lesson.id === 5) return { id: 'refraction', name: 'Thí nghiệm: Khúc xạ ánh sáng' };
    if (lesson.id === 6 || lesson.id === 7 || lesson.id === 9) return { id: 'lens', name: 'Thí nghiệm: Quang học thấu kính' };
    if (lesson.id === 11 || lesson.id === 12 || lesson.id === 13) return { id: 'circuit', name: 'Thí nghiệm: Đoạn mạch điện & Định luật Ohm' };
    if (lesson.id === 14 || lesson.id === 15) return { id: 'induction', name: 'Thí nghiệm: Cảm ứng điện từ & Máy biến áp' };
    return null;
  };

  const relatedLab = getRelatedLab();

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh mục bài học
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
              Bài {lesson.id}
            </span>
            <span className="text-xs text-slate-400 font-medium">{lesson.pageRange}</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">
            {lesson.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">{lesson.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {relatedLab && onOpenLab && (
            <button
              onClick={() => {
                onOpenLab(relatedLab.id);
                playSound('click');
              }}
              className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <FlaskConical className="w-4 h-4" />
              Mở phòng thí nghiệm
            </button>
          )}

          <button
            onClick={() => {
              onStartPractice(lesson);
              playSound('click');
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            Luyện tập 20 câu hỏi
          </button>
        </div>
      </div>

      {/* Main Theory Content */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-6">
        {/* Core Concepts */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            1. Kiến thức trọng tâm cần ghi nhớ
          </h2>
          <div className="space-y-2.5">
            {lesson.summary.map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs md:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Formulas Box */}
        {lesson.formulas && lesson.formulas.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              2. Công thức Vật Lý cốt lõi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.formulas.map((fm, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-1"
                >
                  <div className="text-xs font-bold text-slate-800">{fm.name}</div>
                  <div className="font-mono text-sm font-bold text-indigo-700 bg-white/80 p-2 rounded-lg border border-indigo-100">
                    {fm.formula}
                  </div>
                  {fm.note && <div className="text-[11px] text-slate-500">{fm.note}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Illustrative Example */}
        {lesson.example && (
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileQuestion className="w-5 h-5 text-emerald-600" />
              3. Bài tập ví dụ điển hình & Lời giải
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm space-y-2">
              <div className="font-semibold text-slate-800">
                <span className="text-emerald-700 font-bold">Đề bài: </span>
                {lesson.example.problem}
              </div>
              <div className="pt-2 border-t border-slate-200 text-slate-700 leading-relaxed">
                <span className="text-blue-700 font-bold">Hướng dẫn giải: </span>
                {lesson.example.solution}
              </div>
            </div>
          </section>
        )}

        {/* AI Tutor Prompt CTA */}
        {onAskAI && (
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Chưa hiểu rõ bài này? Hãy hỏi Thầy giáo AI!
              </div>
              <div className="text-[11px] text-slate-600">
                Gia sư AI sẽ giải thích cặn kẽ với ví dụ minh họa và bài tập mẫu.
              </div>
            </div>
            <button
              onClick={() =>
                onAskAI(
                  `Thầy ơi, thầy tóm tắt và hướng dẫn các dạng bài tập hay thi của Bài ${lesson.id}: "${lesson.title}" giúp em với!`
                )
              }
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
            >
              Hỏi AI về bài học này
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
