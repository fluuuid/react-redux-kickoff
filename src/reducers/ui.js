import { createAction, createReducer } from 'redux-act'

const initialState = {
  strings: {
    homeSection1Heading: 'Scavanger Hunt',
    homeSection1Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    homeSection1CTA: 'Let\'s Go',
    homeSection2Heading: 'An AR Scavanger Hunt',
    homeSection2Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    signUpPlaceholderName: 'Your Name',
    signUpPlaceholderCampus: 'Your Campus',
    getReady: 'Get Ready'
  }
}

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
