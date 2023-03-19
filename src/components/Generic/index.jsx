import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Title } from "./style";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Title>Generic {location.pathname} coming soon</Title>
    </Container>
  );
};

export default Generic;
