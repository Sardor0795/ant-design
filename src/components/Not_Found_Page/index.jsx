import React from "react";
import { PathLink } from "../Components/style";
import { NotFoundPage, NotFoundPageImg } from "./style";

export const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundPageImg>
        <PathLink style={{ width: "200px" }} to={"/components"}>
          Back to main menu
        </PathLink>
      </NotFoundPageImg>
    </NotFoundPage>
  );
};
