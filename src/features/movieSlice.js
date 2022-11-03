import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: null
    },
    reducers: {
        showMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { showMovie } = movieSlice.actions

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;