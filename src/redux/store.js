import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(persistedReducer, middleware);
export let persistor = persistStore(store);