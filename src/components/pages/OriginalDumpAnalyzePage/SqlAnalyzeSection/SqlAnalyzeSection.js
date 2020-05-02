import React from "react";
import styled from "styled-components";
import QueriesList from "../../../molecules/QueriesList";
import Subtitle from "../../../atoms/Subtitle/Subtitle";

const Section = styled.section`
  margin: 50px 0;
`;

const SqlAnalyzeSection = ({ byHost, data }) => {
  return (
    <Section>
      <Subtitle>Parametrized statements grouped by SQL </Subtitle>
      <QueriesList isAnalyzerPage queries={data} />
    </Section>
  );
};

export default SqlAnalyzeSection;
