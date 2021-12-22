import React from 'react';
import { FaTaxi } from 'react-icons/fa'
import styled from 'styled-components';

import * as S from '../config/style'

function MediaText({ title, text, IconComponent }) {
    return (
        <Container>
            {IconComponent()}
            <TextContainer>
                <S.H1 rtl={true} bold={true}>{title}</S.H1>
                <S.SubText rtl={true}>{text}</S.SubText>
            </TextContainer>
        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: row-reverse;
margin: 1rem 0rem;
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0rem 1rem;
`


export default MediaText;