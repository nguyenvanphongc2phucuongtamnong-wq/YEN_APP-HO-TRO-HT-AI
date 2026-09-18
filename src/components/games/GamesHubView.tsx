import React, { useState } from 'react';
import { Award, Layers, Zap } from 'lucide-react';
import { MillionaireGame } from './MillionaireGame';
import { MemoryCardGame } from './MemoryCardGame';
import { SpeedRacingGame } from './SpeedRacingGame';
import { playSound } from '../../utils/audio';

export const GamesHubView: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'millionaire' | 'memory' | 'speed'>('millionaire');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Game Selector Tabs */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-2 flex gap-2">
        <button
          onClick={() => {
            setActiveGame('millionaire');
            playSound('click');
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeGame === 'millionaire'
              ? 'bg-amber-500 text-slate-950 shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Ai Là Triệu Phú (15 câu)</span>
        </button>

        <button
          onClick={() => {
            setActiveGame('memory');
            playSound('click');
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeGame === 'memory'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Thẻ Nhớ Công Thức</span>
        </button>

        <button
          onClick={() => {
            setActiveGame('speed');
            playSound('click');
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeGame === 'speed'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Đua Tốc Độ 60s</span>
        </button>
      </div>

      {/* Active Game Component */}
      <div>
        {activeGame === 'millionaire' && <MillionaireGame />}
        {activeGame === 'memory' && <MemoryCardGame />}
        {activeGame === 'speed' && <SpeedRacingGame />}
      </div>
    </div>
  );
};
