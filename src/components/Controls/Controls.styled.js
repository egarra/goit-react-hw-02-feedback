import styled from 'styled-components';

export const List = styled.ul `
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px

`
export const Btn = styled.button `
    padding: 10px;
    border-radius: 5px;
    background: grey;
    border: 1px solid grey;
    color: white;

    &:hover {
        background: teal;
        border: 1px solid teal;
        border-radius: 5px;
        color: white;
    }
`