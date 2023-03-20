import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { NormalDefault } from "./normal_default";
import { InputsList, InputsText, InputsTitle } from "./style";

export const Inputs = () => {
  return (
    <>
      <InputsTitle>Input</InputsTitle>
      <InputsText>To get user input</InputsText>
      <InputsTitle>When To Use</InputsTitle>
      <InputsText>
        A basic widget for getting the user input is a text field. Keyboard and
        mouse can be used for providing or changing data.
      </InputsText>

      <InputsList>
        <li>A user input in a form field is needed.</li>
      </InputsList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="Normal Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDefault placeholder="Normal Default Small" type="default" size="small"/>
            <NormalDefault placeholder="Normal Default Medium" type="default" size="medium"/>
            <NormalDefault placeholder="Normal Default Large" type="default" size="large"/>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
