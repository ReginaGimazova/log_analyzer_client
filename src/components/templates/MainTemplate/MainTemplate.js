import React from "react";
import styled from "styled-components";
import AsideMenu from "../../molecules/AsideMenu";
import Header from "../../molecules/Header";
import PageTitle from "../../atoms/PageTitle";

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

const Main = styled.main(({theme}) =>`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  width: 100%;
  padding: 50px;
  
  @media all and (max-width: ${theme.breakpoints.md}){
    padding: 30px 30px 0;
  }
`);

const MainTemplate = ({children, pageTitle}) => (
  <Wrapper>
    <Header/>
    <PageContent id='outer-container'>
      <AsideMenu/>
      <Main id='page-wrap'>
        <PageTitle>{pageTitle}</PageTitle>
        {children}
      </Main>
    </PageContent>
  </Wrapper>
);

export default MainTemplate;
