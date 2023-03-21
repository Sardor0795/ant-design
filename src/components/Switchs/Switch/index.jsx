import React from "react";
import { SwitchInner, SwitchWrapper } from "./style";

export const SwitchComp = ({ ...res }) => {
  return (
    <SwitchWrapper {...res}>
      <SwitchInner {...res} />
    </SwitchWrapper>
  );
};
