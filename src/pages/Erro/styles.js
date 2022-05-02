import styled from "styled-components";

export const ErroBr = styled.div`
    box-sizing: border-box;
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 350px;
`;

export const TextError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 10px;
    text-align: center;
    font-weight: 700;

    a{
        color: var(--blueColor);
    }
`;