import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import categories from './categoriesReducer'
import posts from './postsReducer'
import post from './postReducer'

export default combineReducers({
  categories,
  posts,
  post,
  form: formReducer
})