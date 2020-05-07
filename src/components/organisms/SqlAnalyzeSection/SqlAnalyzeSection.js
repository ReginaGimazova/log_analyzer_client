import React from "react";
import styled from "styled-components";
import QueriesList from "../../molecules/QueriesList";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import TableSearch from "../../molecules/TableSearch";
import Message from "../../atoms/Message";
import Pagination from "../../molecules/Pagination";

const Section = styled.section`
  margin: 50px 0;
`;

const SqlAnalyzeSection = ({
  byHost,
  data,
  tables,
  setChosenTables,
  chosenTables,
  reSearchQueries
}) => {
  const { queries, page_count: pageCount, page } = data;

  const onTablesChoose = currentTables => {
    setChosenTables(currentTables || []);
  };

  return (
    <Section>
      {chosenTables.length === 0 && (
        <Message>By default, all tables will be searched</Message>
      )}
      <TableSearch
        allTables={tables}
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
