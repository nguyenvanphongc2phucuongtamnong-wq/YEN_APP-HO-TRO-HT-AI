import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, Flame, RotateCcw, TrendingUp, BookOpen, Clock, Zap, Star } from 'lucide-react';
import { UserProgress, ExamResult } from '../../types';
import { getUserProgress, getExamHistory, clearAllData } from '../../utils/storage';
import { LESSONS, CHAPTERS } from '../../data/lessonsData';
import { playSound } from '../../utils/audio';

export const ProgressView: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(getUserProgress());
  const [examHistory, setExamHistory] = useState<ExamResult[]>(getExamHistory());

  const completedLessonsCount = Object.keys(progress.completedLessons).length;
  const overallPercent = Math.round((completedLessonsCount / LESSONS.length) * 100);

  // Compute average score of completed lessons
  const lessonScores = Object.values(progress.completedLessons);
  const avgLessonScore =
    lessonScores.length > 0
      ? (lessonScores.reduce((a, b) => a + b, 0) / lessonScores.length).toFixed(1)
      : '0.0';

  const handleResetData = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử học tập và điểm thi không?')) {
      clearAllData();
      setProgress(getUserProgress());
      setExamHistory(getExamHistory());
      playSound('reset');
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
            Hồ sơ học tập cá nhân
          </span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">
            Tiến Độ & Thành Tựu
          </h1>
          <p className="text-xs text-slate-500">
            Theo dõi quá trình học tập 17 bài học, kết quả thi thử và huy hiệu đạt được
          </p>
        </div>

        <button
          onClick={handleResetData}
          className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50 text-slate-500 hover:text-rose-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Đặt lại dữ liệu học
        </button>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Bài đã hoàn thành</div>
            <div className="text-xl font-bold text-slate-800 mt-0.5">
              {completedLessonsCount} / {LESSONS.length}
            </div>
            <div className="text-[11px] text-blue-600 font-semibold mt-0.5">
              {overallPercent}% chương trình
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Điểm TB bài tập</div>
            <div className="text-xl font-bold text-slate-800 mt-0.5">
              {avgLessonScore} <span className="text-xs font-normal text-slate-400">/ 10</span>
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
              {lessonScores.length} bài đã làm
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Số đề thi đã nộp</div>
            <div className="text-xl font-bold text-slate-800 mt-0.5">
              {examHistory.length} đề thi
            </div>
            <div className="text-[11px] text-amber-600 font-semibold mt-0.5">
              15 phút & 45 phút
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Huy hiệu đạt được</div>
            <div className="text-xl font-bold text-slate-800 mt-0.5">
              {progress.achievements.length} / 6
            </div>
            <div className="text-[11px] text-purple-600 font-semibold mt-0.5">
              Thành tựu xuất sắc
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Progress Bar Breakdown */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Tiến độ học tập theo từng chương
        </h2>

        <div className="space-y-4">
          {CHAPTERS.map((ch) => {
            const chLessons = LESSONS.filter((l) => l.chapterId === ch.id);
            const chCompleted = chLessons.filter((l) => progress.completedLessons[l.id] !== undefined).length;
            const chPercent = Math.round((chCompleted / chLessons.length) * 100);

            return (
              <div key={ch.id} className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{ch.name}: </span>
                    <span className="text-slate-600">{ch.title}</span>
                  </div>
                  <span className="font-bold text-blue-600">
                    {chCompleted}/{chLessons.length} bài ({chPercent}%)
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges and Achievements */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          Huy hiệu & Thành tựu rèn luyện
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'ach_1',
              title: 'Tân Binh Vật Lý 9',
              desc: 'Hoàn thành bài luyện tập đầu tiên',
              unlocked: completedLessonsCount >= 1,
              icon: '🚀',
            },
            {
              id: 'ach_2',
              title: 'Chuyên Gia Cơ Học',
              desc: 'Luyện tập xong 4 bài Chương I',
              unlocked: [1, 2, 3, 4].every((id) => progress.completedLessons[id] !== undefined),
              icon: '⚡',
            },
            {
              id: 'ach_3',
              title: 'Bậc Thầy Quang Học',
              desc: 'Luyện tập xong 6 bài Chương II',
              unlocked: [5, 6, 7, 8, 9, 10].every((id) => progress.completedLessons[id] !== undefined),
              icon: '🔍',
            },
            {
              id: 'ach_4',
              title: 'Kỹ Sư Mạch Điện',
              desc: 'Luyện tập xong 5 bài Chương III',
              unlocked: [11, 12, 13, 14, 15].every((id) => progress.completedLessons[id] !== undefined),
              icon: '💡',
            },
            {
              id: 'ach_5',
              title: 'Nhà Thực Nghiệm',
              desc: 'Trải nghiệm cả 5 thí nghiệm ảo',
              unlocked: true,
              icon: '🔬',
            },
            {
              id: 'ach_6',
              title: 'Thủ Khoa Đề Thi',
              desc: 'Đạt điểm 9 hoặc 10 trong kỳ thi thử',
              unlocked: examHistory.some((e) => e.score >= 9.0),
              icon: '👑',
            },
          ].map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                badge.unlocked
                  ? 'bg-amber-50/50 border-amber-200 text-slate-800'
                  : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
              }`}
            >
              <div className="text-2xl p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                {badge.icon}
              </div>
              <div>
                <div className="font-bold text-xs flex items-center gap-1.5">
                  <span>{badge.title}</span>
                  {badge.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Exam History */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Lịch sử các bài thi gần đây
        </h2>

        {examHistory.length === 0 ? (
          <div className="text-center py-6 text-slate-400 text-xs">
            Chưa có bài thi nào được hoàn thành. Hãy thử sức với bài kiểm tra 15 phút hoặc thi thử 45 phút nhé!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <tr>
                  <th className="p-3">Loại bài thi</th>
                  <th className="p-3">Điểm số</th>
                  <th className="p-3">Số câu đúng</th>
                  <th className="p-3">Thời gian làm</th>
                  <th className="p-3">Ngày nộp bài</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {examHistory.slice(0, 10).map((hist) => (
                  <tr key={hist.id} className="hover:bg-slate-50/60">
                    <td className="p-3 font-semibold text-slate-800">
                      {hist.type === '15min' ? 'Kiểm tra 15 phút' : 'Thi thử 45 phút'}
                    </td>
                    <td className="p-3 font-bold text-blue-600 text-sm">
                      {hist.score} / 10
                    </td>
                    <td className="p-3 text-slate-600">
                      {hist.correctCount} / {hist.totalQuestions}
                    </td>
                    <td className="p-3 text-slate-600">
                      {Math.floor(hist.durationSeconds / 60)} phút {hist.durationSeconds % 60} giây
                    </td>
                    <td className="p-3 text-slate-400">
                      {new Date(hist.date).toLocaleDateString('vi-VN')} {new Date(hist.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
