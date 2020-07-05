import { userActionTypes } from "../actionsTypes";

const initialState = {
    isloggedIn: false,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case userActionTypes.SET_USER_DETAILS:
            return {
                isloggedIn: true,
            };

        case userActionTypes.REMOVE_USER_DETAILS:
            return {
                isloggedIn: false,
            };

        default:
            return state;
    }
};

export default userReducer;