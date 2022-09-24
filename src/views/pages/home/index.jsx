import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getPostListAction } from '@modules/post/actions';
import {
  getPosts,
  getTotalPosts,
  isPostLoading,
  isPostError,
  getPostErrorDetail,
} from '@modules/post/selectors';

import PostList from '@containers/post-list';
import Modal from '@containers/modal';

import PostCard from '@components/post-card';
import Loader from '@components/loader';
import Error from '@components/error';
import UserProfile from '@components/user-profile';
import CommentList from '@components/comment-list';

import Button from '@ui/button';

import './home.scss';

const LIMIT = 12;

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tag, page } = useParams();

  const [modalUserOpen, setModalUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [modalCommentOpen, setModalCommentOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(undefined);

  const postList = useSelector(getPosts);
  const total = useSelector(getTotalPosts);
  const isLoading = useSelector(isPostLoading);
  const isError = useSelector(isPostError);
  const errorDetail = useSelector(getPostErrorDetail);

  const handleOpenUserProfile = (userId) => {
    setSelectedUser(userId);
    setModalUserOpen(true);
  };

  const handleOpenPostComment = (postId) => {
    setSelectedPost(postId);
    setModalCommentOpen(true);
  };

  const handleClickMorePosts = () => {
    if (tag) {
      navigate(`page/${(page || 0) + 1}`);
    } else {
      navigate(`/page/${(page || 0) + 1}`);
    }
  };

  useEffect(() => {
    dispatch(getPostListAction({ limit: LIMIT, page, tag }));
  }, [tag, page]);

  return (
    <>
      <section className="Home" data-testid="Home">
        {postList && (
          <PostList>
            {postList.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                owner={post.owner}
                image={post.image}
                text={post.text}
                likes={post.likes}
                tags={post.tags}
                openUserProfile={handleOpenUserProfile}
                openPostComment={handleOpenPostComment}
              />
            ))}
          </PostList>
        )}
        {!isLoading && (page || 0) < Math.trunc(total / LIMIT) && (
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
      {selectedUser && (
        <Modal
          isOpen={modalUserOpen}
          closeModal={() => setModalUserOpen(false)}
          title="Información del usuario"
        >
          <UserProfile id={selectedUser} />
        </Modal>
      )}
      {selectedPost && (
        <Modal
          isOpen={modalCommentOpen}
          closeModal={() => setModalCommentOpen(false)}
          title="Comentarios"
        >
          <CommentList idPost={selectedPost} />
        </Modal>
      )}
    </>
  );
};

export default Home;
