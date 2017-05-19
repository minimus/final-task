import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import menu from './modules/menu'
import home from './modules/home'
import category from './modules/category'
import offer from './modules/offer'
import comparison from './modules/comparison'
import search from './modules/search'
import searchbar from './modules/searchbar'
import breadcrumbs from './modules/breadcrumbs'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware,
)(createStore)

const reducer = combineReducers({
  menu,
  home,
  category,
  offer,
  comparison,
  search,
  searchbar,
  breadcrumbs,
})

export default initialState => createStoreWithMiddleware(reducer, initialState)
