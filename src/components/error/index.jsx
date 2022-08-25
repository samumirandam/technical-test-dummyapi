import React from "react";

import "./error.scss";

const Error = ({ error }) => {
  return (
    <div className="Error">
      <p>{error}</p>
    </div>
  );
};

export default Error;
