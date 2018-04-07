import { combineReducers } from 'redux'
import categories from './categoriesReducer'
import posts from './postsReducer'
import post from './postReducer'

export default combineReducers({
  categories,
  posts,
  post
})