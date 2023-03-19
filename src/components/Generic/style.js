import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border);
  box-shadow: var(--shadow);
  margin: 25px;
  padding: 25px;
  border-radius: 4px;
`;

export { Container };
