import React from "react";
import styled from "styled-components";
import AsideMenu from "../../molecules/AsideMenu";
import Header from "../../molecules/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: inherit;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  width: 100%;
`;

const MainTemplate = ({children}) => (
  <Wrapper>
    <Header/>
    <PageContent>
      <AsideMenu/>
      <Main>
        {children}
      </Main>
    </PageContent>
  </Wrapper>
);

export default MainTemplate;
