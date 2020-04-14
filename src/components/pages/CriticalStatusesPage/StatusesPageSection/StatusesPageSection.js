import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import SearchInput from "../../../atoms/SearchInput";
import QueriesList from "../../../molecules/QueriesList";
import Button from "../../../atoms/buttons/Button";
import ConfirmationWindow from "../../../molecules/ConfirmationWindow";

const HighLightText = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1.185rem;
  color: ${({ theme }) => theme.colors.red};

  a {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.red};
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 50px 0;
`;

const customButtonStyles = theme => css`
  font-weight: bold;
  padding: 10px;
  background-color: ${theme.colors.green};
  color: ${theme.colors.lightGrey};
`;

const StatusesPageSection = ({ queries, type }) => {
  const title = `Run the command ${type} for all filtered queries`;
  const message = "Are you sure to do this.";

  const confirmCommand = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <ConfirmationWindow
              message={message}
              title={title}
              onClose={onClose}
            />
          </div>
        );
      }
    });
  };

  return (
    <>
      <ButtonWrapper>
        <Button customStyles={customButtonStyles} onClick={confirmCommand}>
          EXPLAIN
        </Button>
      </ButtonWrapper>
      <HighLightText>
        Statements with critical statuses according to the
        <Link to="configuration">configuration</Link>
      </HighLightText>
      <SearchInput />
      <QueriesList isAnalyzerPage={false} queries={queries} />
    </>
  );
};

export default StatusesPageSection;
