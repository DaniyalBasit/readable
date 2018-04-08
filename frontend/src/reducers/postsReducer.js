import { GET_POSTS, GET_CATEGORY_POSTS } from "../actions/actionTypes";

const initialstate = {
	posts: []
}

const posts = (state = {initialstate}, action) => {
	const {posts} = action
	switch(action.type){
		case GET_POSTS:
			return {
				...state,
				posts
			}
		case GET_CATEGORY_POSTS:
			return {
				...state,
				posts
			}
		default:
			return state
	}
}

export default posts;