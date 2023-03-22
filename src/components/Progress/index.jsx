import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { CircularProgress } from "./circular_progress";
import { ProgressMaker } from "./prgrs";
import { LineBtn } from "./prgrs/style";
import {
  BasicWrapper,
  BtnsWrapper,
  MinusBtn,
  PlusBtn,
  ProgressList,
  ProgressText,
  ProgressTitle,
} from "./style";

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

    let circularProgress = 80;

    const setCircularPlus = (e) => {
      if (circularProgress <= 99) {
        circularProgress += 1;
        e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
        background: conic-gradient(#7d2ae8 ${
          circularProgress * 3.6
        }deg, #ededed 0deg);
        `;
        e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
      }
    };
    const setCircularMinus = (e) => {
      if (circularProgress >= 3) {
        circularProgress -= 1;
        e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
        background: conic-gradient(#7d2ae8 ${
          circularProgress * 3.6
        }deg, #ededed 0deg);
        `;
        e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
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
              <ProgressMaker
                bgcolor="primary"
                progress="70"
                size="small"
                type="line"
              />
              <ProgressMaker
                bgcolor="primary"
                progress="30"
                size="medium"
                type="line"
              />
              <ProgressMaker
                bgcolor="primary"
                progress="80"
                size="large"
                type="line"
              />
            </Card>
            <Card
              type="basic with status"
              desc="active, success and exception statuses."
            >
              <ProgressMaker
                bgcolor="warning"
                progress="40"
                size="large"
                type="line"
              />
              <ProgressMaker
                bgcolor="info"
                progress="68"
                size="large"
                type="line"
              />
              <ProgressMaker
                bgcolor="danger"
                progress="95"
                size="large"
                type="line"
              />
            </Card>
          </LayoutContainer>
          <LayoutContainer>
            <Card
              type="Dynamic"
              desc="dynamically increasing or decreasing the value"
            >
              <ProgressMaker
                bgcolor="primary"
                progress={`${this.state.lineProgress}`}
                size="large"
                type="line"
              />
              <LineBtn onClick={setLineProgress}>+</LineBtn>
              <LineBtn onClick={setLineProgress}>-</LineBtn>
            </Card>
            <Card type="Circular Progress" desc="Circular progress bar">
              <BasicWrapper>
                <CircularProgress info={circularProgress} />
              </BasicWrapper>
              <BtnsWrapper>
                <PlusBtn onClick={setCircularPlus}>+</PlusBtn>
                <MinusBtn onClick={setCircularMinus}>-</MinusBtn>
              </BtnsWrapper>
            </Card>
          </LayoutContainer>
        </LayoutWrapper>
      </div>
    );
  }
}
