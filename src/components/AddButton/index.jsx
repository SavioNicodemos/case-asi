import React from 'react';

import { ButtonContainer } from './styles';

import plusImg from '../../assets/plus.svg';

function AddButton() {
  return (
    <ButtonContainer>
      <img src={plusImg} alt="add symbol" />
          Add
    </ButtonContainer>
  );
}

export default AddButton;