import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

function Button({ label = 'צור קשר!', color = colors.primary, onClick }) {
  return (
    <Container rtl={true} color={color} onClick={onClick}>{label}</Container >
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
  font-weight: bold;
  margin: 0em 1em;
:hover{
    opacity: 0.7;

}

@media (min-width: 1024px)  {
  height: 3.5em;
  width: 10em;
  border-radius: 30em;
}
`;

export default Button;