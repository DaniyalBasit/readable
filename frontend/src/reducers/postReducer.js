import { GET_POST } from "../actions/actionTypes";

const initialstate = {
	post: {}
}

const post = (state = {initialstate}, action) => {
	const {post} = action
	console.log("Post In reducer:", post)
	switch(action.type){
        case GET_POST:
            return {
                post
            }
		default:
			return state
	}
}

export default post;