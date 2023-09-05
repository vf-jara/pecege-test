import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position:relative;
  @media(max-width:480px){
    flex-direction: column-reverse;
  }
`;

export const Sidebar = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 20%;
  padding: 1rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  background-color: white;
  @media(max-width:480px){
    width: 100%;
    position: fixed;
    z-index: 999;
    bottom: 0;
  }
  & img{
    margin-bottom: 20px;
    @media(max-width:480px){
      display:none;
      margin-bottom: 0;
    }
  }
  @media(min-width:481px) and (max-width: 780px){
    width: 30%;
  }
`;
export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(max-width:480px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:5px;
    & span{
      font-size: 12px;
    }
  }

`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
