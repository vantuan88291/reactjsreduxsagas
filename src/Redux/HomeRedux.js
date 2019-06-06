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
    fetching: false,
    payload: null,
    error: false
})

// request the data from an api
export const request = (state) => {
    return state.merge({ fetching: true })
}

// successful api lookup
export const success = (state, action) => {
    const { payload } = action
    let data = []
    if (state.data != null) {
        data = payload == null ? state.data : state.data.concat(payload)
    }
    return state.merge({ fetching: false, data: state.data != null ? data : payload })
}

// Something went wrong somewhere.
export const failure = state =>
    state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HOMES_REQUEST]: request,
    [Types.HOMES_SUCCESS]: success,
    [Types.HOMES_FAILURE]: failure
})
