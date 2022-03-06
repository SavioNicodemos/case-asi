import React from 'react';

import {Link} from "react-router-dom";

import { Container } from './styles';

function Sidebar() {
  return (
    <Container>
      <ul>
        <Link to='/'>Home Page</Link>
        <Link to='/students'>Students</Link>
        <Link to='/attendances'>Attendances</Link>
        <Link to='/marks'>Marks</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </ul>
    </Container>
  );
}

export default Sidebar;