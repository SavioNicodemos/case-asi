import { useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import TableLayout from "../../components/TableLayout";
import { TableContainer } from "../../components/TableLayout/styles";
import api from "../../services/api";

import viewImg from "../../assets/view.svg";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";

function Marks() {
  const [marks, setMarks] = useState([]);

  const getMarks = () => {
    api.get(`/marks`).then((response) => setMarks(response.data));
  }

  useEffect(() => {
    getMarks();
  }, []);
  
  return (
    <TableContainer>
      <header>
        <h3>Marks</h3>
        <AddButton />
      </header>
      <TableLayout
        columnTitles={[
          "ID",
          "Student name",
          "Class",
          "Subject",
          "Marks",
          "Grade",
          "Notes",
        ]}
      >
        {marks && (
          marks.map((mark) => (
            <tr key={mark.id}>
              <td>{mark.id}</td>
              <td>{mark.student_name}</td>
              <td>{mark.class}</td>
              <td>{mark.subject}</td>
              <td>{mark.mark}</td>
              <td>{mark.grade}</td>
              <td>{mark.note}</td>
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

export default Marks;
