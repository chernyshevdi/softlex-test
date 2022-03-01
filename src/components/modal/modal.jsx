import React, { useEffect } from "react";
import modalStyle from "./modal.module.css";
import ReactDOM from "react-dom";
import { modalRoot } from "../../utils/constants";
import Overlay from "./overlay";

function Modal({ onClose, onOpen, children }) {
  if (!onOpen) return null;
  return ReactDOM.createPortal(
    <>
      <Overlay onClose={onClose} onOpen={onOpen} />
      <section className={modalStyle.container}>
        <div className={modalStyle.block}>
          <div className={modalStyle.close} onClick={onClose}></div>
          {children}
        </div>
      </section>
    </>,
    modalRoot
  );
}
export default Modal;
