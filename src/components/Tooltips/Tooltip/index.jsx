import React from "react";
import { ToolTipButton, ToolTipContent } from "./style";

export const ToolTip = ({...res}) => {
  return (
    <ToolTipButton {...res}>
      Hover me
      <ToolTipContent {...res}>Content tooltip bottom</ToolTipContent>
    </ToolTipButton>
  );
};
