import styled from "styled-components";

const checkPx = (type) => {
  return `${parseFloat(type)}px`;
};

const getSize = ({ size }) => {
  size = `${size}`.toLowerCase();
  switch (size) {
    case "small":
      return "16px";
    case "medium":
      return "18px";
    case "large":
      return "20px";
    default:
      return "16px";
  }
};

const getColor = ({ type }) => {
  type = `${type}`.toLowerCase();
  switch (type) {
    case "primary":
      return {
        color: "var(--primaryColor)",
        background: "var(--primaryBgColor)",
      };
    case "dashed":
      return {
        color: "var(--primaryColor)",
        background: "var(--primaryColor)",
        border: "var(--borderDashed)",
      };
    case "danger":
      return {
        color: "var(--dangerColor)",
        background: "#fff",
        border: "var(--dangerBorder)",
      };
    default:
      return {};
  }
};

const Container = styled.button`
  font-size: ${getSize};
  width: ${({ width }) => (width ? checkPx(width) : "125px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? checkPx(borderRadius) : "4px"};
  border: ${({ border }) => (border ? border : "var(--border)")};
  height: ${({ height }) => (height ? checkPx(height) : "36px")};
  ${getColor}
  cursor: pointer;
  :active {
    transform: translateY(2px);
  }
  :focus {
    opacity: 0.8;
  }
`;

export { Container };
