import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from '../reducers'

const middlewares = [promiseMiddleware()]

export default () => {
  // eslint-disable-next-line no-underscore-dangle
  const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancers = reduxCompose || compose
  const store = createStore(
    combineReducers({
      ...reducers
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
