import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import ConfigurationForm from "../../organisms/ConfigurationForm";
import PageTitle from "../../atoms/PageTitle";

const ConfigurationPage = () => {
  return (
    <MainTemplate>
      <PageTitle>Configuration</PageTitle>
      <ConfigurationForm/>
    </MainTemplate>
  )
};

export default ConfigurationPage;
