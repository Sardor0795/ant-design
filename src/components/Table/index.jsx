import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";

export const Table = () => {
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
