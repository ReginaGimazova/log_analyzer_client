import React from "react";
import styled from "styled-components";
import AsideMenu from "../../molecules/AsideMenu";
import Header from "../../molecules/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

const MainTemplate = ({children}) => (
  <Wrapper>
    <Header/>
    <Main>
      <AsideMenu/>
      {children}
    </Main>
  </Wrapper>
);

export default MainTemplate;
