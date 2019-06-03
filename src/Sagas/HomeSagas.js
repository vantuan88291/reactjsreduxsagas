import { put, call } from 'redux-saga/effects';
import { HomesTypes } from '../Redux/HomeRedux'


export function* fetchNews(api, action) {
    const { data } = action
    // get current data from Store
    // const currentData = yield select(HomesSelectors.getData)
    // make the call to the api
    const response = yield call(api.getRoot, data)

    console.log('response', response)

    yield put({ type: HomesTypes.HOMES_SUCCESS, payload: 'okeeee'});
}