import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";

const Sidebar = () => {
  return (
    <Container>
      {sidebar.map((v) => (
        <NavLink key={v.id} to={v.path}>
          {v.title}
        </NavLink>
      ))}
    </Container>
  );
};

export default Sidebar;
