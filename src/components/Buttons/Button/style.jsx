import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "loading":
      return { bg: "black", border: "1px solid red" };
    default: {
    }
  }
};

const Container = styled.div`
  display: flex;
  background-color: ${() => getType().bg};
  border: ${() => getType().border};
`;

export { Container };
