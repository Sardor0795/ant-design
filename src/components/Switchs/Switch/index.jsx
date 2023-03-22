import React from "react";
import {
  SwitchInner,
  SwitchLeftInfo,
  SwitchRightInfo,
  SwitchWrapper,
} from "./style";

export const SwitchComp = ({ rightInfo, leftInfo, ...res }) => {
  return (
    <SwitchWrapper {...res}>
      <SwitchLeftInfo>{leftInfo ? leftInfo : null}</SwitchLeftInfo>
      <SwitchInner {...res} />
      <SwitchRightInfo>{rightInfo ? rightInfo : null}</SwitchRightInfo>
    </SwitchWrapper>
  );
};
