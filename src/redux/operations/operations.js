import { requestAction, requestSuccessAction, setUserDetailsAction, removeUserDetailsAction } from "../actions"
import { navigate, navigateAndReset } from "../../services/navigationService";

/**
 * handles login click
 */
export const logIn = () => {
    return async dispatch => {
        dispatch(requestAction());
        setTimeout(() => {
            dispatch(requestSuccessAction());
            dispatch(setUserDetailsAction());
            navigateAndReset('home');
        }, 3000);
    }
};

/**
 * Handles logout click
 */
export const logOut = () => {
    return async dispatch => {
        dispatch(requestAction());
        setTimeout(() => {
            dispatch(removeUserDetailsAction());
            dispatch(requestSuccessAction());
            navigateAndReset('auth');
        }, 1000);
    }
};