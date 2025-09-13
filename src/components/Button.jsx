import React from "react";

export const Button = ({ text, type }) => {
  if (type === "outline") {
    return <button className="outline">{text}</button>;
  }
};
