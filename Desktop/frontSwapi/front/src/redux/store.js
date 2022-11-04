import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice"
import charSlice from "./slices/characters/characterSlice";
import planetSlice from "./slices/planets/planetSlice";

export const store = configureStore({
    reducer:{    
        auth:authReducer,
        character: charSlice,
        planet: planetSlice
    },
});