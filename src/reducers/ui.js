import { createAction, createReducer } from 'redux-act'

const initialState = {}

export const setOverlay = createAction('SET_OVERLAY')
export const clearOverlay = createAction('CLEAR_OVERLAY')

const Reducer = createReducer(
  {
    [setOverlay]: (state, payload) => ({
      ...state,
      overlay: {
        type:
          payload === undefined ||
          payload === 'error'
            ? payload
            : state.overlay,
        visible: true
      }
    }),
    [clearOverlay]: state => ({
      ...state,
      overlay: {
        ...state.overlay,
        visible: false
      }
    })
  },
  initialState
)

export default Reducer
