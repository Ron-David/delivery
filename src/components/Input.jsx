import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import Icon from './Icon';

function Input({ placeholder = 'Enter text here...', iconBackground, children }) {
  return (
    <RounedDiv>
      <Icon background={iconBackground}>
        {children}
      </Icon>
      <RoundedInput placeholder={placeholder} />
    </RounedDiv>
  );
}

const RounedDiv = styled.div`
height: 3rem;
width: 50rem;
padding: 0rem 0rem;
border: 1px solid ${colors.lightGrey};
border-radius: 30px;
outline: 0;
margin: 0.5rem 0rem;
box-shadow: 0px 0px 3px 3px ${colors.lightGrey};
display: flex;
background-color: ${colors.white};

justify-content: center;
align-items: center;
@media (max-width: 1024px)  {
   height: 2.5rem;
    width: 20rem;
}
`
const RoundedInput = styled.input`
height: 50%;
width: 90%;
border: 0px solid ${colors.lightGrey};
border-radius: 30px;
outline: 0;
color: ${colors.dark};
font-size: 1rem;
::placeholder{
  color: #cdcbd7;

  @media (max-width: 1024px)  {
    width: 20rem;
}

}
`

export default Input;