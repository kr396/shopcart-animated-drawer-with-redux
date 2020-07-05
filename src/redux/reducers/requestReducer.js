import { RequestActionTypes } from "../actionsTypes";

const initialState = {
    loading: false,
};

const requestReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case RequestActionTypes.REQUEST:
            return {
                loading: true,
            };

        case RequestActionTypes.SUCCESS:
            return {
                loading: false,
            };

        case RequestActionTypes.FAILURE:
            return {
                loading: false,
            };

        default:
            return state;
    }
};

export default requestReducer;