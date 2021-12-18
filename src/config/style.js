import styled from 'styled-components';
import colors from './colors';


const Text = styled.h1`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${props => props.color ? props.color : colors.black};
    font-family: serif;
    font-size: 20px;
    margin: 0em 0.4em;
    text-shadow: 0px 5px 20px ${colors.grey};

    @media (max-width: 1024px)  {
        font-size: 15px;
}
`;

const H1 = styled.h1`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${colors.dark};
    font-family: serif;
    font-weight: bold;
    margin: 0.5em 0em;
    @media (max-width: 1024px)  {
    font-size: 25px;
    margin-bottom: 0em;
}
`;

const SubText = styled.p`
    direction: ${props => props.rtl ? 'rtl' : ''};
    color: ${colors.grey};
    font-family: serif;
    font-weight: bold;

    @media (max-width: 1024px)  {
    font-size: 12px;
}
`;

export { Text, SubText, H1 }