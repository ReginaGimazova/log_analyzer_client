import React from "react";
import PaginationComponent from "react-bootstrap/Pagination";

const Pagination = ({pages = 20}) => {
  return (
    <PaginationComponent>
      <PaginationComponent.Prev />
      <PaginationComponent.Item>{1}</PaginationComponent.Item>
      
      <PaginationComponent.Ellipsis />
  
      <PaginationComponent.Item>{pages / 2}</PaginationComponent.Item>
      <PaginationComponent.Item>{pages / 2 + 1}</PaginationComponent.Item>
      <PaginationComponent.Item active>{pages / 2 + 2}</PaginationComponent.Item>
  
      <PaginationComponent.Ellipsis />
      
      <PaginationComponent.Item>{pages}</PaginationComponent.Item>
      <PaginationComponent.Next />
    </PaginationComponent>
  )
};

export default Pagination;
