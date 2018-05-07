import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

const enhance = compose(
    applyMiddleware(logger),
    composeWithDevTools(autoRehydrate()),
);

const store = createStore(reducer, undefined, enhance);

persistStore(store, { whitelist: ['counter'] });

export default store;
