import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { BadgeComp } from "./Badge";
import { BadgeList, BadgeText, BadgeTitle } from "./style";

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BadgeTitle>Badge</BadgeTitle>
        <BadgeText>
          Small numerical value or status descriptor for UI elements.
        </BadgeText>
        <BadgeTitle>When To Use</BadgeTitle>
        <BadgeList>
          <li>
            Badge normally appears in proximity to notifications or user avatars
            with eye-catching appeal, typically displaying unread messages
            count.
          </li>
        </BadgeList>

        <LayoutWrapper>
          <LayoutContainer>
            <Card type="Basic badge" desc={"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."}>
                <BadgeComp/>
                <BadgeComp count="0" badge/>
                <BadgeComp count="9" badge/>
                <BadgeComp count="99+" badge/>
            </Card>
          </LayoutContainer>
          <LayoutContainer>
            <Card></Card>
          </LayoutContainer>
        </LayoutWrapper>
      </>
    );
  }
}
