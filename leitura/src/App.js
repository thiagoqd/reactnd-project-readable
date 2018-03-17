import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
import './App.css';
import PostList from './components/PostList.js';
import MenuRoot from './components/MenuRoot.js';
import PostDetail from './components/PostDetail.js';
import Temp from './components/Temp.js';





class App extends Component {
  render() {

    return (
      <div className="App">
        <MenuRoot/>
        <Route exact path="/" component={PostList}/>
        <Route exact path="/:category" component={PostList}/>
        <Route exact path="/:category/:post_id" component={PostDetail}/>     
      </div>
    );
  }
}

export default App;