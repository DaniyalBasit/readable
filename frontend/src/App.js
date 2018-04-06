import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import { getCategories } from "./actions/categoriesAction";
import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.allcategories()
  }

  render() {
    console.log("Props", this.props)
    console.log(this.state)
    return (
      <div className="App">
        <Header heading="Readable App"/>
        <div className="filters">
          { Array.isArray(this.props.categories) &&
            this.props.categories.map((category) => <CategoryLink key={category.path} name = {category.name}/> )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(categories, props) {
  return { ...categories }
};

const mapDispatchToProps = dispatch => ({
  allcategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
