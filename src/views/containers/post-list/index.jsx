import React from 'react';
import PropTypes from 'prop-types';

import './post-list.scss';

const PostList = ({ children }) => (
  <section className="PostList" data-testid="PostList">
    {children}
  </section>
);

PostList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PostList;
