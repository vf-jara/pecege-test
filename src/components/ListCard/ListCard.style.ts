import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    color: black;
    align-items: center;
    gap: 20px;
    padding: 15px 20px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #e8e8eb;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &:hover{
        background-color: white;
        transform: scale(1.01)
    }

    > .image{
        display: flex;
        background-color: rgba(205,0,40);
        border-radius: 50%;
        overflow: hidden;
        > img{
            width: 50px;
        }
    }

`;