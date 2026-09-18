import { Question, ShuffledQuestion } from '../types';

/**
 * Standard Fisher-Yates shuffle for generic arrays
 */
export function fisherYatesShuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffle both question sequence AND choices order (A, B, C, D)
 * while accurately maintaining the correct answer reference.
 */
export function shuffleQuestions(questions: Question[]): ShuffledQuestion[] {
  // 1. Shuffle the question list order
  const shuffledList = fisherYatesShuffle(questions);

  // 2. For each question, shuffle options while preserving the correct option
  return shuffledList.map((q) => {
    const originalCorrectOptionText = q.options[q.correctIndex];
    
    // Create option objects with original text
    const optionsWithIndices = q.options.map((text, idx) => ({ text, originalIdx: idx }));
    
    // Shuffle the options using Fisher-Yates
    const shuffledOptions = fisherYatesShuffle(optionsWithIndices);
    
    // Find new index of the correct option
    const newCorrectIndex = shuffledOptions.findIndex(
      (opt) => opt.text === originalCorrectOptionText
    );

    return {
      ...q,
      options: shuffledOptions.map((opt) => opt.text),
      correctIndex: newCorrectIndex,
      originalCorrectIndex: q.correctIndex,
    };
  });
}

export const prepareQuestionsWithShuffledOptions = shuffleQuestions;
