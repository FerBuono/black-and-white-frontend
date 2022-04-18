import { types } from "../types/types";

const initialState = {
    adminPanel: false,
    cartPanel: false,
};

export const uiReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.uiAdminPanel:
            return {
                ...state,
                adminPanel: !state.adminPanel
            };
        case types.uiCartPanel:
            return {
                ...state,
                cartPanel: !state.cartPanel
            };
        default:
            return state;
    };
};