import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "./ConfigurationForm";
import NavigationMenu from "../../molecules/NavigationMenu";
import useConfigurationData from "./useConfigurationData";

const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const ConfigurationPage = () => {
  const { data } = useConfigurationData();

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

  return (
    <MainTemplate pageTitle="Configuration">
      <NavigationMenu menuItems={menuItems} />

      <ConfigurationForm configs={data} />
    </MainTemplate>
  );
};

export default ConfigurationPage;
