import React, { useState, useMemo } from "react";
import styled from "styled-components";

import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "../../organisms/ConfigurationForm";
import useConfigurationData from "./useConfigurationData";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import NewStatusForm from "../../organisms/NewStatusForm";
import Message from "../../atoms/Message";

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

  const [currentType, setCurrentType] = useState(types.EXPLAIN);

  const menuItems = [
    {
      title: "Explain statuses",
      active: currentType === types.EXPLAIN,
      onClick: () => setCurrentType(types.EXPLAIN)
    },
    {
      title: "Profile statuses",
      active: currentType === types.PROFILE,
      onClick: () => setCurrentType(types.PROFILE)
    }
  ];

  const configForCurrentCommandType = useMemo(() => {
    return data.filter(status => status.type === currentType);
  }, [currentType, data]);

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
