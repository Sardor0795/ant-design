import React from "react";
import {
  PasswordDefaultInput,
  PasswordInputBtn,
  PasswordInputWrapper,
} from "./style";

import EyeHideIcon from "../../../assets/icons/eye_hide.svg";
import EyeOpenIcon from "../../../assets/icons/eye_open.svg";

export const PasswordDefault = ({ type, disabled, placeholder, ...res }) => {
  return (
    <PasswordInputWrapper>
      <PasswordDefaultInput
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...res}
      ></PasswordDefaultInput>
      <PasswordInputBtn>X</PasswordInputBtn>
    </PasswordInputWrapper>
  );
};
