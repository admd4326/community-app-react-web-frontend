import React from "react";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="top-nav">
      <FontAwesomeIcon icon={faBars} size="xl" className="faBars" />
      <p className="title">Community App</p>
      <Button text="Create Account" type="outline" />
    </nav>
  );
};
