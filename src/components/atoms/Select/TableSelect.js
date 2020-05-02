import React from "react";
import Select from "react-select";
import styled from "styled-components";

import selectCustomStyles from "./customStyles";
import tablesForSelect from "../../../utils/tablesForSelect";

const SelectWrapper = styled.div`
  width: 70%;
  margin-bottom: 50px;
`;

const TableSelect = ({ choseTables, allTables, onChange }) => {
  const dataForSelect = tablesForSelect(allTables);

  return (
    <SelectWrapper>
      <Select
        options={dataForSelect}
        value={choseTables}
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

export default TableSelect;
