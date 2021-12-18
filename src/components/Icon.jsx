import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';

function Icon({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.div`
display: flex;
    height: 50px;
    width: 50px;
    border-radius: 30px;
    background-color: ${colors.cyan};
    box-shadow: 0px 0px 5px 0px ${colors.grey};

    justify-content: center;
    align-items: center;

`;

export default Icon;