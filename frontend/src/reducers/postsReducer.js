import { GET_POSTS, GET_CATEGORY_POSTS, GET_POST } from "../actions/actionTypes";

const initialstate = {
	posts: []
}

const posts = (state = {initialstate}, action) => {
	const {posts, post} = action
	switch(action.type){
		case GET_POSTS:
			return {
				posts
			}
		case GET_CATEGORY_POSTS:
			return {
				posts
			}
		case GET_POST:
			return {post}
		default:
			return state
	}
}

export default posts;