import React from "react";
import { Outlet } from "react-router-dom";
import { ComponentsWrapper, Container, PathLink } from "./style";

import { sidebar } from "../../utils/sidebar";

import CheckImg from "../../assets/icons/check.png";
import ClockImg from "../../assets/icons/clock-red.png";

export const Generic = () => {
  return (
    <Container>
      <Outlet />

      <ComponentsWrapper>
        {sidebar.map((v) => (
          <PathLink key={v.id} to={v.path} done={v.fulfilled}>
            {v.title}
            <img src={v.fulfilled ? CheckImg : ClockImg} alt="img" />
          </PathLink>
        ))}
      </ComponentsWrapper>
    </Container>
  );
};

export default Generic;
