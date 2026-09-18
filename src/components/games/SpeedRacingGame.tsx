import React, { useState, useEffect, useRef } from 'react';
import { Gauge, Zap, Flame, Award, RotateCcw, Play, CheckCircle, XCircle } from 'lucide-react';
import { playSound } from '../../utils/audio';
import { ALL_QUESTIONS } from '../../data/questionsData';
import { shuffleQuestions } from '../../utils/shuffle';
import { Question } from '../../types';

export const SpeedRacingGame: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [speedKmh, setSpeedKmh] = useState<number>(0); // 0 to 200 km/h
  const [highScore, setHighScore] = useState<number>(() => {
    return Number(localStorage.getItem('vatly9_speed_highscore') || 0);
  });

  const [questionPool, setQuestionPool] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const timerRef = useRef<number | null>(null);

  // Start game
  const startGame = () => {
    const shuffled = shuffleQuestions([...ALL_QUESTIONS]);
    setQuestionPool(shuffled);
    setCurrentIndex(0);
    setTimeLeft(60);
    setCurrentScore(0);
    setCombo(0);
    setSpeedKmh(40);
    setFeedback(null);
    setIsPlaying(true);
    playSound('start');
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsPlaying(false);
          playSound('celebrate');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Update high score
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('vatly9_speed_highscore', currentScore.toString());
    }
  }, [currentScore, highScore]);

  const currentQ = questionPool[currentIndex];

  const handleAnswer = (optionIdx: number) => {
    if (!isPlaying || !currentQ || feedback !== null) return;

    if (optionIdx === currentQ.correctIndex) {
      // Correct!
      playSound('correct');
      setFeedback('correct');
      const newCombo = combo + 1;
      setCombo(newCombo);
      const points = 100 * (1 + newCombo * 0.2);
      setCurrentScore((prev) => Math.round(prev + points));
      setSpeedKmh((prev) => Math.min(220, prev + 15 + newCombo * 5));

      setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev) => (prev + 1) % questionPool.length);
      }, 350);
    } else {
      // Wrong!
      playSound('incorrect');
      setFeedback('wrong');
      setCombo(0);
      setSpeedKmh((prev) => Math.max(20, prev - 30));

      setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev) => (prev + 1) % questionPool.length);
      }, 500);
    }
  };

  return (
    <div className="bg-slate-950 text-white rounded-2xl shadow-xl border border-slate-800 p-4 md:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
            Đua Tốc Độ 60 Giây
          </span>
          <h2 className="text-2xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
            SPEED PHYSICS BLITZ
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Kỷ lục: {highScore} điểm</span>
          </div>

          <button
            onClick={startGame}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 border border-slate-700 hover:text-white transition-all"
            title="Chơi lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Game Screen */}
      {!isPlaying && timeLeft === 60 ? (
        /* Welcome start screen */
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-900/40 mb-4 animate-bounce">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Thử Thách Phản Xạ Vật Lý Nhanh</h3>
          <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
            Trả lời thật nhanh và chính xác các câu hỏi trong vòng 60 giây. Mỗi chuỗi trả lời đúng liên tiếp sẽ tăng tốc độ xe và kích hoạt Nitro điểm thưởng Combo!
          </p>
          <button
            onClick={startGame}
            className="px-8 py-3.5 bg-gradient-to-r from-rose-600 to-amber-600 text-white font-black text-sm rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            BẮT ĐẦU ĐUA NGAY
          </button>
        </div>
      ) : !isPlaying && timeLeft === 0 ? (
        /* Game Over Screen */
        <div className="py-10 flex flex-col items-center justify-center text-center animate-fade-in">
          <Award className="w-16 h-16 text-amber-400 mb-3" />
          <h3 className="text-2xl font-black text-white mb-1">HẾT GIỜ!</h3>
          <p className="text-sm text-slate-400 mb-4">Bạn đã hoàn thành chặng đua 60 giây.</p>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm mb-6">
            <div className="text-xs text-slate-400 mb-1">Điểm số chung cuộc:</div>
            <div className="text-4xl font-black text-amber-400 font-mono">{currentScore}</div>
            <div className="text-xs text-slate-500 mt-2">Vận tốc cao nhất đạt: {speedKmh} km/h</div>
          </div>

          <button
            onClick={startGame}
            className="px-8 py-3 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Đua Lại Chặng Mới
          </button>
        </div>
      ) : (
        /* Active Game HUD */
        <div className="mt-4">
          {/* Dashboard HUD: Speedometer & Timer & Score */}
          <div className="grid grid-cols-3 gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl mb-4">
            {/* Speedometer */}
            <div className="flex flex-col items-center justify-center border-r border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-rose-400" />
                Vận tốc
              </div>
              <div className="text-2xl font-black text-rose-400 font-mono mt-0.5">
                {speedKmh} <span className="text-xs text-slate-400 font-normal">km/h</span>
              </div>
            </div>

            {/* Time Left */}
            <div className="flex flex-col items-center justify-center border-r border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                Thời gian còn lại
              </div>
              <div className={`text-2xl font-black font-mono mt-0.5 ${timeLeft <= 10 ? 'text-rose-500 animate-ping' : 'text-cyan-400'}`}>
                {timeLeft}s
              </div>
            </div>

            {/* Score & Combo */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1">
                {combo >= 2 && <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />}
                Điểm {combo >= 2 && `(Combo x${combo})`}
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
                {currentScore}
              </div>
            </div>
          </div>

          {/* Active Question Box */}
          {currentQ && (
            <div className={`p-5 rounded-2xl border-2 transition-all relative ${
              feedback === 'correct'
                ? 'bg-emerald-950/60 border-emerald-500'
                : feedback === 'wrong'
                ? 'bg-rose-950/60 border-rose-500'
                : 'bg-slate-900 border-slate-800'
            }`}>
              <p className="text-base md:text-lg font-bold text-white leading-relaxed">
                {currentQ.question}
              </p>

              {/* 4 Answers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    disabled={feedback !== null}
                    onClick={() => handleAnswer(idx)}
                    className="p-3.5 rounded-xl border-2 border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-amber-400 text-left text-xs md:text-sm font-medium transition-all active:scale-[0.99] flex items-start gap-2 text-slate-200"
                  >
                    <span className="font-bold text-amber-400">
                      {['A', 'B', 'C', 'D'][idx]}:
                    </span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
