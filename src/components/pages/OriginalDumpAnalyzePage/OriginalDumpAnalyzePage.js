import React, {useState} from "react";
import styled from "styled-components";
import MainTemplate from "../../templates/MainTemplate";
import PageTitle from "../../atoms/PageTitle";
import SqlAnalyzeSection from "../../organisms/SqlAnalyzeSection";
import NavigationMenu from "../../molecules/NavigationMenu";
import Pagination from "../../molecules/Pagination";

const PageContent = styled.div`
  padding: 0 50px;
  
   @media all and (max-width: ${({theme}) => theme.breakpoints.md}){
     padding: 0 10px;
  }
`;

const OriginalDumpAnalyzePage = () => {
  const [isBySql, setIsBySql] = useState(true);
  
  return (
    <MainTemplate>
      <PageTitle>Original dump analyze</PageTitle>
      <NavigationMenu setIsBySql={setIsBySql}/>
      <PageContent>
        {isBySql ? (
          <SqlAnalyzeSection/>
        ) : (
          <p>another</p>
        )}
        <Pagination/>
      </PageContent>
    </MainTemplate>
  )
};

export default OriginalDumpAnalyzePage;
