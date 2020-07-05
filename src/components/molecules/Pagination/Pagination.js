import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parse } from "query-string";
import styled, { css } from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Popover from "../Popover";

const PaginationWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin: 100px auto 50px auto;
`;

const PaginationList = styled.div(
  ({ theme: { colors }, rowCount }) => css`
    display: grid;
    grid-template-columns: repeat(${rowCount}, 1fr);
    background-color: ${colors.lightGrey};
  `
);

const commonStyles = ({ colors, active = false }) => css`
  display: flex;
  align-items: center;
  height: 44px;
  width: 44px;
  justify-content: center;
  cursor: pointer;

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

const Pagination = ({ pageCount, page: currentPage, isStatusesPage }) => {
  const { byHost, explain } = parse(window.location.search);

  const pagesArray = new Array(pageCount).fill(0).map((x, i) => i + 1);
  const manyPages = pagesArray.length >= 4;

  const firstPages = manyPages ? [1, 2, 3] : pagesArray;
  const otherPages = pagesArray.slice(3, pagesArray.length);

  const [paginationPopoverShown, setPaginationPopoverShown] = useState(false);

  const linkTarget = isStatusesPage ? `explain=${explain}` : `byHost=${byHost}`;

  const pageItems = firstPages.map(page => (
    <PaginationItem active={+currentPage === page} key={page}>
      <Link to={`?${linkTarget}&page=${page}`}>
        <Item>{page}</Item>
      </Link>
    </PaginationItem>
  ));

  if (pageCount <= 1) {
    return null;
  }

  const PaginationPopover = () => (
    <PaginationList rowCount={otherPages.length > 4 ? 4 : otherPages.length}>
      {otherPages.map(page => (
        <PaginationItem active={+currentPage === page} key={page}>
          <Link
            to={`?byHost=${byHost}&page=${page}`}
            onClick={() => setPaginationPopoverShown(false)}
          >
            <Item>{page}</Item>
          </Link>
        </PaginationItem>
      ))}
    </PaginationList>
  );

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

      {manyPages && (
        <Popover
          reference={
            <PaginationItem
              onClick={() => setPaginationPopoverShown(!paginationPopoverShown)}
            >
              ...
            </PaginationItem>
          }
          visible={paginationPopoverShown}
          content={<PaginationPopover />}
          colorTheme="light"
          onClickOutside={() => setPaginationPopoverShown(false)}
          placement="top"
          zindex={4}
        />
      )}

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
