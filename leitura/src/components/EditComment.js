import React, { Component } from 'react';
import { Form, Header, Modal} from 'semantic-ui-react'
import { putEditComment } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class EditComment extends Component {

    state = {
      showModal: false
    }

    handleSubmit (e) { 

      const data = {
          id: this.props.comment.id,
          timestamp: Date.now(),
          body: e.body.value,
          parentId: this.props.post.id
        }
        
      this.props.putEditComment(data);
      this.closeModal()
    }


    closeModal = () => {
      this.setState({ showModal: false })
    }

    openModal = () => {
      this.setState({ showModal: true })
    }

    render() {
      
      const {showModal} = this.state


      
      return (
        <Modal onClose={this.closeModal} open={showModal}  trigger={<div onClick={this.openModal}>Edit Comment</div>} closeIcon>
          <Header icon='edit' content='Edit Comment' />
          <Modal.Content>
            <Form  onSubmit={(e) => this.handleSubmit(e.target)}>
              <Form.TextArea defaultValue={this.props.comment.body} id="body" label='Body' placeholder='Tell us more...' />
              <Form.Button>Submit</Form.Button>
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
      putEditComment: (postId, post) => dispatch(putEditComment(postId, post)),
    }
  }

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
   )(EditComment));

