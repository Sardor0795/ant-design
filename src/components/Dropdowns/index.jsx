import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { DropDown } from "./Dropdow";
import { DropdownList, DropdownText, DropdownTitle } from "./style";

export const Dropdown = () => {
  return (
    <>
      <DropdownTitle>Dropdown</DropdownTitle>
      <DropdownText>A dropdown list.</DropdownText>
      <DropdownTitle>When To Use</DropdownTitle>
      <DropdownList>
        <li>
          When there are more than a few options to choose from, you can wrap
          them in a Dropdown. By hovering or clicking on the trigger, a dropdown
          menu will appear, which allows you to choose an option and execute the
          relevant action.
        </li>
      </DropdownList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="disabled with arrow" desc={"The most basic dropdown menu."}>
            <DropDown disabled="disabled"></DropDown>
          </Card>
          <Card type="basic" desc={"The most basic dropdown with hover prop"}>
            <DropDown hover="hover">
              Option 1 option 1 to see
            </DropDown>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
