import styled from 'styled-components';

export const ButtonContainer = styled.button`
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
      height: 1rem;
      width: 1rem;
    }
`;
