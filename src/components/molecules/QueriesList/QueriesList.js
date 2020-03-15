import React from "react";
import styled from "styled-components";
import StatusList from "../StatusList";

const List = styled.ul`
  margin-top: 3rem;
`;

const ListItem = styled.li`
  display: flex;
  padding: 20px;
  overflow-x: auto;
  border-top: 2px solid ${({theme}) => theme.colors.lightGrey};
`;

const Text = styled.span`
  display: block;
  margin-right: 100px; 
  line-height: 24px;
  text-align: justify;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: ${({theme}) => theme.colors.darkGrey};
`;

const Count = styled.span`
  margin-left: auto;
  font-weight: bold;
  color: ${({theme}) => theme.colors.green};
`;

const QueriesList = ({queries, isAnalyzerPage}) => {
  
  return (
    <List>
      <ListHeader>
        <span>{queries.length} Queries</span>
        {isAnalyzerPage && (
          <span>Execution counts</span>
        )}
      </ListHeader>
      {queries.map((item, index) => (
        <div key={index}>
          <ListItem>
            <Text>{item.query_text}</Text>
            {isAnalyzerPage && (
              <Count>{queries.length}</Count>
            )}
          </ListItem>
          {!isAnalyzerPage && (
            <StatusList statuses={item.critical_statuses}/>
          )}
        </div>
      ))}
    </List>
  )
};

export default QueriesList;
