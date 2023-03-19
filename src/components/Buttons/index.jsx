import React from "react";
import Card from "../Card";
import { Container } from "./style";
import Button from "./Button";

const Buttons = () => {
  return (
    <Container>
      <Card type="Normal" desc={"Norm Button"}>
        <Button>Normal</Button>
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
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
      <Card type="Danger" desc={"Danger Button"}>
        <Button type="danger">Danger</Button>
      </Card>
    </Container>
  );
};

export default Buttons;
