import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
      history: [],
      score: 0

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
    }
  },
});

export const { addHistory, scoreBoard } = historySlice.actions;
export default historySlice.reducer;
export const history = (state) => state.history.value.history;
