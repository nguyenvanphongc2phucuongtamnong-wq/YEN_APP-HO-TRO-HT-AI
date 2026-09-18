import { UserProgress, ExamResult, AchievementBadge } from '../types';

const STORAGE_KEY = 'vatly9_user_progress_v2';
const EXAM_KEY = 'vatly9_exam_history_v2';

export const INITIAL_BADGES: AchievementBadge[] = [
  {
    id: 'first_lesson',
    title: 'Tân Binh Vật Lý 9',
    description: 'Hoàn thành bài lý thuyết hoặc bài luyện tập đầu tiên',
    icon: '🌱',
    unlocked: false,
  },
  {
    id: 'streak_3',
    title: 'Chăm Chỉ Bền Bỉ',
    description: 'Học tập 3 ngày liên tiếp',
    icon: '🔥',
    unlocked: false,
  },
  {
    id: 'perfect_practice',
    title: 'Bách Phát Bách Trúng',
    description: 'Đạt điểm tối đa 10/10 trong một bài luyện tập',
    icon: '🎯',
    unlocked: false,
  },
  {
    id: 'lab_explorer',
    title: 'Nhà Thực Nghiệm Nhí',
    description: 'Thực hành đầy đủ 5 phòng thí nghiệm ảo',
    icon: '🧪',
    unlocked: false,
  },
  {
    id: 'millionaire_hero',
    title: 'Nhà Thông Thái Vật Lý',
    description: 'Vượt qua mốc câu số 10 trong Ai Là Triệu Phú',
    icon: '🏆',
    unlocked: false,
  },
  {
    id: 'speed_demon',
    title: 'Tia Chớp Năng Lượng',
    description: 'Đạt trên 1500 điểm trong Đua Tốc Độ 60s',
    icon: '⚡',
    unlocked: false,
  },
  {
    id: 'quiz_master',
    title: 'Thủ Khoa 15 Phút',
    description: 'Đạt điểm 10 tuyệt đối trong bài kiểm tra 15 phút',
    icon: '⏱️',
    unlocked: false,
  },
  {
    id: 'exam_champion',
    title: 'Chiến Binh Thi Thử',
    description: 'Hoàn thành bài thi thử 45 phút đạt từ 8.0 điểm trở lên',
    icon: '🎓',
    unlocked: false,
  },
];

export function getInitialProgress(): UserProgress {
  return {
    completedLessons: {},
    completedLessonList: [],
    achievements: [],
    practiceScores: {},
    examHistory: [],
    gamesPlayed: {
      millionaire: 0,
      memoryMatch: 0,
      speedRace: 0,
      highScores: {
        millionaireMaxWon: 0,
        memoryBestTime: 0,
        speedRaceMaxScore: 0,
      },
    },
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    soundEnabled: true,
  };
}

export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') return getInitialProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialProgress();
    const parsed = JSON.parse(raw);
    return {
      ...getInitialProgress(),
      ...parsed,
      completedLessons: parsed.completedLessons || {},
      completedLessonList: parsed.completedLessonList || Object.keys(parsed.completedLessons || {}).map(Number),
      achievements: parsed.achievements || [],
    };
  } catch (e) {
    console.error('Failed to load user progress', e);
    return getInitialProgress();
  }
}

export const loadProgress = getUserProgress;

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function saveLessonProgress(lessonId: number, score: number): void {
  const current = getUserProgress();
  const updatedScores = {
    ...current.completedLessons,
    [lessonId]: Math.max(score, current.completedLessons[lessonId] || 0),
  };
  const list = Object.keys(updatedScores).map(Number);
  const achievements = [...current.achievements];
  if (!achievements.includes('first_lesson')) achievements.push('first_lesson');
  if (score >= 10 && !achievements.includes('perfect_practice')) achievements.push('perfect_practice');

  saveProgress({
    ...current,
    completedLessons: updatedScores,
    completedLessonList: list,
    achievements,
  });
}

export function getLessonProgress(lessonId: number): number | undefined {
  const current = getUserProgress();
  return current.completedLessons[lessonId];
}

export function getExamHistory(): ExamResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EXAM_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getExamHistory();
    const updated = [result, ...existing];
    localStorage.setItem(EXAM_KEY, JSON.stringify(updated));

    const progress = getUserProgress();
    const achievements = [...progress.achievements];
    if (result.score >= 10 && !achievements.includes('quiz_master')) {
      achievements.push('quiz_master');
    }
    if (result.score >= 8 && result.type === '45min' && !achievements.includes('exam_champion')) {
      achievements.push('exam_champion');
    }

    saveProgress({
      ...progress,
      examHistory: updated,
      achievements,
    });
  } catch (e) {
    console.error('Failed to save exam result', e);
  }
}

export function clearAllData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(EXAM_KEY);
  localStorage.removeItem('vatly9_speed_highscore');
  localStorage.removeItem('vatly9_ai_chat');
}
