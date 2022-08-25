import React from "react";

import UserImage from "@ui/user-image";
import Button from "@ui/button";
import Icon from "@ui/icon";

import "./post-card.scss";

const PostCard = ({ owner, image, text, likes, tags, openUserProfile }) => {
  return (
    <div className="PostCard">
      <Button flat onClick={() => openUserProfile(owner.id)}>
        <UserImage
          image={owner.picture}
          name={`${owner.firstName} ${owner.lastName}`}
        />
      </Button>
      <figure className="PostCard__image">
        <img src={image} alt={text} />
      </figure>
      <div className="PostCard__icons">
        <Button className="PostCard__tag" flat>
          <Icon name="like" text={likes} />
        </Button>
        <Button flat>
          <Icon name="comment" />
        </Button>
      </div>
      <div className="PostCard__tags">
        {tags &&
          tags.map((tag) => (
            <Button key={tag} className="PostCard__tag" flat>
              <Icon name="tag" text={tag} />
            </Button>
          ))}
      </div>
      <p className="PostCard__text">{text}</p>
    </div>
  );
};

export default PostCard;
