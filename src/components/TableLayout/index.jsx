import React from 'react';
import plusImg from '../../assets/plus.svg';
import viewImg from '../../assets/view.svg';
import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

import { TableContainer } from './styles';

function TableLayout({title, columnTitles}) {
  return (
    <TableContainer>
      <header>
        <h3>{title}</h3>
        <button>
          <img src={plusImg} alt="add symbol" />
          Add
        </button>
      </header>

      <table>
        <tr>
          {columnTitles.map(columnTitle => {
            return (
              <th>{columnTitle}</th>
            )
          })}
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Nicodemos</td>
          <td>Santos</td>
          <td>nicodemosgcosta@gmail.com</td>
          <td>01/01/2020</td>
          <td>31/12/2021</td>
          <td>13/04/1997</td>
          <td>
            <img src={viewImg} alt="View icon" />
            <img src={editImg} alt="Edit icon" />
            <img src={deleteImg} alt="Delete icon" />
          </td>
        </tr>
      </table>
    </TableContainer>
  );
}

export default TableLayout;