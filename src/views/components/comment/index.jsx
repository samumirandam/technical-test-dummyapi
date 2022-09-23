import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import UserImage from '@ui/user-image';

import './comment.scss';

const Comment = ({ owner, message, publishDate }) => (
  <div className="Comment">
    <UserImage
      image={owner.picture}
      name={`${owner.firstName} ${owner.lastName}`}
    />
    <p className="Comment__date">
      {formatDistanceToNow(new Date(publishDate))}
    </p>
    <p className="Comment__message">{message}</p>
  </div>
);

Comment.propTypes = {
  owner: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};

export default Comment;
