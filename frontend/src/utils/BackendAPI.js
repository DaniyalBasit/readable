import comments from '../reducers/commentsReducer';

export const customID = require('uuid/v1')
const api = 'http://localhost:3001'

const headers = {
	'Authorization': 'whatever-you-want',
	'Accept': 'application/json'
}

export const getAllCategories = () =>
	fetch(`${api}/categories`, { headers })
		.then(res => res.json())
		.then(data => data.categories)

export const getCategoryPosts = (categoryId) =>
	fetch(`${api}/${categoryId}/posts`, { headers })
		.then(res => res.json())
		.then(posts => posts)

export const getAllPosts = () =>
	fetch(`${api}/posts`, { headers })
		.then(res => res.json())
		.then(posts => posts)

export const getPost = (id) =>
	fetch(`${api}/posts/${id}`, { headers })
		.then(res => res.json())
		.then(data => data)

export const createPost = (post) => {
	console.log(post)
	fetch(`${api}/posts`, {
		method: 'POST',
		headers: { ...headers, 'Content-Type': 'application/json' },
		body: JSON.stringify(post),
	})
		.then(res => res.json())
		.then(data => data)
}

export const editPost = (id, post) =>
	fetch(`${api}/posts/${id}`, {
		method: 'PUT',
		headers: { ...headers },
		body: JSON.stringify(post)
	})
		.then(res => res.json())
		.then(data => data)

export const deletePost = (id) =>
	fetch(`${api}/posts/${id}`, {
		method: 'DELETE', 
		headers: { ...headers }
	})
		.then(res => res.json())
		.then(data => data.post)

export const updatePostVote = (id, option) =>
	fetch(`${api}/posts/${id}`, {
		method: 'POST',
		headers: { ...headers },
		body: {option: option}
	})
		.then(res => res.json())
		.then(data => data)


export const getAllComments = (postId) =>
	fetch(`${api}/posts/${postId}/comments`, { headers })
		.then(res => res.json())
		.then(comments => comments)