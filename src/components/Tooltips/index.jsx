import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { TooltipList, TooltipText, TooltipTitle } from "./style";
import { ToolTip } from "./Tooltip";

export const Tooltip = () => {
  return (
    <>
      <TooltipTitle>Tooltip</TooltipTitle>
      <TooltipText>A simple text popup tip.</TooltipText>
      <TooltipTitle>When To Use</TooltipTitle>
      <TooltipList>
        <li>The tip is shown on mouse enter, and is hidden on mouse leave.</li>
        <li>The Tooltip doesn't support complex text or operations.</li>
        <li>It's often used instead of the html title attribute.</li>
      </TooltipList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="Basic Text" desc={"Basic hover tooltip with text"}>
              <ToolTip/>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
