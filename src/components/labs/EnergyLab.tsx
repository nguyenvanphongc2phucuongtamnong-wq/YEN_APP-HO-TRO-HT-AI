import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ShieldCheck, Flame } from 'lucide-react';
import { playSound } from '../../utils/audio';

export const EnergyLab: React.FC = () => {
  const [labMode, setLabMode] = useState<'pendulum' | 'coaster'>('pendulum');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mass, setMass] = useState<number>(1.0); // kg
  const [gravity] = useState<number>(9.8); // m/s^2
  const [hasFriction, setHasFriction] = useState<boolean>(false);

  // Pendulum params
  const [length, setLength] = useState<number>(1.5); // meters
  const [maxAngleDeg, setMaxAngleDeg] = useState<number>(45); // degrees
  const [currentAngleRad, setCurrentAngleRad] = useState<number>(0);
  const [angularVel, setAngularVel] = useState<number>(0);

  // Coaster params
  const [rollerH0, setRollerH0] = useState<number>(10); // meters
  const [coasterPos, setCoasterPos] = useState<number>(0); // 0 to 1 along track

  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Reset physics state
  const resetSimulation = () => {
    setCurrentAngleRad((maxAngleDeg * Math.PI) / 180);
    setAngularVel(0);
    setCoasterPos(0);
    lastTimeRef.current = performance.now();
    playSound('reset');
  };

  useEffect(() => {
    resetSimulation();
  }, [maxAngleDeg, length, labMode]);

  // Physics animation loop
  useEffect(() => {
    const updatePhysics = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05); // cap dt
      lastTimeRef.current = time;

      if (isPlaying) {
        if (labMode === 'pendulum') {
          // Pendulum equation: theta'' = - (g / L) * sin(theta) - damping * theta'
          const damping = hasFriction ? 0.25 : 0;
          const angularAcc = -(gravity / length) * Math.sin(currentAngleRad) - damping * angularVel;
          const newVel = angularVel + angularAcc * dt;
          const newAngle = currentAngleRad + newVel * dt;

          setAngularVel(newVel);
          setCurrentAngleRad(newAngle);
        } else {
          // Coaster loop: periodic track
          setCoasterPos((prev) => (prev + dt * 0.25) % 1.0);
        }
      }

      animRef.current = requestAnimationFrame(updatePhysics);
    };

    animRef.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying, labMode, currentAngleRad, angularVel, length, gravity, hasFriction]);

  // Compute energy values
  let currentHeight = 0;
  let currentSpeed = 0;
  let kineticEnergy = 0;
  let potentialEnergy = 0;
  let totalMechanical = 0;

  if (labMode === 'pendulum') {
    // h = L * (1 - cos(theta))
    currentHeight = length * (1 - Math.cos(currentAngleRad));
    currentSpeed = Math.abs(angularVel * length);
    kineticEnergy = 0.5 * mass * currentSpeed * currentSpeed;
    potentialEnergy = mass * gravity * currentHeight;
    totalMechanical = kineticEnergy + potentialEnergy;
  } else {
    // Coaster track profile: h(x) = h0 * [0.5 + 0.5 * cos(2*pi*x)]
    currentHeight = rollerH0 * (0.5 + 0.5 * Math.cos(2 * Math.PI * coasterPos));
    const maxMech = mass * gravity * rollerH0;
    potentialEnergy = mass * gravity * currentHeight;
    kineticEnergy = Math.max(0, maxMech - potentialEnergy);
    currentSpeed = Math.sqrt((2 * kineticEnergy) / mass);
    totalMechanical = kineticEnergy + potentialEnergy;
  }

  // Max energy for scaling progress bars
  const maxEnergy = Math.max(1, mass * gravity * (labMode === 'pendulum' ? length * (1 - Math.cos((maxAngleDeg * Math.PI) / 180)) : rollerH0));
  const kePercent = Math.min(100, Math.max(0, (kineticEnergy / maxEnergy) * 100));
  const pePercent = Math.min(100, Math.max(0, (potentialEnergy / maxEnergy) * 100));
  const totalPercent = Math.min(100, Math.max(0, (totalMechanical / maxEnergy) * 100));

  // Pendulum visual SVG coords
  const svgW = 540;
  const svgH = 340;
  const pivotX = svgW / 2;
  const pivotY = 50;
  const visualL = 190;
  const bobX = pivotX + visualL * Math.sin(currentAngleRad);
  const bobY = pivotY + visualL * Math.cos(currentAngleRad);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
            Thí nghiệm ảo 4
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Bảo toàn cơ năng (Động năng & Thế năng)
          </h2>
          <p className="text-sm text-slate-500">
            Khảo sát sự chuyển hóa qua lại giữa W_đ và W_t theo định luật bảo toàn cơ năng
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              playSound('click');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              isPlaying
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Tạm dừng' : 'Tiếp tục'}
          </button>

          <button
            onClick={resetSimulation}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Đặt lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Visual Animation Viewport */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950 rounded-2xl p-4 relative overflow-hidden shadow-inner border border-slate-800">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-w-xl h-auto select-none">
            {/* Background Grid */}
            <defs>
              <pattern id="energyGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width={svgW} height={svgH} fill="url(#energyGrid)" />

            {/* Ceiling / Support mount */}
            <rect x={pivotX - 50} y={pivotY - 12} width="100" height="12" fill="#475569" rx="3" />
            <circle cx={pivotX} cy={pivotY} r="5" fill="#38bdf8" />

            {/* Equilibrium dashed reference line */}
            <line
              x1={pivotX}
              y1={pivotY}
              x2={pivotX}
              y2={pivotY + visualL + 25}
              stroke="#64748b"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text x={pivotX + 6} y={pivotY + visualL + 20} fill="#64748b" fontSize="10">
              Vị trí cân bằng O (W_đ max)
            </text>

            {/* Trajectory Arc */}
            <path
              d={`M ${pivotX - visualL * Math.sin((maxAngleDeg * Math.PI) / 180)} ${
                pivotY + visualL * Math.cos((maxAngleDeg * Math.PI) / 180)
              } A ${visualL} ${visualL} 0 0 0 ${
                pivotX + visualL * Math.sin((maxAngleDeg * Math.PI) / 180)
              } ${pivotY + visualL * Math.cos((maxAngleDeg * Math.PI) / 180)}`}
              fill="none"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="3 3"
            />

            {/* Pendulum Cord */}
            <line
              x1={pivotX}
              y1={pivotY}
              x2={bobX}
              y2={bobY}
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />

            {/* Pendulum Bob (Quả nặng) */}
            <circle
              cx={bobX}
              cy={bobY}
              r={12 + mass * 4}
              fill="#3b82f6"
              stroke="#60a5fa"
              strokeWidth="3"
            />

            {/* Height indicator */}
            <line
              x1={bobX}
              y1={bobY}
              x2={pivotX}
              y2={bobY}
              stroke="#f97316"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            <text x={bobX + 16} y={bobY + 4} fill="#fb923c" fontSize="11" fontWeight="bold">
              h = {currentHeight.toFixed(2)} m
            </text>

            {/* Velocity Vector arrow */}
            {currentSpeed > 0.1 && (
              <g stroke="#22c55e" strokeWidth="2">
                <line
                  x1={bobX}
                  y1={bobY}
                  x2={bobX + angularVel * 20}
                  y2={bobY - (angularVel * 20 * (bobX - pivotX)) / Math.max(1, bobY - pivotY)}
                />
                <circle cx={bobX + angularVel * 20} cy={bobY} r="2" fill="#22c55e" />
              </g>
            )}

            {/* Status info in canvas */}
            <g transform="translate(15, 20)">
              <rect width="180" height="42" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="10" y="18" fill="#94a3b8" fontSize="10">
                Góc lệch θ: {( (currentAngleRad * 180) / Math.PI ).toFixed(1)}°
              </text>
              <text x="10" y="34" fill="#22c55e" fontSize="11" fontWeight="bold">
                Vận tốc v: {currentSpeed.toFixed(2)} m/s
              </text>
            </g>
          </svg>

          {/* Friction mode toggle */}
          <div className="flex items-center gap-3 mt-3 z-10 text-xs">
            <button
              onClick={() => {
                setHasFriction(!hasFriction);
                playSound('click');
              }}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                hasFriction
                  ? 'bg-rose-900 text-rose-200 border border-rose-700'
                  : 'bg-emerald-900 text-emerald-200 border border-emerald-700'
              }`}
            >
              {hasFriction ? <Flame className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
              {hasFriction ? 'Có lực cản không khí (Hao phí nhiệt)' : 'Bỏ qua ma sát (Cơ năng bảo toàn)'}
            </button>
          </div>
        </div>

        {/* Right: Real-time Energy Bars & Controls */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Energy Bar Chart Visualizer */}
          <div className="bg-slate-900 text-white p-4 rounded-xl shadow-md space-y-3 border border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Biểu đồ năng lượng tức thời:
              </span>
              <span className="text-[11px] font-mono text-cyan-400">W = W_đ + W_t</span>
            </div>

            {/* Kinetic Energy (W_đ - Xanh lá) */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-emerald-400 font-semibold">Động năng (W_đ):</span>
                <span className="font-mono font-bold text-emerald-300">
                  {kineticEnergy.toFixed(2)} J ({kePercent.toFixed(0)}%)
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-75"
                  style={{ width: `${kePercent}%` }}
                />
              </div>
            </div>

            {/* Potential Energy (W_t - Cam/Đỏ) */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-amber-400 font-semibold">Thế năng trọng trường (W_t):</span>
                <span className="font-mono font-bold text-amber-300">
                  {potentialEnergy.toFixed(2)} J ({pePercent.toFixed(0)}%)
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-75"
                  style={{ width: `${pePercent}%` }}
                />
              </div>
            </div>

            {/* Total Mechanical Energy (Cơ năng toàn phần - Xanh dương) */}
            <div className="pt-1 border-t border-slate-800">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-sky-400 font-bold">Cơ năng toàn phần (W):</span>
                <span className="font-mono font-bold text-sky-300">
                  {totalMechanical.toFixed(2)} J
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full transition-all duration-75"
                  style={{ width: `${totalPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Mass Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Khối lượng vật (m):
              </label>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {mass} kg
              </span>
            </div>
            <input
              type="range"
              min="0.2"
              max="4.0"
              step="0.2"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Initial Angle Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Góc thả ban đầu (α₀):
              </label>
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                {maxAngleDeg}°
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              step="5"
              value={maxAngleDeg}
              onChange={(e) => setMaxAngleDeg(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          {/* Educational Note */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <div className="font-bold mb-1 flex items-center gap-1 text-amber-800">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Quy luật bảo toàn cơ năng:
            </div>
            Khi con lắc đi xuống vị trí cân bằng, thế năng giảm dần chuyển hóa hoàn toàn thành động năng (vận tốc đạt cực đại tại O). Khi đi lên vị trí biên, động năng giảm dần biến đổi lại thành thế năng. Tổng W = W_đ + W_t luôn là một hằng số.
          </div>
        </div>
      </div>
    </div>
  );
};
