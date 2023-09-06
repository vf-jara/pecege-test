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
`;

export const ContactData = styled.div`
    width: 100%;
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

`;

export const AvatarContainer = styled.div`
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: rgba(205,0,40);
    > img{
        height: 150px;
    }
    @media(max-width:480px){
        
    }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    @media(max-width: 780px){
        justify-content: center;
        > Button > span {
            display: none;
        }
    }
    
`;

export const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    > div{
        background-color: white;
        padding: 30px;
        margin: 15px;
        border-radius: 25px;
        border: 2px solid rgba(205,0,40,0.5);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        > div{
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
    }
`;