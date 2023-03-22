import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { CheckboxList, CheckboxText, CheckboxTitle } from "./style";

export const Checkbox = () => {
  return (
    <>
      <CheckboxTitle>Switch</CheckboxTitle>
      <CheckboxText>To toggle an operation</CheckboxText>
      <CheckboxTitle>When To Use</CheckboxTitle>
      <CheckboxText>
        A button means an operation (or a series of operations). Clicking a
        button will trigger corresponding business logic.
      </CheckboxText>
      <CheckboxList>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
      </CheckboxList>

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
