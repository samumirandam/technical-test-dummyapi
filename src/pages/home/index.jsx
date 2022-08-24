import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostListAction } from "@actions";

import PostList from "@containers/post-list";

import PostCard from "@components/post-card";

const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList?.data?.data);

  useEffect(() => {
    const payload = {};
    dispatch(getPostListAction(payload));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      <PostList>
        {postList &&
          postList.map((post) => (
            <PostCard
              key={post.id}
              owner={post.owner}
              image={post.image}
              text={post.text}
              likes={post.likes}
              tags={post.tags}
            />
          ))}
      </PostList>
    </section>
  );
};

export default Home;
