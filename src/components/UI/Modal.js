import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default Modal;
