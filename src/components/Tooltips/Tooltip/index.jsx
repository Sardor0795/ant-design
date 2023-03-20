import React from "react";
import { ToolTipButton, ToolTipContent } from "./style";

export const ToolTip = ({children, ...res }) => {
  return (
    <ToolTipButton {...res}>
      {children}
      <ToolTipContent {...res}>Content tooltip bottom</ToolTipContent>
    </ToolTipButton>
  );
};
