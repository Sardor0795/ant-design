import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { ProgressMaker } from "./prgrs";
import { LineBtn } from "./prgrs/style";
import { ProgressList, ProgressText, ProgressTitle } from "./style";

export class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineProgress: 30,
    };
  }
  render() {
    const setLineProgress = (e) => {
      if (e.target.innerText === "+") {
        if (this.state.lineProgress < 100) {
          this.setState({ lineProgress: this.state.lineProgress + 10 });
        }
      } else {
        if (this.state.lineProgress >= 10) {
          this.setState({ lineProgress: this.state.lineProgress - 10 });
        }
      }
    };
    return (
      <div>
        <ProgressTitle>Progress</ProgressTitle>
        <ProgressText>
          Display the current progress of an operation flow.
        </ProgressText>
        <ProgressTitle>When To Use</ProgressTitle>
        <ProgressText>
          If it will take a long time to complete an operation, you can use
          Progress to show the current progress and status.
        </ProgressText>
        <ProgressList>
          <li>
            When an operation will interrupt the current interface, or it needs
            to run in the background for more than 2 seconds.
          </li>
          <li>
            When you need to display the completion percentage of an operation.
          </li>
        </ProgressList>

        <LayoutWrapper>
          <LayoutContainer>
            <Card type="basic with sizes" desc="small medium and large sizes.">
              <ProgressMaker progress="70" size="small" type="line" />
              <ProgressMaker progress="30" size="medium" type="line" />
              <ProgressMaker progress="80" size="large" type="line" />
            </Card>
            <Card type="Type" desc="Desc"></Card>
          </LayoutContainer>
          <LayoutContainer>
            <Card
              type="Dynamic"
              desc="dynamically increasing or decreasing the value"
            >
              <ProgressMaker
                progress={this.state.lineProgress}
                size="large"
                type="line"
              />
              <LineBtn onClick={setLineProgress}>+</LineBtn>
              <LineBtn onClick={setLineProgress}>-</LineBtn>
            </Card>
            <Card type="Type" desc="Desc"></Card>
          </LayoutContainer>
        </LayoutWrapper>
      </div>
    );
  }
}
