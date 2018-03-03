import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link  } from 'react-router-dom';
import AddPost from './AddPost.js';

class MenuRoot extends Component {
    
  state = {
  }
  
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  render() {
    return (
      <div className="App">
        <Menu pointing secondary>
            <Menu.Item name='Home'>
            <Link to="/">Home</Link>  
            </Menu.Item>
            <Menu.Item name='AddPost'>
              <AddPost />  
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item name='logout'  />
            </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default MenuRoot