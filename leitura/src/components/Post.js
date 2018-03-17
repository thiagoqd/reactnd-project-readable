import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import {  List } from 'semantic-ui-react'
import DeletePost from './DeletePost.js';
import EditPost from './EditPost.js';
import VotePost from './VotePost.js';


class Post extends Component {
  


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
                  <VotePost post={this.props.post}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

        <Link to={"/" + this.props.post.category + "/" + this.props.post.id }>Detalhe</Link>

        </Segment>
      );
    }
    
  }


  export default Post;
