import styled from "styled-components";

export const CircularWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(#7d2ae8 288deg, #ededed 0deg);
`;

export const CircularInner = styled.div`
  width: 160px;
  height: 160px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
