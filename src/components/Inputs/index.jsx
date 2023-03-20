import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { NormalBgColor } from "./normal_bgcolor";
import { NormalDanger } from "./normal_danger";
import { NormalDefault } from "./normal_default";
import { NormalDisabled } from "./normal_disabled";
import { NormalSuccess } from "./normal_success";
import { PasswordDefault } from "./password_default";
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
          <Card type="Normal Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDanger placeholder="Normal Danger Small" type="danger" size="small"/>
            <NormalDanger placeholder="Normal Danger Medium" type="danger" size="medium"/>
            <NormalDanger placeholder="Normal Danger Large" type="danger" size="large"/>
          </Card>
          <Card type="Normal Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalSuccess placeholder="Normal Success Small" type="success" size="small"/>
            <NormalSuccess placeholder="Normal Success Medium" type="success" size="medium"/>
            <NormalSuccess placeholder="Normal Success Large" type="success" size="large"/>
          </Card>
          <Card type="Normal Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDisabled disabled="disabled" placeholder="Normal Default Disabled" type="default" size="large"/>
            <NormalDisabled disabled="disabled" placeholder="Normal Danger Disabled" type="danger" size="large"/>
            <NormalDisabled disabled="disabled" placeholder="Normal Success Disabled" type="success" size="large"/>
          </Card>
          <Card type="Normal bgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalBgColor bgColor="default" placeholder="Normal Default BgColor" type="default" size="large"/>
            <NormalBgColor bgColor="danger" placeholder="Normal Danger BgColor" type="danger" size="large"/>
            <NormalBgColor bgColor="success" placeholder="Normal Success BgColor" type="success" size="large"/>
          </Card>
          <Card type="Password Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordDefault inputType="default" placeholder="Password Default Small" type="password" size="small"/>
            <PasswordDefault inputType="default" placeholder="Password Default Medium" type="password" size="medium"/>
            <PasswordDefault inputType="default" placeholder="Password Default Large" type="password" size="large"/>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card></Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
