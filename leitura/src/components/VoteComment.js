import React, { Component } from 'react';
import {  Button } from 'semantic-ui-react'
import { sendVoteComment } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class VoteComment extends Component {
  
    commentVoting = (id, option) => {
      
      this.props.sendVoteComment(id, option);
    }

    render() {
      return (
        
        <Button.Group>
          <Button onClick={() => this.commentVoting(this.props.comment.id, "downVote")} negative>-1</Button>
          <Button.Or />
          <Button onClick={() => this.commentVoting(this.props.comment.id, "upVote")}  positive>+1</Button>
        </Button.Group>
      );
    }
    
  }

  const mapStateToProps = (state) => {
    return {
      comments: state.comments
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      sendVoteComment: (id,option) => dispatch(sendVoteComment(id,option))
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(VoteComment));
