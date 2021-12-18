import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import * as S from '../config/style'

function Footer({ text = 'Ⓒ SPETX' }) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
}
const Container = styled.div`
height: 5em;
width: 100%;
background-color: ${colors.primary};
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.h1`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${colors.light};
    font-family: serif;
    font-weight: bold;
    font-size: 15px;
`;
export default Footer;