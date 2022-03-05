import React, { useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import TableLayout from "../../components/TableLayout";
import { TableContainer } from "../../components/TableLayout/styles";

import viewImg from "../../assets/view.svg";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";

import api from "../../services/api";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get(`/students`).then((response) => setStudents(response.data));
  }, []);

  return (
    <TableContainer>
      <header>
        <h3>Students</h3>
        <AddButton />
      </header>

      <TableLayout
        columnTitles={[
          "ID",
          "First Name",
          "Last Name",
          "E-mail",
          "Joined",
          "Leaved",
          "Birthday",
        ]}
      >
        {students && (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.date_of_joining}</td>
              <td>{student.date_of_leaving}</td>
              <td>{student.date_of_birthday}</td>
              <td>
                <img src={viewImg} alt="View icon" />
                <img src={editImg} alt="Edit icon" />
                <img src={deleteImg} alt="Delete icon" />
              </td>
            </tr>
          ))
        )}
      </TableLayout>
    </TableContainer>
  );
}

export default Students;
