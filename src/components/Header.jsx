import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import * as S from '../config/style'

function Header(props) {
    const text = 'הכאב עצמו הוא כאב רב ולמי שמאשימים אותנו בחנינה לכל החיים, שום דבר לא קשור לנו בהנאות הנוחות הקשות ביותר.'
    const label = 'משלוחים!'
    return (
        <Container>
            <Img src='https://i.ibb.co/gd7w8b8/truck-trsnparent.png' />
            <TextContainer>
                <S.H1 rtl={true} bold={true}>{label}</S.H1>
                <S.SubText rtl={true}>{text}</S.SubText>
                <Button shadow={10} />
            </TextContainer>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    height: 100%;
    width: 65%;
    padding: 2em 3em;
    align-self: center;

    @media (max-width: 1024px)  {
        flex-direction: column;
        align-items: center;
        padding: 0em;

    }
`;

const TextContainer = styled.div`
  width  : 100%;
  margin-left: 10em;

  @media (max-width: 1024px)  {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0em;
    }
`;

const Img = styled.img`
height: 20em;
width: 30em;
margin-bottom: 2rem;
@media (max-width: 1024px)  {
    height: 8em;
    width: 10em;
}
`
export default Header;