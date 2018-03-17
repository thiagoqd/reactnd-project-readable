import React, { Component } from 'react';
import Post from './Post.js';
import { Dropdown } from 'semantic-ui-react'
import { loadAllPosts, sortPost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'




class PostList extends Component {


  handleChange (e) {
    this.props.sortPost(e.target.textContent)
  }
  
  componentDidMount() {
    this.props.loadAllPosts();
  }

  render() {
    const filteredPosts = [].concat(this.props.posts).filter((post) => this.props.match.params.category ? post.category === this.props.match.params.category : 1===1)

    const postList = [].concat(filteredPosts)
    .sort((a, b) => 
        this.props.sortType ==='Votes' ? b.voteScore > a.voteScore : b.timestamp > a.timestamp)
    .map((item, i) => 
       <Post key={item.id} post={item}/>
    );

   
    const options = [{ key: '1', value: 'Date', text: 'Date' }, 
                     { key: '2', value: 'Votes', text: 'Votes' }]

    return (
      
      <div className="PostList">
 
        <div className="PostListHeader">
          <p> Post List </p>
          <Dropdown text='Order By...' options={options} onChange={(e) => this.handleChange(e)}  selection/>
        </div>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts:  state.posts,
    sortType: state.sortType

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPosts: () => dispatch(loadAllPosts()),
    sortPost: (type) => dispatch(sortPost(type))
  }
}

export default withRouter(connect(
  mapStateToProps,
   mapDispatchToProps
 )(PostList));

