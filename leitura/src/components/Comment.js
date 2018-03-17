import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'
import VoteComment from './VoteComment.js'
import DeleteComment from './DeleteComment.js'
import EditComment from './EditComment.js'


class Comment extends Component {
  
    render() {
      
      return (
        <Segment>
          <Grid columns={3} divided textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  {this.props.comment.body}
                </Grid.Column>
                <Grid.Column>
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
                <Grid.Column>
                  <VoteComment comment={this.props.comment}/>
                </Grid.Column>
                <Grid.Column>
                  <EditComment post={this.props.post} comment={this.props.comment}/>
                  <DeleteComment comment={this.props.comment} post={this.props.post}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
      );
    }
    
  }

 
  export default Comment