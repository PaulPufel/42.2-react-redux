import { createAppSlice } from "../../createAppSlice";
import { FeedbackCwSliceState } from "./styles";

const feedbackInitialState: FeedbackCwSliceState = {
  likeCount: 0,
  dislikeCount: 0
}

export const feedbackCwSlice = createAppSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackCwSliceState) => {
      state.likeCount = state.likeCount + 1
    }),
    addDislike: create.reducer((state: FeedbackCwSliceState) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    //способ очистки - вместо перезаписи свойств, нужно просто вернуть initialState
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    feedbackData: (state: FeedbackCwSliceState) => state
  }
})

export const feedbackSliceActions = feedbackCwSlice.actions;
export const feedbackSliceSelectors = feedbackCwSlice.selectors;
