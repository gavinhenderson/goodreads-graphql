import React from "react";
import styled from "styled-components";

export const Button = ({ children, className }) => {
  return <ButtonWrapper className={className}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #d6d0c4;
  background-color: #f4f1ea;

  :hover {
    background-color: #ede6d6;
    cursor: pointer;
  }
`;
