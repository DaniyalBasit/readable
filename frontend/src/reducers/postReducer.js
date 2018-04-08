import { GET_POST, POST_VOTE, NEW_POST} from "../actions/actionTypes";

const initialstate = {
	post: {},
	redirect: false
}

const post = (state = {initialstate}, action) => {
	const {post} = action
	switch(action.type){
        case GET_POST:
            return {
				...state,
				post,
				redirect: false
			}
		case NEW_POST:
            return {
				...state,
				post,
				redirect: true
			}
		case POST_VOTE:
			return {
				...state,
				post,
				redirect: false
			}
		default:
			return state
	}
}

export default post;