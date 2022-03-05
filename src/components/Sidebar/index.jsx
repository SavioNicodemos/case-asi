import React from 'react';

import {Link} from "react-router-dom";

import { Container, Item } from './styles';

function Sidebar() {
  return (
    <Container>
      <ul>
        <Item><Link to='/'>Home Page</Link></Item>
        <Item><Link to='/students'>Students</Link></Item>
        <Item><Link to='/attendances'>Attendances</Link></Item>
        <Item><Link to='/marks'>Marks</Link></Item>
        <Item><Link to='/dashboard'>Dashboard</Link></Item>
      </ul>
    </Container>
  );
}

export default Sidebar;