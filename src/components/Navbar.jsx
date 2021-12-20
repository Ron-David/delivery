import React, { useState } from 'react';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs'

import colors from '../config/colors';
import Logo from './Logo';

function Navbar(props) {
    const [navActivity, setNavActivity] = useState(false)
    return (
        <>
            <NavContainer>
                <Logo />

                <IconContainer active={navActivity} onClick={() => setNavActivity(!navActivity)} >
                    <BsList size={25} />
                </IconContainer>
            </NavContainer>

            <ItemsContainer active={navActivity}>
                <ListItem active={navActivity}>הסעות</ListItem>
                <ListItem active={navActivity}>מוניות</ListItem>
                <ListItem active={navActivity}> משלוחים</ListItem>
            </ItemsContainer>

        </>
    );
}

const NavContainer = styled.div`
background: ${colors.primary};
padding: 0 1rem;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 1024px)  {

}
`;

const ItemsContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0rem;
  height: ${({ active }) => active ? 6.8 : 0}rem;
  transition: height 1.5s;


`;
const IconContainer = styled.div`
color: ${colors.white};
opacity: ${({ active }) => active ? 1 : 0.8};
transition: opacity 0.2s;
transition: transform 0.2s;
cursor: pointer;
transform: rotate(${({ active }) => active ? -90 : 0}deg);
:active{
        transform: rotate(-90deg);
}
:hover{
    opacity: 1;

    }
    @media (max-width: 1024px)  {
}
`
const ListItem = styled.a`
    color: ${colors.white};
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    padding: 0.5rem 1rem;
    border-top: 1px solid ${colors.lightGrey};
    cursor: pointer;
    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    opacity: ${({ active }) => active ? 0.8 : 0};

    :hover{
        opacity: 1;
        transition: opacity 0.2s;

    }
    transition: opacity 2s;
    @media (max-width: 1024px)  {

}
`


export default Navbar;