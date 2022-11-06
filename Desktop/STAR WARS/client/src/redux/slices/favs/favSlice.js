import {createSlice} from "@reduxjs/toolkit"

export const favSlice = createSlice({
    name:"fav",
    initialState:{
        favs:[],
    },
    reducers:{
        addFav:(state,action)=>{
            state.favs = action.payload
        },
        removeFav:(state, action)=>{
            state.favs = action.payload
        }
}
})

export const {addFav, removeFav}= favSlice.actions;

export default favSlice.reducer