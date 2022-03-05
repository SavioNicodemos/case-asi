import React from 'react';
import TableLayout from '../../components/TableLayout';

function Marks() {
  return (
    <TableLayout
          title='Marks'
          columnTitles={[
          "ID",
          "Student name",
          "Class",
          "Subject",
          "Marks",
          "Grade",
          "Notes",
          ]}
        />
  );
}

export default Marks;