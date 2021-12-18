import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import Logo from './Logo';

function Navbar(props) {
    return (
        <NavContainer>
            <Logo />
        </NavContainer>
    );
}

const NavContainer = styled.div`
background: ${colors.primary};
padding-left: 1em;
padding: 0.5em 5em;
display: flex;
align-items: center;
justify-content: center;
`;


export default Navbar;