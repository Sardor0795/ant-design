import React from "react";
import { ToolTipButton, ToolTipContent } from "./style";

export const ToolTip = () => {
  return (
    <ToolTipButton>
      Hover me
      <ToolTipContent>Content tooltip bottom</ToolTipContent>
    </ToolTipButton>
  );
};
