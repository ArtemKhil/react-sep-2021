import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services";


const initialState = {
    movies: [],
    status: null,
    error: null
};

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAll()
            return movies

        } catch (e) {
            rejectWithValue(e.message)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {

        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer