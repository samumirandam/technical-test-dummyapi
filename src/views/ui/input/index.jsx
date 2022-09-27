import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ value, onChange }) => (
  <input className="Input" value={value} onChange={onChange} />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
