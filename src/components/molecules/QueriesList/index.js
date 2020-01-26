import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin-top: 1.25rem;
  width: 80%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 2px solid ${({theme}) => theme.colors.lightGrey};
`;

const Text = styled.span`
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 20px;
`;

const QueriesList = ({children}) => {
  return (
    <List>
      {children.map((item, index) => (
        <ListItem key={index}>
          <Text>{item}</Text>
          <span>20</span>
        </ListItem>
      ))}
    </List>
  )
};

export default QueriesList;
