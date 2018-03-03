import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import {  List, Button } from 'semantic-ui-react'
import { sendVotePost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DeletePost from './DeletePost.js';
import EditPost from './EditPost.js';


class Post extends Component {
  
    postVoting = (id, option) => {
      this.props.sendVotePost(id, option);
    }

    render() {
      
      return (
        <Segment>
          <Header as="h2" textAlign="center">
            {this.props.post.title} <DeletePost post={this.props.post}/>
            <EditPost post={this.props.post}/>
          </Header>
          <Grid columns={3} divided textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  {this.props.post.body}
                </Grid.Column>
                <Grid.Column>
                <List>
                  <List.Item>
                    <List.Header>Author</List.Header>
                    {this.props.post.author}
                  </List.Item>
                  <List.Item>
                    <List.Header>Category</List.Header>
                    {this.props.post.category}
                  </List.Item>
                  
                </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={3}>
                  {this.props.post.voteScore}
                </Grid.Column>
                <Grid.Column width={3}>
                  {this.props.post.commentCount}
                </Grid.Column>
                <Grid.Column width={10}>
                <Button.Group>
                  <Button onClick={() => this.postVoting(this.props.post.id, "downVote")} negative>-1</Button>
                  <Button.Or />
                  <Button onClick={() => this.postVoting(this.props.post.id, "upVote")}  positive>+1</Button>
                </Button.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>

        <Link to={"/" + this.props.post.category + "/" + this.props.post.id }>Detalhe</Link>

        </Segment>
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
   )(Post));
