import React from "react";
import { CheckboxInner, CheckboxWrapper } from "./style";

export const CheckBoxGeneric = ({...res}) => {
  const toggleCheckbox = (e) => {
    if (e.target.children[0].style.display === "flex") {
      e.target.children[0].style.display = "none";
    } else {
      e.target.children[0].style.display = "flex";
    }
  };
  return (
    <div>
      <CheckboxWrapper {...res} onClick={toggleCheckbox}>
        <CheckboxInner {...res} />
      </CheckboxWrapper>
    </div>
  );
};
