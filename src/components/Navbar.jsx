import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="top-nav">
      <p className="title">Community App</p>
      <Button text="Create Account" type="outline" />
    </nav>
  );
};
