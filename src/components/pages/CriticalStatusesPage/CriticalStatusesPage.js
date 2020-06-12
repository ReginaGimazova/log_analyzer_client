import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import StatusesPageSection from "../../organisms/StatusesPageSection";
import useStatusesInfoData from "./useStatusesInfoData";
import types from "./types";

const CriticalStatusesPage = () => {
  const [currentType, setCurrentType] = useState(types.EXPLAIN);
  const [chosenTables, setChosenTables] = useState([]);

  const {
    getStatusesInfo,
    updateResult,
    loading,
    statusesData,
    error
  } = useStatusesInfoData(chosenTables, currentType);

  const { queries = [], page, page_count: pageCount } = statusesData;

  const menuItems = [
    {
      title: "Show Explain statuses",
      active: currentType === types.EXPLAIN,
      onClick: () => setCurrentType(types.EXPLAIN)
    },
    {
      title: "Show Profile statuses",
      active: currentType === types.PROFILE,
      onClick: () => setCurrentType(types.PROFILE)
    }
  ];

  const onTablesChoose = currentTables => {
    setChosenTables(currentTables || []);
  };

  return (
    <MainTemplate
      pageTitle="Critical statuses"
      menuItems={menuItems}
      error={error}
      loading={loading}
      hasData={queries.length}
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
