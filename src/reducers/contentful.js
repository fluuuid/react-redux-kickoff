import { createReducer } from 'redux-act'

const initialState = {
  campus: {
    campus1: 'Campus 1',
    campus2: 'Campus 2',
    campus3: 'Campus 3',
    campus4: 'Campus 4'
  }
}

const Reducer = createReducer(
  {},
  initialState
)

export default Reducer
