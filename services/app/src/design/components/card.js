import React from "react";
import styled from "styled-components";

export const Card = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  padding: 1rem;
  box-shadow: 0px 1px 1px #d0d0c8;
  border: 1px solid #d0d0c8;

  border-radius: 0.2rem;
  background: white;
`;
