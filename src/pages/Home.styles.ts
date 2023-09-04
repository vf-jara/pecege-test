import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  border: 1px solid red;
  display: flex;
  @media(max-width:480px){
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 20%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media(max-width:480px){
    width: 100%;
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
