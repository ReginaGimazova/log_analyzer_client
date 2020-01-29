import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import MainTemplate from "../../templates/MainTemplate";
import PageTitle from "../../atoms/PageTitle";
import Button from "../../atoms/Button";
import SqlAnalyzeSection from "../../organisms/SqlAnalyzeSection";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: max-content;
  
  @media all and (max-width: 600px){
    flex-direction: column;
  }
`;

const PageContent = styled.div`
  padding: 0 50px;
  
   @media all and (max-width: 600px){
     padding: 0 10px;
  }
`;

const useStyles = makeStyles(({
  button: {
    padding: '10px 20px',
    marginRight: '30px'
  }
}));

const OriginalDumpAnalyzePage = () => {
  const styles = useStyles();
  
  const [isBySql, setIsBySql] = useState(true);
  
  const onSqlChoose = () => {
    setIsBySql(true);
  };
  
  const onSqlUserHostChoose = () => {
    setIsBySql(false)
  };
  
  return (
    <MainTemplate>
      <PageTitle>Original dump analyze</PageTitle>
      <Navigation>
        <Button onClick={onSqlChoose} className={styles.button}> grouped by sql</Button>
        <Button onClick={onSqlUserHostChoose}> grouped by sql and user host</Button>
      </Navigation>
      <PageContent>
        {isBySql ? (
          <SqlAnalyzeSection/>
        ) : (
          <p>another</p>
        )}
      </PageContent>
    </MainTemplate>
  )
};

export default OriginalDumpAnalyzePage;
