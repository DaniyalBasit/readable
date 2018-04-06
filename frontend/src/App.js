import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import Post from "./components/Post";
import OrderPosts from "./components/OrderPosts";
import { getCategories } from "./actions/categoriesAction";
import { getPosts } from "./actions/postsAction";
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

  render() {
		const {categories, posts} = this.props
    return (
      <div className="App">
        <Header heading="Readable App"/>
        <div className="filters">
          { Array.isArray(categories) &&
            categories.map((category) => <CategoryLink key={category.path} name = {category.name}/> )}
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
    );
  }
}

function mapStateToProps(state, props) {
  return { ...state.categories, ...state.posts }
};

const mapDispatchToProps = dispatch => ({
  allCategories: () => dispatch(getCategories()),
  allPosts: () => dispatch(getPosts())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
