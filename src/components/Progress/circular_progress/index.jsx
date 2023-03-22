import React from "react";
import { CircularInner, CircularWrapper } from "./style";

export const CircularProgress = ({ size, info }) => {
  return (
    <CircularWrapper size={size} info={info}>
      <CircularInner size={size} info={info}>
        {info ? info : null}%
      </CircularInner>
    </CircularWrapper>
  );
};
