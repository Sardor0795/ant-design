import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";

export const Checkbox = () => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Card></Card>
      </LayoutContainer>
      <LayoutContainer>
        <Card></Card>
      </LayoutContainer>
    </LayoutWrapper>
  );
};
