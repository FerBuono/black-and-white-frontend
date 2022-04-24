import { productsStartAddNew, productsStartDelete, productsStartUpdate, productsUnsetActive } from '../actions/products';
import { toogleAdminPanel } from '../actions/ui';


export const handleSubmitAdd = (e, dispatch) => {
    e.preventDefault();

    const {name, desc, code, stock, price, url} = e.target;
    const product = {
        name: name.value,
        desc: desc.value,
        code: code.value,
        stock: stock.value,
        price: price.value,
        url: url.value,
    };

    dispatch(productsStartAddNew(product));
    dispatch(toogleAdminPanel());
    e.target.reset();
};

export const handleSubmitUpdate = (e, dispatch) => {
    e.preventDefault();
    
    const {id, name, desc, code, stock, price, url} = e.target;
    const product = {
        name: name.value,
        desc: desc.value,
        code: code.value,
        stock: stock.value,
        price: price.value,
        url: url.value,
    };

    const newProduct = {};

    for(const key in product) {
        if(product[key] !== '') {
            newProduct[key] = product[key];
        };
    };

    dispatch(productsStartUpdate(id.value, newProduct));
    dispatch(toogleAdminPanel());
    dispatch(productsUnsetActive());
    e.target.reset();
};

export const handleSubmitDelete = (e, dispatch) => {
    e.preventDefault();

    const {id} = e.target;

    dispatch(productsStartDelete(id.value));
    dispatch(toogleAdminPanel());
    dispatch(productsUnsetActive());
    e.target.reset();
};