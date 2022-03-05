import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  width: 100%;

  .container {
    display: inline-flex;
    align-items: flex-start;
  }

  table, th, td {
  border: 1px solid;
  }

  table{
    border-collapse: collapse;
    margin-right: 1rem;
  }

  th, td {
    padding: 1rem;
  }
  
`;
