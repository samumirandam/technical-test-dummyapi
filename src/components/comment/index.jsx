import React from "react";
import { formatDistanceToNow } from "date-fns";

import UserImage from "@ui/user-image";

import "./comment.scss";

const Comment = ({ owner, message, publishDate }) => {
  return (
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
};

export default Comment;
