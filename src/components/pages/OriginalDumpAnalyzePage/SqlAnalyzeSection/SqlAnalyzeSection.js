import React from "react";
import styled from "styled-components";
import QueriesList from "../../../molecules/QueriesList";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import SearchInput from "../../../atoms/SearchInput/SearchInput";

const Section = styled.section`
  margin: 50px 0;
`;

const SqlAnalyzeSection = ({ isBySql, data }) => {
  return (
    <Section>
      <Subtitle>Parametrized statements grouped by SQL </Subtitle>
      <SearchInput />
      <QueriesList isAnalyzerPage queries={data} />
    </Section>
  );
};

export default SqlAnalyzeSection;
