import React from "react";
import styled from "styled-components";

export const Heading = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.h1`
  font-weight: 500;
  margin-top: 0;
`;
