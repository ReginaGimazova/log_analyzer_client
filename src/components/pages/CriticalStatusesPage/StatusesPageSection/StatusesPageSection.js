import React from 'react';
import styled, {withTheme} from "styled-components";
import SearchInput from "../../../atoms/SearchInput";
import QueriesList from "../../../molecules/QueriesList";
import {Link} from "react-router-dom";
import Button from "../../../atoms/Button";

const HighLightText = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1.185rem;
  color: ${({theme}) => theme.colors.red};
  
  a {
    margin-left: 6px;
    color: ${({theme}) => theme.colors.red};
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 50px 0;
`;

const GreenButton = styled(Button)`
  font-weight: bold;
  padding: 10px;
`;

const StatusesPageSection = ({queries, type, theme}) => {
  return (
    <>
      <ButtonWrapper>
        <GreenButton color={theme.colors.green}>Run queries with {type}</GreenButton>
      </ButtonWrapper>
      <HighLightText>Statements with critical statuses according to the
        <Link to={'configuration'}>
          configuration
        </Link>
      </HighLightText>
      <SearchInput/>
      <QueriesList isAnalyzerPage={false} queries={queries}/>
    </>
  )
};

export default withTheme(StatusesPageSection);
