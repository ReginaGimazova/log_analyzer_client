import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin: 100px auto 50px auto;
`;

const commonStyles = ({ colors, active = false }) => css`
  display: flex;
  align-items: center;
  height: 44px;

  background-color: ${active ? colors.green : colors.lightGrey};

  a {
    color: ${active ? colors.white : colors.darkGrey};
  }
`;

const PaginationItem = styled.div(
  ({ active, theme: { colors } }) => css`
    ${commonStyles({ colors, active })};

    a:hover {
      text-decoration: underline;
    }
  `
);

const Item = styled.span`
  padding: 12px 20px;
`;

const IconWrapper = styled.span`
  padding: 12px 15px;
`;

const PaginationAction = styled.span(
  ({ theme, disable }) => css`
    ${commonStyles(theme)};

    pointer-events: ${disable ? "none" : "inherit"};
  `
);

const Ellipsis = styled.span(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: flex-end;

    ${commonStyles({ colors })}
  `
);

const Pagination = ({ pageCount, page: currentPage }) => {
  const pagesArray = new Array(pageCount).fill(0).map((x, i) => i + 1);

  const pageItems = pagesArray.map(page => (
    <PaginationItem active={+currentPage === page}>
      <Link to={`?page=${page}`}>
        <Item>{page}</Item>
      </Link>
    </PaginationItem>
  ));

  if (pageCount <= 1) {
    return null;
  }

  return (
    <PaginationWrapper>
      <PaginationAction disable={currentPage === 1}>
        <Link to={`?page=${currentPage - 1}`}>
          <IconWrapper>
            <FaAngleLeft />
          </IconWrapper>
        </Link>
      </PaginationAction>

      {pageItems}

      <PaginationAction disable={currentPage === pageCount}>
        <Link to={`?page=${currentPage + 1}`}>
          <IconWrapper>
            <FaAngleRight />
          </IconWrapper>
        </Link>
      </PaginationAction>
    </PaginationWrapper>
  );
};

export default Pagination;
