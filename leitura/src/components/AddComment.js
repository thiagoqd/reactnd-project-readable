import React, { Component } from 'react';
import { Form, Header, Modal, Button} from 'semantic-ui-react'
import { sendComment } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getGuid } from '../utils/scripts'


class AddComment extends Component {

  state = {
    showModal: false
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

    handleSubmit (e) { 

      const data = {
          id: getGuid(),
          timestamp: Date.now(),
          body: e.body.value,
          author : e.author.value,
          parentId: this.props.post.id
        }
        
      this.props.sendComment(data);
      this.closeModal()
    
    }


    render() {
      
      const {showModal} = this.state

      return (
        <Modal onClose={this.closeModal} open={showModal}   trigger={<Button  onClick={this.openModal}>Add Comment</Button>} closeIcon>
          <Header icon='add circle' content='Add New Post' />
          <Modal.Content>
            <Form  onSubmit={(e) => this.handleSubmit(e.target)}>
              <Form.Group widths='equal'>
                <Form.Input id="author" fluid label='Author' placeholder='Author' />
              </Form.Group>
              <Form.TextArea id="body" label='Body' placeholder='Tell us more...' />
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
      sendComment: (comment) => dispatch(sendComment(comment)),
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(AddComment));

