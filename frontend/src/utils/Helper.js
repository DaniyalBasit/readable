export function arrangePosts(posts, state){
	switch(state){
		case "Newest Post":
			return posts.sort((a, b) => {return  b.timestamp - a.timestamp})
		case "Oldest Post":
			return posts.sort((a, b) => {return  a.timestamp - b.timestamp})
		case "Most Votes":
			return posts.sort((a, b) => {return  b.voteScore - a.voteScore})
		case "Least Votes":
			return posts.sort((a, b) => {return  a.voteScore - b.voteScore})			
		default:
			return posts
	}
}