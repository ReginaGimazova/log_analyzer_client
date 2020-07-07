import React, { useMemo } from "react";
import styled from "styled-components";
import { parse } from "query-string";

import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "../../organisms/ConfigurationForm";
import useConfigurationData from "./useConfigurationData";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import NewStatusForm from "../../organisms/NewStatusForm";
import Message from "../../atoms/Message";
import ErrorPage from "../ErrorPage";
import DefaultTemplate from "../../templates/DefaultTemplate";
import Loader from "../../molecules/loaders/Loader";

const Section = styled.section`
  margin: 50px 0;
`;

const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const ConfigurationPage = () => {
  const {
    data,
    loading,
    error,
    updateConfig,
    addNewStatus,
    removeStatus
  } = useConfigurationData();

  if (error && !loading) {
    return <ErrorPage>{error}</ErrorPage>;
  }

  const { explain = "true" } = parse(window.location.search);
  const currentType = explain === "true" ? types.EXPLAIN : types.PROFILE;

  const menuItems = [
    {
      title: "Explain statuses",
      active: currentType === types.EXPLAIN,
      to: `?explain=${true}`
    },
    {
      title: "Profile statuses",
      active: currentType === types.PROFILE,
      to: `?explain=${false}`
    }
  ];

  const configForCurrentCommandType = useMemo(() => {
    return data.filter(status => status.type === currentType);
  }, [currentType, data]);

  if (loading && !data.length) {
    return (
      <DefaultTemplate>
        <Loader />
      </DefaultTemplate>
    );
  }

  return (
    <MainTemplate
      pageTitle="Configuration"
      menuItems={menuItems}
      loading={loading}
      error={error}
      hasData={data.length > 0}
    >
      <Section>
        <Subtitle>Add status</Subtitle>
        <NewStatusForm
          addNewStatus={addNewStatus}
          configs={configForCurrentCommandType}
          currentType={currentType}
        />
      </Section>

      {configForCurrentCommandType.length > 0 ? (
        <Section>
          <Subtitle>{currentType} statuses configuration</Subtitle>
          <ConfigurationForm
            configs={configForCurrentCommandType}
            updateConfig={updateConfig}
            removeStatus={removeStatus}
            currentType={currentType}
          />
        </Section>
      ) : (
        <Message>There are no status configs for the selected type.</Message>
      )}
    </MainTemplate>
  );
};

export default ConfigurationPage;
