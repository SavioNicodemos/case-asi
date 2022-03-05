import React from 'react';
import TableLayout from '../../components/TableLayout';

function Attendances() {
  return (
    <TableLayout
          title='Attendances'
          columnTitles={[
          "ID",
          "Student name",
          "Class",
          "Date",
          "Present/Absent/Tardy",
          "Excused/Unexcused",
          "Notes",
          ]}
        />
  );
}

export default Attendances;