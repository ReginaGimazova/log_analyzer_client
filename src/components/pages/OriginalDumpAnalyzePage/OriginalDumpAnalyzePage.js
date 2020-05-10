import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "styled-components";

import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "../../organisms/SqlAnalyzeSection";
import StartLogAnalyzeButton from "../../atoms/buttons/StartLogAnalyzeButton";
import useInsertProgress from "../../../hooks/useInsertProgress";
import ProgressBar from "../../molecules/ProgressBar";

import useOriginDumpAnalyzeData from "./useOriginDumpAnalyzeData";
import Message from "../../atoms/Message";

const customMessageStyles = css`
  margin-top: 50px;
  font-size: 1.2rem;
`;

const OriginalDumpAnalyzePage = () => {
  const [byHost, setByHost] = useState(false);
  const [chosenTables, setChosenTables] = useState([]);
  const [progressBarIsShown, setProgressBarIsShown] = useState(false);

  const {
    data,
    loading,
    error,
    tables,
    getQueries,
    getTables
  } = useOriginDumpAnalyzeData(byHost, chosenTables);

  const { fetchProgress, progress } = useInsertProgress();

  const { queries = [] } = data;

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
    if (window.confirm("Do you want to start analyze query log?")) {
      setProgressBarIsShown(true);
      axios.post("http://localhost:5000/start");
      fetchProgress();
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setProgressBarIsShown(false);
      getQueries();
      getTables();
    }
  }, [progress]);

  return (
    <MainTemplate
      pageTitle="Original dump analyze"
      menuItems={menuItems}
      loading={loading}
      isData={queries && queries.length}
      error={error}
      topRight={<StartLogAnalyzeButton onClick={onStartAnalyze} />}
    >
      {progressBarIsShown && <ProgressBar percent={progress || 0} />}

      {!queries.length && !loading && !error && !progressBarIsShown && (
        <Message customStyles={customMessageStyles} withIcon>
          There is no data. Click to Start Log Analyze button or check that you
          set correct name of log file.
        </Message>
      )}

      {queries.length > 0 && (
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
