import React, { Component } from 'react';
import { Form, Header, Modal} from 'semantic-ui-react'
import { sendDeletePost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class DeletePost extends Component {
  
    handleSubmit (postId) { 
        
      this.props.sendDeletePost(postId);
    
    }

    render() {
      

      return (
        <Modal trigger={<div className="popup">Delete Post</div>} closeIcon>
          <Header icon='window close' content='Delete Close' />
          <Modal.Content>
            <Form onSubmit={(e) => this.handleSubmit(this.props.post.id)}>
              <Form.Button>Confirm</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>

        
      );
    }
    
  } 

  const mapStateToProps = (state) => {
    return {
     
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      sendDeletePost: (postId) => dispatch(sendDeletePost(postId)),
    }
  }

  export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps
   )(DeletePost));

