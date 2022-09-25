import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({
  children, className, flat, primary, onClick, type,
}) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={classnames('Button', className, {
      flat,
      primary,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  flat: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  primary: false,
  flat: false,
  type: 'button',
};

export default Button;
