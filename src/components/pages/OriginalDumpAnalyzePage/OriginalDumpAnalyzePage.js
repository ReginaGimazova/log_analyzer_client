import React, { useState } from "react";
import axios from "axios";

import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "./SqlAnalyzeSection";
import useOriginDumpAnalyzeData from "./useOriginDumpAnalyzeData";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import StartLogAnalyzeButton from "../../atoms/buttons/StartLogAnalyzeButton";
import TableSelect from "../../atoms/Select/TableSelect";

const OriginalDumpAnalyzePage = () => {
  const [byHost, setByHost] = useState(false);
  const {
    data,
    loading,
    error,
    tablesError,
    tables
  } = useOriginDumpAnalyzeData(byHost);

  const menuItems = [
    {
      title: "grouped by sql",
      active: !byHost,
      onClick: () => setByHost(false)
    },
    {
      title: "grouped by sql and user host",
      active: byHost,
      onClick: () => setByHost(true)
    }
  ];

  const onStartAnalyze = event => {
    event.preventDefault();
    axios.post("http://localhost:5000/start");
  };

  return (
    <MainTemplate
      pageTitle="Original dump analyze"
      menuItems={menuItems}
      loading={loading}
      isData={data.length}
    >
      <div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!data.length && !loading && (
          <StartLogAnalyzeButton onClick={onStartAnalyze} />
        )}
        {data.length > 0 && (
          <>
            <TableSelect allTables={tables} />
            <SqlAnalyzeSection byHost={byHost} data={data} />
          </>
        )}
      </div>
    </MainTemplate>
  );
};

export default OriginalDumpAnalyzePage;
