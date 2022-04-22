import { types } from "../types/types";

const initialState = {
    id: '',
    products: []
};

export const cartReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.cartCreateNew:
            return {
                ...state,
                id: action.payload
            };

        case types.cartAddNewProduct:
            return {
                ...state,
                products: [...action.payload]
            };

        default:
            return state;
    };
};