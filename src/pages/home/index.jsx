import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostListAction } from "@actions";

import PostList from "@containers/post-list";
import Modal from "@containers/modal";

import PostCard from "@components/post-card";
import Loader from "@components/loader";
import Error from "@components/error";
import UserProfile from "@components/user-profile";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [modalUserOpen, setModalUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const postList = useSelector((state) => state.postList?.data?.data);
  const isLoading = useSelector((state) => state.postList?.isLoading);
  const isError = useSelector((state) => state.postList?.isError);
  const errorDetail = useSelector((state) => state.postList?.errorDetail);

  const handleOpenUserProfile = (userId) => {
    setSelectedUser(userId);
    setModalUserOpen(true);
  };

  useEffect(() => {
    dispatch(getPostListAction(12));
  }, []);

  return (
    <>
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
                openUserProfile={handleOpenUserProfile}
              />
            ))}
        </PostList>
        {isLoading && <Loader />}
        {isError && <Error error={errorDetail} />}
      </section>
      <Modal
        isOpen={modalUserOpen}
        closeModal={() => setModalUserOpen(false)}
        title="Información del usuario"
      >
        <UserProfile id={selectedUser} />
      </Modal>
    </>
  );
};

export default Home;
