import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

function Button({ label = 'צור קשר!', color = colors.primary, shadow, onClick }) {
  return (
    <Container rtl={true} color={color} onClick={onClick} shadow={shadow}>{label}</Container >
  );
}

const Container = styled.button`
  height: 3.5em;
  width: 10em;
  border-radius: 30em;
  direction: ${props => props.rtl ? 'rtl' : ''};
  color: ${colors.white};
  background-color: ${props => props.color ? props.color : colors.primary};
  cursor: pointer;
  border:  solid ;
  font-family: sans-serif;
  border-width: 0.1em;
  font-weight: bold;
  margin: 0.2em 0.1em;
  box-shadow: 0px 0px ${({ shadow }) => shadow ? shadow : 0}px ${({ shadow }) => shadow ? shadow : 0}px ${colors.lightGrey};

:hover{
    opacity: 0.7;
    background-color: ${colors.white};
    color: ${({ color }) => color ? color : colors.primary};


}

@media (min-width: 1024px)  {
  height: 3.5em;
  width: 10em;
  border-radius: 30em;
}
`;

export default Button;