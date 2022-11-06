import { createSlice } from "@reduxjs/toolkit";

export const charsSlice = createSlice({
  name: "character",
  initialState: {
    allChars: [],
    character: [],
  },
  reducers: {
    allChars: (state, { payload }) => {
      state.allChars = payload;
    },
    showCharacter: (state, { payload }) => {
      state.character = payload;
    }
  },
});

export const { allChars, showCharacter } =
charsSlice.actions;

export default charsSlice.reducer;
