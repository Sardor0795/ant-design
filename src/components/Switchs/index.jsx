import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { SwitchList, SwitchText, SwitchTitle } from "./style";
import { SwitchComp } from "./Switch";

export const Switch = () => {
  let indicator1 = 0;
  let indicator2 = 0;
  let indicator3 = 0;
  const toggleSwitchLarge = (e) => {
    if (indicator1) {
      e.target.children[0].style.transform = "translateX(0)";
      indicator1 -= 1;
    } else {
      e.target.children[0].style.transform = "translateX(24px)";
      indicator1 += 1;
    }
  };
  const toggleSwitchMedium = (e) => {
    if (indicator2) {
      e.target.children[0].style.transform = "translateX(0)";
      indicator2 -= 1;
    } else {
      e.target.children[0].style.transform = "translateX(16px)";
      indicator2 += 1;
    }
  };
  const toggleSwitchSmall = (e) => {
    if (indicator3) {
      e.target.children[0].style.transform = "translateX(0)";
      indicator3 -= 1;
    } else {
      e.target.children[0].style.transform = "translateX(10px)";
      indicator3 += 1;
    }
  };
  return (
    <>
      <SwitchTitle>Switch</SwitchTitle>
      <SwitchText>To toggle an operation</SwitchText>
      <SwitchTitle>When To Use</SwitchTitle>
      <SwitchText>
        A button means an operation (or a series of operations). Clicking a
        button will trigger corresponding business logic.
      </SwitchText>
      <SwitchList>
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
      </SwitchList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card
            type="Basic"
            desc={"basic switch accepts size, bgChecked, bgNotChecked props"}
          >
            <div>
              <SwitchComp onClick={toggleSwitchLarge} size="large" />
              <SwitchComp onClick={toggleSwitchMedium} size="medium" />
              <SwitchComp onClick={toggleSwitchSmall} size="small" />
            </div>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
