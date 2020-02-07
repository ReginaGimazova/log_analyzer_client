import React from 'react';
import styled from "styled-components";
import SearchInput from "../../../atoms/SearchInput";
import QueriesList from "../../../molecules/QueriesList";
import {Link} from "react-router-dom";

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

const StatusesPageSection = ({queries}) => {
  return (
    <>
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

export default StatusesPageSection;
