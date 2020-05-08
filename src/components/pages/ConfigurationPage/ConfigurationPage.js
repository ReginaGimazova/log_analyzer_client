import React, { useState } from "react";
import styled from "styled-components";

import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "../../organisms/ConfigurationForm";
import useConfigurationData from "./useConfigurationData";
import Subtitle from "../../atoms/Subtitle/Subtitle";

const Section = styled.section`
  margin: 50px 0;
`;

const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const ConfigurationPage = () => {
  const { data, loading, error, updateConfig } = useConfigurationData();

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

  const configForCurrentCommandType = data.filter(
    status => status.type === currentType
  );

  return (
    <MainTemplate
      pageTitle="Configuration"
      menuItems={menuItems}
      loading={loading}
      error={error}
      isData={data.length}
    >
      {data.length > 0 && (
        <Section>
          <Subtitle>{currentType} statuses configuration</Subtitle>
          <ConfigurationForm
            configs={configForCurrentCommandType}
            updateConfig={updateConfig}
          />
        </Section>
      )}
    </MainTemplate>
  );
};

export default ConfigurationPage;
