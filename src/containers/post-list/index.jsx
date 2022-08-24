import React from "react";

import "./post-list.scss";

const PostList = ({ children }) => {
  return (
    <section className="PostList" data-testid="PostList">
      {children}
    </section>
  );
};

export default PostList;
