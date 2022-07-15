// third-party
import { createSlice } from '@reduxjs/toolkit';
import useAuth from 'hooks/useAuth';

// project imports
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    books: [],
};

const slice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET CUSTOMERS
        getBooksSuccess(state, action) {
            state.books = action.payload;
        },

    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
// const { url } = useAuth();

export function getBooks() {
    
    return async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const res = await fetch("https://uniquebackend.malingreatssmartsystems.co.zw/author/book-publish-list", requestOptions)
            const data = await res.json()
            dispatch(slice.actions.getBooksSuccess(data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}


