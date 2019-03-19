import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

import createReducer from './reducers';

import fromJS from './helpers/fromJS';
import gaMiddleware from './helpers/Analytics';

export const history = createBrowserHistory();

const SetTransform = createTransform(
    (inboundState) => {
        if (inboundState.toJS) {
            return inboundState.toJS();
        }
        return {...inboundState};
    },
    (outboundState) => {
        try {
            return fromJS(outboundState);
        } catch (error) {
            console.error("error", error);
        }
    }
);

const persistConfig = {
    transforms: [SetTransform],
    key: 'root',
    throttle: 1000,
    keyPrefix: 'easy-admin-',
    storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ['auth', 'session']
};

const persistedReducer = persistReducer(persistConfig, createReducer(history));

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, gaMiddleware, routerMiddleware(history)))
);

export const persistor = persistStore(store);

export function injectAsyncReducers(asyncReducers = {}) {
    store.replaceReducer(persistReducer(persistConfig, createReducer(history, asyncReducers)));
}
