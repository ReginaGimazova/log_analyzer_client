import React from "react";
import styled from 'styled-components';
import PaginationComponent from "react-bootstrap/Pagination";

const PaginationWrapper = styled(PaginationComponent)`
  width: max-content;
  margin: 50px auto;
`;

const PaginationItem = styled(PaginationComponent.Item)(({theme}) => `
  a {
    color: ${theme.colors.darkGrey};
    
    &:focus{
      box-shadow: none;
    }
    
    &:hover {
      color: ${theme.colors.black}
    }
  };
  
  &.active .page-link {
    background-color: ${theme.colors.green};
    border-color: ${theme.colors.green};
  }
`);

const PaginationPrev = styled(PaginationComponent.Prev)(({theme}) => `
  a {
    color: ${theme.colors.darkGrey};
    
    &:focus {
       box-shadow: none;
    }
    &:hover {
      color: ${theme.colors.black}
    }
  }
`);

const PaginationNext = styled(PaginationComponent.Next)(({theme}) => `
  a {
    color: ${theme.colors.darkGrey};
    &:focus {
       box-shadow: none;
    }
    &:hover {
      color: ${theme.colors.black}
    }
  }
`);

const Ellipsis = styled(PaginationComponent.Ellipsis)`
  a {
    color: ${({theme}) => theme.colors.darkGrey};
     &:focus{
      box-shadow: none;
    }
  }
`;

const Pagination = ({pages = 20}) => {
  return (
    <PaginationWrapper>
      <PaginationPrev />
      <PaginationItem>{1}</PaginationItem>
      
      <Ellipsis />
  
      <PaginationItem>{pages / 2}</PaginationItem>
      <PaginationItem active>{pages / 2 + 1}</PaginationItem>
  
      <Ellipsis />
      
      <PaginationItem>{pages}</PaginationItem>
      <PaginationNext />
    </PaginationWrapper>
  )
};

export default Pagination;
