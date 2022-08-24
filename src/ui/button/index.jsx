import React from "react";
import classnames from "classnames";

import "./button.scss";

const Button = ({ children, className, flat }) => {
  return (
    <div className={classnames("Button", className, { flat: flat })}>
      {children}
    </div>
  );
};

export default Button;
