import React from "react";
import { Body, Container, Footer, Header } from "./style";

const Card = ({ type = "Unknown", children }) => {
  return (
    <Container>
      <Header>{children}</Header>
      <Body>
        <legend>{type}</legend>
      </Body>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default Card;
