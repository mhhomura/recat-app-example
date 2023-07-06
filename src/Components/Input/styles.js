import styled from 'styled-components';

export const Container = styled.div`
    width: 25rem;
    height: 4rem;
    > input {
        width: 100%;
        height: 90%;
        border: 1px solid #ebebeb;
        background: #F1F1F1F1;
        border-radius: 25px;
        padding: 10px;
        font-size: 1rem;
        color: #656565;
    }
    @media(max-width: 1300px){
        width: 25rem;
    }
    @media(max-width: 900px){
        width: 100%;
    }
`;

export const Label = styled.div`
    padding-bottom: 0.8rem;
    font-size: 1rem;
    color: #999999;
    font-weight: 400;
`;