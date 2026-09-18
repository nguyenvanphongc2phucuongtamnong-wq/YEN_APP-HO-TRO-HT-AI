import React, { useState } from 'react';
import { Header, TabType } from './components/layout/Header';
import { LessonsListView } from './components/lessons/LessonsListView';
import { LessonView } from './components/lessons/LessonView';
import { PracticeView } from './components/exam/PracticeView';
import { LabsHubView } from './components/labs/LabsHubView';
import { GamesHubView } from './components/games/GamesHubView';
import { ExamHubView } from './components/exam/ExamHubView';
import { TimedExamView } from './components/exam/TimedExamView';
import { AITutorView } from './components/tutor/AITutorView';
import { ProgressView } from './components/dashboard/ProgressView';
import { Lesson } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('lessons');

  // Lessons sub-state
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [practiceLesson, setPracticeLesson] = useState<Lesson | null>(null);

  // Labs sub-state
  const [activeLabId, setActiveLabId] = useState<string>('refraction');

  // Exam sub-state
  const [activeExamType, setActiveExamType] = useState<'quiz15' | 'exam45_hk1' | 'exam45_hk2' | null>(null);

  // AI Tutor sub-state
  const [aiPrompt, setAiPrompt] = useState<string>('');

  // Handle switching tabs
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Reset any active sub-flow when navigating via top bar
    if (tab === 'lessons') {
      setSelectedLesson(null);
      setPracticeLesson(null);
    } else if (tab === 'exam') {
      setActiveExamType(null);
    }
  };

  // From Lesson: Open Practice
  const handleStartPractice = (lesson: Lesson) => {
    setPracticeLesson(lesson);
    setSelectedLesson(null);
  };

  // From Lesson: Open Lab
  const handleOpenLabFromLesson = (labId: string) => {
    setActiveLabId(labId);
    setActiveTab('labs');
  };

  // Ask AI helper
  const handleAskAI = (promptText: string) => {
    setAiPrompt(promptText);
    setActiveTab('tutor');
  };

  // From Exam Hub: Start Exam
  const handleStartExam = (type: 'quiz15' | 'exam45_hk1' | 'exam45_hk2') => {
    setActiveExamType(type);
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Persistent Navigation Header */}
      <Header activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 1. LESSONS TAB */}
        {activeTab === 'lessons' && (
          <>
            {practiceLesson ? (
              <PracticeView
                lesson={practiceLesson}
                onBack={() => setPracticeLesson(null)}
                onAskAI={handleAskAI}
              />
            ) : selectedLesson ? (
              <LessonView
                lesson={selectedLesson}
                onBack={() => setSelectedLesson(null)}
                onStartPractice={handleStartPractice}
                onOpenLab={handleOpenLabFromLesson}
                onAskAI={handleAskAI}
              />
            ) : (
              <LessonsListView
                onSelectLesson={(lesson) => setSelectedLesson(lesson)}
                onStartPractice={handleStartPractice}
              />
            )}
          </>
        )}

        {/* 2. VIRTUAL LABS TAB */}
        {activeTab === 'labs' && <LabsHubView initialLabId={activeLabId} />}

        {/* 3. MINI GAMES TAB */}
        {activeTab === 'games' && <GamesHubView />}

        {/* 4. EXAMS & TESTS TAB */}
        {activeTab === 'exam' && (
          <>
            {activeExamType ? (
              <TimedExamView
                examType={activeExamType}
                onBack={() => setActiveExamType(null)}
                onAskAI={handleAskAI}
              />
            ) : (
              <ExamHubView onStartExam={handleStartExam} />
            )}
          </>
        )}

        {/* 5. AI TUTOR CHAT TAB */}
        {activeTab === 'tutor' && <AITutorView initialPrompt={aiPrompt} />}

        {/* 6. PROGRESS & ACHIEVEMENTS TAB */}
        {activeTab === 'progress' && <ProgressView />}
      </main>

      {/* Modern Clean Footer */}
      <footer className="border-t border-slate-200 bg-white/70 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="font-bold text-slate-700">VẬT LÝ 9 – HỌC MÀ CHƠI</span>
            <span>•</span>
            <span>Bộ sách Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <div className="text-slate-400">
            Ngân hàng 340 câu hỏi trắc nghiệm & 5 thí nghiệm ảo tương tác
          </div>
        </div>
      </footer>
    </div>
  );
}
