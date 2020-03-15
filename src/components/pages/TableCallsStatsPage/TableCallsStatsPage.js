import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import useTableStatisticData from "./useTableStatisticData";
import TableStats from "../../molecules/TableStats";

const TableCallsStatsPage = () => {
  const { data, loading, error } = useTableStatisticData();

  return (
    <MainTemplate pageTitle="Table calls stats" loading={loading}>
      <TableStats data={data} />
      <p>{error}</p>
    </MainTemplate>
  );
};

export default TableCallsStatsPage;
