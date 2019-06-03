import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    homesRequest: ['data'],
    homesSuccess: ['payload'],
    homesFailure: null,
    resetAll: null
})

export const HomesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetching: null,
    payload: null,
    error: 'abcd'
})

// request the data from an api
export const request = (state, { data }) =>
    state.merge({ error: 'test', data, payload: null })

// successful api lookup
export const success = (state, action) => {
    const { payload } = action
    return state.merge({ error: payload })
}

// Something went wrong somewhere.
export const failure = state =>
    state.merge({ fetching: false, error: true, payload: null })
export const resetAll = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HOMES_REQUEST]: request,
    [Types.HOMES_SUCCESS]: success,
    [Types.HOMES_FAILURE]: failure,
    [Types.RESET_ALL]: resetAll
})
