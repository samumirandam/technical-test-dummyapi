import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getPostListAction } from "@actions";

import PostList from "@containers/post-list";
import Modal from "@containers/modal";

import PostCard from "@components/post-card";
import Loader from "@components/loader";
import Error from "@components/error";
import UserProfile from "@components/user-profile";

import Button from "@ui/button";

import "./home.scss";

const LIMIT = 12;

const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { tag, page } = useParams();

  const [modalUserOpen, setModalUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const postList = useSelector((state) => state.postList?.data?.data);
  const total = useSelector((state) => state.postList?.data?.total);
  const isLoading = useSelector((state) => state.postList?.isLoading);
  const isError = useSelector((state) => state.postList?.isError);
  const errorDetail = useSelector((state) => state.postList?.errorDetail);

  const handleOpenUserProfile = (userId) => {
    setSelectedUser(userId);
    setModalUserOpen(true);
  };

  const handleClickMorePosts = () => {
    if (tag) {
      navigate(`page/${(page | 0) + 1}`);
    } else {
      navigate(`/page/${(page | 0) + 1}`);
    }
  };

  useEffect(() => {
    dispatch(getPostListAction({ limit: LIMIT, page, tag }));
  }, [tag, page]);

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
        {!isLoading && (page | 0) < Math.trunc(total / LIMIT) && (
          <Button
            className="Home__button"
            primary
            onClick={handleClickMorePosts}
          >
            Cargar más posts
          </Button>
        )}
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
