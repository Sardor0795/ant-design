import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { SwitchList, SwitchText, SwitchTitle } from "./style";
import { SwitchComp } from "./Switch";

export const Switch = () => {
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
          <Card type="Basic" desc={"basic switch accepts size, bgChecked, bgNotChecked props"}>
            <div>

            <SwitchComp size="large"/>
            <SwitchComp size="medium"/>
            <SwitchComp size="small"/>
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
