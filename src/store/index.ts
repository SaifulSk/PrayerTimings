import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { sagas } from '../sagas';
import { PersistPartial } from "redux-persist/es/persistReducer";

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);

// add the redux dev tools process.env.NODE_ENV !== 'production' &&
if ((['prod', 'stage'].indexOf((process.env as any).REACT_APP_STAGE) < 0) && composeWithDevTools()) {
  middleware = compose(middleware, composeWithDevTools());
}

/**
 * TODO: add registration in blacklist
 */

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['form', 'user', 'event', 'loader']
  blacklist: ['form', 'loader']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore<any & PersistPartial, any, any, any>(persistedReducer, middleware);
const persistor = persistStore(store)


sagaMiddleware.run(sagas);

export { store, persistor };