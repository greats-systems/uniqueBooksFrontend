// third-party
import { createSlice } from '@reduxjs/toolkit';
import useAuth from 'hooks/useAuth';

// project imports
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    authors: [],
};

const slice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET AUTHORS
        getAuthorsSuccess(state, action) {
            state.authors = action.payload;
        },

    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
// const { url } = useAuth();

export function getAuthors() {
    
    return async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const res = await fetch("http://localhost:8000/author/author-profile-list", requestOptions)
            const data = await res.json()
            dispatch(slice.actions.getAuthorsSuccess(data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}


