import { styled } from 'styled-components'

export const ContactsContainer = styled.div`
    width: 60%;
    @media(max-width:780px){
        width: 100%;
    }
`;

export const Navigation = styled.div`
    width: 100%;
    padding: 10px;
    background-color: white;
    @media(max-width:480px){
        position: fixed;
        margin-top: 0;
        top:0;
        right: 0;
        z-index: 999;
    }
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 20px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    > svg {
        width: 50px;
    }
    > input {
        width: 100%;
        border: none;
        &:focus{
            border:none;
            outline: none;
        }
    }
`;

export const SortContainer = styled.div`
    display: flex;
    align-items: center;

    > select{
        border:none;
        outline: none;
    }
`;

export const ListContainer = styled.div`
    z-index: -1;
    @media(max-width:480px){
        padding-top: 120px;
        padding-bottom: 80px;
    }
`;