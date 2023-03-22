import React from "react";
import { CheckboxInner, CheckboxLabel, CheckboxWrapper } from "./style";

export const CheckBoxGeneric = ({ text, ...res }) => {
  const toggleCheckbox = (e) => {
    if (e.target.children[0].children[0].style.display === "flex") {
      e.target.children[0].children[0].style.display = "none";
      e.target.children[0].style.opacity = "0.5";
    } else {
      e.target.children[0].children[0].style.display = "flex";
      e.target.children[0].style.opacity = "1";
    }
  };
  return (
    <CheckboxLabel onClick={toggleCheckbox}>
      <CheckboxWrapper {...res}>
        <CheckboxInner {...res} />
      </CheckboxWrapper>
      {text}
    </CheckboxLabel>
  );
};
