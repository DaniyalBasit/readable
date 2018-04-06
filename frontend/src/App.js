import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import Post from "./components/Post";
import OrderPosts from "./components/OrderPosts";
import { getCategories } from "./actions/categoriesAction";
import { getPosts, getPostsFromCategory } from "./actions/postsAction";
import { arrangePosts } from "./utils/Helper";
import './App.css';

class App extends Component {

	state = {
		currentOrder: ''
	}

  componentWillMount(){
    this.props.allCategories()
    this.props.allPosts()
  }

  changePostsOrder(value){
		this.setState({currentOrder: value})
	}

	selectCategory(category){
		console.log(category)
		this.props.categoryPosts(category)
	}

  render() {
		const {categories, posts} = this.props
		console.log(posts)
    return (
      <div className="App">
				<Route exact path='/' render={()=>(
					<div>
						<Header heading="Readable App"/>
						<div className="filters">
							{ Array.isArray(categories) &&
								categories.map((category) => 
								<CategoryLink 
									key={category.path}
									name = {category.name}
									onPress = {this.selectCategory.bind(this)}
								/> 
							)}
						</div>
						<OrderPosts 
							changeOrder={this.changePostsOrder.bind(this)}
							defaultOption={this.state.currentOrder}
						/>
						<div className="container">
							{ Array.isArray(posts) &&
								arrangePosts(posts, this.state.currentOrder).map((post)=> 
								<Post
									key={post.id} 
									title={post.title}
									body={post.body}
									author={post.author}
									votes={post.voteScore} 
								/> 
							)}
						</div>
					</div>
				)}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return { ...state.categories, ...state.posts }
};

const mapDispatchToProps = dispatch => ({
  allCategories: () => dispatch(getCategories()),
  allPosts: () => dispatch(getPosts()),
	categoryPosts: (category) => dispatch(getPostsFromCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
