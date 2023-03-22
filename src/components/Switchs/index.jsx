import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { DisabledBtn, SwitchList, SwitchText, SwitchTitle } from "./style";
import { SwitchComp } from "./Switch";

export const Switch = () => {
  let disabled = 0;
  const toggleSwitchLarge = (e) => {
    if (e.target.children[1].style.transform === "translateX(24px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "purple";
    } else {
      e.target.children[1].style.transform = "translateX(24px)";
      e.target.style.backgroundColor = "red";
    }
  };
  const toggleSwitchMedium = (e) => {
    if (e.target.children[1].style.transform === "translateX(16px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "purple";
    } else {
      e.target.children[1].style.transform = "translateX(16px)";
      e.target.style.backgroundColor = "red";
    }
  };
  const toggleSwitchSmall = (e) => {
    if (e.target.children[1].style.transform === "translateX(10px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "purple";
    } else {
      e.target.children[1].style.transform = "translateX(10px)";
      e.target.style.backgroundColor = "red";
    }
  };
  const disableBtn = (e) => {
    if (disabled) {
      e.target.parentElement.children[1].style.cssText = `
      opacity: 1;
      pointer-events: unset;
     `;
      disabled -= 1;
    } else {
      e.target.parentElement.children[1].style.cssText = `
      opacity: 0.5;
      pointer-events: none;
     `;
      disabled += 1;
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
          <Card
            type="Disabled"
            desc={"disabled switch accepts size, bgChecked, bgNotChecked props"}
          >
            <div>
              <SwitchComp onClick={toggleSwitchLarge} size="large" />
              <DisabledBtn onClick={disableBtn}>Disabled</DisabledBtn>
            </div>
          </Card>
          <Card
            type="on and off"
            desc={"on and off switch accepts textOn, textOff, size, bgChecked, bgNotChecked props"}
          >
            <div>
              <SwitchComp leftInfo="on" rightInfo="off" onClick={toggleSwitchLarge} size="large" />
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
