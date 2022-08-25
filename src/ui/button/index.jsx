import React from "react";
import classnames from "classnames";

import "./button.scss";

const Button = ({ children, className, flat, primary, onClick }) => {
  return (
    <button
      type="button"
      className={classnames("Button", className, {
        flat: flat,
        primary: primary,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
