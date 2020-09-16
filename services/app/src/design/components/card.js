import React from "react";
import styled from "styled-components";

export const Card = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  padding: 1rem;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.2rem;
  background: white;
`;
