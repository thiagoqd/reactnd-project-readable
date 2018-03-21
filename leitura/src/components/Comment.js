import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'
import VoteComment from './VoteComment.js'
import DeleteComment from './DeleteComment.js'
import EditComment from './EditComment.js'


class Comment extends Component {
  
    render() {
      
      return (
        <Segment className="comment">
          <Grid columns={3} divided textAlign="center">
              <Grid.Row>
                <Grid.Column width="6">
                  {this.props.comment.body}
                </Grid.Column>
                <Grid.Column width="5">
                <List>
                  <List.Item>
                    <List.Header>Author</List.Header>
                    {this.props.comment.author}
                  </List.Item>
                  <List.Item>
                    <List.Header>Vote</List.Header>
                    {this.props.comment.voteScore}
                  </List.Item>
                  
                </List>
                </Grid.Column>
                <Grid.Column width="5">
                  <Grid.Row verticalAlign="top">
                    <div className="commentOptions">
                      <span><EditComment post={this.props.post} comment={this.props.comment}/></span>
                      <span><DeleteComment comment={this.props.comment} post={this.props.post}/></span>
                    </div>
                  </Grid.Row>
                  <Grid.Row verticalAlign="bottom">
                  <VoteComment comment={this.props.comment}/>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
      );
    }
    
  }

 
  export default Comment