import React from "react";

import { navbar } from "../../utils/navbar";
import { Contact, Container, Link, User, Wrapper } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <User path="/components">Antd Library</User>
      <Wrapper>
        {navbar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
        <Contact>
          <Contact.User>Sardor Tursunboyev</Contact.User>
          <a href="https://t.me/Sardor0795">
            <Contact.Telegram />
          </a>
          <a href="https://www.youtube.com/channel/UCZUkdjzZrQseqqqKj0JOZMg">
            <Contact.Youtube />
          </a>
          <a href="https://github.com/Sardor0795">
            <Contact.Git />
          </a>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
