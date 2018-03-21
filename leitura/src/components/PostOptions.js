import React, { Component } from 'react';
import { Dropdown} from 'semantic-ui-react'
import DeletePost from './DeletePost.js';
import EditPost from './EditPost.js';


class PostOptions extends Component {
    
    render() {


      return (
      <Dropdown upward floating  >
        <Dropdown.Menu>
          <Dropdown.Item>
            <DeletePost post={this.props.post}/>
          </Dropdown.Item>
          <Dropdown.Item>
            <EditPost post={this.props.post}/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      );
    }
    
  }



  export default PostOptions;

