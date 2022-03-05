import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 100%;
  width: 100%;
  overflow: scroll;
  margin: 1rem;

  table, th, td {
  border: 1px solid;
  }

  th, td {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding-top: 10px;
    padding-bottom: 10px;
  }

  header {
  margin: 1rem;
  display: flex;
  align-items: center;
  border-top: 1rem;
  justify-content: space-between;
  }

  table{
    width: 100%;
    border-collapse: collapse;
  }

  img {
    height: 1rem;
    width: 1rem;
  }

  button {
    font-weight: bold;
    font-size: 1rem;
    color: black;
    background: var(--green);
    padding: 0 2rem;
    height: 2rem;
    transition: filter 0.2s;

    border: 2px solid;
    border-color: black;
    border-radius: 0.4rem;
    
    &:hover {
      filter: brightness(0.9);
    }

    img {
      margin-right: 1rem;
    }
  }

  img+img {
    margin-left: 0.5rem;
  }

  td:last-child{
    padding: 0 0.5rem;

    img{
      cursor: pointer;
    }
  }
`;
