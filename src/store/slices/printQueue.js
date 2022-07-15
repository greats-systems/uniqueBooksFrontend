// third-party
import { createSlice } from '@reduxjs/toolkit';

import useAuth from 'hooks/useAuth';

// project imports
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    printQueue: [],
};

const slice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // // GET CUSTOMERS
        // getBooksSuccess(state, action) {
        //     state.books = action.payload;
        // },

                // GET CUSTOMERS
        getPrintQueueSuccess(state, action) {
            state.printQueue = action.payload;
        },

    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


export function getPrintQueue() {
    // const { url } = useAuth();

    return async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const res = await fetch("https://uniquebackend.malingreatssmartsystems.co.zw/author/book-print-list", requestOptions)
            const data = await res.json()
            dispatch(slice.actions.getPrintQueueSuccess(data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}


