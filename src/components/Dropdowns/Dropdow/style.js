import styled from "styled-components";

export const SelectBtn = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 4px;
  background: none;
  text-align: left;
  border: var(--border);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.3s ease, backgroundColor 0.3s ease;
  :hover {
    border-color: ${({ disabled }) => (disabled ? null : "var(--info)")};
    color: ${({ disabled }) => (disabled ? null : "var(--info)")};
  }
`;

export const SelectImgWrapper = styled.div`
  position: absolute;
  right: 15px;
  display: inline-block;
  width: 20px;
`;
