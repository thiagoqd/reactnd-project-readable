import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link  } from 'react-router-dom';
import AddPost from './AddPost.js';


const CategoryDropdown = () => (
    <Dropdown  text='Categories' style={{color: 'white'}}>
      <Dropdown.Menu>
        <Dropdown.Item>
            <Link to="/">All</Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to="/react">React</Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to="/redux">Redux</Link>
        </Dropdown.Item>
        <Dropdown.Item>
            <Link to="/udacity">Udacity</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

var MenuRoot = (props) => {
    return (
      <div className="menu">
        <Menu pointing secondary>
            <Menu.Item name='Home'>
            <Link to="/">Home</Link>  
            </Menu.Item>
            <Menu.Item name='AddPost'>
              <AddPost />  
            </Menu.Item>
            <Menu.Item name='Categories'>
            <CategoryDropdown />  
            </Menu.Item>
        </Menu>
    </div>);
  
}

export default MenuRoot
