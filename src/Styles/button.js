import styled from 'styled-components'

export const Button01 = styled.button`
    background: transparent linear-gradient(40deg, #42a6ef 0%, #2473D1 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    height: 4rem;
    border-radius: 20px;
    color: #FFFFFFFF;
    font-weight: 500;
    font-size: 1.3rem;
    transition: background-color 4s, transform 0.3s;

    &:active {
        background: transparent linear-gradient(40deg, #2473D1 0%, #42a6ef 100%) 0% 0% no-repeat padding-box;
        transform: translateY(2px);
        border: 1px solid #000;
  }
`;