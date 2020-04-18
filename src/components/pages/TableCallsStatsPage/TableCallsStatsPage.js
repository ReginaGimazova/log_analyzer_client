import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import useTableStatisticData from "./useTableStatisticData";
import TableStats from "../../molecules/TableStats";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import Loader from "../../atoms/Loader";

const TableCallsStatsPage = () => {
  const { data, loading, error } = useTableStatisticData();

  return (
    <MainTemplate pageTitle="Table calls stats">
      {loading && <Loader />}
      {data.length > 0 && <TableStats data={data} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MainTemplate>
  );
};

export default TableCallsStatsPage;
