import {combineReducers} from 'redux'
import users from './users'
import cartReducer from './cartReducer'

export default combineReducers({
  users: users,
  cart: cartReducer
})
