import { types } from "../types/types";


const cartAddNewProduct = (product) => ({
    type: types.cartAddNewProduct,
    payload: product
});

export const cartUpdateProduct = (id, instruction) => ({
    type: types.cartUpdateProduct,
    payload: {id, instruction}
})