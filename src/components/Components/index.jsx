import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";

const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Sidebar />
      <h1>Generic {location.pathname} coming soon</h1>
    </Container>
  );
};

export default Generic;
