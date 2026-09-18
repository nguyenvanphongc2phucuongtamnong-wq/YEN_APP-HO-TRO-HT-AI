import React, { useState } from 'react';
import { RotateCcw, Sparkles, CheckCircle, Info } from 'lucide-react';
import { playSound } from '../../utils/audio';

export const LensLab: React.FC = () => {
  const [lensType, setLensType] = useState<'convex' | 'concave'>('convex');
  const [focalLength, setFocalLength] = useState<number>(15); // cm
  const [objectDist, setObjectDist] = useState<number>(30); // d in cm
  const [objectHeight, setObjectHeight] = useState<number>(10); // h in cm
  const [showRays, setShowRays] = useState(true);
  const [activeMode, setActiveMode] = useState<'explore' | 'silbermann'>('explore');

  // f signed: positive for convex, negative for concave
  const f = lensType === 'convex' ? focalLength : -focalLength;
  const d = objectDist;

  // Lens formula: 1/f = 1/d + 1/d' => 1/d' = 1/f - 1/d = (d - f) / (d * f) => d' = (d * f) / (d - f)
  let dPrime: number | null = null;
  let k: number | null = null;
  let isInfinity = false;

  if (Math.abs(d - f) < 0.001) {
    isInfinity = true;
  } else {
    dPrime = (d * f) / (d - f);
    k = -dPrime / d;
  }

  const hPrime = k !== null ? k * objectHeight : 0;
  const isRealImage = dPrime !== null && dPrime > 0;
  const isVirtualImage = dPrime !== null && dPrime < 0;

  // SVG dimensions
  const svgWidth = 660;
  const svgHeight = 360;
  const cx = svgWidth / 2;
  const cy = svgHeight / 2;
  const scale = 5.0; // 1 cm = 5 px

  // Object AB coordinates
  // Object is to the left of the lens (x < cx)
  const objX = cx - d * scale;
  const objTopY = cy - objectHeight * scale;
  const objBaseY = cy;

  // Lens focal points on axis
  const fLeftX = cx - focalLength * scale;
  const fRightX = cx + focalLength * scale;
  const twoFLeftX = cx - 2 * focalLength * scale;
  const twoFRightX = cx + 2 * focalLength * scale;

  // Image coordinates
  let imgX = cx;
  let imgTopY = cy;
  if (dPrime !== null) {
    imgX = cx + dPrime * scale;
    imgTopY = cy - hPrime * scale;
  }

  // Silbermann check
  const isSilbermannMatched =
    lensType === 'convex' &&
    Math.abs(d - 2 * focalLength) < 1 &&
    dPrime !== null &&
    Math.abs(dPrime - 2 * focalLength) < 1;

  const resetAll = () => {
    setLensType('convex');
    setFocalLength(15);
    setObjectDist(30);
    setObjectHeight(10);
    playSound('reset');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
            Thí nghiệm ảo 2
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Quang học thấu kính & Tạo ảnh
          </h2>
          <p className="text-sm text-slate-500">
            Khảo sát sự tạo ảnh qua Thấu kính hội tụ, Phân kỳ và phương pháp đo tiêu cự Silbermann
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex gap-1 text-xs font-medium">
            <button
              onClick={() => {
                setActiveMode('explore');
                playSound('click');
              }}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeMode === 'explore' ? 'bg-white text-slate-800 shadow-xs font-bold' : 'text-slate-600'
              }`}
            >
              Khám phá tổng quát
            </button>
            <button
              onClick={() => {
                setActiveMode('silbermann');
                setLensType('convex');
                setObjectDist(2 * focalLength);
                playSound('celebrate');
              }}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                activeMode === 'silbermann' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Đo tiêu cự (L = 4f)
            </button>
          </div>
          <button
            onClick={resetAll}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Đặt lại thí nghiệm"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Optical Bench SVG */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950 rounded-2xl p-3 relative overflow-hidden shadow-inner border border-slate-800">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full max-w-2xl h-auto select-none"
          >
            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width={svgWidth} height={svgHeight} fill="url(#grid)" />

            {/* Optical Bench Ruler at bottom */}
            <line x1="20" y1={svgHeight - 25} x2={svgWidth - 20} y2={svgHeight - 25} stroke="#475569" strokeWidth="2" />
            {Array.from({ length: 13 }).map((_, i) => {
              const xPos = 50 + i * 45;
              const cmVal = Math.round((xPos - cx) / scale);
              return (
                <g key={i}>
                  <line x1={xPos} y1={svgHeight - 28} x2={xPos} y2={svgHeight - 22} stroke="#64748b" strokeWidth="1" />
                  <text x={xPos} y={svgHeight - 12} fill="#64748b" fontSize="9" textAnchor="middle">
                    {cmVal}
                  </text>
                </g>
              );
            })}

            {/* Principal Axis (Trục chính Delta) */}
            <line x1="20" y1={cy} x2={svgWidth - 20} y2={cy} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 4" />
            <text x={svgWidth - 40} y={cy - 8} fill="#94a3b8" fontSize="12" fontStyle="italic">
              Δ
            </text>

            {/* Focal points on axis */}
            {/* F and 2F on Left */}
            <circle cx={fLeftX} cy={cy} r="3.5" fill="#f59e0b" />
            <text x={fLeftX} y={cy + 16} fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
              {lensType === 'convex' ? 'F' : "F'"}
            </text>

            <circle cx={twoFLeftX} cy={cy} r="3" fill="#cbd5e1" />
            <text x={twoFLeftX} y={cy + 16} fill="#94a3b8" fontSize="10" textAnchor="middle">
              2F
            </text>

            {/* F' and 2F' on Right */}
            <circle cx={fRightX} cy={cy} r="3.5" fill="#f59e0b" />
            <text x={fRightX} y={cy + 16} fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
              {lensType === 'convex' ? "F'" : 'F'}
            </text>

            <circle cx={twoFRightX} cy={cy} r="3" fill="#cbd5e1" />
            <text x={twoFRightX} y={cy + 16} fill="#94a3b8" fontSize="10" textAnchor="middle">
              2F'
            </text>

            {/* Optical Center O */}
            <circle cx={cx} cy={cy} r="4" fill="#38bdf8" />
            <text x={cx - 10} y={cy + 16} fill="#38bdf8" fontSize="11" fontWeight="bold">
              O
            </text>

            {/* Lens Symbol */}
            {lensType === 'convex' ? (
              // Convex lens symbol (Thấu kính hội tụ: mũi tên hướng ra ở 2 đầu)
              <g stroke="#38bdf8" strokeWidth="2.5">
                <line x1={cx} y1={cy - 120} x2={cx} y2={cy + 120} />
                {/* Top arrow */}
                <path d={`M ${cx - 7} ${cy - 108} L ${cx} ${cy - 120} L ${cx + 7} ${cy - 108}`} fill="none" />
                {/* Bottom arrow */}
                <path d={`M ${cx - 7} ${cy + 108} L ${cx} ${cy + 120} L ${cx + 7} ${cy + 108}`} fill="none" />
              </g>
            ) : (
              // Concave lens symbol (Thấu kính phân kỳ: mũi tên ngược vào trong ở 2 đầu)
              <g stroke="#a855f7" strokeWidth="2.5">
                <line x1={cx} y1={cy - 120} x2={cx} y2={cy + 120} />
                {/* Top inverted arrow */}
                <path d={`M ${cx - 7} ${cy - 120} L ${cx} ${cy - 108} L ${cx + 7} ${cy - 120}`} fill="none" />
                {/* Bottom inverted arrow */}
                <path d={`M ${cx - 7} ${cy + 120} L ${cx} ${cy + 108} L ${cx + 7} ${cy + 120}`} fill="none" />
              </g>
            )}

            {/* Object AB (Nến / Mũi tên đỏ) */}
            <g stroke="#ef4444" strokeWidth="3">
              {/* Vertical stem */}
              <line x1={objX} y1={objBaseY} x2={objX} y2={objTopY} strokeLinecap="round" />
              {/* Arrowhead B */}
              <polygon
                points={`${objX},${objTopY - 2} ${objX - 5},${objTopY + 8} ${objX + 5},${objTopY + 8}`}
                fill="#ef4444"
                stroke="none"
              />
              <text x={objX - 16} y={objTopY + 6} fill="#f87171" fontSize="12" fontWeight="bold">
                B
              </text>
              <text x={objX - 14} y={objBaseY + 16} fill="#f87171" fontSize="12" fontWeight="bold">
                A
              </text>
            </g>

            {/* Light Rays */}
            {showRays && (
              <g>
                {/* RAY 1: Parallel to principal axis -> through F' (Cyan) */}
                <line
                  x1={objX}
                  y1={objTopY}
                  x2={cx}
                  y2={objTopY}
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                />
                {lensType === 'convex' ? (
                  // Convex: ray refracts through F' on right
                  <line
                    x1={cx}
                    y1={objTopY}
                    x2={svgWidth - 20}
                    y2={objTopY + ((svgWidth - 20 - cx) * (cy - objTopY)) / (fRightX - cx)}
                    stroke="#06b6d4"
                    strokeWidth="1.5"
                  />
                ) : (
                  // Concave: ray diverges as if coming from F' on left
                  <>
                    <line
                      x1={cx}
                      y1={objTopY}
                      x2={svgWidth - 20}
                      y2={objTopY + ((svgWidth - 20 - cx) * (objTopY - cy)) / (cx - fLeftX)}
                      stroke="#06b6d4"
                      strokeWidth="1.5"
                    />
                    {/* Virtual dashed extension back to F' */}
                    <line
                      x1={fLeftX}
                      y1={cy}
                      x2={cx}
                      y2={objTopY}
                      stroke="#06b6d4"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      opacity="0.8"
                    />
                  </>
                )}

                {/* RAY 2: Through optical center O -> continues straight (Amber) */}
                <line
                  x1={objX}
                  y1={objTopY}
                  x2={svgWidth - 20}
                  y2={cy + ((svgWidth - 20 - cx) * (cy - objTopY)) / (cx - objX)}
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                />

                {/* RAY 3: (Optional/Virtual ray extension for virtual image) */}
                {isVirtualImage && dPrime !== null && (
                  <line
                    x1={imgX}
                    y1={imgTopY}
                    x2={cx}
                    y2={objTopY}
                    stroke="#06b6d4"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.7"
                  />
                )}
              </g>
            )}

            {/* Image A'B' */}
            {!isInfinity && dPrime !== null && (
              <g stroke={isRealImage ? '#22c55e' : '#a855f7'} strokeWidth="2.5">
                {/* Vertical stem (dashed if virtual) */}
                <line
                  x1={imgX}
                  y1={cy}
                  x2={imgX}
                  y2={imgTopY}
                  strokeDasharray={isVirtualImage ? '5 3' : undefined}
                  strokeLinecap="round"
                />
                {/* Arrowhead B' */}
                {hPrime < 0 ? (
                  // Inverted downwards arrow
                  <polygon
                    points={`${imgX},${imgTopY + 2} ${imgX - 5},${imgTopY - 8} ${imgX + 5},${imgTopY - 8}`}
                    fill={isRealImage ? '#22c55e' : '#a855f7'}
                    stroke="none"
                  />
                ) : (
                  // Upright arrow
                  <polygon
                    points={`${imgX},${imgTopY - 2} ${imgX - 5},${imgTopY + 8} ${imgX + 5},${imgTopY + 8}`}
                    fill={isRealImage ? '#22c55e' : '#a855f7'}
                    stroke="none"
                  />
                )}
                <text
                  x={imgX + 6}
                  y={imgTopY + (hPrime < 0 ? 12 : -4)}
                  fill={isRealImage ? '#4ade80' : '#c084fc'}
                  fontSize="12"
                  fontWeight="bold"
                >
                  B'
                </text>
                <text
                  x={imgX + 6}
                  y={cy + 16}
                  fill={isRealImage ? '#4ade80' : '#c084fc'}
                  fontSize="12"
                  fontWeight="bold"
                >
                  A'
                </text>
              </g>
            )}

            {/* Infinity text if d = f */}
            {isInfinity && (
              <text x={svgWidth - 140} y={40} fill="#f43f5e" fontSize="13" fontWeight="bold">
                ⚠️ Ảnh ở vô cực (d = f)
              </text>
            )}

            {/* Silbermann match indicator badge */}
            {activeMode === 'silbermann' && (
              <g transform="translate(15, 20)">
                <rect
                  width="280"
                  height="34"
                  rx="6"
                  fill={isSilbermannMatched ? '#166534' : '#1e293b'}
                  stroke={isSilbermannMatched ? '#22c55e' : '#475569'}
                />
                <text x="12" y="22" fill="#ffffff" fontSize="12" fontWeight="bold">
                  {isSilbermannMatched
                    ? `✓ Thỏa điều kiện: L = 4f = ${(4 * focalLength).toFixed(1)} cm (f = ${focalLength} cm)`
                    : `Chỉnh d = 2f = ${2 * focalLength} cm để đo tiêu cự`}
                </text>
              </g>
            )}
          </svg>

          {/* Quick distance presets */}
          <div className="flex flex-wrap gap-2 mt-2.5 z-10 text-xs">
            <span className="text-slate-400 py-1">Vị trí vật mẫu:</span>
            <button
              onClick={() => {
                setObjectDist(Math.round(focalLength / 2));
                playSound('click');
              }}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              d &lt; f (Kính lúp)
            </button>
            <button
              onClick={() => {
                setObjectDist(focalLength);
                playSound('click');
              }}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              d = f (Vô cực)
            </button>
            <button
              onClick={() => {
                setObjectDist(2 * focalLength);
                playSound('celebrate');
              }}
              className="px-2 py-1 rounded bg-emerald-900 text-emerald-200 font-semibold hover:bg-emerald-800"
            >
              d = 2f (Đối xứng, L=4f)
            </button>
            <button
              onClick={() => {
                setObjectDist(3 * focalLength);
                playSound('click');
              }}
              className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              d &gt; 2f (Máy ảnh)
            </button>
          </div>
        </div>

        {/* Right: Controls & Properties */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Lens Type Toggle */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              1. Loại thấu kính:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setLensType('convex');
                  playSound('click');
                }}
                className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                  lensType === 'convex'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Hội tụ (f &gt; 0)
              </button>
              <button
                onClick={() => {
                  setLensType('concave');
                  playSound('click');
                }}
                className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                  lensType === 'concave'
                    ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Phân kỳ (f &lt; 0)
              </button>
            </div>
          </div>

          {/* Focal Length Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Tiêu cự (|f|):
              </label>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {focalLength} cm
              </span>
            </div>
            <input
              type="range"
              min="8"
              max="25"
              step="1"
              value={focalLength}
              onChange={(e) => setFocalLength(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Object Distance Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Khoảng cách vật (d):
              </label>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                {objectDist} cm
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="1"
              value={objectDist}
              onChange={(e) => setObjectDist(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
          </div>

          {/* Quantitative Results Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md text-xs space-y-2">
            <div className="font-semibold text-slate-300 border-b border-slate-700 pb-1.5 flex justify-between">
              <span>Tính chất ảnh qua thấu kính:</span>
              <span className="font-mono text-cyan-400">1/f = 1/d + 1/d'</span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Khoảng cách ảnh (d'):</span>
              <span className="font-bold text-emerald-400">
                {isInfinity ? 'Ở vô cực (∞)' : `${dPrime?.toFixed(1)} cm`}
              </span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Độ phóng đại (k = -d'/d):</span>
              <span className="font-bold text-amber-300">
                {isInfinity ? '∞' : `${k?.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Loại ảnh:</span>
              <span className={`font-bold ${isRealImage ? 'text-green-400' : 'text-purple-400'}`}>
                {isInfinity ? 'Không hứng được ảnh' : isRealImage ? 'Ảnh thật' : 'Ảnh ảo'}
              </span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Chiều của ảnh:</span>
              <span className="font-bold text-slate-200">
                {isInfinity ? '-' : (k && k < 0) ? 'Ngược chiều vật' : 'Cùng chiều vật'}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-300 leading-relaxed">
              {isInfinity ? (
                <span className="text-rose-300">Chùm tia ló song song, ảnh hình thành ở vô cực.</span>
              ) : lensType === 'concave' ? (
                <span className="text-purple-300">Thấu kính phân kỳ luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật (|k| &lt; 1) và nằm trong khoảng tiêu cự.</span>
              ) : d < focalLength ? (
                <span className="text-sky-300">Vật trong khoảng tiêu cự (d &lt; f) cho ảnh ảo, cùng chiều và phóng đại lớn hơn vật (ứng dụng làm kính lúp).</span>
              ) : d === 2 * focalLength ? (
                <span className="text-emerald-300 font-semibold">Điểm đối xứng d = 2f = {2 * focalLength} cm cho ảnh thật bằng vật (|k| = 1), khoảng cách vật - màn L = 4f = {4 * focalLength} cm.</span>
              ) : d > 2 * focalLength ? (
                <span className="text-slate-300">Vật ngoài khoảng 2f cho ảnh thật, ngược chiều và nhỏ hơn vật (ứng dụng máy ảnh, mắt).</span>
              ) : (
                <span className="text-slate-300">Vật trong khoảng f &lt; d &lt; 2f cho ảnh thật, ngược chiều và lớn hơn vật (ứng dụng máy chiếu).</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
