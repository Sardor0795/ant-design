import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { AlertList, AlertText, AlertTitle } from "./style";

export const Alert = () => {
  return (
    <>
      <AlertTitle>Alert</AlertTitle>
      <AlertText>Alert component for feedback.</AlertText>
      <AlertTitle>When To Use</AlertTitle>
      <AlertList>
        <li>When you need to show alert messages to users.</li>
        <li>
          When you need a persistent static container which is closable by user
          actions.
        </li>
      </AlertList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
