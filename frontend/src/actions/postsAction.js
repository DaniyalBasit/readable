import { GET_POSTS, GET_CATEGORY_POSTS } from "./actionTypes"
import { getAllPosts, getCategoryPosts } from "../utils/BackendAPI"

export const getPosts = () => {
    return dispatch => {getAllPosts()
        .then((posts) =>  {
            dispatch(setPosts(posts))
        })
    }
}
export const getPostsFromCategory = (category) => {
    return dispatch => {getCategoryPosts(category)
        .then((posts) =>  {
            dispatch(setCategoryPosts(posts))
        })
    }
}
export const setPosts = (posts) => ({
    type: GET_POSTS,
    posts
})
export const setCategoryPosts = (posts) => ({
    type: GET_CATEGORY_POSTS,
    posts
})

export default {getPosts, getPostsFromCategory}