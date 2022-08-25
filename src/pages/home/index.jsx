import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostListAction } from "@actions";

import PostList from "@containers/post-list";

import PostCard from "@components/post-card";
import Loader from "@components/loader";
import Error from "@components/error";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList?.data?.data);
  const isLoading = useSelector((state) => state.postList?.isLoading);
  const isError = useSelector((state) => state.postList?.isError);
  const errorDetail = useSelector((state) => state.postList?.errorDetail);

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
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </section>
  );
};

export default Home;
