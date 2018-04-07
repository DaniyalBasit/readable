import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import PostsIndex from "./components/PostsIndex";
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import PostView from "./components/PostView";
import { getCategories } from "./actions/categoriesAction";
import { getPostInfo } from "./actions/postsAction";
import { customID } from "./utils/BackendAPI";
import './App.css';

class App extends Component {

	componentWillMount(){
		this.props.allCategories()
		this.props.location.pathname.split('/')[2] &&
			this.props.getPost(this.props.location.pathname.split('/')[2])
	}
	
	render() {
		const {categories, post} = this.props
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
							<PostView 
								title={post.title}
								body={post.body}
								author={post.author}
								timestamp={post.timestamp}
								voteScore={post.voteScore} 
							/>
						)}/>
					</Switch>
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { ...state.categories, ...state.post }
};

const mapDispatchToProps = dispatch => ({
	allCategories: () => dispatch(getCategories()),
	getPost: (id) => dispatch(getPostInfo(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
