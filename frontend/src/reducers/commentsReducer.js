import { 
    START_LOADING_COMMENTS,
    SUCCESS_LOADING_COMMENTS,
    ERROR_LOADING_COMMENTS
} from "../actions/actionTypes";

const initialstate = {
    comments: [],
    loading: false,
    success: false
}

const comments = (state = {initialstate}, action) => {
	const {comments, type} = action
	switch(type){
		case START_LOADING_COMMENTS:
			return {
			}
		case SUCCESS_LOADING_COMMENTS:
			return {
				comments
			}
		default:
			return state
	}
}

export default comments;