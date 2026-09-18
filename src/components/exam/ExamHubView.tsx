import React from 'react';
import { Clock, Award, CheckCircle2, ChevronRight, FileCheck, Sparkles } from 'lucide-react';
import { playSound } from '../../utils/audio';
import { getExamHistory } from '../../utils/storage';

interface ExamHubViewProps {
  onStartExam: (type: 'quiz15' | 'exam45_hk1' | 'exam45_hk2') => void;
}

export const ExamHubView: React.FC<ExamHubViewProps> = ({ onStartExam }) => {
  const history = getExamHistory();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-2xl p-6 md:p-8 shadow-md">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs uppercase tracking-wider">
            Phòng Khảo Thí Trực Tuyến
          </span>
          <h1 className="text-2xl md:text-3xl font-black">
            Luyện Đề Kiểm Tra & Thi Thử Vật Lý 9
          </h1>
          <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
            Hệ thống ngân hàng câu hỏi bám sát chuẩn ma trận đề thi Kết nối tri thức với cuộc sống. Tự động chấm điểm, tính thời gian và cung cấp đáp án giải thích chi tiết ngay sau khi nộp bài.
          </p>
        </div>
      </div>

      {/* 3 Exam Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: 15-min Quiz */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600">Kiểm tra nhanh</span>
              <h2 className="text-lg font-bold text-slate-800 mt-0.5">Kiểm Tra 15 Phút</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                15 câu hỏi trắc nghiệm ngẫu nhiên kiểm tra kiến thức tổng hợp, thời gian làm bài 15 phút.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-1 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 15 câu trắc nghiệm
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thời gian: 15 phút (900s)
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thang điểm: 10.0
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onStartExam('quiz15');
              playSound('click');
            }}
            className="w-full mt-6 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
          >
            Bắt đầu làm bài 15 phút <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: 45-min Semester 1 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-400 transition-all p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600">Đề thi định kỳ</span>
              <h2 className="text-lg font-bold text-slate-800 mt-0.5">Thi Thử Học Kỳ 1</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                30 câu trắc nghiệm toàn diện bao quát Chương I (Cơ học) và Chương II (Ánh sáng).
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-1 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 30 câu chuẩn cấu trúc HK1
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thời gian: 45 phút (2700s)
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Có tính điểm và lời giải
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onStartExam('exam45_hk1');
              playSound('click');
            }}
            className="w-full mt-6 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
          >
            Bắt đầu thi thử HK1 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: 45-min Semester 2 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-purple-400 transition-all p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600">Đề thi định kỳ</span>
              <h2 className="text-lg font-bold text-slate-800 mt-0.5">Thi Thử Học Kỳ 2</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                30 câu trắc nghiệm bao quát Chương III (Điện học) và Chương IV (Năng lượng & Trái Đất).
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-1 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 30 câu chuẩn cấu trúc HK2
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thời gian: 45 phút (2700s)
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bám sát sách KNTT
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onStartExam('exam45_hk2');
              playSound('click');
            }}
            className="w-full mt-6 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
          >
            Bắt đầu thi thử HK2 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
