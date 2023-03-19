import React from "react";
import { Body, Container, Footer, FooterLink, Header } from "./style";

import TgImg from "../../assets/icons/f_tg.svg";
import YtImg from "../../assets/icons/yt.svg";
import CopyImg from "../../assets/icons/f_copy.svg";
import CodeImg from "../../assets/icons/f_code.svg";

const Card = ({ type = "Unknown", children, desc }) => {
  return (
    <Container>
      <Header>{children}</Header>
      <Body>
        <legend style={{ fontWeight: "bold" }}>{type}</legend>
        {desc}
      </Body>
      <Footer>
        <FooterLink target="_blank" href="https://t.me/Sardor0795">
          <img style={{ width: "22px" }} src={TgImg} alt="tg img" />
        </FooterLink>
        <FooterLink target="_blank" href="https://github.com/Sardor0795">
          <img style={{ width: "100%" }} src={YtImg} alt="tg img" />
        </FooterLink>
        <FooterLink href="#">
          <img style={{ width: "18px" }} src={CopyImg} alt="tg img" />
        </FooterLink>
        <FooterLink href="#">
          <img style={{ width: "100%" }} src={CodeImg} alt="tg img" />
        </FooterLink>
      </Footer>
    </Container>
  );
};

export default Card;
