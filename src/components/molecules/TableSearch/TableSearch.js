import React from "react";
import Select from "react-select";
import styled, { css } from "styled-components";

import selectCustomStyles from "../../../static/styles/customStyles";
import tablesForSelect from "../../../utils/tablesForSelect";
import SearchButton from "../../atoms/buttons/SearchButton";
import useTables from "../../../hooks/useTables";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

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

const TableSearch = ({ chosenTables = [], onChange, action }) => {
  const { tables, tablesError } = useTables();
  const dataForSelect = tablesForSelect(tables);

  if (tablesError) {
    return <ErrorMessage>{tablesError}</ErrorMessage>;
  }

  return (
    <Search>
      <SelectWrapper>
        <Select
          options={dataForSelect}
          placeholder="By default, all tables will be searched"
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
