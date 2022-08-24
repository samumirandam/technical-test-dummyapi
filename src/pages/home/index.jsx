import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostListAction } from "@actions";

const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList?.data?.data);

  useEffect(() => {
    const payload = {};
    dispatch(getPostListAction(payload));
  }, []);

  return (
    <section className="Home">
      <h1>Posts</h1>
      {postList && postList.map((post) => <p key={post.id}>Post</p>)}
    </section>
  );
};

export default Home;
