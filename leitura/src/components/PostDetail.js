import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';
import { loadDetailPost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VotePost from './VotePost.js'
import EditPost from './EditPost.js'
import DeletePost from './DeletePost.js'
import NotFound from './NotFound.js'
import CommentList from './CommentList.js'
import AddComment from './AddComment.js'



class PostDetail extends Component {

  componentDidMount() {
    this.props.match ? this.props.loadDetailPost(this.props.match.params.post_id) : null


  }


    render() {
      
      const post = this.props.posts ? this.props.posts.filter((post) => post.id === this.props.match.params.post_id)[0] : null


      return (
        <div>
          { 
            post ?
            <PostInfo post={post}/> :
            <NotFound />
            
          }
        </div>

      );
    }
    
  }

   
class PostInfo extends Component {
    render() {
      
      return (
        <div>
              <Header>{this.props.post.title}</Header>
              <p>{this.props.post.body}</p>

              <Header>Author</Header>
              <p>{this.props.post.author}</p>
              <Header>Category</Header>
              <p>{this.props.post.category}</p>
              <Header>Votes</Header>
              <p>{this.props.post.voteScore}</p>
              <Header>Comentários</Header>
              <p>{this.props.post.commentCount}</p>
              <VotePost post={this.props.post}/>
              <EditPost post={this.props.post}/>
              <DeletePost post={this.props.post}/>
              <Link to="/">Back</Link>
              <AddComment post={this.props.post}/>
              <CommentList post={this.props.post} />

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
      loadDetailPost: (postId) => dispatch(loadDetailPost(postId))
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(PostDetail));