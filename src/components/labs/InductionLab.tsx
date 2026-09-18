import React, { useState, useEffect } from 'react';
import { RotateCcw, Zap, ArrowRightLeft, Cpu } from 'lucide-react';
import { playSound } from '../../utils/audio';

export const InductionLab: React.FC = () => {
  const [labSubMode, setLabSubMode] = useState<'faraday' | 'transformer'>('faraday');

  // Faraday mode states
  const [magnetPos, setMagnetPos] = useState<number>(100); // 0 (far left) to 250 (inside coil)
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [moveDirection, setMoveDirection] = useState<'in' | 'out' | 'idle'>('idle');
  const [coilTurns, setCoilTurns] = useState<number>(4); // 2 to 6 loops
  const [galvanometerDeflection, setGalvanometerDeflection] = useState<number>(0); // -45 to +45 deg

  // Transformer mode states
  const [u1, setU1] = useState<number>(220); // V
  const [n1, setN1] = useState<number>(1000); // turns
  const [n2, setN2] = useState<number>(200); // turns

  // Transformer calculation: U2 = U1 * (N2 / N1)
  const u2 = (u1 * n2) / n1;
  const isStepUp = n2 > n1;

  // Move magnet animation
  const moveMagnet = (direction: 'in' | 'out') => {
    setIsMoving(true);
    setMoveDirection(direction);
    playSound('whoosh');

    const targetPos = direction === 'in' ? 240 : 80;
    const speed = direction === 'in' ? 1 : -1;
    const deflection = direction === 'in' ? 35 : -35;
    setGalvanometerDeflection(deflection);

    let current = magnetPos;
    const interval = setInterval(() => {
      current += speed * 8;
      if ((direction === 'in' && current >= targetPos) || (direction === 'out' && current <= targetPos)) {
        clearInterval(interval);
        setMagnetPos(targetPos);
        setIsMoving(false);
        setMoveDirection('idle');
        setGalvanometerDeflection(0);
      } else {
        setMagnetPos(current);
      }
    }, 20);
  };

  const resetFaraday = () => {
    setMagnetPos(100);
    setIsMoving(false);
    setMoveDirection('idle');
    setGalvanometerDeflection(0);
    playSound('reset');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
            Thí nghiệm ảo 5
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Cảm ứng điện từ & Máy biến áp
          </h2>
          <p className="text-sm text-slate-500">
            Khảo sát định luật cảm ứng Faraday và nguyên lý biến đổi điện áp của máy biến áp
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex gap-1 text-xs font-medium">
            <button
              onClick={() => {
                setLabSubMode('faraday');
                playSound('click');
              }}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                labSubMode === 'faraday' ? 'bg-white text-slate-800 shadow-xs font-bold' : 'text-slate-600'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Thí nghiệm Faraday
            </button>
            <button
              onClick={() => {
                setLabSubMode('transformer');
                playSound('click');
              }}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                labSubMode === 'transformer' ? 'bg-cyan-600 text-white font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Máy biến áp (U₁/U₂ = N₁/N₂)
            </button>
          </div>

          <button
            onClick={resetFaraday}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Đặt lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode 1: Faraday Induction */}
      {labSubMode === 'faraday' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
          {/* Canvas Viewport */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950 rounded-2xl p-4 relative overflow-hidden shadow-inner border border-slate-800">
            <svg viewBox="0 0 540 320" className="w-full max-w-xl h-auto select-none">
              {/* Circuit Wires connecting coil to galvanometer */}
              <path
                d="M 280 120 C 350 120, 390 150, 420 180"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="3"
              />
              <path
                d="M 280 200 C 350 200, 390 230, 420 200"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="3"
              />

              {/* COIL (Cuộn dây dẫn kín) around x = 260 */}
              <g transform="translate(240, 100)">
                {Array.from({ length: coilTurns }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx={i * 20}
                    cy={60}
                    rx="12"
                    ry="45"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="5"
                    opacity="0.9"
                  />
                ))}
                <text x="20" y="130" fill="#fcd34d" fontSize="11" fontWeight="bold">
                  Cuộn dây kín ({coilTurns} vòng)
                </text>
              </g>

              {/* BAR MAGNET (Thanh nam châm) at (magnetPos, 130) */}
              <g transform={`translate(${magnetPos}, 140)`}>
                {/* South pole (S - Xanh) */}
                <rect x="-70" y="-20" width="40" height="40" rx="3" fill="#0284c7" />
                <text x="-50" y="5" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                  S
                </text>
                {/* North pole (N - Đỏ) */}
                <rect x="-30" y="-20" width="40" height="40" rx="3" fill="#dc2626" />
                <text x="-10" y="5" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                  N
                </text>
                {/* Magnet magnetic field lines hint */}
                <path
                  d="M -10 -25 C 20 -40, 20 40, -10 25"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                  opacity="0.6"
                />
              </g>

              {/* GALVANOMETER G (Điện kế kim) at (440, 190) */}
              <g transform="translate(440, 190)">
                {/* Meter dial */}
                <circle cx="0" cy="0" r="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
                {/* Dial ticks */}
                <line x1="-25" y1="-15" x2="-20" y2="-10" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="0" y1="-30" x2="0" y2="-22" stroke="#ef4444" strokeWidth="2" />
                <line x1="25" y1="-15" x2="20" y2="-10" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="0" y="-12" fill="#94a3b8" fontSize="9" textAnchor="middle">
                  0
                </text>
                <text x="0" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                  G
                </text>
                {/* Needle with rotation */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-32"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  transform={`rotate(${galvanometerDeflection})`}
                  style={{ transition: 'transform 0.1s ease-out' }}
                />
                <circle cx="0" cy="0" r="3" fill="#fff" />
              </g>

              {/* Light Bulb (Đèn LED cảm ứng) at (360, 75) */}
              <g transform="translate(360, 75)">
                <circle
                  cx="0"
                  cy="0"
                  r="16"
                  fill={isMoving ? '#fde047' : '#334155'}
                  stroke="#eab308"
                  strokeWidth="2"
                  filter={isMoving ? 'drop-shadow(0px 0px 8px #fde047)' : undefined}
                />
                <text x="0" y="4" fill={isMoving ? '#854d0e' : '#94a3b8'} fontSize="10" fontWeight="bold" textAnchor="middle">
                  💡
                </text>
              </g>

              {/* Live Status indicator */}
              <g transform="translate(20, 20)">
                <rect width="210" height="34" rx="6" fill="#0f172a" stroke="#334155" />
                <text x="10" y="22" fill={isMoving ? '#22c55e' : '#94a3b8'} fontSize="11" fontWeight="bold">
                  {isMoving
                    ? `⚡ Có dòng điện cảm ứng (${galvanometerDeflection > 0 ? 'Lệch phải' : 'Lệch trái'})`
                    : 'Đứng yên: Không có dòng điện (i = 0)'}
                </text>
              </g>
            </svg>

            {/* Quick interactive action buttons */}
            <div className="flex gap-3 mt-3 z-10">
              <button
                disabled={isMoving}
                onClick={() => moveMagnet('in')}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-xs"
              >
                Đẩy nam châm VÀO cuộn dây ➔
              </button>
              <button
                disabled={isMoving}
                onClick={() => moveMagnet('out')}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-xs"
              >
                ⬅ Rút nam châm RA XA
              </button>
            </div>
          </div>

          {/* Right: Controls & Rules */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Coil Turns Slider */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Số vòng dây cuộn kín (N):
                </label>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {coilTurns} vòng
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="1"
                value={coilTurns}
                onChange={(e) => setCoilTurns(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            {/* Physical Principle Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md text-xs space-y-2">
              <div className="font-semibold text-slate-300 border-b border-slate-700 pb-1.5 flex justify-between">
                <span>Định luật cảm ứng Faraday:</span>
                <span className="font-mono text-cyan-400">e_c = -N (ΔΦ / Δt)</span>
              </div>

              <div className="pt-1 text-[11px] text-slate-300 leading-relaxed space-y-1.5">
                <p>
                  1. <strong className="text-emerald-400">Khi đưa nam châm lại gần:</strong> Số đường sức từ xuyên qua tiết diện cuộn dây tăng lên (ΔΦ &gt; 0), sinh ra dòng điện cảm ứng làm kim điện kế lệch sang phải.
                </p>
                <p>
                  2. <strong className="text-rose-400">Khi rút nam châm ra xa:</strong> Số đường sức từ giảm đi (ΔΦ &lt; 0), dòng điện cảm ứng đổi chiều ngược lại, làm kim điện kế lệch sang trái.
                </p>
                <p>
                  3. <strong className="text-amber-400">Khi nam châm đứng yên:</strong> Từ thông không biến thiên (ΔΦ = 0), dòng điện cảm ứng bằng 0 dù từ trường có mạnh đến đâu.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Transformer (Máy biến áp) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
          {/* Transformer Schematic */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950 rounded-2xl p-4 relative overflow-hidden shadow-inner border border-slate-800">
            <svg viewBox="0 0 520 280" className="w-full max-w-lg h-auto select-none">
              {/* Iron Core (Lõi thép chữ O khép kín) */}
              <rect x="150" y="50" width="220" height="180" fill="none" stroke="#64748b" strokeWidth="32" rx="16" />
              <text x="260" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle">
                Lõi thép kĩ thuật điện
              </text>

              {/* Primary Coil (Cuộn sơ cấp N1) on left leg */}
              <g transform="translate(140, 80)">
                <rect x="-10" y="0" width="20" height="120" fill="#b45309" stroke="#fbbf24" strokeWidth="2" rx="4" />
                <text x="-25" y="65" fill="#fcd34d" fontSize="12" fontWeight="bold" textAnchor="end">
                  Sơ cấp N₁ = {n1}v
                </text>
                {/* Input terminals */}
                <line x1="-10" y1="20" x2="-60" y2="20" stroke="#fcd34d" strokeWidth="3" />
                <line x1="-10" y1="100" x2="-60" y2="100" stroke="#fcd34d" strokeWidth="3" />
                <text x="-65" y="65" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="end">
                  U₁ = {u1} V~
                </text>
              </g>

              {/* Secondary Coil (Cuộn thứ cấp N2) on right leg */}
              <g transform="translate(380, 80)">
                <rect x="-10" y="0" width="20" height="120" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" rx="4" />
                <text x="25" y="65" fill="#7dd3fc" fontSize="12" fontWeight="bold">
                  Thứ cấp N₂ = {n2}v
                </text>
                {/* Output terminals */}
                <line x1="10" y1="20" x2="60" y2="20" stroke="#7dd3fc" strokeWidth="3" />
                <line x1="10" y1="100" x2="60" y2="100" stroke="#7dd3fc" strokeWidth="3" />
                <text x="65" y="65" fill="#38bdf8" fontSize="13" fontWeight="bold">
                  U₂ = {u2.toFixed(1)} V~
                </text>
              </g>
            </svg>

            {/* Badge Indicator */}
            <div className="mt-2">
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                  isStepUp ? 'bg-indigo-900 text-indigo-200 border border-indigo-700' : 'bg-cyan-900 text-cyan-200 border border-cyan-700'
                }`}
              >
                {isStepUp
                  ? `⚡ MÁY TĂNG ÁP (N₂ > N₁ => U₂ = ${u2.toFixed(1)}V > U₁ = ${u1}V)`
                  : `🔋 MÁY HẠ ÁP (N₂ < N₁ => U₂ = ${u2.toFixed(1)}V < U₁ = ${u1}V)`}
              </span>
            </div>
          </div>

          {/* Right: Transformer Inputs & Transmission Insight */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Primary Voltage */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Hiệu điện thế vào sơ cấp (U₁):
                </label>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {u1} V
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="500"
                step="2"
                value={u1}
                onChange={(e) => setU1(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Primary Turns */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Số vòng cuộn sơ cấp (N₁):
                </label>
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  {n1} vòng
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={n1}
                onChange={(e) => setN1(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
            </div>

            {/* Secondary Turns */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Số vòng cuộn thứ cấp (N₂):
                </label>
                <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  {n2} vòng
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={n2}
                onChange={(e) => setN2(Number(e.target.value))}
                className="w-full accent-cyan-600 cursor-pointer"
              />
            </div>

            {/* Application Insight */}
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <div className="font-bold mb-1 text-blue-800">Ý nghĩa trong truyền tải điện năng:</div>
              Để truyền điện đi xa, người ta dùng máy tăng áp đặt tại nhà máy phát điện để nâng điện áp lên 110 kV, 220 kV hoặc 500 kV. Nhờ đó, công suất hao phí do tỏa nhiệt P_hp = R.(P²/U²) giảm đi hàng triệu lần. Đến nơi tiêu thụ, máy hạ áp sẽ hạ dần xuống 220V để sử dụng an toàn.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
