import React from "react";

import "./user-image.scss";

const UserImage = ({ image, name }) => {
  return (
    <div className="UserImage">
      <figure>
        <img src={image} alt={`Image ${name}`} />
      </figure>
      <p>{name}</p>
    </div>
  );
};

export default UserImage;
