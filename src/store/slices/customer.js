// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    customers: [],
    orders: [],
    products: [],
    productreviews: [],
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
        getCustomersSuccess(state, action) {
            state.customers = action.payload;
        },

        // GET CUSTOMERS
        getBooksSuccess(state, action) {
            state.books = action.payload;
        },

        // GET ORDERS
        getOrdersSuccess(state, action) {
            state.orders = action.payload;
        },

        // GET PRODUCTS
        getProductsSuccess(state, action) {
            state.products = action.payload;
        },

        // GET PRODUCT REVIEWS
        getProductReviewsSuccess(state, action) {
            state.productreviews = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getCustomers() {
    return async () => {
        try {
            const response = await axios.get('/api/customer/list');
            dispatch(slice.actions.getCustomersSuccess(response.data.customers));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getBooks() {
    return async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const res = await fetch("http://localhost:8000/author/book-publish-list", requestOptions)
            const data = await res.json()
            dispatch(slice.actions.getBooksSuccess(data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getOrders() {
    return async () => {
        try {
            const response = await axios.get('/api/customer/order/list');
            dispatch(slice.actions.getOrdersSuccess(response.data.orders));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getProducts() {
    return async () => {
        try {
            const response = await axios.get('/api/customer/product/list');
            dispatch(slice.actions.getProductsSuccess(response.data.products));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getProductReviews() {
    return async () => {
        try {
            const response = await axios.get('/api/customer/product/reviews');
            dispatch(slice.actions.getProductReviewsSuccess(response.data.productreviews));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
