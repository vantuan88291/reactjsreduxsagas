import { put, call } from 'redux-saga/effects';
import { HomesTypes } from '../Redux/HomeRedux'


export function * fetchNews(api, action) {
    const { data } = action
    const response = yield call(api.getRate, data)

    console.log('response', response)

    if (response.ok)
    yield put({ type: HomesTypes.HOMES_SUCCESS, payload: response.data.articles[2].title});
}