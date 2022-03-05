import React from "react";

function TableLayout({ columnTitles, children }) {
  return (
    <table>
      <thead>
        <tr>
          {columnTitles.map((columnTitle) => {
            return <th key={columnTitle}>{columnTitle}</th>;
          })}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {children ? (
          children
        ) : (
          <tr>
            <td colSpan={8}><b>No data found for this table!</b></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableLayout;
