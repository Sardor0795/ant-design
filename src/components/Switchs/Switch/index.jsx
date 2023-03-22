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
      <SwitchLeftInfo {...res}>{leftInfo ? leftInfo : null}</SwitchLeftInfo>
      <SwitchInner {...res} />
      <SwitchRightInfo {...res}>{rightInfo ? rightInfo : null}</SwitchRightInfo>
    </SwitchWrapper>
  );
};
