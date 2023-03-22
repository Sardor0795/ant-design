import React from "react";
import { CheckboxInner, CheckboxWrapper } from "./style";

export const CheckBoxGeneric = () => {
  const toggleCheckbox = (e) => {
    console.log(e.target);
    if (e.target.children[0]) {
      e.target.children[0].style.display = "none";
    } else {
      
    }
  };
  return (
    <div>
      <CheckboxWrapper onClick={toggleCheckbox}>
        <CheckboxInner />
      </CheckboxWrapper>
    </div>
  );
};
