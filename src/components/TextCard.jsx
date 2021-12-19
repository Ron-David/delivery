import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import * as S from '../config/style'
function TextCard({ label, text }) {
    label = 'כותרת'
    text = 'הכאב עצמו הוא כאב, הוא אוהב את תהליך השומן העיקרי. הודות ליצרני המערכת הנוכחית, כיצד זה מספק תובנה מסוימת לגבי מה שהם לא מודעים אליו כתוצאה מהדרכה, אלא בזמנים אחרים? וכשהם לא מפקירים אותם לשאת מסרים, אלא מבקרים את הנאמר, לעשות משהו לרצות אותם בכאב הדרוש?'
    return (
        <Container>
            <S.H1 rtl={true} >{label}</S.H1>
            <S.SubText rtl={true}>{text}</S.SubText>
        </Container>
    );
}

const Container = styled.div`
  height: auto;
  width: 15em;
  background-color: ${colors.light};
  border-radius: 10px;
  padding: 1em;
  margin: 2em 1em ;
  box-shadow: 0px 0px 10px 10px ${colors.lightGrey};

  @media (max-width: 1024px)  {
    margin: 1em 0.5em ;
}
`;


export default TextCard;