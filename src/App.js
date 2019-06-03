import React from 'react'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Layout from './Containter/Layout'
import createStore from './Redux';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

export default () => (
    <Provider store={store}>
        <Layout/>
    </Provider>
)
