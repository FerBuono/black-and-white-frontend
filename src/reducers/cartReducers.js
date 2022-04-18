import { types } from "../types/types";

const initialState = {
    products: [],
}

export const cartReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.cartAddNewProduct:
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        default:
            return state;
    };
};