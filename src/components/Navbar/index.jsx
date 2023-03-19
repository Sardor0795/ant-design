import React from "react";

import { navbar } from "../../utils/navbar";
import {
  Contact,
  Container,
  Link,
  SocialLink,
  User,
  UserMainImg,
  Wrapper,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <UserMainImg />
      <User to={"/components"}>Antd Library</User>
      <Wrapper>
        {navbar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
        <Contact>
          <Contact.User>Sardor Tursunboyev</Contact.User>
          <SocialLink target="_blank" href="https://t.me/Sardor0795">
            <Contact.Telegram />
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UCZUkdjzZrQseqqqKj0JOZMg"
          >
            <Contact.Youtube />
          </SocialLink>
          <SocialLink target="_blank" href="https://github.com/Sardor0795">
            <Contact.Git />
          </SocialLink>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
