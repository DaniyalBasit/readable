const api = 'http://localhost:3001'

let token = localStorage.token
if (!localStorage.token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
    'authenticity_token': token,
    'Accept': 'application/json'
}

export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(posts => posts)

export const createPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: { ...headers },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => data)

export const editPost = (post, id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'UPDATE',
        headers: { ...headers },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => data)

