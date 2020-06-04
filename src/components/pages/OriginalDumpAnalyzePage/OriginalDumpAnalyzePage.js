import React, { useEffect, useState } from "react";
import { css } from "styled-components";

import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "../../organisms/SqlAnalyzeSection";
import StartLogAnalyzeButton from "../../atoms/buttons/StartLogAnalyzeButton";
import useAnalyzeProgress from "../../../hooks/useAnalyzeProgress";
import ProgressBar from "../../molecules/ProgressBar";

import useOriginDumpAnalyzeData from "./useOriginDumpAnalyzeData";
import Message from "../../atoms/Message";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

const customMessageStyles = css`
  margin-top: 50px;
  font-size: 1.2rem;
`;

const OriginalDumpAnalyzePage = () => {
  const [byHost, setByHost] = useState(false);
  const [chosenTables, setChosenTables] = useState([]);
  const [progressBarIsShown, setProgressBarIsShown] = useState(false);

  const { data, loading, error, getQueries } = useOriginDumpAnalyzeData(
    byHost,
    chosenTables
  );

  const { startProgress, progress, progressError } = useAnalyzeProgress();

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

  const onStartAnalyze = () => {
    if (window.confirm("Do you want to start analyze query log?")) {
      setProgressBarIsShown(true);
      startProgress();
    }
  };

  const onTablesChoose = currentTables => {
    setChosenTables(currentTables || []);
  };

  useEffect(() => {
    if (progress === 100) {
      setProgressBarIsShown(false);
      getQueries();
    }
  }, [progress]);

  useEffect(() => {
    if (progressError) {
      setProgressBarIsShown(false);
    }
  }, [progressError]);

  return (
    <MainTemplate
      pageTitle="Original dump analysis"
      menuItems={menuItems}
      loading={loading}
      hasData={queries && queries.length}
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

      {progressError && (
        <ErrorMessage additionalStyles={customMessageStyles}>
          {progressError}
        </ErrorMessage>
      )}

      {queries.length > 0 && (
        <SqlAnalyzeSection
          byHost={byHost}
          data={data}
          chosenTables={chosenTables}
          onTablesChoose={onTablesChoose}
          reSearchQueries={getQueries}
        />
      )}
    </MainTemplate>
  );
};

export default OriginalDumpAnalyzePage;
