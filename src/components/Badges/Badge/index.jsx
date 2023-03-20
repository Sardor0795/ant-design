import React from "react";
import { BadgeIndicator, BadgeWrapper } from "./style";

export const BadgeComp = ({ count, ...res }) => {
  return (
    <BadgeWrapper {...res}>
      <BadgeIndicator {...res}>{count}</BadgeIndicator>
    </BadgeWrapper>
  );
};
