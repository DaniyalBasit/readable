import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import PostsIndex from "./components/PostsIndex";
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import PostView from "./components/PostView";
import { getCategories } from "./actions/categoriesAction";
import { customID } from "./utils/BackendAPI";
import './App.css';

class App extends Component {
	componentWillMount(){
		this.props.allCategories()
	}

	render() {
		const {categories, posts} = this.props
		console.log(posts)
		return (
			<div className="App">
				<Header heading="Readable App"/>
				<div className="filters">
					<Link to="/" className="btn btn-category" >Home</Link>
					{ Array.isArray(categories) && categories.map((category) =>
						<CategoryLink key={category.name} name = {category.name} />
					)}
				</div>
				{ Array.isArray(categories) && categories.map((category) =>
					<Switch key={customID()}>
						<Route exact path={'/'+ category.name} render={()=>(
							<PostsIndex category={category}/>
						)}/>
					</Switch>
				)}
				<Route exact path='/' render={()=>(
					<PostsIndex category={undefined}/>
				)}/>
				{Array.isArray(posts) && posts.map((post) =>
					<Route exact path={'/posts/' + post.id} key={customID()} render={()=>(<PostView id={post.id} />)}/>
				)}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { ...state.categories, ...state.posts }
};

const mapDispatchToProps = dispatch => ({
	allCategories: () => dispatch(getCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
