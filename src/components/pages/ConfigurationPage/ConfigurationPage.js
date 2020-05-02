import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "./ConfigurationForm";
import useConfigurationData from "./useConfigurationData";
import Loader from "../../molecules/loaders/Loader";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import Subtitle from "../../atoms/Subtitle/Subtitle";

const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const ConfigurationPage = () => {
  const { data, loading, error } = useConfigurationData();

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
    <MainTemplate pageTitle="Configuration" menuItems={menuItems}>
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {data.length > 0 && (
        <>
          <Subtitle>{currentType} statuses configuration</Subtitle>
          <ConfigurationForm configs={configForCurrentCommandType} />
        </>
      )}
    </MainTemplate>
  );
};

export default ConfigurationPage;
