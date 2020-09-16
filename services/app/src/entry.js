import React from "react";
import {
  Card,
  Background,
  NarrowPage,
  Heading,
  Button,
  Paragraph,
} from "./design";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <NarrowPage>
        <IntroCard>
          <Heading>Goodreads GraphQL</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus risus at maximus aliquam. Vestibulum ac dolor quis mauris
            accumsan tincidunt eleifend accumsan dui. Sed auctor nisi eget
            aliquam blandit. Morbi cursus, mauris a dictum malesuada, tellus
            augue commodo dui, in mollis tellus ligula et dolor. Pellentesque
            mollis, risus vel tincidunt aliquam, est est mattis magna, eget
            pretium urna odio faucibus orci. Maecenas at ipsum congue,
            consectetur turpis sit amet, egestas est. Proin nec nunc non ipsum
            fermentum volutpat non in neque. Nunc erat lectus, ultricies at
            tincidunt at, euismod lacinia orci. In aliquam odio elit, sed
            condimentum turpis finibus et. Nulla varius et sapien at posuere.
          </Paragraph>
          <Button>Sign In with Goodreads</Button>
        </IntroCard>
      </NarrowPage>
    </Background>
  );
}

const IntroCard = styled(Card)`
  margin-top: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default App;
