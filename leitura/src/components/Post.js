import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import { Grid, Segment, Icon, Divider } from 'semantic-ui-react'
import PostOptions from './PostOptions.js';
import VotePost from './VotePost.js';


class Post extends Component {

    

    render() {
      

      const voteEmote = this.props.post.voteScore === 0 ? <Icon size='large' disabled name='meh' /> : 
      this.props.post.voteScore > 0 ? <Icon size='large' disabled name='smile' />:
      <Icon size='large' disabled name='frown' />

      return (
        <Segment className="postSegment">
          <Grid>
            <Grid.Row className="postGrid">
              <Grid.Column width="13" verticalAlign='middle'>
                <Header as='h3' className="postTitle">{this.props.post.title}</Header>
              </Grid.Column>
              <Grid.Column  width="3">
                <PostOptions post={this.props.post}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
   
                <Grid.Column width="10" verticalAlign='middle'>
                <p>{this.props.post.body}</p>
                </Grid.Column>
              
              <Grid.Column width="6" verticalAlign='middle' textAlign='center'>
                <Header as='h5'>Author</Header>
                {this.props.post.author}
                <Header as='h5' >Category</Header>
                {this.props.post.category}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width="5" textAlign='left'>
                <Icon size='large' disabled name='comments' /> {this.props.post.commentCount}
              </Grid.Column>
              <Grid.Column width="5" textAlign='right' verticalAlign='middle'>
              {voteEmote}
              {this.props.post.voteScore}
              </Grid.Column>
              <Grid.Column width="6" verticalAlign='middle'>
                <VotePost post={this.props.post}/>
              </Grid.Column>
            </Grid.Row>
            <Divider section/>
            <Grid.Row>
              <Grid.Column width="16" verticalAlign='middle' textAlign='center'>
              <Link to={"/" + this.props.post.category + "/" + this.props.post.id }>Detalhe</Link>
              </Grid.Column>
            </Grid.Row>

            
          </Grid>       

        </Segment>
      );
    }
    
  }


  export default Post;
