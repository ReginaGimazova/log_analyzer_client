import React, { useState } from "react";
import { parse } from "query-string";

import MainTemplate from "../../templates/MainTemplate";
import StatusesPageSection from "../../organisms/StatusesPageSection";
import useStatusesInfoData from "./useStatusesInfoData";
import types from "../../../constants/types";
import ActionButton from "../../atoms/buttons/ActionButton";
import ErrorPage from "../ErrorPage";
import Loader from "../../molecules/loaders/Loader";
import DefaultTemplate from "../../templates/DefaultTemplate";

const CriticalStatusesPage = () => {
  const { explain = "true" } = parse(window.location.search);

  const currentType = explain === "true" ? types.EXPLAIN : types.PROFILE;
  const [chosenTables, setChosenTables] = useState([]);

  const {
    getStatusesInfo,
    updateResult,
    loading,
    statusesData,
    error
  } = useStatusesInfoData(chosenTables, currentType);

  const { queries = [], page, pageCount } = statusesData;

  const title = `Run the command ${currentType} for all filtered queries. `;
  const message = "Are you sure to do this?";

  const updateAnalyzeResult = event => {
    event.preventDefault();
    if (window.confirm(title + message)) {
      updateResult();
    }
  };

  const menuItems = [
    {
      title: "Show Explain statuses",
      active: currentType === types.EXPLAIN,
      to: `?explain=${true}`
    },
    {
      title: "Show Profile statuses",
      active: currentType === types.PROFILE,
      to: `?explain=${false}`
    }
  ];

  const onTablesChoose = currentTables => {
    setChosenTables(currentTables || []);
  };

  if (error && !loading) {
    return <ErrorPage>{error}</ErrorPage>;
  }

  if (loading && !statusesData.length) {
    return (
      <DefaultTemplate>
        <Loader />
      </DefaultTemplate>
    );
  }

  return (
    <MainTemplate
      pageTitle="Critical statuses"
      menuItems={menuItems}
      error={error}
      loading={loading}
      hasData={queries.length}
      topRight={
        <ActionButton actionType={currentType} action={updateAnalyzeResult} />
      }
    >
      <StatusesPageSection
        queries={queries}
        type={currentType}
        page={page}
        pageCount={pageCount}
        onTablesChoose={onTablesChoose}
        chosenTables={chosenTables}
        reSearchQueries={getStatusesInfo}
        updateResult={updateResult}
      />
    </MainTemplate>
  );
};

export default CriticalStatusesPage;
