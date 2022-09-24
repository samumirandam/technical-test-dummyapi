import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import UserImage from '@ui/user-image';
import Button from '@ui/button';
import Icon from '@ui/icon';

import './post-card.scss';

const PostCard = ({
  id,
  owner,
  image,
  text,
  likes,
  tags,
  openUserProfile,
  openPostComment,
}) => {
  const navigate = useNavigate();

  const handleClickTag = (tag) => {
    navigate(`/tag/${tag}`, { replace: true });
  };

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
        <Button className="PostCard__tag" flat onClick={() => {}}>
          <Icon name="like" text={likes} />
        </Button>
        <Button flat onClick={() => openPostComment(id)}>
          <Icon name="comment" text="Comentarios" />
        </Button>
      </div>
      <div className="PostCard__tags">
        {tags
          && tags.map((tag) => (
            <Button
              key={tag}
              className="PostCard__tag"
              flat
              onClick={() => handleClickTag(tag)}
            >
              <Icon name="tag" text={tag} />
            </Button>
          ))}
      </div>
      <p className="PostCard__text">{text}</p>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  openUserProfile: PropTypes.func.isRequired,
  openPostComment: PropTypes.func.isRequired,
};

export default PostCard;
