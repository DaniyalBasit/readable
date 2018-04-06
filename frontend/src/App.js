import React, { Component } from 'react';
import Header from './components/Header';
import CategoryLink from './components/CategoryLink';
import { getAllCategories } from "./utils/BackendAPI";
import './App.css';

class App extends Component {

  state = {
    categories: []
  }

  componentWillMount(){
    getAllCategories().then(
      (categories) => {this.setState({categories})}
    )
  }

  render() {
    return (
      <div className="App">
        <Header heading="Readable App"/>
        <div className="filters">
          {this.state.categories.map((category) => <CategoryLink key={category.path} name = {category.name}/> )}
        </div>
      </div>
    );
  }
}

export default App;
