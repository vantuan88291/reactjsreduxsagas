import { put, call } from 'redux-saga/effects';
import { HomesTypes } from '../Redux/HomeRedux'


export function * fetchNews(api, action) {
    const { page } = action
    const response = yield call(api.getRate, page)

    console.log('response', response)

    if (response.ok && Array.isArray(response.data))
    yield put({ type: HomesTypes.HOMES_SUCCESS, payload: response.data});
    else {
        yield put({ type: HomesTypes.HOMES_FAILURE});
    }
}