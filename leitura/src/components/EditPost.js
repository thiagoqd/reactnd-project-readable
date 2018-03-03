import React, { Component } from 'react';
import { Form, Header, Modal} from 'semantic-ui-react'
import { loadCategories, putEditPost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class EditPost extends Component {

    state = {
      showModal: false
    }

    handleSubmit (e) { 

      const data = {
          title: e.title.value,
          body: e.body.value,
        }
        
      this.props.putEditPost(this.props.post.id, data);
      this.closeModal()
    }

    componentDidMount() {
      this.props.getCategories();
    }

    closeModal = () => {
      this.setState({ showModal: false })
    }

    openModal = () => {
      this.setState({ showModal: true })
    }

    render() {
      
      const {showModal} = this.state

      //ver melhor maneira de fazer isso
      const options = this.props.categories.reduce(function(categories, category, i) {
        categories[i] = { key: Math.floor((1 + Math.random()) * 0x10000), text: category.name, value: category.name };
        return categories;
      }, []);

      
      return (
        <Modal onClose={this.closeModal} open={showModal}  trigger={<div onClick={this.openModal}>Edit Post</div>} closeIcon>
          <Header icon='edit' content='Edit Post' />
          <Modal.Content>
            <Form  onSubmit={(e) => this.handleSubmit(e.target)}>
              <Form.Input defaultValue={this.props.post.title} id="title" fluid label='Title' placeholder='Title' />
              <Form.TextArea defaultValue={this.props.post.body} id="body" label='Body' placeholder='Tell us more...' />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>

        
      );
    }
    
  }

  const mapStateToProps = (state) => {
    return {
      categories: state.categories
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: () => dispatch(loadCategories()),
      putEditPost: (postId, post) => dispatch(putEditPost(postId, post)),
    }
  }

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
   )(EditPost));

