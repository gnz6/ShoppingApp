import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice"
import charSlice from "./slices/characters/characterSlice";
import planetSlice from "./slices/planets/planetSlice";
import speciesSlice from "./slices/species/speciesSlice";
import filmSlice from "./slices/films/filmSlice"
export const store = configureStore({
    reducer:{    
        auth:authReducer,
        character: charSlice,
        planet: planetSlice,
        species: speciesSlice,
        films: filmSlice
    },
});