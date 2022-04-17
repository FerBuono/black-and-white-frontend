import { types } from "../types/types";

const initialState = {
    isAdmin: true,
};

export const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.adminCheck:
            return {
                ...state,
                isAdmin: !state.isAdmin
            };
        default:
            return state;
    };
};