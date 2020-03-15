import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import useTableStatisticData from "./useTableStatisticData";
import TableStats from "../../molecules/TableStats";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

const TableCallsStatsPage = () => {
  const { data, loading, error } = useTableStatisticData();

  return (
    <MainTemplate pageTitle="Table calls stats" loading={loading}>
      {data.length > 0 ? (
        <TableStats data={data} />
      ) : error ? (
        error && <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <p>No data</p>
      )}
    </MainTemplate>
  );
};

export default TableCallsStatsPage;
