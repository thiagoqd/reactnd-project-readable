import React, { Component } from 'react';
import Post from './Post.js';

class PostList extends Component {
    
  state = {
  }
  
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  render() {
    return (
      <div className="App">
       
        {this.props.posts &&
            this.props.posts.map((post)=>{
            return <Post key={post.id} post={post}/>
            
            })
        }
      </div>
    );
  }
}

export default PostList
