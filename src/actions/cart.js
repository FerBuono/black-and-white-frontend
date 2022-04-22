import { fetchEndPoint } from "../helpers/fetch";
import { types } from "../types/types";

export const cartStartCreatNew = () => {
    return async(dispatch) => {
        const resp = await fetchEndPoint('cart', {}, 'POST');
        const body = await resp.json();

        dispatch(cartCreateNew(body.newCartId));
    };
};

const cartCreateNew = (id) => ({
    type: types.cartCreateNew,
    payload: id
});

export const cartStartAddNewProduct = (cartId, product) => {
    return async(dispatch) => {
        const resp = await fetchEndPoint(`cart/${cartId}/products`, product, 'POST');
        const body = await resp.json();
        console.log(body);
        dispatch(cartAddNewProduct(body.cart));
    };
};

const cartAddNewProduct = (cart) => ({
    type: types.cartAddNewProduct,
    payload: cart
});

// export const cartStartRemoveProduct = (id) => {
//     return async(dispatch) => {
//         const resp = await fetchEndPoint()
//     };
// }

