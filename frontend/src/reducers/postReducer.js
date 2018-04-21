import {
	GET_POST, POST_VOTE,
	NEW_POST, DELETE_POST,
	RESET_HOME, RESET_REDIRECT, EMPTY_POST
} from "../actions/actionTypes";

const initialstate = {
	post: {},
	home: false,
	redirect: false
}

const post = (state = {initialstate}, action) => {
	const {post} = action
	switch(action.type){
        case GET_POST:
            return {
				...state,
				post,
				home: false,
				redirect: false,
				data: post
			}
		case NEW_POST:
            return {
				...state,
				post,
				home: false,
				redirect: true
			}
		case POST_VOTE:
			return {
				...state,
				post,
				home: false,
				redirect: false
			}
		case DELETE_POST:
			return {
				...state,
				post: {},
				home: true
			}
		case RESET_HOME: 
			return {
				...state,
				home: false,
				redirect: false				
			}
		case RESET_REDIRECT: 
			return {
				...state,
				home: false,
				redirect: false
			}
		case EMPTY_POST:
			return {
				...state,
				post: {}
			}
		default:
			return state
	}
}

export default post;