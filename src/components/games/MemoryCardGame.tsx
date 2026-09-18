import React, { useState, useEffect } from 'react';
import { RotateCcw, Award, Sparkles, Clock, Layers } from 'lucide-react';
import { playSound } from '../../utils/audio';

interface CardItem {
  id: number;
  pairId: number;
  content: string;
  type: 'formula' | 'meaning';
  isFlipped: boolean;
  isMatched: boolean;
}

const FORMULA_PAIRS = [
  { id: 1, formula: 'I = U / R', meaning: 'Định luật Ohm' },
  { id: 2, formula: 'Q = I²·R·t', meaning: 'Định luật Joule - Lenz' },
  { id: 3, formula: 'P = U·I', meaning: 'Công suất điện' },
  { id: 4, formula: 'A = P·t = U·I·t', meaning: 'Điện năng tiêu thụ' },
  { id: 5, formula: '1/f = 1/d + 1/d\'', meaning: 'Công thức thấu kính' },
  { id: 6, formula: 'D = 1/f (m)', meaning: 'Độ tụ thấu kính (dp)' },
  { id: 7, formula: 'W_đ = ½ m·v²', meaning: 'Động năng cơ học' },
  { id: 8, formula: 'W_t = m·g·h', meaning: 'Thế năng trọng trường' },
  { id: 9, formula: 'n₁·sin(i) = n₂·sin(r)', meaning: 'Định luật khúc xạ ánh sáng' },
  { id: 10, formula: 'U₁ / U₂ = N₁ / N₂', meaning: 'Máy biến áp lý tưởng' },
];

export const MemoryCardGame: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);

  // Initialize Game
  const initGame = () => {
    // Select 8 pairs for a 16-card clean grid
    const selectedPairs = FORMULA_PAIRS.slice(0, 8);
    const cardDeck: CardItem[] = [];

    selectedPairs.forEach((pair) => {
      cardDeck.push({
        id: Math.random(),
        pairId: pair.id,
        content: pair.formula,
        type: 'formula',
        isFlipped: false,
        isMatched: false,
      });
      cardDeck.push({
        id: Math.random(),
        pairId: pair.id,
        content: pair.meaning,
        type: 'meaning',
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle deck
    const shuffled = cardDeck.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedIndices([]);
    setMoves(0);
    setMatchedPairs(0);
    setTimerSeconds(0);
    setIsGameActive(true);
    setIsGameCompleted(false);
    playSound('start');
  };

  useEffect(() => {
    initGame();
  }, []);

  // Timer effect
  useEffect(() => {
    if (!isGameActive || isGameCompleted) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isGameActive, isGameCompleted]);

  // Flip logic
  const handleCardClick = (index: number) => {
    if (
      !isGameActive ||
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedIndices.length >= 2
    ) {
      return;
    }

    playSound('cardFlip');
    const newFlipped = [...flippedIndices, index];

    // Flip this card
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);
    setFlippedIndices(newFlipped);

    // If 2 cards flipped, check match
    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstIdx, secondIdx] = newFlipped;
      const card1 = updatedCards[firstIdx];
      const card2 = updatedCards[secondIdx];

      if (card1.pairId === card2.pairId && card1.type !== card2.type) {
        // Matched!
        setTimeout(() => {
          playSound('correct');
          const matchedCards = [...updatedCards];
          matchedCards[firstIdx].isMatched = true;
          matchedCards[secondIdx].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatchedPairs((prev) => {
            const next = prev + 1;
            if (next === 8) {
              setIsGameCompleted(true);
              playSound('celebrate');
            }
            return next;
          });
        }, 500);
      } else {
        // Not matched -> Flip back
        setTimeout(() => {
          playSound('incorrect');
          const resetCards = [...updatedCards];
          resetCards[firstIdx].isFlipped = false;
          resetCards[secondIdx].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
            Trò chơi ôn luyện 2
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Thẻ Nhớ Công Thức (Memory Cards)
          </h2>
          <p className="text-sm text-slate-500">
            Lật và ghép đôi công thức Vật Lý với ý nghĩa / định luật tương ứng
          </p>
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-700">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{formatTime(timerSeconds)}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-700">
            <Layers className="w-4 h-4 text-purple-600" />
            <span>Lượt lật: {moves}</span>
          </div>

          <button
            onClick={initGame}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Bắt đầu lại ván mới"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards 4x4 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-6">
        {cards.map((card, idx) => {
          const isOpen = card.isFlipped || card.isMatched;

          return (
            <button
              key={idx}
              disabled={isOpen}
              onClick={() => handleCardClick(idx)}
              className={`h-24 md:h-28 rounded-2xl border-2 p-3 flex items-center justify-center text-center font-bold transition-all duration-300 transform perspective-1000 ${
                card.isMatched
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800 shadow-xs scale-95 opacity-85'
                  : isOpen
                  ? card.type === 'formula'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-md font-mono text-sm md:text-base'
                    : 'bg-purple-50 border-purple-500 text-purple-900 shadow-md text-xs md:text-sm'
                  : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-amber-400 hover:scale-[1.02] shadow-md hover:border-amber-400/50 cursor-pointer'
              }`}
            >
              {isOpen ? (
                <div>
                  <div className="text-[10px] font-normal uppercase tracking-wider mb-1 opacity-70">
                    {card.type === 'formula' ? 'Công thức' : 'Định luật / Khái niệm'}
                  </div>
                  <div>{card.content}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  <span className="text-[11px] font-mono tracking-widest text-slate-300">VẬT LÝ 9</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Win Celebration Banner */}
      {isGameCompleted && (
        <div className="mt-6 p-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-300" />
              XUẤT SẮC! BẠN ĐÃ GHÉP THÀNH CÔNG TẤT CẢ CÔNG THỨC!
            </h3>
            <p className="text-xs text-emerald-100 mt-1">
              Thời gian hoàn thành: {formatTime(timerSeconds)} | Tổng số lượt mở: {moves} lượt.
            </p>
          </div>
          <button
            onClick={initGame}
            className="px-5 py-2.5 bg-white text-emerald-800 font-bold text-xs rounded-xl shadow-md hover:bg-emerald-50 transition-all shrink-0"
          >
            Chơi lại ván khác
          </button>
        </div>
      )}
    </div>
  );
};
