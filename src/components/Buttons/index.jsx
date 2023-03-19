import React from "react";
import Card from "../Card";
import { Container } from "./style";
import Button from "./Button";
import LoadImg from "../../assets/icons/loader.png";
import { LoadImage } from "./Button/style";

const Buttons = () => {
  return (
    <Container>
      <Card
        type="Loading"
        desc={
          "Ant Design supports a default button size as well as a large and small size. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
        }
      >
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="primary"
        >
          <LoadImage src={LoadImg} alt="" /> Click me
        </Button>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          width="110px"
          type="primary"
        >
          <LoadImage src={LoadImg} alt="" /> Click me
        </Button>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          width="small"
          type="primary"
        >
          <LoadImage src={LoadImg} alt="" />
          Click me
        </Button>
      </Card>
      <Card type="Block" desc={"Block Button"}>
        <Button style={{ width: "100%" }} type="block">
          Block button
        </Button>
        <Button style={{ width: "100%" }} type="block">
          Default block button
        </Button>
        <Button style={{ width: "100%" }} type="block">
          Primary block button
        </Button>
        <Button style={{ width: "100%" }} type="block">
          Link block button
        </Button>
        <Button style={{ width: "100%" }} type="block">
          Dashed block button
        </Button>
      </Card>
      <Card type="Primary" desc={"Primary Button"}>
        <Button type="primary">Primary</Button>
      </Card>
      <Card type="Dashed" desc={"Dashed Button"}>
        <Button type="dashed">Dashed</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
    </Container>
  );
};

export default Buttons;
