import React, { useState } from 'react';
import { RotateCcw, HelpCircle, Eye, Compass } from 'lucide-react';
import { playSound } from '../../utils/audio';

interface Medium {
  name: string;
  n: number;
  color: string;
}

const MEDIA: Medium[] = [
  { name: 'Không khí (Chân không)', n: 1.0, color: 'bg-sky-50 text-sky-900 border-sky-300' },
  { name: 'Nước', n: 1.33, color: 'bg-cyan-50 text-cyan-900 border-cyan-300' },
  { name: 'Thủy tinh thường', n: 1.5, color: 'bg-blue-50 text-blue-900 border-blue-300' },
  { name: 'Kim cương', n: 2.42, color: 'bg-indigo-50 text-indigo-900 border-indigo-300' },
];

export const RefractionLab: React.FC = () => {
  const [med1Index, setMed1Index] = useState(0); // Không khí
  const [med2Index, setMed2Index] = useState(1); // Nước
  const [angleI, setAngleI] = useState<number>(45); // Degrees
  const [showProtractor, setShowProtractor] = useState(true);
  const [showNormal, setShowNormal] = useState(true);

  const n1 = MEDIA[med1Index].n;
  const n2 = MEDIA[med2Index].n;

  // Calculate critical angle if n1 > n2
  const isHigherToLower = n1 > n2;
  const criticalAngleDeg = isHigherToLower ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

  // Total internal reflection?
  const isTIR = criticalAngleDeg !== null && angleI >= criticalAngleDeg;

  // Angle of refraction r
  let angleRDeg: number | null = null;
  if (!isTIR) {
    const sinR = (n1 * Math.sin((angleI * Math.PI) / 180)) / n2;
    if (sinR <= 1) {
      angleRDeg = (Math.asin(sinR) * 180) / Math.PI;
    }
  }

  // SVG dimensions
  const width = 560;
  const height = 400;
  const cx = width / 2;
  const cy = height / 2;
  const rayLength = 170;

  // Incident ray: starts top-left, ends at (cx, cy)
  // angleI is measured from normal (upwards, vertical line x = cx)
  const radI = (angleI * Math.PI) / 180;
  const startX = cx - rayLength * Math.sin(radI);
  const startY = cy - rayLength * Math.cos(radI);

  // Reflected ray: angle of reflection = angleI, goes top-right
  const reflEndX = cx + rayLength * Math.sin(radI);
  const reflEndY = cy - rayLength * Math.cos(radI);

  // Refracted ray: goes downwards into medium 2
  // angle measured from bottom vertical normal
  let refrEndX = cx;
  let refrEndY = cy + rayLength;
  if (angleRDeg !== null) {
    const radR = (angleRDeg * Math.PI) / 180;
    refrEndX = cx + rayLength * Math.sin(radR);
    refrEndY = cy + rayLength * Math.cos(radR);
  }

  const handleAngleChange = (newAngle: number) => {
    setAngleI(newAngle);
    if (Math.abs(newAngle - 45) === 0 || newAngle === 0) {
      playSound('click');
    }
  };

  const resetExperiment = () => {
    setMed1Index(0);
    setMed2Index(1);
    setAngleI(45);
    playSound('reset');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
            Thí nghiệm ảo 1
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Khúc xạ ánh sáng & Phản xạ toàn phần
          </h2>
          <p className="text-sm text-slate-500">
            Khảo sát đường truyền tia sáng giữa 2 môi trường trong suốt và định luật Snell
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowProtractor(!showProtractor)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              showProtractor ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            {showProtractor ? 'Ẩn thước đo độ' : 'Hiện thước đo độ'}
          </button>
          <button
            onClick={resetExperiment}
            className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Đặt lại thí nghiệm"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Left: Interactive Canvas */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-900 rounded-2xl p-3 relative overflow-hidden shadow-inner">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full max-w-xl h-auto select-none"
          >
            {/* Background for Medium 1 (Top) */}
            <rect
              x="0"
              y="0"
              width={width}
              height={cy}
              fill={med1Index === 0 ? '#0f172a' : med1Index === 1 ? '#082f49' : '#1e1b4b'}
              opacity="0.9"
            />
            {/* Background for Medium 2 (Bottom) */}
            <rect
              x="0"
              y={cy}
              width={width}
              height={cy}
              fill={med2Index === 0 ? '#0f172a' : med2Index === 1 ? '#0c4a6e' : med2Index === 2 ? '#1e3a8a' : '#312e81'}
              opacity="0.95"
            />

            {/* Boundary line (Mặt phân cách) */}
            <line
              x1="0"
              y1={cy}
              x2={width}
              y2={cy}
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="15" y={cy - 8} fill="#94a3b8" fontSize="11" fontWeight="500">
              Môi trường 1: {MEDIA[med1Index].name} (n₁ = {n1})
            </text>
            <text x="15" y={cy + 18} fill="#38bdf8" fontSize="11" fontWeight="500">
              Môi trường 2: {MEDIA[med2Index].name} (n₂ = {n2})
            </text>

            {/* Protractor overlay */}
            {showProtractor && (
              <g opacity="0.3" pointerEvents="none">
                <circle cx={cx} cy={cy} r="140" fill="none" stroke="#94a3b8" strokeWidth="1" />
                {Array.from({ length: 37 }).map((_, idx) => {
                  const a = idx * 10;
                  const rad = (a * Math.PI) / 180;
                  const x1 = cx + 130 * Math.cos(rad);
                  const y1 = cy + 130 * Math.sin(rad);
                  const x2 = cx + 140 * Math.cos(rad);
                  const y2 = cy + 140 * Math.sin(rad);
                  return (
                    <line
                      key={idx}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#94a3b8"
                      strokeWidth={idx % 3 === 0 ? 1.5 : 0.8}
                    />
                  );
                })}
              </g>
            )}

            {/* Normal Line (Pháp tuyến NN') */}
            {showNormal && (
              <g>
                <line
                  x1={cx}
                  y1="20"
                  x2={cx}
                  y2={height - 20}
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                />
                <text x={cx + 6} y="32" fill="#ef4444" fontSize="11" fontWeight="bold">
                  N (Pháp tuyến)
                </text>
                <text x={cx + 6} y={height - 28} fill="#ef4444" fontSize="11" fontWeight="bold">
                  N'
                </text>
              </g>
            )}

            {/* Point of incidence I */}
            <circle cx={cx} cy={cy} r="4" fill="#fbbf24" stroke="#fff" strokeWidth="1.5" />
            <text x={cx - 16} y={cy - 6} fill="#fbbf24" fontSize="12" fontWeight="bold">
              I
            </text>

            {/* Incident Ray (Tia tới - Đỏ phát sáng) */}
            <line
              x1={startX}
              y1={startY}
              x2={cx}
              y2={cy}
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Arrow marker for Incident Ray */}
            <circle
              cx={(startX + cx) / 2}
              cy={(startY + cy) / 2}
              r="3"
              fill="#ef4444"
            />
            <text x={startX - 10} y={startY - 6} fill="#fca5a5" fontSize="11" fontWeight="bold">
              Tia tới (i = {angleI}°)
            </text>

            {/* Reflected Ray (Tia phản xạ) */}
            <line
              x1={cx}
              y1={cy}
              x2={reflEndX}
              y2={reflEndY}
              stroke="#f59e0b"
              strokeWidth={isTIR ? '3.5' : '1.5'}
              strokeDasharray={isTIR ? undefined : '4 2'}
              strokeLinecap="round"
            />
            <text
              x={reflEndX + 4}
              y={reflEndY - 6}
              fill="#fcd34d"
              fontSize="11"
              fontWeight={isTIR ? 'bold' : 'normal'}
            >
              {isTIR ? `Phản xạ toàn phần (i' = ${angleI}°)` : `Phản xạ một phần (i' = ${angleI}°)`}
            </text>

            {/* Refracted Ray (Tia khúc xạ) if not TIR */}
            {!isTIR && angleRDeg !== null && (
              <g>
                <line
                  x1={cx}
                  y1={cy}
                  x2={refrEndX}
                  y2={refrEndY}
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <text x={refrEndX + 6} y={refrEndY + 12} fill="#38bdf8" fontSize="11" fontWeight="bold">
                  Tia khúc xạ (r = {angleRDeg.toFixed(1)}°)
                </text>
              </g>
            )}

            {/* Status Badge inside canvas */}
            <g transform="translate(15, 340)">
              <rect
                width={isTIR ? 220 : 180}
                height="32"
                rx="6"
                fill={isTIR ? '#b91c1c' : '#0369a1'}
                opacity="0.9"
              />
              <text x="12" y="20" fill="#ffffff" fontSize="12" fontWeight="bold">
                {isTIR ? '⚠️ ĐANG PHẢN XẠ TOÀN PHẦN' : '✓ CÓ KHÚC XẠ ÁNH SÁNG'}
              </text>
            </g>
          </svg>

          {/* Quick preset angle buttons */}
          <div className="flex flex-wrap gap-2 mt-3 z-10">
            <span className="text-xs text-slate-400 py-1">Góc tới mẫu:</span>
            {[0, 30, 45, 60, 75].map((ang) => (
              <button
                key={ang}
                onClick={() => handleAngleChange(ang)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  angleI === ang
                    ? 'bg-amber-500 text-slate-900 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {ang}°
              </button>
            ))}
          </div>
        </div>

        {/* Right: Controls & Calculations */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Environment 1 Selector */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              1. Môi trường tới (Môi trường 1):
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MEDIA.map((med, idx) => (
                <button
                  key={med.name}
                  onClick={() => {
                    setMed1Index(idx);
                    playSound('click');
                  }}
                  className={`text-xs p-2 rounded-lg border text-left font-medium transition-all ${
                    med1Index === idx
                      ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold truncate">{med.name}</div>
                  <div className="text-[11px] text-slate-500">n = {med.n}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Environment 2 Selector */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              2. Môi trường khúc xạ (Môi trường 2):
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MEDIA.map((med, idx) => (
                <button
                  key={med.name}
                  onClick={() => {
                    setMed2Index(idx);
                    playSound('click');
                  }}
                  className={`text-xs p-2 rounded-lg border text-left font-medium transition-all ${
                    med2Index === idx
                      ? 'border-cyan-600 bg-cyan-50 text-cyan-700 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold truncate">{med.name}</div>
                  <div className="text-[11px] text-slate-500">n = {med.n}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Incident Angle Slider */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Góc tới (i):
              </label>
              <span className="text-sm font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                {angleI}°
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="85"
              step="1"
              value={angleI}
              onChange={(e) => handleAngleChange(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0° (Vuông góc)</span>
              <span>45°</span>
              <span>85° (Sát mặt)</span>
            </div>
          </div>

          {/* Quantitative Results Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md text-xs space-y-2">
            <div className="font-semibold text-slate-300 border-b border-slate-700 pb-1.5 flex justify-between">
              <span>Kết quả tính toán định luật Snell:</span>
              <span className="font-mono text-cyan-400">n₁ sin i = n₂ sin r</span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Góc tới i:</span>
              <span className="font-bold text-rose-400">{angleI}°</span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Góc khúc xạ r:</span>
              <span className="font-bold text-cyan-300">
                {isTIR ? 'Không có (Phản xạ toàn phần)' : `${angleRDeg?.toFixed(2)}°`}
              </span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Góc giới hạn (i_gh):</span>
              <span className="font-bold text-amber-300">
                {criticalAngleDeg !== null ? `${criticalAngleDeg.toFixed(2)}°` : 'Không có (do n₁ ≤ n₂)'}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-300 leading-relaxed">
              {isTIR ? (
                <span className="text-rose-300 font-medium">
                  Vì n₁ &gt; n₂ ({n1} &gt; {n2}) và góc tới i = {angleI}° ≥ i_gh ({criticalAngleDeg?.toFixed(1)}°) nên toàn bộ ánh sáng bị phản xạ trở lại môi trường 1.
                </span>
              ) : angleI === 0 ? (
                <span>Tia sáng truyền vuông góc với mặt phân cách (i = 0°) thì truyền thẳng (r = 0°).</span>
              ) : n1 < n2 ? (
                <span>Tia sáng truyền từ môi trường kém chiết quang sang môi trường chiết quang hơn: tia khúc xạ lệch lại gần pháp tuyến (r &lt; i).</span>
              ) : (
                <span>Tia sáng truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn: tia khúc xạ lệch xa pháp tuyến (r &gt; i).</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
