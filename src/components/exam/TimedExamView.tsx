import React, { useState, useEffect, useRef } from 'react';
import { Clock, Flag, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, RotateCcw, Award, FileText, Check, X } from 'lucide-react';
import { Question, ExamResult } from '../../types';
import { getQuiz15Questions, getExam45Questions } from '../../data/questionsData';
import { playSound } from '../../utils/audio';
import { saveExamResult } from '../../utils/storage';

interface TimedExamViewProps {
  examType: 'quiz15' | 'exam45_hk1' | 'exam45_hk2';
  onBack: () => void;
  onAskAI?: (context: string) => void;
}

export const TimedExamView: React.FC<TimedExamViewProps> = ({ examType, onBack, onAskAI }) => {
  const is15Min = examType === 'quiz15';
  const totalDuration = is15Min ? 15 * 60 : 45 * 60; // in seconds

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [flagged, setFlagged] = useState<boolean[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(totalDuration);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [finalResult, setFinalResult] = useState<ExamResult | null>(null);

  const timerRef = useRef<number | null>(null);

  // Initialize test
  useEffect(() => {
    let qList: Question[] = [];
    if (examType === 'quiz15') {
      qList = getQuiz15Questions();
    } else if (examType === 'exam45_hk1') {
      qList = getExam45Questions('hk1');
    } else {
      qList = getExam45Questions('hk2');
    }

    setQuestions(qList);
    setUserAnswers(new Array(qList.length).fill(null));
    setFlagged(new Array(qList.length).fill(false));
    setTimeLeft(totalDuration);
    setIsSubmitted(false);
    setCurrentIndex(0);
    playSound('start');
  }, [examType]);

  // Timer interval
  useEffect(() => {
    if (isSubmitted) return;

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
          return 0;
        }
        if (prev === 60) {
          playSound('timerUrgent');
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSubmitted]);

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    playSound('click');
    const updated = [...userAnswers];
    updated[currentIndex] = idx;
    setUserAnswers(updated);
  };

  const toggleFlag = (idx: number) => {
    playSound('click');
    const updated = [...flagged];
    updated[idx] = !updated[idx];
    setFlagged(updated);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    if (timerRef.current) clearInterval(timerRef.current);

    let correct = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === questions[idx]?.correctIndex) {
        correct++;
      }
    });

    const score = Math.round((correct / questions.length) * 10 * 10) / 10;
    const timeSpent = totalDuration - timeLeft;

    const result: ExamResult = {
      id: 'exam_' + Date.now(),
      type: is15Min ? '15min' : '45min',
      score,
      totalQuestions: questions.length,
      correctCount: correct,
      date: new Date().toISOString(),
      durationSeconds: timeSpent,
    };

    saveExamResult(result);
    setFinalResult(result);
    setIsSubmitted(true);
    setShowConfirmModal(false);
    playSound('celebrate');
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const answeredCount = userAnswers.filter((a) => a !== null).length;
  const currentQ = questions[currentIndex];

  if (questions.length === 0) {
    return <div className="p-8 text-center text-slate-500">Đang tạo đề thi chuẩn...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Banner / Exam HUD */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-4 md:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Rời khỏi phòng thi
          </button>
          <h1 className="text-xl font-bold text-slate-800">
            {is15Min
              ? 'Kiểm tra 15 phút - Trắc nghiệm Vật Lý 9'
              : examType === 'exam45_hk1'
              ? 'Đề thi thử Học Kỳ 1 (45 phút) - KNTT'
              : 'Đề thi thử Học Kỳ 2 (45 phút) - KNTT'}
          </h1>
          <p className="text-xs text-slate-500">
            Tổng số: {questions.length} câu | Đã làm: {answeredCount}/{questions.length} câu
          </p>
        </div>

        {/* Countdown & Submit Button */}
        <div className="flex items-center gap-3">
          {!isSubmitted && (
            <div
              className={`px-4 py-2 rounded-xl flex items-center gap-2 font-mono font-bold text-sm ${
                timeLeft < 300
                  ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse'
                  : 'bg-slate-100 text-slate-800 border border-slate-200'
              }`}
            >
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}

          {!isSubmitted ? (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
            >
              Nộp bài thi
            </button>
          ) : (
            <button
              onClick={onBack}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
            >
              Xem danh mục bài thi
            </button>
          )}
        </div>
      </div>

      {/* Main Container */}
      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question View on Left */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-5 md:p-6">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                <span className="font-bold text-blue-600">Câu {currentIndex + 1} / {questions.length}</span>
                <button
                  onClick={() => toggleFlag(currentIndex)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    flagged[currentIndex]
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flagged[currentIndex] ? 'fill-amber-600 text-amber-600' : ''}`} />
                  {flagged[currentIndex] ? 'Đã gắn cờ xem lại' : 'Gắn cờ xem lại'}
                </button>
              </div>

              <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
                {currentQ.question}
              </p>
            </div>

            {/* Answer Choices */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = userAnswers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-sm ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="font-bold text-blue-600 text-base leading-none shrink-0 mt-0.5">
                      {['A', 'B', 'C', 'D'][idx]}.
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Next / Prev buttons */}
            <div className="flex justify-between items-center pt-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Câu trước
              </button>

              <button
                disabled={currentIndex === questions.length - 1}
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all shadow-xs flex items-center gap-1.5"
              >
                Câu tiếp theo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Grid Sidebar on Right */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-xs border border-slate-200 p-4 space-y-4 h-fit">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Bảng điều hướng câu hỏi
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {answeredCount}/{questions.length}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const isAnswered = userAnswers[idx] !== null;
                const isCurrent = idx === currentIndex;
                const isFlagged = flagged[idx];

                let btnClass = 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300';
                if (isCurrent) {
                  btnClass = 'border-blue-600 ring-2 ring-blue-500/30 text-blue-700 font-bold bg-blue-50';
                } else if (isFlagged) {
                  btnClass = 'bg-amber-100 border-amber-400 text-amber-900 font-bold';
                } else if (isAnswered) {
                  btnClass = 'bg-emerald-600 border-emerald-600 text-white font-semibold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      playSound('click');
                    }}
                    className={`h-9 rounded-xl border text-xs transition-all flex items-center justify-center font-medium relative ${btnClass}`}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block" />
                <span>Đã trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-100 border border-amber-400 inline-block" />
                <span>Gắn cờ xem lại</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-200 inline-block" />
                <span>Chưa trả lời</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Results & Full Detailed Review */
        <div className="space-y-6 animate-fade-in">
          {/* Summary Score Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              Kết Quả Bài Thi
            </h2>

            <div className="text-5xl font-black text-blue-600 font-mono">
              {finalResult?.score} <span className="text-xl text-slate-400 font-normal">/ 10</span>
            </div>

            <div className="grid grid-cols-3 gap-3 py-2 text-xs">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800">
                <div className="text-slate-500 mb-0.5">Số câu đúng</div>
                <div className="text-lg font-bold text-emerald-600">
                  {finalResult?.correctCount} / {questions.length}
                </div>
              </div>

              <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-rose-800">
                <div className="text-slate-500 mb-0.5">Số câu sai / bỏ</div>
                <div className="text-lg font-bold text-rose-600">
                  {questions.length - (finalResult?.correctCount || 0)}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-800">
                <div className="text-slate-500 mb-0.5">Thời gian làm</div>
                <div className="text-lg font-bold text-slate-700">
                  {formatTime(finalResult?.durationSeconds || 0)}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-5 h-5 text-blue-600" />
              Chi tiết bài làm và đáp án đúng:
            </h3>

            <div className="space-y-4">
              {questions.map((q, qIdx) => {
                const userAns = userAnswers[qIdx];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div
                    key={qIdx}
                    className={`p-4 rounded-2xl border ${
                      isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                    } text-xs space-y-2`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-slate-800 text-sm flex items-start gap-2">
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-xs shrink-0">
                          Câu {qIdx + 1}
                        </span>
                        <span>{q.question}</span>
                      </div>
                      {isCorrect ? (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1 shrink-0">
                          <Check className="w-3.5 h-3.5" /> Đúng
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold flex items-center gap-1 shrink-0">
                          <X className="w-3.5 h-3.5" /> Sai
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
                      <div>
                        <span className="font-semibold text-slate-500">Bạn chọn: </span>
                        <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>
                          {userAns !== null ? `${['A', 'B', 'C', 'D'][userAns]}. ${q.options[userAns]}` : 'Chưa chọn'}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-500">Đáp án chuẩn: </span>
                        <span className="text-emerald-700 font-bold">
                          {['A', 'B', 'C', 'D'][q.correctIndex]}. {q.options[q.correctIndex]}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-600 text-[11px] leading-relaxed">
                      <strong className="text-slate-800">Giải thích: </strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-800">Xác nhận nộp bài?</h3>

            <p className="text-xs text-slate-500 leading-relaxed">
              Bạn đã trả lời <strong className="text-slate-800">{answeredCount}/{questions.length}</strong> câu hỏi.
              {answeredCount < questions.length && (
                <span className="text-rose-600 block mt-1 font-semibold">
                  Còn {questions.length - answeredCount} câu chưa chọn đáp án!
                </span>
              )}
            </p>

            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Tiếp tục làm
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
              >
                Đồng ý nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
