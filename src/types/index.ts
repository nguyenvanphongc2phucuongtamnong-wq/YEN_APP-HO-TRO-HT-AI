export type NavTab = 
  | 'dashboard' 
  | 'lessons' 
  | 'practice' 
  | 'labs' 
  | 'games' 
  | 'quiz15' 
  | 'mock45' 
  | 'progress';

export type QuestionLevel = 'basic' | 'understanding' | 'advanced' | 'high';

export interface Question {
  id: string;
  lessonId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  level: QuestionLevel;
}

export interface ShuffledQuestion extends Question {
  originalCorrectIndex: number;
}

export interface Lesson {
  id: number;
  chapterId: number;
  chapterTitle: string;
  title: string;
  pageRange: string;
  description: string;
  summary: string[];
  formulas: { name: string; formula: string; note?: string; unit?: string }[];
  example: {
    problem: string;
    solution: string;
  };
  theory?: {
    keyPoints: string[];
    formulas?: { name: string; formula: string; unit?: string }[];
    applications?: string[];
  };
}

export interface ExamResult {
  id: string;
  type: '15min' | '45min' | 'quiz15' | 'mock45';
  title?: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  durationSeconds: number;
  timeSpentSeconds?: number;
  questions?: {
    question: string;
    options: string[];
    userAnswer: number | null;
    correctAnswer: number;
    explanation: string;
    isCorrect: boolean;
  }[];
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserProgress {
  completedLessons: Record<number, number>; // lessonId -> score
  completedLessonList: number[];
  achievements: string[];
  practiceScores: Record<number, { completed: boolean; score: number; total: number; bestPercentage: number }>;
  examHistory: ExamResult[];
  gamesPlayed: {
    millionaire: number;
    memoryMatch: number;
    speedRace: number;
    highScores: {
      millionaireMaxWon: number;
      memoryBestTime: number; // in seconds
      speedRaceMaxScore: number;
    };
  };
  streakDays: number;
  lastActiveDate: string;
  soundEnabled: boolean;
}
