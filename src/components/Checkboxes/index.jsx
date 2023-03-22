import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { CheckBoxGeneric } from "./Checkbox";
import { MiniCheckboxProject } from "./Mini_project";
import {
  BasicWrapper,
  CheckboxList,
  CheckboxText,
  CheckboxTitle,
} from "./style";

export const Checkbox = () => {
  return (
    <>
      <CheckboxTitle>Checkbox</CheckboxTitle>
      <CheckboxText>Checkbox component.</CheckboxText>
      <CheckboxTitle>When To Use</CheckboxTitle>
      <CheckboxList>
        <li>Used for selecting multiple values from several options.</li>
        <li>
          If you use only one checkbox, it is the same as using Switch to toggle
          between two states. The difference is that Switch will trigger the
          state change directly, but Checkbox just marks the state as changed
          and this needs to be submitted.
        </li>
      </CheckboxList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card>
            <BasicWrapper>
              <CheckBoxGeneric size="large" /> Large
              <CheckBoxGeneric size="medium" /> Medium
              <CheckBoxGeneric size="small" /> Small
            </BasicWrapper>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card
            type="Mini Project"
            desc={"Made with css :checked style. No using JS!"}
          >
            <MiniCheckboxProject />
          </Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
