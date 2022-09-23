import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getCommentAction } from '@actions';

import Loader from '@components/loader';
import Error from '@components/error';

import Comment from '../comment';

import './comment-list.scss';

const CommentList = ({ idPost }) => {
  const dispatch = useDispatch();

  const commentData = useSelector((state) => state.comment?.data?.data);
  const isLoading = useSelector((state) => state.comment?.isLoading);
  const isError = useSelector((state) => state.comment?.isError);
  const errorDetail = useSelector((state) => state.comment?.errorDetail);

  useEffect(() => {
    if (idPost) {
      dispatch(getCommentAction(idPost));
    }
  }, [idPost]);

  return (
    <div className="CommentList">
      {!isLoading && commentData && (
        <div className="CommentList__container">
          {commentData.map((comment) => (
            <Comment
              key={comment.id}
              owner={comment.owner}
              message={comment.message}
              publishDate={comment.publishDate}
            />
          ))}
        </div>
      )}
      {!isLoading && commentData?.length === 0 && <p>No tiene comentarios</p>}
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </div>
  );
};

CommentList.propTypes = {
  idPost: PropTypes.string.isRequired,
};

export default CommentList;
