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

	state = {
		renderPost: ''
	}

	componentWillMount(){
		this.props.allCategories()
	}

	setPostId(id){
		// console.log(id)
		this.setState({renderPost: id})
	}

	render() {
		const {categories} = this.props
		const postId = this.state.renderPost
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
							<PostsIndex category={category} getPostId={this.setPostId}/>
						)}/>
					</Switch>
				)}
				<Route exact path='/' render={()=>(
					<PostsIndex category={undefined} getPostId={this.setPostId}/>
				)}/>
				{ postId !== '' &&
					<Switch>
						<Route exact path={'/posts/'+postId} key={customID()} render={()=>(
							<PostView id={postId} />
						)}/>
					</Switch>
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { ...state.categories }
};

const mapDispatchToProps = dispatch => ({
	allCategories: () => dispatch(getCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
