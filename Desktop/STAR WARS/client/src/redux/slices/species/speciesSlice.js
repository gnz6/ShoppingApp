import { createSlice } from "@reduxjs/toolkit";

export const speciesSlice = createSlice({
  name: "specie",
  initialState: {
    allSpecies: [],
    specie: [],
  },
  reducers: {
    allSpecies: (state, { payload }) => {
      state.allSpecies = payload;
    },
    showSpecie: (state, { payload }) => {
      state.specie = payload;
    }
  },
});

export const { allSpecies, showSpecie } =
speciesSlice.actions;

export default speciesSlice.reducer;
