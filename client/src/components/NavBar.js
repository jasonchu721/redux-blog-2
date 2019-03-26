import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
  <Menu inverted >
    <Menu.Item
      as={NavLink}
      exact
      to='/'
      content='Home'
    />
    <Menu.Item
      as={NavLink}
      exact
      to='/Blogs'
      content='Blog Entries'
    />
  </Menu>
);

export default Navbar;
