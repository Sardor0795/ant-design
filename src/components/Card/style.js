import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: var(--border);
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Body = styled.fieldset`
  border: var(--border);
  border-left: 0;
  border-right: 0;
  padding: 10px;
`;

export const Footer = styled.fieldset`
  border: 0;
  border-top: var(--border);
  padding: 10px;
`;

export { Container };
