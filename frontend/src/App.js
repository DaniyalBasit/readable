import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import Post from "./components/Post";
import { getCategories } from "./actions/categoriesAction";
import { getPosts } from "./actions/postsAction";
import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.allCategories()
    this.props.allPosts()
  }

  render() {
    return (
      <div className="App">
        <Header heading="Readable App"/>
        <div className="filters">
          { Array.isArray(this.props.categories) &&
            this.props.categories.map((category) => <CategoryLink key={category.path} name = {category.name}/> )}
        </div>
        <div className="container">
          { Array.isArray(this.props.posts) &&
            this.props.posts.map((post)=> 
            <Post
              key={post.id} 
              title={post.title}
              body={post.body}
              author={post.author} 
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
