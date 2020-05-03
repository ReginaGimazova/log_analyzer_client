import React, { useState } from "react";
import styled, { css } from "styled-components";
import QueriesList from "../../../molecules/QueriesList";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import TableSearch from "../../../molecules/TableSearch";
import SearchButton from "../../../atoms/buttons/SearchButton";
import Message from "../../../atoms/Message";

const Section = styled.section`
  margin: 50px 0;
`;

const Search = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: inline-flex;
    width: 70%;
    margin-bottom: 50px;

    @media all and (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      width: 100%;
    }
  `
);

const SqlAnalyzeSection = ({
  byHost,
  data,
  tables,
  setChosenTables,
  chosenTables,
  reSearchQueries
}) => {
  const onTablesChoose = currentTables => {
    setChosenTables(currentTables || []);
  };

  return (
    <Section>
      {chosenTables.length === 0 && (
        <Message>By default, all tables will be searched</Message>
      )}
      <Search>
        <TableSearch
          allTables={tables}
          onChange={onTablesChoose}
          chosenTables={chosenTables}
        />
        <SearchButton onClick={reSearchQueries} />
      </Search>
      <Subtitle>
        Parametrized statements grouped by{" "}
        {byHost ? "SQL and User Host" : "SQL"}{" "}
      </Subtitle>
      <QueriesList isAnalyzerPage queries={data} />
    </Section>
  );
};

export default SqlAnalyzeSection;
