import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    allFilms: [],
    film: [],
  },
  reducers: {
    allFilms: (state, { payload }) => {
      state.allFilms = payload;
    },
    showFilm: (state, { payload }) => {
      state.film = payload;
    }
  },
});

export const { allFilms, showFilm } =
filmSlice.actions;

export default filmSlice.reducer;
