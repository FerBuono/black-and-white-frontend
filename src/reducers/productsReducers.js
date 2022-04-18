import { types } from "../types/types";

const initialState = {
    loading: true,
    products: [],
}

export const productsReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.productsLoad:
            return {
                ...state,
                products: [...action.payload]
            };
        case types.productsAddNew:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case types.productsUpdate:
            return {
                ...state,
                products: [...action.payload]
            };
        case types.productsDelete:
            return {
                ...state,
                products: [...action.payload]
            };
        
        default:
            return state;
    };
};