import React, { useState } from "react";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SideNav } from "./SideNav";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="top-nav">
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="faBars"
        onClick={handleClick}
      />
      <p className="title">Community App</p>
      <Button text="Create Account" type="outline" />
      {open && <SideNav />}
    </nav>
  );
};
