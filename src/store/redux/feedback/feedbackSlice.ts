import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackState {
  likes: number;
  dislikes: number;
}

const initialState: FeedbackState = {
  likes: 0,
  dislikes: 0,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    incrementLikes(state) {
      state.likes += 1;
    },
    incrementDislikes(state) {
      state.dislikes += 1;
    },
    resetFeedback(state) {
      state.likes = 0;
      state.dislikes = 0;
    },
  },
});

export const { incrementLikes, incrementDislikes, resetFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
