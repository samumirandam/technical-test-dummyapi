import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ui/button';
import Icon from '@ui/icon';

import './modal.scss';

const Modal = ({
  children, isOpen, closeModal, title,
}) => (
  <div className={classnames('Modal', { open: isOpen })}>
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

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
