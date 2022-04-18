import { fetchEndPoint } from "../helpers/fetch";
import { types } from "../types/types";


export const productsStartLoading = () => {
    return async(dispatch) => {
        const resp = await fetchEndPoint('products');
        const body = await resp.json();
        
        dispatch(productsLoaded(body.productsList));
    };
};

const productsLoaded = (products) => ({
    type: types.productsLoad,
    payload: products
});

export const productsStartAddNew = (product) => {
    return async(dispatch) => {
        const resp = await fetchEndPoint('products', product, 'POST');
        const body = await resp.json();
        console.log(body.newProductsList)
        dispatch(productsAddNew(body.newProduct));
    };
};

const productsAddNew = (product) => ({
    type: types.productsAddNew,
    payload: product
});

export const productsStartUpdate = (id, product) => {
    return async(dispatch) => {
        const resp = await fetchEndPoint(`products/${id}`, product, 'PUT');
        const body = await resp.json();

        dispatch(productsUpdate(body.newProductsList));
    };
};

const productsUpdate = (newProductsList) => ({
    type: types.productsUpdate,
    payload: newProductsList
});

export const productsStartDelete = (id) => {
    console.log(id)
    return async(dispatch) => {
        const resp = await fetchEndPoint(`products/${id}`, {}, 'DELETE');
        console.log(resp)
        const body = await resp.json();

        dispatch(productsDelete(body.newProductsList));
    };
};

export const productsDelete = (newProductsList) => ({
    type: types.productsDelete,
    payload: newProductsList
});