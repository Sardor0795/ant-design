import React, { Component } from "react";
import {
  InputNumberWrapper,
  PasswordInputWrapper,
} from "./style";

export class InputNumber extends Component {
  render() {
    let { btnBg, inputType, type, disabled, placeholder, ...res } = this.props;

    return (
      <PasswordInputWrapper>
        <InputNumberWrapper
          inputType={inputType}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...res}
        ></InputNumberWrapper>
      </PasswordInputWrapper>
    );
  }
}
