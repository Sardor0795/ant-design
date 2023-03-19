import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

export const Generic = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Generic;
