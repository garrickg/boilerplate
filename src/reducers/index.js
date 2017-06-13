import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import items from './items'
import user from './user'

const rootReducer = combineReducers({
  items,
  user,
  routing: routerReducer
})

export default rootReducer
