import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import StatusesPageSection from "../../organisms/StatusesPageSection";
import useStatusesInfoData from "./useStatusesInfoData";
import types from "./types";

const CriticalStatusesPage = () => {
  const [currentType, setCurrentType] = useState(types.EXPLAIN);

  const { getStatusesInfo, loading, statuses, error } = useStatusesInfoData(
    [],
    currentType
  );

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

  return (
    <MainTemplate
      pageTitle="Critical statuses"
      menuItems={menuItems}
      error={error}
      loading={loading}
      hasData={statuses.length}
    >
      {statuses.length > 0 && (
        <StatusesPageSection queries={statuses} type={currentType} />
      )}
    </MainTemplate>
  );
};

export default CriticalStatusesPage;
