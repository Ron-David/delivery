import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';

function Logo(props) {
    return (
        <Container>
            <Text>SPETX</Text>
            <SubText>DELIVERY SERVICES</SubText>
        </Container>
    );
}
const Container = styled.div`
padding: 5px;
text-align: center;
cursor: pointer;

`;

const Text = styled.h1`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${colors.light};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 28px;
    margin: 0px;
    letter-spacing: 5px;
    @media (max-width: 1024px)  {
        font-size: 20px;

}
`;
const SubText = styled.p`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${colors.white};
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 2px;

    font-size: 10px;
    margin: 0px;
    @media (max-width: 1024px)  {
        font-size: 7px;

}

`;
export default Logo;