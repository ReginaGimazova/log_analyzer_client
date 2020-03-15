import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import Button from "../../../atoms/Button";
import NavigationMenu from "../../../molecules/NavigationMenu";
import Checkbox from "../../../atoms/Checkbox";

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-right: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const valuesList = [
  {
    id: 0,
    name: "removing tmp table",
    value: 0.01,
    active: true
  },
  {
    id: 1,
    name: "rolling back",
    value: 0.025,
    active: false
  },
  {
    id: 2,
    name: "rename result table",
    value: 0.3,
    active: false
  },
  {
    id: 3,
    name: "opening tables",
    value: 0.0178,
    active: true
  }
];
const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const ConfigurationForm = ({ theme }) => {
  const [currentType, setCurrentType] = useState(types.EXPLAIN);

  const menuItems = [
    {
      title: "Configuration for Explain",
      active: currentType === types.EXPLAIN,
      onClick: () => setCurrentType(types.EXPLAIN)
    },
    {
      title: "Configuration for Profile",
      active: currentType === types.PROFILE,
      onClick: () => setCurrentType(types.PROFILE)
    }
  ];

  return (
    <>
      <NavigationMenu menuItems={menuItems} />
      <form>
        <Subtitle>Enable critical statuses</Subtitle>
        {valuesList.map(item => (
          <FormGroup key={item.id}>
            <InputWrapper>
              <Checkbox checked={item.active}>{item.name}</Checkbox>
            </InputWrapper>
          </FormGroup>
        ))}
        <Button color={theme.colors.green}>Apply</Button>
      </form>
    </>
  );
};
export default withTheme(ConfigurationForm);
