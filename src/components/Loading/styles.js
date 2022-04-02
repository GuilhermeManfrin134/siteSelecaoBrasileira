import styled, { keyframes, css } from "styled-components";

export const LoadingPage = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`;

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const LoadingText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 25px;
    padding-bottom: 20px;
    color: var(--greenColor);

    ${
        css`
        svg{
            animation: ${animate} 2s linear infinite;
        }
    `
    }
`;

