import React from 'react';
import styled from 'styled-components';
import { BsFillTelephoneFill } from "react-icons/bs";
import colors from '../config/colors';
import Button from './Button';

function PhoneNum({ number = '050-1234567', iconSize = 30 }) {
    return (
        <Container>
            <BsFillTelephoneFill size={20} color={colors.green} />
            <Button color={colors.green} label={number} />
        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-radius: 5em;
border-style: solid;
border-width: 0.1em 0.1px;
border-color: ${colors.green};
padding: 0.2rem 0.5rem;
`
export default PhoneNum;