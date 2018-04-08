import { GET_POSTS, GET_CATEGORY_POSTS, GET_POST, POST_VOTE, NEW_POST } from "./actionTypes"
import { getAllPosts, getCategoryPosts, getPost, updatePostVote, createPost } from "../utils/BackendAPI"

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
            dispatch(setPost(post))
        })
    }
}

export const postOption = (id, option) => {
    return dispatch => { updatePostVote(id, option)
        .then((post)=>{
            dispatch(sendVote(post))
        })
    }
}

export const newPost = (post) => {
    return dispatch => {createPost(post)
        dispatch(newPostCreated(post))
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

export const newPostCreated = (post) => ({
    type: NEW_POST,
    post
})

export const sendVote = (post) => ({
    type: POST_VOTE,
    post
})

export default {getPosts, getPostsFromCategory, getPostInfo, postOption}