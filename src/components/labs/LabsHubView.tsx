import React, { useState } from 'react';
import { FlaskConical, Compass, Eye, Zap, Flame, Cpu } from 'lucide-react';
import { RefractionLab } from './RefractionLab';
import { LensLab } from './LensLab';
import { CircuitLab } from './CircuitLab';
import { EnergyLab } from './EnergyLab';
import { InductionLab } from './InductionLab';
import { playSound } from '../../utils/audio';

interface LabsHubViewProps {
  initialLabId?: string;
}

const LABS_CONFIG = [
  {
    id: 'refraction',
    name: 'Khúc xạ ánh sáng',
    desc: 'Định luật khúc xạ Snell, chiết suất và hiện tượng phản xạ toàn phần',
    icon: Compass,
    color: 'bg-blue-500',
  },
  {
    id: 'lens',
    name: 'Quang học thấu kính',
    desc: 'Thấu kính hội tụ, phân kỳ, đường truyền tia sáng và phương pháp Silbermann',
    icon: Eye,
    color: 'bg-emerald-500',
  },
  {
    id: 'circuit',
    name: 'Đoạn mạch & Định luật Ohm',
    desc: 'Mạch nối tiếp, song song, tính điện trở tương đương và đo I, U',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    id: 'energy',
    name: 'Bảo toàn cơ năng',
    desc: 'Con lắc đơn, tàu lượn siêu tốc và sự chuyển hóa giữa Động năng - Thế năng',
    icon: Flame,
    color: 'bg-indigo-500',
  },
  {
    id: 'induction',
    name: 'Cảm ứng điện từ & Máy biến áp',
    desc: 'Thí nghiệm nam châm Faraday, dòng điện xoay chiều và nguyên lý máy biến áp',
    icon: Cpu,
    color: 'bg-cyan-500',
  },
];

export const LabsHubView: React.FC<LabsHubViewProps> = ({ initialLabId = 'refraction' }) => {
  const [activeLabId, setActiveLabId] = useState<string>(initialLabId);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Labs Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-2 overflow-x-auto no-scrollbar flex gap-2">
        {LABS_CONFIG.map((lab) => {
          const Icon = lab.icon;
          const isActive = activeLabId === lab.id;

          return (
            <button
              key={lab.id}
              onClick={() => {
                setActiveLabId(lab.id);
                playSound('click');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{lab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Render Selected Lab Component */}
      <div className="transition-all duration-200">
        {activeLabId === 'refraction' && <RefractionLab />}
        {activeLabId === 'lens' && <LensLab />}
        {activeLabId === 'circuit' && <CircuitLab />}
        {activeLabId === 'energy' && <EnergyLab />}
        {activeLabId === 'induction' && <InductionLab />}
      </div>
    </div>
  );
};
