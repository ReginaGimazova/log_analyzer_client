import React from "react";
import Select from "react-select";
import styled, { css } from "styled-components";

import selectCustomStyles from "./customStyles";
import tablesForSelect from "../../../utils/tablesForSelect";
import SearchButton from "../../atoms/buttons/SearchButton";

const SelectWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const Search = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: inline-flex;
    width: 70%;
    margin-bottom: 50px;

    @media all and (max-width: ${breakpoints.md}) {
      width: 100%;
    }

    @media all and (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }
  `
);

const TableSearch = ({ chosenTables, allTables, onChange, action }) => {
  const dataForSelect = tablesForSelect(allTables);

  return (
    <Search>
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
      <SearchButton onClick={action} />
    </Search>
  );
};

export default TableSearch;
