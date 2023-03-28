import styled from "styled-components";
import { Link } from "react-router-dom";

import AntDicon from "../../assets/icons/antD.png";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background-image: url("${AntDicon}");
  background-repeat: no-repeat;
  background-position: right 25px bottom 25px;
  background-size: 90px 90px;
`;

export { Container };

export const ComponentsWrapper = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: calc(100vh - var(--navbar-height) - 40px);
  &.scroll-close::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    /* Foreground */
    background: green;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-track {
    /* Background */
    background: rgba(225, 220, 220, 0.845);
    border-radius: 25px;
  }
`;

export const PathLink = styled(Link)`
  width: 90px;
  position: relative;
  height: 40px;
  border-radius: 10px;
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  text-decoration: none;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  background-color: #227bfeff;
  box-shadow: 0px 0px 5px 0px
    ${({ done }) => (done ? "#8EDFB2FF" : "#f7505eff")};
  :hover {
    background-color: ${({ done }) => (done ? "#8EDFB2FF" : "#f7505eff")};
    & img {
      transform: translate(15px, -10px);
    }
  }
  :active {
    transform: translateY(2px);
    opacity: 0.8;
  }
  & img {
    position: absolute;
    top: -15px;
    right: 0;
    z-index: -1;
    width: 20px;
    background: transparent;
    transition: transform 0.3s ease;
  }
`;
