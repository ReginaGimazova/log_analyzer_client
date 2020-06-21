import React from "react";
import styled from "styled-components";
import QueriesList from "../../molecules/QueriesList";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import TableSearch from "../../molecules/TableSearch";
import Pagination from "../../molecules/Pagination";

const Section = styled.section`
  margin: 50px 0;
`;

const SqlAnalyzeSection = ({
  byHost,
  data,
  onTablesChoose,
  chosenTables,
  reSearchQueries
}) => {
  const { queries, pageCount, page } = data;

  return (
    <Section>
      <TableSearch
        onChange={onTablesChoose}
        chosenTables={chosenTables}
        action={reSearchQueries}
      />
      <Subtitle>
        Parametrized statements grouped by{" "}
        {byHost ? "SQL and User Host" : "SQL"}{" "}
      </Subtitle>
      <QueriesList isAnalyzerPage queries={queries} />
      <Pagination pageCount={pageCount} page={page} />
    </Section>
  );
};

export default SqlAnalyzeSection;
