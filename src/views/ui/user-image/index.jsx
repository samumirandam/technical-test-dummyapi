import React from 'react';
import PropTypes from 'prop-types';

import './user-image.scss';

const UserImage = ({ image, name }) => (
  <div className="UserImage">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <p>{name}</p>
  </div>
);

UserImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserImage;
