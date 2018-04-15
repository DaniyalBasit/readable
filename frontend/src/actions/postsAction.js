import {
    GET_POSTS, GET_CATEGORY_POSTS, GET_POST,
    POST_VOTE, NEW_POST, DELETE_POST,
    RESET_REDIRECT, RESET_HOME, EMPTY_POST
} from "./actionTypes"
import {
    getAllPosts, getCategoryPosts, getPost,
    updatePostVote, createPost, softDeletePost
} from "../utils/BackendAPI"

export const getPosts = () => {
    return dispatch => {getAllPosts()
        .then(posts => dispatch(setPosts(posts)))
    }
}
export const getPostsFromCategory = (category) => {
    return dispatch => {getCategoryPosts(category)
        .then(posts => dispatch(setCategoryPosts(posts)))
    }
}

export const getPostInfo = (id) => {
    return dispatch => { getPost(id)
        .then((post) => {dispatch(setPost(post))})
    }
}

export const postOption = (id, option) => {
    return dispatch => {updatePostVote(id, option)
        .then(post => dispatch(sendVote(post)))
    }
}

export const newPost = (post) => {
    return dispatch => {createPost(post)
        dispatch(newPostCreated(post))
    }
}

export const deletePost = (id) =>{
    return dispatch => {softDeletePost(id)
        .then((post)=>dispatch(Delete(id)))
    }
}

export const resetHome = () => ({
    type: RESET_HOME
})

export const resetRedirect = () => ({
    type: RESET_REDIRECT
})

export const Delete = (id) => ({
    type: DELETE_POST
})

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

export const newPostCreated = (post) => ({
    type: NEW_POST,
    post
})

export const sendVote = (post) => ({
    type: POST_VOTE,
    post
})

export const emptyPost = () => ({
    type: EMPTY_POST
})

export default {getPosts, getPostsFromCategory, getPostInfo, postOption}