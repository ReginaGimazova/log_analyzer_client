import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiFillExclamationCircle } from "react-icons/all";

import useFetchOriginalQuery from "../../../hooks/useFetchOriginalQuery";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import Loader from "../loaders/Loader";

const List = styled.ul`
  padding: 20px 0;
`;

const Item = styled.li(
  ({ theme: { colors }, opened }) => css`
    display: flex;
    align-items: center;
    color: ${colors.red};
    font-weight: bold;
    cursor: pointer;

    ${opened &&
      `
      text-decoration: underline;
    `}

    &:hover {
      text-decoration: underline;
    }
  `
);

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.red};
`;

const Duration = styled.span`
  display: inline-block;
  margin-left: 3px;
`;

const HighlightedText = styled.p(
  ({ theme: { colors } }) => css`
    padding: 10px;
    margin: 20px 35px;
    text-align: justify;
    border: 2px solid ${colors.darkGrey};
    line-height: 24px;
    font: 15px Roboto Mono, monospace;
  `
);

const loadingStyles = () => css`
  margin: 20px;
  font-size: 0.85rem;
`;

const StatusList = ({ statuses, type }) => {
  const statusesArray = [].concat(JSON.parse(statuses));
  const [openedStatus, setOpenedStatus] = useState(undefined);

  const {
    getOriginalQuery,
    originalQuery,
    error,
    loading
  } = useFetchOriginalQuery();

  const onStatusChoose = id => {
    setOpenedStatus(openedStatus === id ? undefined : id);
    getOriginalQuery(id, type);
  };

  return (
    <List>
      {statusesArray.map((status, index) => (
        <>
          <Item
            key={index}
            onClick={() => onStatusChoose(status.statusId)}
            opened={+status.statusId === +openedStatus}
          >
            <Icon>
              <AiFillExclamationCircle />
            </Icon>
            {status?.status || status}
            {status?.duration && (
              <Duration>- Duration: {status.duration}</Duration>
            )}
          </Item>

          {+openedStatus === +status.statusId &&
            (originalQuery && !error && !loading ? (
              <HighlightedText>{originalQuery}</HighlightedText>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : loading ? (
              <Loader customStyles={loadingStyles} />
            ) : null)}
        </>
      ))}
    </List>
  );
};

export default StatusList;
