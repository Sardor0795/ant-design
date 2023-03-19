import React from "react";
import Card from "../Card";
import { Container, Wrapper } from "./style";
import Button from "./Button";
import LoadImg from "../../assets/icons/loader.png";
import { LoadImage } from "./Button/style";

const Buttons = () => {
  return (
    <Wrapper>
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
          <Button style={{ width: "100%" }} type="warning">
            Warning button
          </Button>
          <Button style={{ width: "100%" }} type="secondary">
            Secondary block button
          </Button>
          <Button style={{ width: "100%" }} type="primary">
            Primary block button
          </Button>
          <Button style={{ width: "100%" }} type="danger">
            Danger block button
          </Button>
          <Button style={{ width: "100%" }} type="info">
            Info block button
          </Button>
        </Card>
        <Card type="Primary" desc={"Primary Button"}>
          <Button type="primary">Primary</Button>
          <Button type="link">Link</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button type="info">Info</Button>
        </Card>
      </Container>
      <Container>
        <Card type="Dashed" desc={"Dashed Button"}>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
        </Card>
        <Card type="Danger" desc={"Danger Button"}>
          <Button type="danger">Danger</Button>
        </Card>
        <Card type="Danger" desc={"Danger Button"}>
          <Button type="danger">Danger</Button>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Buttons;
