import React from 'react';
import styled from "styled-components";

const List = styled.ul`
  padding: 10px 50px 30px;
`;

const Item = styled.li`
  display: inline-block;
  color: ${({theme}) => theme.colors.red};
  font-weight: bold;
`;

const Icon = styled.span(({theme}) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  margin-right: 10px;
  padding-top: 3px;
  border: 2px solid ${theme.colors.red};
  border-radius: 50%;
  color: ${theme.colors.red};
  font-weight: bold;
`);

const StatusList = ({statuses}) => {
  return (
    <List>
      {statuses.map((status) => (
        <Item key={status.id}>
          <Icon>!</Icon>
          {status.name}
        </Item>
      ))}
    </List>
  )
};

export default StatusList;
