import { createSlice } from "@reduxjs/toolkit";

export const planetSlice = createSlice({
  name: "planet",
  initialState: {
    allPlanets: [],
    planet: [],
  },
  reducers: {
    allPlanets: (state, { payload }) => {
      state.allPlanets = payload;
    },
    showPlanet: (state, { payload }) => {
      state.planet = payload;
    }
  },
});

export const { allPlanets, showPlanet } =
planetSlice.actions;

export default planetSlice.reducer;
