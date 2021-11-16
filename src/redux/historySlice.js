import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
      history: [],
      score: 0,
      roundCount: 0

  },
  status: "idle",
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.value.history.push(action.payload);
    },
    scoreBoard: (state, action) => {
        state.value.score += action.payload;
    },
    increaseRound: (state) => {
      state.value.roundCount += 1;
    }
  },
});

export const { addHistory, scoreBoard, increaseRound } = historySlice.actions;
export default historySlice.reducer;
export const history = (state) => state.history.value.history;
export const roundCount = (state) => state.history.value.roundCount;
export const score = (state) => state.history.value.score;

