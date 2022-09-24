import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getCommentAction } from '@modules/comment/actions';
import {
  getComments,
  isCommentLoading,
  isCommentError,
  getCommentErrorDetail,
} from '@modules/comment/selectors';

import Loader from '@components/loader';
import Error from '@components/error';

import Comment from '../comment';

import './comment-list.scss';

const CommentList = ({ idPost }) => {
  const dispatch = useDispatch();

  const commentData = useSelector(getComments);
  const isLoading = useSelector(isCommentLoading);
  const isError = useSelector(isCommentError);
  const errorDetail = useSelector(getCommentErrorDetail);

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
