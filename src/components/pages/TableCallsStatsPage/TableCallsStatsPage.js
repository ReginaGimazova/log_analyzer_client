import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import useTableStatisticData from "./useTableStatisticData";
import TableStats from "../../molecules/TableStats";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import Loader from "../../molecules/loaders/Loader";
import ErrorPage from "../ErrorPage";
import DefaultTemplate from "../../templates/DefaultTemplate";

const TableCallsStatsPage = () => {
  const { data, loading, error } = useTableStatisticData();

  if (error && !loading) {
    return <ErrorPage>{error}</ErrorPage>;
  }

  if (loading && !data.length) {
    return (
      <DefaultTemplate>
        <Loader />
      </DefaultTemplate>
    );
  }

  return (
    <MainTemplate pageTitle="Table calls stats">
      {loading && <Loader />}
      {data.length > 0 && <TableStats data={data} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MainTemplate>
  );
};

export default TableCallsStatsPage;
