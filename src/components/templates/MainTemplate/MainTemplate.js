import React from "react";
import styled, { css } from "styled-components";
import AsideMenu from "../../molecules/AsideMenu";
import Header from "../../molecules/Header";
import PageTitle from "../../atoms/PageTitle";
import NavigationMenu from "../../molecules/NavigationMenu";
import Loader from "../../molecules/loaders/Loader";
import OverlayLoader from "../../molecules/loaders/OverlayLoader";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

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

const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: inherit;
    width: 100%;
    padding: 50px;

    @media all and (max-width: ${theme.breakpoints.md}) {
      padding: 30px 30px 0;
    }
  `
);

const Top = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
    }
  `
);

const loaderCustomStyles = () => css`
  margin-top: 50px;
`;

const MainTemplate = ({
  children,
  pageTitle,
  menuItems,
  loading,
  isData,
  error,
  topRight
}) => (
  <Wrapper>
    <Header />
    <PageContent id="outer-container">
      <AsideMenu />
      <Main id="page-wrap">
        <PageTitle>{pageTitle}</PageTitle>
        <Top>
          {menuItems && <NavigationMenu menuItems={menuItems} />}
          {topRight && topRight}
        </Top>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {loading &&
          (!isData ? (
            <Loader customStyles={loaderCustomStyles} />
          ) : (
            <OverlayLoader data={isData} />
          ))}

        {children}
      </Main>
    </PageContent>
  </Wrapper>
);

export default MainTemplate;
