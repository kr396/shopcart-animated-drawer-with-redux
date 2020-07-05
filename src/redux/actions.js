import { RequestActionTypes, userActionTypes } from "./actionsTypes";

/**
 * Request actions types
 */
export const requestAction = () => ({
    type: RequestActionTypes.REQUEST
});

export const requestSuccessAction = () => ({
    type: RequestActionTypes.SUCCESS
});

export const requestFailureActiom = () => ({
    type: RequestActionTypes.FAILURE
});

/**
 * User action types
 */
export const setUserDetailsAction = () => ({
    type: userActionTypes.SET_USER_DETAILS
});

export const removeUserDetailsAction = () => ({
    type: userActionTypes.REMOVE_USER_DETAILS
});