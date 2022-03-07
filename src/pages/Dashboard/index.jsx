import { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

function Dashboard() {
  const [students,setStudents] = useState([]);

  useEffect(() => {
    api.get('/students').then((response) => setStudents(response.data))
  }, []);
  return (
    <Container>
      <h3>Dashboard</h3>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
          {students &&
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{`${student.first_name} ${student.last_name}`}</td>              
            </tr>
          ))}
          </tbody>
        </table>
        <h1>Charts goes here</h1>
      </div>
    </Container>
  );
}

export default Dashboard;
