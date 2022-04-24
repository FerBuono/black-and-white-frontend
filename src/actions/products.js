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

        !body.newProduct 
            ? console.log(body.msg)
            : dispatch(productsUpdate(body.newProductsList));
    };
};

const productsAddNew = (product) => ({
    type: types.productsAddNew,
    payload: product
});

export const productsSetActive = (product, actionToDo) => ({
    type: types.productsSetActive,
    payload: {actionToDo, product}
});

export const productsUnsetActive = () => ({
    type: types.productsUnsetActive
});

export const productsStartUpdate = (id, product) => {
    return async(dispatch) => {
        const resp = await fetchEndPoint(`products/${id}`, product, 'PUT');
        const body = await resp.json();
        
        !body.newProductsList 
            ? console.log(body.msg)
            : dispatch(productsUpdate(body.newProductsList));
    };
};

const productsUpdate = (newProductsList) => ({
    type: types.productsUpdate,
    payload: newProductsList
});

export const productsStartDelete = (id) => {
    return async(dispatch) => {
        const resp = await fetchEndPoint(`products/${id}`, {}, 'DELETE');
        const body = await resp.json();

        !body.newProductsList 
            ? console.log(body.msg)
            : dispatch(productsUpdate(body.newProductsList));
    };
};

export const productsDelete = (newProductsList) => ({
    type: types.productsDelete,
    payload: newProductsList
});