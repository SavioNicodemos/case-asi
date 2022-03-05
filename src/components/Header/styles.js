import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`

export const Content = styled.div`
  background: var(--blue-light);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid;
  border-color: black;

  img{
    height: 1.5rem;
    cursor: pointer;
  }

  img+img{
    margin-left: 1rem;
  }
`