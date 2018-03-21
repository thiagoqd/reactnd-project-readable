import React, { Component } from 'react';
import { Form, Header, Modal, Icon} from 'semantic-ui-react'
import { sendDeleteComment } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class DeleteComment extends Component {
  
    handleSubmit (comment) { 
        
      this.props.sendDeleteComment(comment);
    
    }

    render() {
      
 
      return (
        <Modal trigger={<div><Icon name="close"/></div>} closeIcon>
          <Header icon='window close' content='Delete Close' />
          <Modal.Content>
            <Form onSubmit={(e) => this.handleSubmit(this.props.comment)}>
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
      sendDeleteComment: (comment) => dispatch(sendDeleteComment(comment)),
    }
  }

  export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps
   )(DeleteComment));

