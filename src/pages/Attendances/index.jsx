import AddButton from "../../components/AddButton";
import TableLayout from "../../components/TableLayout";
import { TableContainer } from "../../components/TableLayout/styles";
import api from "../../services/api";

import viewImg from "../../assets/view.svg";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useEffect, useState } from "react";
import ModalConfirmation from "../../components/Modal/ModalConfirmation";
import useModal from '../../hooks/useModal';
import { Link } from "react-router-dom";

function Attendances() {
  const [attendances, setAttendances] = useState([]);
  const [attendanceId, setAttendanceId] = useState(0);

  const { isShowing, toggle } = useModal();

  const getAttendances = () => {
    api.get(`/attendances`).then((response) => setAttendances(response.data));
  };

  const resetParams = () => {
    setAttendanceId(0);
  };

  const attendanceDelete = async (attendanceId) => {
    await api.delete('/attendances/' + attendanceId);

    resetParams();
    toggle();
    getAttendances();
  };

  useEffect(() => {
    api.get(`/attendances`).then((response) => setAttendances(response.data));
  }, []);

  return (
    <TableContainer>
      <header>
        <h3>Attendances</h3>
        <Link to="/attendances/save">
          <AddButton />
        </Link>
      </header>
      <TableLayout
        columnTitles={[
          "ID",
          "Student name",
          "Class",
          "Date",
          "Attendance",
          "Excused?",
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
                <Link to={'/attendances/save?attendanceId=' + attendance.id}>
                  <img src={editImg} alt="Edit icon" />
                </Link>
                <img
                  src={deleteImg}
                  alt="Delete icon"
                  onClick={() => {
                    setAttendanceId(attendance.id);
                    toggle();
                  }}
                />
              </td>
            </tr>
          ))}
      </TableLayout>
      <ModalConfirmation
        isShowing={isShowing}
        hide={toggle}
        onConfirm={() => attendanceDelete(attendanceId)}
      >
        <p>
          Are you sure you want to delete the attendance Nº "<b>{attendanceId}</b>"?
        </p>
      </ModalConfirmation>
    </TableContainer>
  );
}

export default Attendances;
