import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  box-shadow: var(--shadow);
  padding: 0 25px;
  gap: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  overflow-y: scroll;
  .active {
    opacity: 1;
    font-weight: 900;
    color: #08080b;
    padding-right: 10px;
    padding-left: 10px;
    border-right: 2px solid green;
    border-left: 2px solid green;
  }
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
const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - var(--navbar-height));
  /* overflow: scroll; */
`;
const Body = styled.div`
  display: flex;
  margin: 25px;
  padding: 25px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
`;

const Link = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 18px;
  width: fit-content;
  opacity: 0.7;
  transition: 0.3s padding ease;
  :hover {
    opacity: 1;
  }
`;

export { Container, Wrapper, Body, Link };
