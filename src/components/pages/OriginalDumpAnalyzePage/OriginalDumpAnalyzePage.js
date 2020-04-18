import React, { useState } from "react";
import axios from "axios";
import { css } from "styled-components";

import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "./SqlAnalyzeSection";
import Pagination from "../../molecules/Pagination";
import Button from "../../atoms/buttons/Button";

const customStyles = ({ colors }) => css`
  border: 2px solid ${colors.red};
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: ${colors.red};
    color: ${colors.white};
  }
`;

const OriginalDumpAnalyzePage = () => {
  const [isBySql, setIsBySql] = useState(true);
  const menuItems = [
    {
      title: "grouped by sql",
      active: isBySql,
      onClick: () => setIsBySql(true)
    },
    {
      title: "grouped by sql and user host",
      active: !isBySql,
      onClick: () => setIsBySql(false)
    }
  ];

  const onStartAnalyze = event => {
    event.preventDefault();
    axios.post("http://localhost:5000/start");
  };

  return (
    <MainTemplate pageTitle="Original dump analyze" menuItems={menuItems}>
      <Button
        type="submit"
        onClick={onStartAnalyze}
        customStyles={customStyles}
      >
        Start log analyze
      </Button>
      <div>
        {isBySql ? <SqlAnalyzeSection /> : <p>another</p>}
        <Pagination />
      </div>
    </MainTemplate>
  );
};

export default OriginalDumpAnalyzePage;
