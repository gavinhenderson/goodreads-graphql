import React from "react";
import styled from "styled-components";

export const Background = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: ghostwhite;
`;
