import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    requestState: requestReducer,
    userState: userReducer,
});

export default rootReducer;