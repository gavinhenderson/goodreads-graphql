import React from "react";
import {
  Card,
  Background,
  NarrowPage,
  Heading,
  Button,
  Paragraph,
  copy,
} from "./design";
import styled from "styled-components";

const { signInCard } = copy;

function App() {
  return (
    <Background>
      <NarrowPage>
        <IntroCard>
          <Heading>{signInCard.heading}</Heading>
          <Paragraph>{signInCard.body}</Paragraph>
          <SignInButton>{signInCard.button}</SignInButton>
        </IntroCard>
      </NarrowPage>
    </Background>
  );
}

const SignInButton = styled(Button)`
  margin-top: 1rem;
`;

const IntroCard = styled(Card)`
  margin-top: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default App;
