import {combineReducers, createStore, applyMiddleware} from 'redux'
import { logger } from 'redux-logger'

export const reducers = combineReducers({
    home: require('./HomeRedux').reducer
})
export default (sagaMiddleware) => {
    return createStore(reducers,
        applyMiddleware(sagaMiddleware, logger))
}
