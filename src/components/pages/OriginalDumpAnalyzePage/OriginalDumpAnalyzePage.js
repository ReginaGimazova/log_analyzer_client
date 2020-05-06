import React, { useEffect, useState } from "react";
import axios from "axios";

import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "./SqlAnalyzeSection";
import useOriginDumpAnalyzeData from "./useOriginDumpAnalyzeData";
import StartLogAnalyzeButton from "../../atoms/buttons/StartLogAnalyzeButton";
import useInsertProgress from "../../../hooks/useInsertProgress";
import ProgressBar from "../../molecules/ProgressBar";

const OriginalDumpAnalyzePage = () => {
  const [byHost, setByHost] = useState(false);
  const [chosenTables, setChosenTables] = useState([]);

  const {
    data,
    loading,
    error,
    tables,
    getQueries,
    getTables
  } = useOriginDumpAnalyzeData(byHost, chosenTables);

  const { fetchProgress, progress } = useInsertProgress();

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
    fetchProgress();
  };

  useEffect(() => {
    if (progress === 100) {
      getQueries();
      getTables();
    }
  }, [progress]);

  return (
    <MainTemplate
      pageTitle="Original dump analyze"
      menuItems={menuItems}
      loading={loading}
      isData={data.length}
      error={error}
      topRight={<StartLogAnalyzeButton onClick={onStartAnalyze} />}
    >
      {!data.length && !loading && !error && <ProgressBar percent={progress} />}

      {data.length > 0 && (
        <SqlAnalyzeSection
          byHost={byHost}
          data={data}
          tables={tables}
          chosenTables={chosenTables}
          setChosenTables={setChosenTables}
          reSearchQueries={getQueries}
        />
      )}
    </MainTemplate>
  );
};

export default OriginalDumpAnalyzePage;
