import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import QueriesList from "../../molecules/QueriesList";
import Button from "../../atoms/buttons/Button";
import Pagination from "../../molecules/Pagination";
import TableSearch from "../../molecules/TableSearch";

const HighLightText = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1.185rem;
  color: ${({ theme }) => theme.colors.red};

  a {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.red};
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 50px 0;
`;

const customButtonStyles = ({ colors, breakpoints }) => css`
  font-weight: bold;
  padding: 10px;
  color: ${colors.lightGrey};
  background-color: ${colors.green};
  &:hover,
  &:focus {
    background-color: ${colors.darkGreen};
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const StatusesPageSection = ({
  queries,
  type,
  chosenTables,
  reSearchQueries,
  onTablesChoose,
  pageCount,
  page,
  updateResult
}) => {
  const title = `Run the command ${type} for all filtered queries. `;
  const message = "Are you sure to do this?";

  const updateAnalyzeResult = event => {
    event.preventDefault();
    if (window.confirm(title + message)) {
      updateResult();
    }
  };

  return (
    <>
      <ButtonWrapper>
        <Button customStyles={customButtonStyles} onClick={updateAnalyzeResult}>
          {type}
        </Button>
      </ButtonWrapper>
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
          <Pagination pageCount={pageCount} page={page} />
        </>
      )}
    </>
  );
};

export default StatusesPageSection;
