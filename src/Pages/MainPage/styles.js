import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(92.25deg, rgba(56, 114, 229, 0.77) 31.46%, rgba(102, 194, 244, 0.6) 85.86%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

export const CentralDiv = styled.div`
    background: #FFFFFFFF;
    width: 40%;
    height: 65%;
    border-radius: 10px;
    padding: 15px;
    padding-top: 6%;
    box-shadow: 5px 5px 5px 5px  rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    position: relative;
    
    
    @media(max-width: 1300px){
        width: 60%;
        height: 550px;
    }
    @media(max-width: 900px){
        width: 90%;
        height: 550px;
    }
    @media(max-height: 600px){
        height: 450px;
    }
`;
export const DivBoll = styled.div`
        position: absolute;
        background: linear-gradient(50deg, rgba(25, 118, 210, 1) 31.46%, rgba(102, 194, 244, 1) 85.86%);
        display: flex;
        justify-content: center;
        border-radius: 100%;
        border: 10px solid #FFFFFFFF;
        height: 10rem;
        width: 10rem;
        left: 50%;
        top: -2%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 5px 5px   rgba(0, 0, 0, 0.3);
        > img {
            width: 70%;
        }
    @media(max-height: 600px){
        display: none;
    }
    @media(max-width: 320px){
        display: none;
        height: 80px;
        width: 80px;
    }
    @media(max-width: 1200px){
        height: 5rem;
        width: 5rem;
    }
`;
export const Title = styled.div`
     position: relative;

     > h1 {
        color: #2473d1;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 2.3rem;
     }
`;
export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
export const Row = styled.div`
    padding-bottom: 10%;
    @media(max-height: 600px){
        padding-bottom: 50px;
    }
`;
