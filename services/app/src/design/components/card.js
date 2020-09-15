import React from "react";
import styled from "styled-components";

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin: 1rem;
  background: green;
`;
