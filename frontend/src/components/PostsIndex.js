import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter } from 'react-router-dom';
import Post from "./Post";
import OrderPosts from "./OrderPosts";
import { getPosts, getPostsFromCategory } from "../actions/postsAction";
import { arrangePosts } from "../utils/Helper";
import { customID } from "../utils/BackendAPI";

class CategoriesIndex extends Component {
	state = {
		currentOrder: ''
	}

	componentDidMount(){
		this.props.category
			? this.props.categoryPosts(this.props.category.name)
			: this.props.allPosts()
	}

	changePostsOrder(value){
		this.setState({currentOrder: value})
	}

	render() {
		const {posts} = this.props
		return(
			<div>
				<OrderPosts
					changeOrder={this.changePostsOrder.bind(this)}
					defaultOption={this.state.currentOrder}
				/>
				<div className="container">
					{ Array.isArray(posts) && posts !== [] &&
						arrangePosts(posts, this.state.currentOrder).map((post)=>
						<Link to={'/posts/' + post.id} key={customID()}>
							<Post
								id={post.id}
								title={post.title}
								body={post.body}
								author={post.author}
								votes={post.voteScore}
							/>
						</Link>
					)}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state, props) {
	return { ...state.posts }
};

const mapDispatchToProps = dispatch => ({
	allPosts: () => dispatch(getPosts()),
	categoryPosts: (category) => dispatch(getPostsFromCategory(category)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex));