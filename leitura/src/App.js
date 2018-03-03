import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
import './App.css';
import PostList from './components/PostList.js';
import MenuRoot from './components/MenuRoot.js';
import PostDetail from './components/PostDetail.js';
import { loadAllPosts } from './actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'





class App extends Component {
 
  componentDidMount() {
    this.props.loadAllPosts();
  }

  render() {

    return (
      <div className="App">
        <MenuRoot/>
        <Route exact path="/" render={() => (
            <PostList posts={this.props.posts}/>
            
        )}/>
        <Route path="/:category/:post_id" component={PostDetail}/>     

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPosts: () => dispatch(loadAllPosts()),
  }
}

export default withRouter(connect(
  mapStateToProps,
   mapDispatchToProps
 )(App));