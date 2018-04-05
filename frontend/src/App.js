import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Categories from './components/Categories';
import {getCategories} from "./actions/categories";
import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.categories()
  }

  render() {
    console.log(this.props.categories())
    return (
      <div className="App">
        <Header heading="Readable App"/>
        <Categories/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categories: () => dispatch(getCategories())
  }
};

export default connect(null, mapDispatchToProps)(App);
