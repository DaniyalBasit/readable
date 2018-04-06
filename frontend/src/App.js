import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import CategoryIndex from "./components/CategoryIndex";
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import { getCategories } from "./actions/categoriesAction";
import { postID } from "./utils/BackendAPI";
import './App.css';

class App extends Component {
	componentWillMount(){
		this.props.allCategories()
	}

	render() {
		const {categories} = this.props
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
					<Switch key={postID()}>
						<Route exact path={'/'+ category.name} render={()=>(
							<CategoryIndex category={category}/>
						)}/>
					</Switch>
				)}
				<Route exact path='/' render={()=>(
					<CategoryIndex category={undefined}/>
				)}/>
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
