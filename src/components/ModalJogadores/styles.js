import styled from "styled-components";

export const ModalPlayers = styled.div`
    width: 95%;
    position: fixed;
    max-width: 300px;
    max-height: 400px;
    top: 5%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1em 1em;
    background-color: #fcfcfc;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;

    svg{
        position: fixed;
        margin-top: -15px;
        margin-left: 20px;  
    }

    @media screen and (max-width: 430px){
        width: 100%;
        max-width: 230px;
    }
`;