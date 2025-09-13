import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const CancelButton = ({ setOpen }) => {
  return (
    <FontAwesomeIcon icon={faX} className="cancel-button" onClick={setOpen} />
  );
};
