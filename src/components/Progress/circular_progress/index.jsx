import React from "react";
import { CircularInner, CircularWrapper } from "./style";

export const CircularProgress = ({ info }) => {
  return (
    <CircularWrapper>
      <CircularInner>{info ? info : null}%</CircularInner>
    </CircularWrapper>
  );
};
