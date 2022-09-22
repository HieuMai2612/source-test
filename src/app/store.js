import { configureStore } from '@reduxjs/toolkit';
import playerSlice from '../features/PlayerSlice/playerSlice';
import questionSlice from '../features/QuestionSlice/questionSlice';
import resultSlice from '../features/Result/result';
export const store = configureStore({
  reducer: {
    player: playerSlice,
    question: questionSlice,
    result: resultSlice,
  },
});

