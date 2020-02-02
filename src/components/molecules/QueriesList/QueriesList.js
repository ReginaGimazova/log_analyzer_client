import React, {useState} from "react";
import styled from "styled-components";

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
    margin: 0 80px 0 20px;
    line-height: 24px;
    text-align: justify;

    ${({isOpen}) => !isOpen && `
     white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `};
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid ${({theme}) => theme.colors.darkGrey};
  border-bottom: 8px solid transparent;
  cursor: pointer;
  
  ${({isOpen}) => isOpen && `
    transform: rotate(90deg);
  `}
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

const QueriesList = ({children}) => {
  const [openItems, setOpenItems] = useState([undefined]);
  
  const onOpenRequest = (index) => {
    if (openItems.includes(index)){
      setOpenItems(openItems.filter((e) => e !== index))
    }
    else {
      setOpenItems([...openItems, index])
    }
  };
  
  return (
    <List>
      <ListHeader>
        <span>20 Queries</span>
        <span>Execution counts</span>
      </ListHeader>
      {children.map((item, index) => (
        <ListItem key={index} isOpen={openItems.includes(index)}>
          <Triangle isOpen={openItems.includes(index)} onClick={() => onOpenRequest(index)}/>
          <Text isOpen={openItems.includes(index)} >{item}</Text>
          <Count>20</Count>
        </ListItem>
      ))}
    </List>
  )
};

export default QueriesList;
