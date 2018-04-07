import { GET_POSTS, GET_CATEGORY_POSTS, GET_POST } from "./actionTypes"
import { getAllPosts, getCategoryPosts, getPost } from "../utils/BackendAPI"

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

export const getPostInfo = (id) => {
    return dispatch => { getPost(id)
        .then((post)=>{
            console.log(post)
            dispatch(setPost(post))
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
export const setPost = (post) => ({
    type: GET_POST,
    post
})

export default {getPosts, getPostsFromCategory}