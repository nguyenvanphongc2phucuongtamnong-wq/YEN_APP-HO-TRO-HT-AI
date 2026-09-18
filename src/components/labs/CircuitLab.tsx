import React, { useState, useEffect } from 'react';
import { RotateCcw, Power, Zap, Activity } from 'lucide-react';
import { playSound } from '../../utils/audio';

export const CircuitLab: React.FC = () => {
  const [circuitType, setCircuitType] = useState<'single' | 'series' | 'parallel'>('series');
  const [voltage, setVoltage] = useState<number>(12); // Volts
  const [r1, setR1] = useState<number>(20); // Ohms
  const [r2, setR2] = useState<number>(30); // Ohms
  const [isSwitchClosed, setIsSwitchClosed] = useState<boolean>(true);
  const [animOffset, setAnimOffset] = useState<number>(0);

  // Animate electron dots
  useEffect(() => {
    if (!isSwitchClosed) return;
    const interval = setInterval(() => {
      setAnimOffset((prev) => (prev + 1) % 20);
    }, 40);
    return () => clearInterval(interval);
  }, [isSwitchClosed]);

  // Calculations
  let rEquiv = 0;
  let totalCurrent = 0;
  let current1 = 0;
  let current2 = 0;
  let volt1 = 0;
  let volt2 = 0;

  if (isSwitchClosed && voltage > 0) {
    if (circuitType === 'single') {
      rEquiv = r1;
      totalCurrent = voltage / rEquiv;
      current1 = totalCurrent;
      volt1 = voltage;
    } else if (circuitType === 'series') {
      rEquiv = r1 + r2;
      totalCurrent = voltage / rEquiv;
      current1 = totalCurrent;
      current2 = totalCurrent;
      volt1 = current1 * r1;
      volt2 = current2 * r2;
    } else if (circuitType === 'parallel') {
      rEquiv = (r1 * r2) / (r1 + r2);
      totalCurrent = voltage / rEquiv;
      volt1 = voltage;
      volt2 = voltage;
      current1 = volt1 / r1;
      current2 = volt2 / r2;
    }
  }

  const totalPower = isSwitchClosed ? voltage * totalCurrent : 0;

  const toggleSwitch = () => {
    setIsSwitchClosed(!isSwitchClosed);
    playSound('switch');
  };

  const resetCircuit = () => {
    setCircuitType('series');
    setVoltage(12);
    setR1(20);
    setR2(30);
    setIsSwitchClosed(true);
    playSound('reset');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
            Thí nghiệm ảo 3
          </span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Đoạn mạch điện & Định luật Ohm
          </h2>
          <p className="text-sm text-slate-500">
            Khảo sát mạch điện nối tiếp, song song và định luật I = U / R
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSwitch}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              isSwitchClosed
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-rose-600 text-white hover:bg-rose-700'
            }`}
          >
            <Power className="w-4 h-4" />
            {isSwitchClosed ? 'Công tắc ĐÓNG' : 'Công tắc NGẮT'}
          </button>

          <button
            onClick={resetCircuit}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Đặt lại mạch điện"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Schematic Circuit Canvas */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-900 rounded-2xl p-4 relative overflow-hidden shadow-inner border border-slate-800">
          <svg viewBox="0 0 540 340" className="w-full max-w-xl h-auto select-none">
            {/* Background */}
            <rect width="540" height="340" fill="#0f172a" rx="12" />

            {/* Wires (Mạch chính) */}
            {/* Top wire from battery to right */}
            <line
              x1="90"
              y1="60"
              x2="450"
              y2="60"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeDasharray={isSwitchClosed ? '6 4' : undefined}
              strokeDashoffset={-animOffset}
            />

            {/* Bottom wire from battery to right */}
            <line
              x1="90"
              y1="280"
              x2="450"
              y2="280"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeDasharray={isSwitchClosed ? '6 4' : undefined}
              strokeDashoffset={animOffset}
            />

            {/* Left wire (Battery segment) */}
            <line x1="90" y1="60" x2="90" y2="130" stroke="#cbd5e1" strokeWidth="4" />
            <line x1="90" y1="190" x2="90" y2="280" stroke="#cbd5e1" strokeWidth="4" />

            {/* BATTERY DC (Nguồn điện) at (90, 160) */}
            <g transform="translate(90, 160)">
              {/* Positive plate (Longer, thin) */}
              <line x1="-25" y1="-15" x2="25" y2="-15" stroke="#ef4444" strokeWidth="3" />
              <text x="-40" y="-12" fill="#ef4444" fontSize="14" fontWeight="bold">
                +
              </text>
              {/* Negative plate (Shorter, thick) */}
              <line x1="-15" y1="15" x2="15" y2="15" stroke="#38bdf8" strokeWidth="5" />
              <text x="-38" y="20" fill="#38bdf8" fontSize="14" fontWeight="bold">
                -
              </text>
              <text x="35" y="4" fill="#fbbf24" fontSize="12" fontWeight="bold">
                U = {voltage}V
              </text>
            </g>

            {/* SWITCH (Công tắc K) at Top wire (200, 60) */}
            <g transform="translate(190, 60)">
              <circle cx="0" cy="0" r="4" fill="#fbbf24" />
              <circle cx="35" cy="0" r="4" fill="#fbbf24" />
              {isSwitchClosed ? (
                <line x1="0" y1="0" x2="35" y2="0" stroke="#22c55e" strokeWidth="3" />
              ) : (
                <line x1="0" y1="0" x2="30" y2="-20" stroke="#ef4444" strokeWidth="3" />
              )}
              <text x="12" y="-14" fill="#94a3b8" fontSize="11" fontWeight="bold">
                K
              </text>
            </g>

            {/* AMMETER A at Top wire (320, 60) */}
            <g transform="translate(320, 60)">
              <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="5" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                A
              </text>
              <rect x="-35" y="22" width="70" height="18" rx="4" fill="#0284c7" />
              <text x="0" y="35" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">
                {totalCurrent.toFixed(2)} A
              </text>
            </g>

            {/* CIRCUIT CONFIGURATIONS ON RIGHT */}
            {circuitType === 'single' && (
              // Single resistor branch
              <g>
                <line x1="450" y1="60" x2="450" y2="130" stroke="#cbd5e1" strokeWidth="4" />
                <line x1="450" y1="210" x2="450" y2="280" stroke="#cbd5e1" strokeWidth="4" />
                {/* Resistor R1 */}
                <rect
                  x="430"
                  y="130"
                  width="40"
                  height="80"
                  fill="#b45309"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="450" y="175" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">
                  R₁
                </text>
                <text x="480" y="175" fill="#fcd34d" fontSize="11" fontWeight="bold">
                  {r1} Ω
                </text>
              </g>
            )}

            {circuitType === 'series' && (
              // Series: R1 then R2 in same vertical branch
              <g>
                <line x1="450" y1="60" x2="450" y2="90" stroke="#cbd5e1" strokeWidth="4" />
                {/* R1 */}
                <rect
                  x="430"
                  y="90"
                  width="40"
                  height="60"
                  fill="#b45309"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="450" y="125" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  R₁
                </text>
                <text x="480" y="125" fill="#fcd34d" fontSize="11" fontWeight="bold">
                  {r1} Ω ({volt1.toFixed(1)}V)
                </text>

                <line x1="450" y1="150" x2="450" y2="190" stroke="#cbd5e1" strokeWidth="4" />

                {/* R2 */}
                <rect
                  x="430"
                  y="190"
                  width="40"
                  height="60"
                  fill="#0369a1"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="450" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  R₂
                </text>
                <text x="480" y="225" fill="#7dd3fc" fontSize="11" fontWeight="bold">
                  {r2} Ω ({volt2.toFixed(1)}V)
                </text>

                <line x1="450" y1="250" x2="450" y2="280" stroke="#cbd5e1" strokeWidth="4" />
              </g>
            )}

            {circuitType === 'parallel' && (
              // Parallel: Branch 1 at x=410, Branch 2 at x=490
              <g>
                {/* Top horizontal feeder */}
                <line x1="410" y1="60" x2="490" y2="60" stroke="#cbd5e1" strokeWidth="4" />
                {/* Bottom horizontal return */}
                <line x1="410" y1="280" x2="490" y2="280" stroke="#cbd5e1" strokeWidth="4" />

                {/* Branch 1 (R1) */}
                <line x1="410" y1="60" x2="410" y2="130" stroke="#cbd5e1" strokeWidth="3" />
                <rect
                  x="392"
                  y="130"
                  width="36"
                  height="70"
                  fill="#b45309"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="410" y="170" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  R₁
                </text>
                <text x="410" y="118" fill="#fcd34d" fontSize="10" textAnchor="middle">
                  I₁ = {current1.toFixed(2)}A
                </text>
                <line x1="410" y1="200" x2="410" y2="280" stroke="#cbd5e1" strokeWidth="3" />

                {/* Branch 2 (R2) */}
                <line x1="490" y1="60" x2="490" y2="130" stroke="#cbd5e1" strokeWidth="3" />
                <rect
                  x="472"
                  y="130"
                  width="36"
                  height="70"
                  fill="#0369a1"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="490" y="170" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  R₂
                </text>
                <text x="490" y="118" fill="#7dd3fc" fontSize="10" textAnchor="middle">
                  I₂ = {current2.toFixed(2)}A
                </text>
                <line x1="490" y1="200" x2="490" y2="280" stroke="#cbd5e1" strokeWidth="3" />
              </g>
            )}

            {/* Voltmeter display badge */}
            <g transform="translate(190, 240)">
              <rect width="110" height="30" rx="6" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
              <text x="10" y="20" fill="#eab308" fontSize="12" fontWeight="bold">
                Vôn kế V: {voltage} V
              </text>
            </g>
          </svg>

          {/* Quick toggle mode buttons */}
          <div className="flex gap-2 mt-3 z-10">
            <button
              onClick={() => {
                setCircuitType('single');
                playSound('click');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                circuitType === 'single'
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Mạch đơn (1 Điện trở)
            </button>
            <button
              onClick={() => {
                setCircuitType('series');
                playSound('click');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                circuitType === 'series'
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Mắc NỐI TIẾP (R₁ + R₂)
            </button>
            <button
              onClick={() => {
                setCircuitType('parallel');
                playSound('click');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                circuitType === 'parallel'
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Mắc SONG SONG (R₁ // R₂)
            </button>
          </div>
        </div>

        {/* Right: Sliders & Live Results */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Voltage Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Hiệu điện thế nguồn (U):
              </label>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {voltage} V
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* R1 Slider */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Điện trở R₁:
              </label>
              <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                {r1} Ω
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="80"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>

          {/* R2 Slider (if series or parallel) */}
          {circuitType !== 'single' && (
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Điện trở R₂:
                </label>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {r2} Ω
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="80"
                step="1"
                value={r2}
                onChange={(e) => setR2(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          )}

          {/* Live Metrics Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md text-xs space-y-2">
            <div className="font-semibold text-slate-300 border-b border-slate-700 pb-1.5 flex justify-between">
              <span>Đại lượng đo lường thực tế:</span>
              <span className="font-mono text-cyan-400">I = U / R</span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Điện trở tương đương (R_tđ):</span>
              <span className="font-bold text-amber-300">{rEquiv.toFixed(2)} Ω</span>
            </div>

            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Dòng điện mạch chính (I):</span>
              <span className="font-bold text-cyan-300">{totalCurrent.toFixed(2)} A</span>
            </div>

            {circuitType !== 'single' && (
              <>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">Dòng qua R₁ / R₂:</span>
                  <span className="font-bold text-slate-200">
                    I₁ = {current1.toFixed(2)}A | I₂ = {current2.toFixed(2)}A
                  </span>
                </div>

                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">Hiệu điện thế U₁ / U₂:</span>
                  <span className="font-bold text-slate-200">
                    U₁ = {volt1.toFixed(1)}V | U₂ = {volt2.toFixed(1)}V
                  </span>
                </div>
              </>
            )}

            <div className="flex justify-between py-0.5 border-t border-slate-800 pt-1.5">
              <span className="text-slate-400">Công suất toàn mạch (P = U.I):</span>
              <span className="font-bold text-emerald-400">{totalPower.toFixed(2)} W</span>
            </div>

            <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-300 leading-relaxed">
              {circuitType === 'series' ? (
                <span>
                  Trong mạch nối tiếp: I = I₁ = I₂ = {totalCurrent.toFixed(2)}A; U = U₁ + U₂ ({volt1.toFixed(1)}V + {volt2.toFixed(1)}V = {voltage}V); R_tđ = R₁ + R₂ ({r1} + {r2} = {rEquiv}Ω).
                </span>
              ) : circuitType === 'parallel' ? (
                <span>
                  Trong mạch song song: U = U₁ = U₂ = {voltage}V; I = I₁ + I₂ ({current1.toFixed(2)}A + {current2.toFixed(2)}A = {totalCurrent.toFixed(2)}A); R_tđ ({rEquiv.toFixed(1)}Ω) nhỏ hơn cả R₁ và R₂.
                </span>
              ) : (
                <span>Mạch đơn tuân thủ chặt chẽ định luật Ohm: I = U / R = {voltage} / {r1} = {totalCurrent.toFixed(2)}A.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
