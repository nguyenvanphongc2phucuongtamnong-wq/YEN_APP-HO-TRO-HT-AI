import React, { useState, useEffect } from 'react';
import { Award, HelpCircle, Users, PhoneCall, RefreshCw, Volume2, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';
import { playSound } from '../../utils/audio';
import { ALL_QUESTIONS } from '../../data/questionsData';
import { shuffleQuestions } from '../../utils/shuffle';
import { Question } from '../../types';

const PRIZE_LADDER = [
  '200.000',
  '400.000',
  '600.000',
  '1.000.000',
  '2.000.000', // Mốc 1
  '3.000.000',
  '6.000.000',
  '10.000.000',
  '14.000.000',
  '22.000.000', // Mốc 2
  '30.000.000',
  '40.000.000',
  '60.000.000',
  '85.000.000',
  '150.000.000', // Về đích
];

export const MillionaireGame: React.FC = () => {
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(0); // 0 to 14
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);

  // Lifelines
  const [used5050, setUsed5050] = useState<boolean>(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [usedAudience, setUsedAudience] = useState<boolean>(false);
  const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
  const [usedCall, setUsedCall] = useState<boolean>(false);
  const [callAdvice, setCallAdvice] = useState<string | null>(null);
  const [usedSwitch, setUsedSwitch] = useState<boolean>(false);

  // Start / Restart Game
  const startNewGame = () => {
    // Pick 15 questions from question bank
    const shuffled = shuffleQuestions([...ALL_QUESTIONS]);
    setGameQuestions(shuffled.slice(0, 15));
    setCurrentLevel(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setGameOver(false);
    setHasWon(false);
    setUsed5050(false);
    setHiddenOptions([]);
    setUsedAudience(false);
    setAudienceVotes(null);
    setUsedCall(false);
    setCallAdvice(null);
    setUsedSwitch(false);
    playSound('start');
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const currentQ = gameQuestions[currentLevel];

  // Lifeline: 50/50
  const handle5050 = () => {
    if (used5050 || !currentQ || isAnswered) return;
    setUsed5050(true);
    playSound('lifeline');

    const wrongIndices = [0, 1, 2, 3].filter((idx) => idx !== currentQ.correctIndex);
    const shuffledWrong = wrongIndices.sort(() => Math.random() - 0.5);
    setHiddenOptions([shuffledWrong[0], shuffledWrong[1]]);
  };

  // Lifeline: Audience
  const handleAudience = () => {
    if (usedAudience || !currentQ || isAnswered) return;
    setUsedAudience(true);
    playSound('lifeline');

    // Generate biased distribution towards correctIndex
    const votes = [0, 0, 0, 0];
    const correctIdx = currentQ.correctIndex;
    const correctShare = 60 + Math.floor(Math.random() * 25); // 60-85%
    votes[correctIdx] = correctShare;
    let remaining = 100 - correctShare;
    const others = [0, 1, 2, 3].filter((i) => i !== correctIdx);
    votes[others[0]] = Math.floor(remaining * 0.5);
    votes[others[1]] = Math.floor(remaining * 0.3);
    votes[others[2]] = 100 - (votes[correctIdx] + votes[others[0]] + votes[others[1]]);
    setAudienceVotes(votes);
  };

  // Lifeline: Call Expert
  const handleCall = () => {
    if (usedCall || !currentQ || isAnswered) return;
    setUsedCall(true);
    playSound('lifeline');
    const letters = ['A', 'B', 'C', 'D'];
    setCallAdvice(
      `Thầy giáo Vật Lý: "Dựa trên định luật và công thức chuẩn, thầy chắc chắn đáp án đúng là ${letters[currentQ.correctIndex]}!"`
    );
  };

  // Lifeline: Switch Question
  const handleSwitch = () => {
    if (usedSwitch || isAnswered) return;
    setUsedSwitch(true);
    playSound('lifeline');

    // Find another unused question
    const remainingPool = ALL_QUESTIONS.filter((q) => !gameQuestions.some((gq) => gq.id === q.id));
    if (remainingPool.length > 0) {
      const newQ = remainingPool[Math.floor(Math.random() * remainingPool.length)];
      const updated = [...gameQuestions];
      updated[currentLevel] = newQ;
      setGameQuestions(updated);
      setHiddenOptions([]);
      setAudienceVotes(null);
      setCallAdvice(null);
    }
  };

  // Handle Answer Choice
  const handleSelectOption = (idx: number) => {
    if (isAnswered || gameOver || hasWon || hiddenOptions.includes(idx)) return;
    setSelectedOpt(idx);
    setIsAnswered(true);
    playSound('click');

    setTimeout(() => {
      if (idx === currentQ.correctIndex) {
        playSound('correct');
        if (currentLevel === 14) {
          // Won grand prize!
          setHasWon(true);
          playSound('celebrate');
        } else {
          // Next question after a delay
          setTimeout(() => {
            setCurrentLevel((prev) => prev + 1);
            setSelectedOpt(null);
            setIsAnswered(false);
            setHiddenOptions([]);
            setAudienceVotes(null);
            setCallAdvice(null);
          }, 1200);
        }
      } else {
        playSound('incorrect');
        setGameOver(true);
      }
    }, 1500);
  };

  if (!currentQ) {
    return <div className="p-8 text-center text-slate-500">Đang khởi tạo câu hỏi...</div>;
  }

  // Safe milestone prize
  const safePrize =
    currentLevel >= 10 ? PRIZE_LADDER[9] : currentLevel >= 5 ? PRIZE_LADDER[4] : '0';

  return (
    <div className="bg-slate-950 text-white rounded-2xl shadow-xl border border-slate-800 p-4 md:p-6 overflow-hidden">
      {/* Top Header & Lifelines */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            Gameshow Vật Lý 9
          </span>
          <h2 className="text-2xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            AI LÀ TRIỆU PHÚ VẬT LÝ
          </h2>
        </div>

        {/* 4 Lifelines */}
        <div className="flex items-center gap-2">
          <button
            disabled={used5050 || isAnswered || gameOver}
            onClick={handle5050}
            className={`px-3 py-1.5 rounded-xl font-black text-xs border transition-all ${
              used5050
                ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                : 'bg-indigo-950 text-indigo-300 border-indigo-600 hover:bg-indigo-900 shadow-md'
            }`}
            title="50:50 - Loại 2 phương án sai"
          >
            50:50
          </button>

          <button
            disabled={usedAudience || isAnswered || gameOver}
            onClick={handleAudience}
            className={`p-2 rounded-xl border transition-all ${
              usedAudience
                ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                : 'bg-sky-950 text-sky-300 border-sky-600 hover:bg-sky-900 shadow-md'
            }`}
            title="Hỏi ý kiến khán giả"
          >
            <Users className="w-4 h-4" />
          </button>

          <button
            disabled={usedCall || isAnswered || gameOver}
            onClick={handleCall}
            className={`p-2 rounded-xl border transition-all ${
              usedCall
                ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                : 'bg-emerald-950 text-emerald-300 border-emerald-600 hover:bg-emerald-900 shadow-md'
            }`}
            title="Gọi điện cho thầy giáo Vật Lý"
          >
            <PhoneCall className="w-4 h-4" />
          </button>

          <button
            disabled={usedSwitch || isAnswered || gameOver}
            onClick={handleSwitch}
            className={`p-2 rounded-xl border transition-all ${
              usedSwitch
                ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                : 'bg-purple-950 text-purple-300 border-purple-600 hover:bg-purple-900 shadow-md'
            }`}
            title="Đổi câu hỏi khác"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={startNewGame}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 border border-slate-700 hover:text-white transition-all ml-2"
            title="Chơi lại từ đầu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lifeline Advice Popups */}
      {audienceVotes && (
        <div className="mt-3 p-3 bg-sky-950/80 border border-sky-600 rounded-xl text-xs flex items-center justify-between animate-fade-in">
          <div className="font-bold text-sky-300 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Kết quả biểu quyết khán giả:
          </div>
          <div className="flex gap-4 font-mono font-bold text-sky-200">
            <span>A: {audienceVotes[0]}%</span>
            <span>B: {audienceVotes[1]}%</span>
            <span>C: {audienceVotes[2]}%</span>
            <span>D: {audienceVotes[3]}%</span>
          </div>
        </div>
      )}

      {callAdvice && (
        <div className="mt-3 p-3 bg-emerald-950/80 border border-emerald-600 rounded-xl text-xs flex items-center gap-2 text-emerald-200 animate-fade-in">
          <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{callAdvice}</span>
        </div>
      )}

      {/* Main Grid: Game Area on Left + Money Ladder on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Left: Active Question & 4 Answer Pods */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          {/* Question Box */}
          <div className="bg-gradient-to-b from-slate-900 to-blue-950/60 border-2 border-amber-500/60 rounded-2xl p-5 shadow-2xl relative">
            <div className="flex justify-between items-center text-xs text-amber-400 font-bold mb-2">
              <span>CÂU HỎI {currentLevel + 1} / 15</span>
              <span className="text-emerald-400 text-sm">{PRIZE_LADDER[currentLevel]} VNĐ</span>
            </div>
            <p className="text-base md:text-lg font-bold text-white leading-relaxed">
              {currentQ.question}
            </p>
          </div>

          {/* 4 Answers Hex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {currentQ.options.map((opt, idx) => {
              const letter = ['A', 'B', 'C', 'D'][idx];
              const isHidden = hiddenOptions.includes(idx);
              const isChosen = selectedOpt === idx;
              const isCorrect = isAnswered && idx === currentQ.correctIndex;
              const isWrong = isAnswered && isChosen && idx !== currentQ.correctIndex;

              if (isHidden) {
                return (
                  <div
                    key={idx}
                    className="h-16 rounded-xl border border-slate-900 bg-slate-950/40 opacity-20 pointer-events-none"
                  />
                );
              }

              let bgClass = 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200';
              if (isChosen && !isAnswered) {
                bgClass = 'bg-amber-600 border-amber-400 text-white animate-pulse';
              } else if (isAnswered) {
                if (isCorrect) {
                  bgClass = 'bg-emerald-600 border-emerald-300 text-white font-bold shadow-lg shadow-emerald-900/50';
                } else if (isWrong) {
                  bgClass = 'bg-rose-700 border-rose-400 text-white font-bold';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered || gameOver || hasWon}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-3.5 rounded-xl border-2 text-left text-xs md:text-sm transition-all duration-200 flex items-start gap-2.5 shadow-md ${bgClass}`}
                >
                  <span className="font-black text-amber-400 text-base leading-none shrink-0">
                    {letter}:
                  </span>
                  <span className="font-medium leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation if game over or won */}
          {(gameOver || hasWon) && (
            <div className={`mt-4 p-4 rounded-xl border ${hasWon ? 'bg-emerald-950 border-emerald-600 text-emerald-200' : 'bg-rose-950 border-rose-700 text-rose-200'} text-xs leading-relaxed`}>
              <div className="font-bold mb-1 text-sm flex items-center gap-1.5">
                {hasWon ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <AlertCircle className="w-5 h-5 text-rose-400" />}
                {hasWon ? 'XIN CHÚC MỪNG! BẠN ĐÃ TRỞ THÀNH TRIỆU PHÚ VẬT LÝ!' : 'RẤT TIẾC, CÂU TRẢ LỜI CHƯA CHÍNH XÁC!'}
              </div>
              <p className="mt-1">{currentQ.explanation}</p>
              <div className="mt-2 font-bold text-amber-300">
                Tiền thưởng đạt được: {hasWon ? '150.000.000' : safePrize} VNĐ
              </div>
            </div>
          )}
        </div>

        {/* Right: Money Ladder (15 to 1) */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-3 flex flex-col justify-between">
          <div className="text-center font-bold text-xs text-slate-400 pb-2 border-b border-slate-800 uppercase tracking-wider">
            Thang tiền thưởng
          </div>

          <div className="flex flex-col-reverse gap-1 py-1">
            {PRIZE_LADDER.map((prize, idx) => {
              const isCurrent = idx === currentLevel;
              const isPassed = idx < currentLevel;
              const isMilestone = idx === 4 || idx === 9 || idx === 14;

              let itemStyle = 'text-slate-400 bg-transparent';
              if (isCurrent) {
                itemStyle = 'bg-amber-500 text-slate-950 font-black scale-105 shadow-md rounded-lg';
              } else if (isPassed) {
                itemStyle = 'text-emerald-400 font-semibold';
              } else if (isMilestone) {
                itemStyle = 'text-amber-300 font-bold bg-amber-950/30 rounded-lg';
              }

              return (
                <div
                  key={idx}
                  className={`flex justify-between items-center px-3 py-1 text-xs transition-all ${itemStyle}`}
                >
                  <span className="font-mono w-6">{idx + 1}</span>
                  <span className="font-bold tracking-wider">{prize} đ</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
