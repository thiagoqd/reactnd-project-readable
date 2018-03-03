import React, { Component } from 'react';
import { loadCommentPost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class CommentList extends Component {
   

  componentDidMount() {
    this.props.loadCommentPost(this.props.post.id);


  }


  render() {
    return (
      <div>
          {
            this.props.comments &&
            Object.keys(this.props.comments).map((id)=>{
              return this.props.comments[id].filter((comment)=> comment.parentId === this.props.post.id).map((comment)=>{
                return comment.body
                
              })
            })
          }
      </div>
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
    loadCommentPost: (postId) => dispatch(loadCommentPost(postId))
  }
}



export default withRouter(connect(
  mapStateToProps,
   mapDispatchToProps
 )(CommentList));
