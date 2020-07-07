import React from "react";
import styled from "styled-components";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";

const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const ErrorPage = ({ error }) => {
  const { status } = error || {};
  const message = status === "404" ? "404 Not Found" : "Something went wrong";

  return (
    <DefaultTemplate>
      <Title>{message}</Title>
    </DefaultTemplate>
  );
};

export default ErrorPage;
