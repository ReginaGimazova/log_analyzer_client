import React from "react";
import styled from "styled-components";
import Header from "../../molecules/Header";
import AsideMenu from "../../molecules/AsideMenu";

const Template = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;

const Wrapper = styled.section`
  display: flex;
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
`;

const DefaultTemplate = ({ children }) => (
  <Template>
    <Header />
    <AsideMenu />
    <Wrapper>{children}</Wrapper>
  </Template>
);

export default DefaultTemplate;
