import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const CheckboxInner = styled.div`
  pointer-events: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: blue;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    pointer-events: none;
    width: 5px;
    height: 17px;
    background-color: transparent;
    border: 3px solid transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
  }
`;
