import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import QueriesList from "../../molecules/QueriesList";
import Pagination from "../../molecules/Pagination";
import TableSearch from "../../molecules/TableSearch";

const HighLightText = styled.p`
  margin: 30px 0;
  font-weight: bold;
  font-size: 1.185rem;
  color: ${({ theme }) => theme.colors.red};

  a {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.red};
    text-decoration: underline;
  }
`;

const StatusesPageSection = ({
  queries,
  type,
  chosenTables,
  reSearchQueries,
  onTablesChoose,
  pageCount,
  page
}) => {
  return (
    <>
      <HighLightText>
        Statements with critical statuses according to the
        <Link to="configuration">configuration</Link>
      </HighLightText>

      <TableSearch
        onChange={onTablesChoose}
        chosenTables={chosenTables}
        action={reSearchQueries}
      />

      {queries.length > 0 && (
        <>
          <QueriesList isAnalyzerPage={false} queries={queries} type={type} />
          <Pagination pageCount={pageCount} page={page} isStatusesPage />
        </>
      )}
    </>
  );
};

export default StatusesPageSection;
