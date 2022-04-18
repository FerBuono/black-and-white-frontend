import { combineReducers } from 'redux';
import { cartReducers } from './cartReducers';
import { productsReducers } from './productsReducers';
import { uiReducers } from './uiReducers';

export const rootReducer = combineReducers({
    ui: uiReducers,
    cart: cartReducers,
    products: productsReducers
});