import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "../../organisms/ConfigurationForm";

const ConfigurationPage = () => {
  return (
    <MainTemplate pageTitle='Configuration'>
      <ConfigurationForm/>
    </MainTemplate>
  )
};

export default ConfigurationPage;
