import React from "react";
import {
  Card,
  Background,
  NarrowPage,
  Heading,
  Button,
  Paragraph,
  copy,
} from "../../design";
import styled from "styled-components";

const { signInCard } = copy;

const Home = () => {
  return (
    <Background>
      <NarrowPage>
        <IntroCard>
          <Heading>{signInCard.heading}</Heading>
          <Paragraph>{signInCard.body}</Paragraph>
          <SignInButton
            onClick={() => {
              // TODO dont do this, its a hack, it should be a link not a button
              window.location.href = "/auth/redirect";
            }}
          >
            {signInCard.button}
          </SignInButton>
        </IntroCard>
      </NarrowPage>
    </Background>
  );
};

const SignInButton = styled(Button)`
  margin-top: 1rem;
`;

const IntroCard = styled(Card)`
  margin-top: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default Home;
