import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';

function Input({ placeholder = 'Enter text here...' }) {
    return (
        <RoundedInput placeholder={placeholder} />
    );
}
const RoundedInput = styled.input`
padding: 1rem 1.5rem;
border: 1px solid #ccc;
border-radius: 30px;
outline: 0;
color: ${colors.dark};
font-size: 1rem;
::placeholder{
  color: #cdcbd7;
}
`

export default Input;