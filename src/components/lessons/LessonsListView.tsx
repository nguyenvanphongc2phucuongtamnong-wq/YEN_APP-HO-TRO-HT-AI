import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2, ChevronRight, Sparkles, Filter, FlaskConical } from 'lucide-react';
import { Lesson } from '../../types';
import { LESSONS, CHAPTERS } from '../../data/lessonsData';
import { getUserProgress } from '../../utils/storage';
import { playSound } from '../../utils/audio';

interface LessonsListViewProps {
  onSelectLesson: (lesson: Lesson) => void;
  onStartPractice: (lesson: Lesson) => void;
}

export const LessonsListView: React.FC<LessonsListViewProps> = ({
  onSelectLesson,
  onStartPractice,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number>(0); // 0 = All
  const [searchQuery, setSearchQuery] = useState<string>('');
  const progress = getUserProgress();

  const filteredLessons = LESSONS.filter((lesson) => {
    const matchChapter = selectedChapter === 0 || lesson.chapterId === selectedChapter;
    const matchSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.id.toString() === searchQuery.trim();
    return matchChapter && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Search and Chapter Filter Bar */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-4 md:p-5 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm bài học, công thức, định luật..."
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Chapter Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button
            onClick={() => {
              setSelectedChapter(0);
              playSound('click');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedChapter === 0
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả (17 bài)
          </button>
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => {
                setSelectedChapter(ch.id);
                playSound('click');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedChapter === ch.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Chương {ch.id}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters & Lessons Grid */}
      <div className="space-y-8">
        {CHAPTERS.filter((ch) => selectedChapter === 0 || ch.id === selectedChapter).map((ch) => {
          const chLessons = filteredLessons.filter((l) => l.chapterId === ch.id);
          if (chLessons.length === 0) return null;

          return (
            <div key={ch.id} className="space-y-3.5">
              {/* Chapter Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {ch.name}
                  </span>
                  <h2 className="text-lg font-bold text-slate-800">{ch.title}</h2>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {chLessons.length} bài học
                </span>
              </div>

              {/* Lesson Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chLessons.map((lesson) => {
                  const score = progress.completedLessons[lesson.id];
                  const isCompleted = score !== undefined;

                  return (
                    <div
                      key={lesson.id}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all p-5 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            Bài {lesson.id}
                          </span>
                          {isCompleted ? (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> {score}/10 điểm
                            </span>
                          ) : (
                            <span className="text-[11px] font-medium text-slate-400">
                              Chưa làm bài
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => {
                            onSelectLesson(lesson);
                            playSound('click');
                          }}
                          className="font-bold text-slate-800 text-sm group-hover:text-blue-600 cursor-pointer transition-colors leading-snug line-clamp-2"
                        >
                          {lesson.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {lesson.description}
                        </p>
                      </div>

                      {/* Bottom Action Buttons */}
                      <div className="flex items-center gap-2 pt-4 mt-2 border-t border-slate-100">
                        <button
                          onClick={() => {
                            onSelectLesson(lesson);
                            playSound('click');
                          }}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors text-center"
                        >
                          Lý thuyết
                        </button>
                        <button
                          onClick={() => {
                            onStartPractice(lesson);
                            playSound('click');
                          }}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-2xs text-center"
                        >
                          Luyện tập (20)
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
