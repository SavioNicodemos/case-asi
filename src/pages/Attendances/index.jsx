import AddButton from "../../components/AddButton";
import TableLayout from "../../components/TableLayout";
import { TableContainer } from "../../components/TableLayout/styles";
import api from "../../services/api";

import viewImg from "../../assets/view.svg";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useEffect, useState } from "react";

function Attendances() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    api.get(`/attendances`).then((response) => setAttendances(response.data));
  }, []);

  return (
    <TableContainer>
      <header>
        <h3>Attendances</h3>
        <AddButton />
      </header>
      <TableLayout
        columnTitles={[
          "ID",
          "Student name",
          "Class",
          "Date",
          "Present/Absent/Tardy",
          "Excused/Unexcused",
          "Notes",
        ]}
      >
        {attendances &&
          attendances.map((attendance) => (
            <tr key={attendance.id}>
              <td>{attendance.id}</td>
              <td>{attendance.student_name}</td>
              <td>{attendance.class}</td>
              <td>{attendance.date}</td>
              <td>{attendance.attendance}</td>
              <td>{attendance.excused ? "V" : "X"}</td>
              <td>{attendance.note}</td>
              <td>
                <img src={viewImg} alt="View icon" />
                <img src={editImg} alt="Edit icon" />
                <img src={deleteImg} alt="Delete icon" />
              </td>
            </tr>
          ))}
      </TableLayout>
    </TableContainer>
  );
}

export default Attendances;
