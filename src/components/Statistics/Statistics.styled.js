import styled from 'styled-components';

export const List = styled.ul `
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px
`

export const Item = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: teal;
    color: white;
`

export const Span = styled.span `
    font-size: 20px;
    padding-bottom: 10px;
    padding-top: 5px;
    :nth-child(odd) {
        border-bottom: 1px solid teal;
        background-color: orange;
        color: black;
    }
    
`