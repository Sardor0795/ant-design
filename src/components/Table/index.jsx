import React from "react";
import Card from "../Card";
import { LayoutWrapper } from "../Layout/style";
import ScrollableTable from "./Table";

export const Table = () => {
  return (
    <LayoutWrapper>
      <Card type="Table" desc={'Scrollable and Editable Table'}>
        <ScrollableTable />
      </Card>
    </LayoutWrapper>
  );
};
