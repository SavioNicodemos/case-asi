import React from 'react';
import TableLayout from '../../components/TableLayout';

function Students() {
  return (
    <TableLayout
          title='Students'
          columnTitles={[
          "ID",
          "First name",
          "Last name",
          "Email",
          "Date of joining",
          "Date of leaving",
          "DOB",
          ]}
        />
  );
}

export default Students;