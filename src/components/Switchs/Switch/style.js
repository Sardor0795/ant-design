import styled from "styled-components";

const getWSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "26px",
        height: "16px",
      };
    case "medium":
      return {
        width: "36px",
        height: "20px",
      };
    case "large":
      return {
        width: "50px",
        height: "25px",
      };
    default:
      return {};
  }
};

const getISize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "14px",
        height: "14px",
      };
    case "medium":
      return {
        width: "18px",
        height: "18px",
      };
    case "large":
      return {
        width: "23px",
        height: "23px",
      };
    default:
      return {};
  }
};

export const SwitchWrapper = styled.div`
  ${getWSize}
  background-color: purple;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SwitchInner = styled.div`
  ${getISize}
  margin: 1px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transition: 0.3s ease all;
`;
