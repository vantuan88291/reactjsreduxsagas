import {takeLatest, all } from 'redux-saga/effects';
import API from '../Config/Api'

import { HomesTypes } from '../Redux/HomeRedux'
import { fetchNews } from './HomeSagas'

const api = API.create()

export default function* rootSaga() {
    yield all([
        takeLatest(HomesTypes.HOMES_REQUEST, fetchNews, api)
    ]);
}