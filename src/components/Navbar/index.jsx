import React from "react";
import { navbar } from "../../utils/navbar";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      {navbar.map((v) => (
        <NavLink key={v.id} to={v.path}>
          {v.title}
        </NavLink>
      ))}
    </Container>
  );
};

export default Navbar;
