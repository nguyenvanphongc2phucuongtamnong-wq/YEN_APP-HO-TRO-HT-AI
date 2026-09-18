import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Award, Lightbulb, Bookmark, HelpCircle } from 'lucide-react';
import { Question, Lesson } from '../../types';
import { getQuestionsByLesson } from '../../data/questionsData';
import { playSound } from '../../utils/audio';
import { saveLessonProgress, getLessonProgress } from '../../utils/storage';

interface PracticeViewProps {
  lesson: Lesson;
  onBack: () => void;
  onAskAI?: (context: string) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ lesson, onBack, onAskAI }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState<boolean[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Load questions for lesson
  useEffect(() => {
    const qList = getQuestionsByLesson(lesson.id);
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswers(new Array(qList.length).fill(null));
    setShowExplanation(new Array(qList.length).fill(false));
    setIsCompleted(false);
  }, [lesson.id]);

  if (questions.length === 0) {
    return <div className="p-8 text-center text-slate-500">Đang tải câu hỏi...</div>;
  }

  const currentQ = questions[currentIndex];
  const selected = selectedAnswers[currentIndex];
  const isAnswered = selected !== null;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered || isCompleted) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optIdx;
    setSelectedAnswers(newAnswers);

    const newExpl = [...showExplanation];
    newExpl[currentIndex] = true;
    setShowExplanation(newExpl);

    if (optIdx === currentQ.correctIndex) {
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };

  const handleNext = () => {
    playSound('click');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Complete practice session
      finishPractice();
    }
  };

  const handlePrev = () => {
    playSound('click');
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishPractice = () => {
    setIsCompleted(true);
    playSound('celebrate');

    // Calculate score
    let correctCount = 0;
    selectedAnswers.forEach((ans, idx) => {
      if (ans === questions[idx].correctIndex) {
        correctCount++;
      }
    });

    const score10 = Math.round((correctCount / questions.length) * 10 * 10) / 10;
    saveLessonProgress(lesson.id, score10);
  };

  const restartPractice = () => {
    const qList = getQuestionsByLesson(lesson.id);
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswers(new Array(qList.length).fill(null));
    setShowExplanation(new Array(qList.length).fill(false));
    setIsCompleted(false);
    playSound('reset');
  };

  // Stats calculation
  const totalCorrect = selectedAnswers.filter(
    (ans, idx) => ans === questions[idx]?.correctIndex
  ).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh mục bài học
          </button>
          <h1 className="text-xl font-bold text-slate-800">
            Luyện tập: Bài {lesson.id} - {lesson.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Ngân hàng 20 câu hỏi trắc nghiệm chuẩn KNTT có giải thích chi tiết
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
            Câu {currentIndex + 1} / {questions.length}
          </span>
          <button
            onClick={restartPractice}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            title="Luyện tập lại từ đầu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {!isCompleted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question & Answers on Left */}
          <div className="lg:col-span-8 space-y-4">
            {/* Question Box */}
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-5 md:p-6">
              <div className="flex justify-between items-center text-xs font-medium text-slate-400 mb-2">
                <span>Câu số {currentIndex + 1}</span>
                <span className="capitalize px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {currentQ.level === 'basic' ? 'Nhận biết' : currentQ.level === 'understanding' ? 'Thông hiểu' : 'Vận dụng'}
                </span>
              </div>
              <h2 className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
                {currentQ.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const letter = ['A', 'B', 'C', 'D'][idx];
                const isChosen = selected === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let optClass = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';
                if (isAnswered) {
                  if (isCorrect) {
                    optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold shadow-xs';
                  } else if (isChosen) {
                    optClass = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold';
                  } else {
                    optClass = 'bg-white border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-sm ${optClass}`}
                  >
                    <span className="font-bold text-blue-600 text-base leading-none shrink-0 mt-0.5">
                      {letter}.
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answered */}
            {isAnswered && (
              <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-xs leading-relaxed space-y-2 animate-fade-in">
                <div className="font-bold text-blue-900 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-blue-600" /> Lời giải thích chi tiết:
                  </span>
                  {onAskAI && (
                    <button
                      onClick={() =>
                        onAskAI(
                          `Giải thích kĩ hơn câu hỏi: "${currentQ.question}". Đáp án đúng là: "${
                            currentQ.options[currentQ.correctIndex]
                          }". Tại sao lại như vậy?`
                        )
                      }
                      className="text-[11px] text-indigo-700 hover:text-indigo-900 font-bold bg-indigo-100 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <HelpCircle className="w-3 h-3" /> Hỏi AI Tutor sâu hơn
                    </button>
                  )}
                </div>
                <p className="text-slate-700">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation Bar */}
            <div className="flex justify-between items-center pt-2">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Câu trước
              </button>

              <button
                disabled={!isAnswered}
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all shadow-xs flex items-center gap-1.5"
              >
                {currentIndex === questions.length - 1 ? 'Hoàn thành bài luyện' : 'Câu tiếp theo'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Question Navigator on Right */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-xs border border-slate-200 p-4 space-y-4 h-fit">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Mục lục câu hỏi (20 câu)
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                Đúng: {totalCorrect} / {questions.length}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const ans = selectedAnswers[idx];
                const isCur = idx === currentIndex;
                const isCorrect = ans !== null && ans === questions[idx].correctIndex;
                const isWrong = ans !== null && ans !== questions[idx].correctIndex;

                let btnClass = 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300';
                if (isCur) {
                  btnClass = 'border-blue-600 ring-2 ring-blue-500/30 text-blue-700 font-bold bg-blue-50';
                } else if (isCorrect) {
                  btnClass = 'bg-emerald-500 border-emerald-500 text-white font-bold';
                } else if (isWrong) {
                  btnClass = 'bg-rose-500 border-rose-500 text-white font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      playSound('click');
                    }}
                    className={`h-9 rounded-xl border text-xs transition-all flex items-center justify-center font-medium ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Completion Results Card */
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center max-w-xl mx-auto space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            Hoàn thành xuất sắc bài luyện tập!
          </h2>

          <p className="text-sm text-slate-500">
            Bạn đã trả lời đầy đủ 20 câu hỏi của {lesson.title}.
          </p>

          <div className="grid grid-cols-2 gap-4 py-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-400">Số câu đúng</div>
              <div className="text-2xl font-black text-emerald-600 mt-1">
                {totalCorrect} / {questions.length}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-400">Điểm số quy đổi</div>
              <div className="text-2xl font-black text-blue-600 mt-1">
                {((totalCorrect / questions.length) * 10).toFixed(1)} / 10
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={restartPractice}
              className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors"
            >
              Luyện tập lại
            </button>
            <button
              onClick={onBack}
              className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors shadow-xs"
            >
              Về trang danh mục bài học
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
