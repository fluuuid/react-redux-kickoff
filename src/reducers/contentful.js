import { createReducer } from 'redux-act'

const initialState = {
  strings: {
    homeSection1Heading: 'Scavanger Hunt',
    homeSection1Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    homeSection1CTA: 'Let\'s Go',
    homeSection2Heading: 'An AR Scavanger Hunt',
    homeSection2Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    signUpPlaceholderName: 'Your Name',
    signUpPlaceholderCampus: 'Your Campus',
    allowLocation: 'Before we start, we need to get access to your location, click below to allow',
    allowLocationCTA: 'Allow location',
    allowCamera: 'Now allow access to your camera',
    allowCameraCTA: 'Allow Camera',
    getReady: 'Get Ready'
  },
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
