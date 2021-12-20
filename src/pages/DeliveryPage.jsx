import React from 'react';
import styled from "styled-components";
import { FaTruck } from 'react-icons/fa'
import { MdEmojiTransportation, MdLocalTaxi } from 'react-icons/md'

import Header from '../components/Header';
import TextCard from '../components/TextCard';
import colors from '../config/colors';
import ApproveList from '../components/ApproveList';
import Footer from '../components/Footer';
import PhoneNum from '../components/PhoneNum';
import * as S from '../config/style'
import InputForm from '../components/InputForm';
import MediaText from '../components/MediaText';

const fakeMediaData = {
    delivery: { title: 'משלוחים', text: 'משלוחים משלוחים משלוחים משלוחים משלוחים משלוחים משלוחים' },
    taxi: { title: 'מוניות', text: 'מוניות מוניות מוניות מוניות מוניות מוניות מוניות ' },
    transportation: { title: 'הסעות', text: 'הסעות הסעות הסעות הסעות הסעות הסעות הסעות הסעות ' },

}

function DeliveryPage(props) {
    const label = 'מהירות, אמינות זה אנחנו!'
    const text =
        'הרכות של הסוג, שקל להסירה, מרגיעה את הנאות הטרדות, בגלל ביטויי החנופה הבלתי כבולים, דוחה את הקדוש ברוך הוא חב לנו את החובות הללו. תן לזה לגרום לכאב עמל, כי זה יותר כואב לפרגן מאשר, לכן אשמתנו מבקשת להרגיע את ההנאות הנבחרות. כל מי שהושחת ימצא פגם במשרדיו, ואף אחד מאיתנו לא יסביר להם את כאבי הבחירות הנוכחיות שלהם, את הכאבים העמלניים שהם התנערו מהם, את היתרון שהם מקבלים ממנו ומה נאמר עליהם. אבות. מושחת על ידי כורח הסבל, הכאבים שנמשכים את עצמם. אין הבחנה, אחריה מגיעה הנאה, כי היא לעולם לא תהיה פחות עמלנית עבור המשבחים אותם, היא תהיה תוצאה של מאמץ שחייב להתקבל על ידי משהו דומה; האמת מאשימה אותך בעשיית הנאות, הם נוטשים את מכאוביהם, הם חוזים זאת, אבל משהו יקרה, מי ימחול על החובות העיקריים של הנוכחים שאינם יודעים למצוא הנאה בחובותיהם כאן? הדבר העיקרי שצריך לעשות הוא לתפוס אותו מהמשחק הראשי ולהימנע מלעודד את הדברים שאחריו, לא הבחור. אשרי האיש שעושה על עצמו עבודה קשה. או שמא הם צופים את הכאבים הכי רגועים, וכמה שפחות כאבים, ממתי ומתי לבחור מהפחות מההנאות שלהם, מה מפריע להם? ההבחנה היא טעות בזמן, כי מתוך בחירה זו, או שהם נוטשים אותה כדי להתקבל על ידו, אסביר לנו ששום גוף קטן ובלתי משועבד לא יכול להימלט בקלות מכל המילים שאמר האדריכל, והוא מקבל שום דבר!'
    return (
        <Container>
            <Header />
            <TextContainer>
                <S.H1 rtl={true}>{label}</S.H1>
                <S.SubText rtl={true}>{text}</S.SubText>
            </TextContainer>
            <PhoneContainer>
                <PhoneNum />
                <ApproveList />
            </PhoneContainer>

            <MediaContainer>
                <MediaText title={fakeMediaData.taxi.title} text={fakeMediaData.taxi.text} IconComponent={() => <MdLocalTaxi size={28} color={colors.primary} />} />
                <MediaText title={fakeMediaData.delivery.title} text={fakeMediaData.delivery.text} IconComponent={() => <FaTruck size={30} color={colors.primary} />} />
                <MediaText title={fakeMediaData.transportation.title} text={fakeMediaData.transportation.text} IconComponent={() => <MdEmojiTransportation size={30} color={colors.primary} />} />
            </MediaContainer>

            <RowContainer>
                <TextCard />
                <TextCard />
                <TextCard />
            </RowContainer>
            <InputForm />
            <Footer />
        </Container >
    );
}
const Container = styled.div`
flex-direction: column;
background-color: ${colors.light};
display: flex;
justify-content: center;
padding-top: 1em;

`;

const TextContainer = styled.p`
  display : flex;
  flex-direction: column;
  align-self: center;
  width: 70%;
  @media (max-width: 1024px)  {
        width: 80%;
}

`;
const RowContainer = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
align-self: center;
@media (max-width: 1024px)  {
    align-items: center;
    flex-direction: column;
    margin-bottom: 1em;
}

`
const PhoneContainer = styled.div`
display: flex;
width: 70%;
flex-direction: row;
align-items: center;
justify-items: center;
justify-content: space-between;
align-self: center;


@media (max-width: 1024px)  {
    margin-bottom: 1em;
    width: 80%;
}
`

const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 3rem;
    justify-content: start;
    width: 85%;
    @media (max-width: 1024px)  {
        width: 80%;
}
`

export default DeliveryPage;