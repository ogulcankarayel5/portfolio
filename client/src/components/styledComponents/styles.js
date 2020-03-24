import styled from 'styled-components';


export const Title = styled.h1`
    color:${props => props.theme.colors.titleColor};
    font-size:1.8rem;
    text-transform:uppercase;


`;

export const SubTitle = styled.h2`
    color:${props => props.theme.colors.subTitleColor};
    font-size:1.5rem;
`

export const Paragraph = styled.p`
    font-size:1.3rem;
    color:${props => props.theme.colors.textColor};
`



