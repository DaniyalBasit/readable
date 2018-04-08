import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link, Redirect} from 'react-router-dom';
import PostsIndex from "./components/PostsIndex";
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import PostView from "./components/PostView";
import PostForm from "./components/PostForm";
import PostEditForm from "./components/PostEditForm";
import { getCategories } from "./actions/categoriesAction";
import { getPostInfo, newPost, resetHome } from "./actions/postsAction";
import { customID } from "./utils/BackendAPI";
import './App.css';

class App extends Component {

	componentWillMount(){
		this.props.home && this.props.homeReset()
		this.props.allCategories()
		this.props.location.pathname.split('/')[2] &&
			this.props.getPost(this.props.location.pathname.split('/')[2])
	}

	submit(values){
		const ID = this.props.post.id ? this.props.post.id : customID()
		const post = {
			id: ID,
			timestamp: Date.now(),
			...values
		}
		this.props.createNewpost(post)
	}
	
	render() {
		const {categories, post, redirect, home} = this.props
		return (
			<div className="App">
				<Header heading="Readable App"/>
				<div className="filters">
					<Link to="/" className="btn btn-category" >home</Link>
					{ Array.isArray(categories) && categories.map((category) =>
						<CategoryLink key={category.name} name = {category.name} />
					)}
				</div>
				{ Array.isArray(categories) && categories.map((category) =>
					<Switch key={customID()}>
						<Route exact path={'/'+ category.name} render={()=>(
							<PostsIndex category={category} />
						)}/>
					</Switch>
				)}
				<Route exact path='/' render={()=>(
					<PostsIndex category={undefined}/>
				)}/>
				{ post &&
					<Switch>
						<Route exact path={'/posts/'+post.id} key={customID()} render={()=>(
							<PostView />
						)}/>
						<Route exact path={'/posts/' + post.id +'/edit'} render={()=>(
							<PostEditForm onSubmit={this.submit.bind(this)} categories={categories} />
						)}/>
					</Switch>
				}
				{ redirect && post && <Redirect to={'/posts/'+post.id}/>}
				{ home && <Redirect to='/' />}
				<Switch>
					<Route exact path='/posts/new' render={()=>(
						<PostForm onSubmit={this.submit.bind(this)} categories={categories} />
					)}/>
				</Switch>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { ...state.categories, ...state.post, ...state.redirect, ...state.home }
};

const mapDispatchToProps = dispatch => ({
	allCategories: () => dispatch(getCategories()),
	getPost: (id) => dispatch(getPostInfo(id)),
	createNewpost: (post) => dispatch(newPost(post)),
	homeReset: () => dispatch(resetHome())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
