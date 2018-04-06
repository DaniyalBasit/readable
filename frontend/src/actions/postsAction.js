import { GET_POSTS } from "./actionTypes"
import { getAllPosts } from "../utils/BackendAPI"

export const getPosts = () => {
    return dispatch => {getAllPosts()
        .then((posts) =>  {
            dispatch(setPosts(posts))
        })
    }
}
export const setPosts = (posts) => ({
    type: GET_POSTS,
    posts
})

export default getPosts