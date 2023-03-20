import styled from "styled-components";

export const BadgeWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eeeeeeff;
  position: relative;
`;

export const BadgeIndicator = styled.div`
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #ff4d4fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  padding: 6px;
  top: -8px;
  right: -8px;
  display: ${({ badge }) => (badge ? "null" : "none")};
`;
