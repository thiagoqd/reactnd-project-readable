import React, { Component } from 'react';
import { Header, Segment, Grid, Icon } from 'semantic-ui-react'
import { Link  } from 'react-router-dom';
import { loadAllPosts } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VotePost from './VotePost.js'
import NotFound from './NotFound.js'
import CommentList from './CommentList.js'
import AddComment from './AddComment.js'
import PostOptions from './PostOptions.js'



class PostDetail extends Component {

 
  componentDidMount() {
    this.props.loadAllPosts();
  }


    render() {
      

      const post = [].concat(this.props.posts)
      .filter((post) => this.props.match.params.post_id === post.id  )[0]

      console.log("post: ", post)

      const content = post ? <PostInfo post={post}/> :
      <NotFound />


      return (
        <div className="postDetail">
          {content}
        </div>

      );
    }
    
  }

   
class PostInfo extends Component {
    render() {
      return (
        <Segment className="postDetailSegment">
              
              <Grid>
                <Grid.Row>
                  <Grid.Column width="2">
                    <Link to="/"><Icon size="large" color="black" name="chevron circle left"/> </Link>
                  </Grid.Column>
                  <Grid.Column width="12" textAlign="center">
                    <Header className="title">{this.props.post.title}</Header>
                  </Grid.Column>
                  <Grid.Column width="2">
                  <PostOptions post={this.props.post}/>
                    </Grid.Column>
                </Grid.Row>
              </Grid>
              
              <div className="postDetailBody">
                <div className="description">
                  <p>{this.props.post.body}</p>
                </div>
                <div className="info">
                  <Header>Author</Header>
                  <p>{this.props.post.author}</p>
                  <Header>Category</Header>
                  <p>{this.props.post.category}</p>
                </div>
              </div>
              <div className="postDetailFooter">
                <div className="comments">
                  <Header>Comentários</Header>
                  <p>{this.props.post.commentCount}</p>
                </div>
                <div className="votes">
                  <Header>Votes</Header>
                  <p>{this.props.post.voteScore}</p>
                </div>
                <div className="voting">
                  <VotePost post={this.props.post}/>
                </div>
              </div>
              <div className="postDetailComment">
              <AddComment post={this.props.post}/>
              </div>
                <CommentList post={this.props.post} />

        </Segment>

      );
    }
    
  }

 
  const mapStateToProps = (state) => {
    return {
      posts:  state.posts,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadAllPosts: () => dispatch(loadAllPosts())
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(PostDetail));