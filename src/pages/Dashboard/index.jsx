import React from 'react';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <h3>Dashboard</h3>
      <div className='container'>
      <table>
        <tr>
          <th>ID</th>
          <th>Student Name</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Nicodemos</td>
        </tr>
      </table>
      <h1>A lot of charts</h1>
      </div>
    </Container>
  );
}

export default Dashboard;