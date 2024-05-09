import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        searchMovies:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        tmdbMovieResults:(state,action)=>{
            state.searchMovies=action.payload

        }

    }
})

export default gptSlice.reducer

export const {toggleGptSearchView,tmdbMovieResults} =gptSlice.actions