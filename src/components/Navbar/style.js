import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as tg } from "../../assets/icons/tg.svg";
import { ReactComponent as yt } from "../../assets/icons/yt.svg";
import { ReactComponent as git } from "../../assets/icons/git.svg";
import UserImg from "../../assets/img/user_img.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  box-shadow: var(--shadow);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  .active {
    color: #08080b;
    font-weight: 900;
  }
`;

export const UserMainImg = styled.div`
  border-radius: 50%;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-image: url("${UserImg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-left: 25px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 18px;
  width: fit-content;
`;
const User = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 28px;
  max-width: 300px;
  width: 100%;
  padding-left: 15px;
  border-right: var(--border);
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

Contact.User = styled.div`
  font-size: 20px;
`;
Contact.Telegram = styled(tg)`
  cursor: pointer;
`;
Contact.Youtube = styled(yt)`
  cursor: pointer;
`;
Contact.Git = styled(git)`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 25px;
  gap: 20px;
`;

export { Container, Link, Contact, Wrapper, User };
