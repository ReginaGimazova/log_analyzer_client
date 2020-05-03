import React from "react";
import Select from "react-select";
import styled from "styled-components";

import selectCustomStyles from "./customStyles";
import tablesForSelect from "../../../utils/tablesForSelect";

const SelectWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const TableSearch = ({ chosenTables, allTables, onChange }) => {
  const dataForSelect = tablesForSelect(allTables);

  return (
    <SelectWrapper>
      <Select
        options={dataForSelect}
        value={chosenTables}
        onChange={onChange}
        styles={selectCustomStyles}
        isMulti
        noOptionsMessage={() => "No tables"}
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
      />
    </SelectWrapper>
  );
};

export default TableSearch;
