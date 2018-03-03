import React, { Component } from 'react';
import {  Button } from 'semantic-ui-react'
import { sendVotePost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class VotePost extends Component {
  
    postVoting = (id, option) => {
      this.props.sendVotePost(id, option);
    }

    render() {
      
      return (
        
        <Button.Group>
          <Button onClick={() => this.postVoting(this.props.post.id, "downVote")} negative>-1</Button>
          <Button.Or />
          <Button onClick={() => this.postVoting(this.props.post.id, "upVote")}  positive>+1</Button>
        </Button.Group>
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
      sendVotePost: (id,option) => dispatch(sendVotePost(id,option))
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(VotePost));
