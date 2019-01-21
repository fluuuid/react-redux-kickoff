import { createAction, createReducer } from 'redux-act'
import { pending, resolve, reject } from '../utils/actions'

const initialState = {
  hasCamera: false,
  hasLocation: false
}

export const getCamera = createAction('GET_CAMERA', () => ({ promise: requestCamera }))
export const getLocation = createAction('GET_LOCATION', () => ({ promise: requestLocation }))

const requestCamera = async () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      return stream
    } catch (e) {
      console.log(e)
    }
  }
}

const requestLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({ lat: position.coords.latitude, lng: position.coords.longitude })
  }, (error) => reject(error))
})

const Reducer = createReducer(
  {
    [pending(getCamera)]: state => ({
      ...state,
      error: undefined
    }),
    [resolve(getCamera)]: (state, payload, meta) => ({
      ...state,
      hasCamera: true
    }),
    [reject(getCamera)]: (state, payload, meta) => ({
      ...state
    }),

    [pending(getLocation)]: state => ({
      ...state,
      error: undefined
    }),
    [resolve(getLocation)]: (state, payload, meta) => ({
      ...state,
      hasLocation: true
    }),
    [reject(getLocation)]: (state, payload, meta) => ({
      ...state
    })
  },
  initialState
)

export default Reducer
