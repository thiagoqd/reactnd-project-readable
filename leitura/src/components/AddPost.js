import React, { Component } from 'react';
import { Form, Header, Modal} from 'semantic-ui-react'
import { loadCategories, sendPost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getGuid } from '../utils/scripts'


class AddPost extends Component {
  
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
          title: e.title.value,
          body: e.body.value,
          author : e.author.value,
          category : "redux",
          commentCount: 0
        }
        console.log(data)
        
      this.props.addPost(data);
      this.closeModal()
    
    }

    componentDidMount() {
      this.props.getCategories();
    }

    render() {
      
      const {showModal} = this.state

      //ver melhor maneira de fazer isso
      const options = this.props.categories.reduce(function(categories, category, i) {
        categories[i] = { key: Math.floor((1 + Math.random()) * 0x10000), text: category.name, value: category.name };
        return categories;
      }, []);

     
      return (
        <div>


        <Modal onClose={this.closeModal} open={showModal}  trigger={<div className="menu" onClick={this.openModal}>Add Post</div>} closeIcon>
          <Header icon='add circle' content='Add New Post' />
          <Modal.Content>
            <Form  onSubmit={(e) => this.handleSubmit(e.target)}>
              <Form.Input id="title" fluid label='Title' placeholder='Title' />
              <Form.Group widths='equal'>
                <Form.Input id="author" fluid label='Author' placeholder='Author' />
                <Form.Select id="category" fluid label='category' options={options}  placeholder='Category' />
              </Form.Group>
              <Form.TextArea id="body" label='Body' placeholder='Tell us more...' />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
        </div>
        
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
      addPost: (post) => dispatch(sendPost(post)),
    }
  }

  export default withRouter(connect(
    mapStateToProps,
     mapDispatchToProps
   )(AddPost));

