import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Span, Title } from "./style";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Title>
        Path: <Span>{location.pathname}</Span>
      </Title>
    </Container>
  );
};

export default Generic;
