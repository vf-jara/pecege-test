import styled from "styled-components";

export const DetailsContainer = styled.div`
    width: 60%;
    padding: 20px;
    border: 2px solid rgba(205,0,40,0.2);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    @media(max-width:780px){
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    > .return{
        position: absolute;
        right:10px;
        top:10px;
    }
    >.title{
        padding-bottom: 20px;
        padding-left: 20px;
        > h2{
            font-size: 18px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 780px){
        justify-content: center;
        > Button > span {
            display: none;
        }
    }
    
`;

export const ContactData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(205,0,40,0.1);
    @media(max-width: 480px){
        > p {
            font-size: 14px;
            > b {
                font-size: 14px;
            }
        }
    }
    > input {
        padding: 5px 5px;
        margin-bottom: 15px;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 7px;
        &:focus{
            outline-color: rgba(205,0,40);
        }
    }

`;