import React from 'react';
import styled from 'styled-components';
import { FcOk } from "react-icons/fc";

import colors from '../config/colors';
import * as S from '../config/style'

const initList = [
    { id: 0, text: 'איכותיות' },
    { id: 1, text: 'מהירות' },
    { id: 2, text: 'שירותיות' },
]

function ApproveList({ list = initList }) {
    return (
        <div>
            {list.map(item => (
                <TextContainer>
                    <FcOk size={20} />
                    <S.Text rtl={true} key={item.text}>{item.text}</S.Text>
                </TextContainer>
            ))
            }
        </div>
    );
}

const TextContainer = styled.div`
flex-direction: row-reverse;
height: 2.5rem;
width: 100%;
display: flex;
@media (max-width: 1024px)  {
    height: 2rem;
    align-items: center;
}
`;


export default ApproveList;