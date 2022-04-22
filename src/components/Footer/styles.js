import styled from "styled-components";

export const FooterBr = styled.footer`
    box-sizing: border-box;
    width: 100%;
    margin-top: 20px;
    background-color: var(--greenColor);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `;

export const FooterBrUp = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 300px){
        flex-direction: column;
    }
`;

export const FooterMid = styled.div`
    box-sizing: border-box;
    color: var(--whiteColor);
    font-weight: 700;
    font-size: 25px;
    text-align: right;

    @media screen and (max-width: 300px){
        margin-top: 20px;
        text-align: left;
    }
`;

export const FooterItemLine = styled.div`
    box-sizing: border-box;

    @media screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
    }
    
    a{
        
        svg{
            color: var(--whiteColor);
            margin-top: 10px;
            margin-left: 20px;
            
            transition: all .3s;
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            
            :hover{
                color: var(--yellowColor);
            }
        }
    }

    @media screen and (max-width: 300px){
        
        a{
            svg{
                margin-left: 0px;
            }
        }
    }
`;

export const FooterIcon = styled.div`
    box-sizing: border-box;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 400px){
        align-items: baseline;
    }

    a{
        width: 100%;
        background-color: var(--whiteColor);
        border-radius: 10px;

        img{
            width: 100%;
        }
    }
`;

export const FooterBrBack = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: var(--blueColor);
    color: var(--yellowColor);
    font-weight: 700;
    display: flex;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 400px){
        font-size: 15px;
    }

    @media screen and (max-width: 340px){
        font-size: 10px;
    }
`;