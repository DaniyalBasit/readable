import { GET_POSTS } from "../actions/actionTypes";

const initialstate = {
    posts: []
}

const posts = (state = {initialstate}, action) => {
    const {posts} = action
    console.log(posts)
    switch(action.type){
        case GET_POSTS:
            return {
                posts
            }
        default:
            return state
    }

}

export default posts;