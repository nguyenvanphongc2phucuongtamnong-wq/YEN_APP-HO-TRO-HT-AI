import { Question } from '../types';
import { CHAPTER_1_QUESTIONS } from './questions/chapter1';
import { CHAPTER_2_QUESTIONS } from './questions/chapter2';
import { CHAPTER_3_QUESTIONS } from './questions/chapter3';
import { CHAPTER_4_QUESTIONS } from './questions/chapter4';
import { shuffleQuestions, prepareQuestionsWithShuffledOptions } from '../utils/shuffle';

export const ALL_QUESTIONS: Question[] = [
  ...CHAPTER_1_QUESTIONS,
  ...CHAPTER_2_QUESTIONS,
  ...CHAPTER_3_QUESTIONS,
  ...CHAPTER_4_QUESTIONS,
];

// Helper: get exactly 20 questions for a specific lesson
export function getQuestionsByLesson(lessonId: number): Question[] {
  const list = ALL_QUESTIONS.filter((q) => q.lessonId === lessonId);
  return prepareQuestionsWithShuffledOptions(shuffleQuestions(list));
}

// Helper: get questions for a chapter
export function getQuestionsByChapter(chapterId: number): Question[] {
  let lessonRange: number[] = [];
  if (chapterId === 1) lessonRange = [1, 2, 3, 4];
  else if (chapterId === 2) lessonRange = [5, 6, 7, 8, 9, 10];
  else if (chapterId === 3) lessonRange = [11, 12, 13, 14, 15];
  else if (chapterId === 4) lessonRange = [16, 17];

  const filtered = ALL_QUESTIONS.filter((q) => lessonRange.includes(q.lessonId));
  return prepareQuestionsWithShuffledOptions(shuffleQuestions(filtered));
}

// Helper: 15-minute quick test (15 questions)
export function getQuiz15Questions(chapterId?: number): Question[] {
  let pool = ALL_QUESTIONS;
  if (chapterId && chapterId > 0) {
    let lessonRange: number[] = [];
    if (chapterId === 1) lessonRange = [1, 2, 3, 4];
    else if (chapterId === 2) lessonRange = [5, 6, 7, 8, 9, 10];
    else if (chapterId === 3) lessonRange = [11, 12, 13, 14, 15];
    else if (chapterId === 4) lessonRange = [16, 17];
    pool = ALL_QUESTIONS.filter((q) => lessonRange.includes(q.lessonId));
  }
  const shuffled = shuffleQuestions(pool);
  const selected = shuffled.slice(0, 15);
  return prepareQuestionsWithShuffledOptions(selected);
}

// Helper: 45-minute mock exam (30 questions)
export function getExam45Questions(examType: 'hk1' | 'hk2' | 'total'): Question[] {
  let pool = ALL_QUESTIONS;
  if (examType === 'hk1') {
    // HK1: Chapters 1 & 2 (Lessons 1-10)
    pool = ALL_QUESTIONS.filter((q) => q.lessonId >= 1 && q.lessonId <= 10);
  } else if (examType === 'hk2') {
    // HK2: Chapters 3 & 4 (Lessons 11-17)
    pool = ALL_QUESTIONS.filter((q) => q.lessonId >= 11 && q.lessonId <= 17);
  }
  const shuffled = shuffleQuestions(pool);
  const selected = shuffled.slice(0, 30);
  return prepareQuestionsWithShuffledOptions(selected);
}
