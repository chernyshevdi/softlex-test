import React from "react";
import overlayStyle from "./overlay.module.css";

function Overlay({ onClose, onOpen }) {
  if (!onOpen) return null;
  return <div className={overlayStyle.container} onClick={onClose}></div>;
}

export default Overlay;
