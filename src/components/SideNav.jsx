import React from "react";
import { Title } from "./Title";
import { CancelButton } from "./CancelButton";

export const SideNav = ({ setOpen }) => {
  return (
    <nav className="side-nav">
      <Title />
      <CancelButton setOpen={setOpen} />
    </nav>
  );
};
