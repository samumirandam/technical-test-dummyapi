import React from "react";
import classnames from "classnames";

import Button from "@ui/button";
import Icon from "@ui/icon";

import "./modal.scss";

const Modal = ({ children, isOpen, closeModal, title }) => {
  return (
    <div className={classnames("Modal", { open: isOpen })}>
      <div className="Modal__container">
        <div className="Modal__header">
          <p>{title}</p>
          <Button flat onClick={closeModal}>
            <Icon name="close" />
          </Button>
        </div>
        <div className="Modal__body">{children}</div>
        <div className="Modal__footer">
          <Button onClick={closeModal} primary>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
