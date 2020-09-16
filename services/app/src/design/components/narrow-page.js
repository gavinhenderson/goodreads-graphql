import React from "react";
import styled from "styled-components";

export const NarrowPage = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;
