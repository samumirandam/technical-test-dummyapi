import { createSelector } from '@reduxjs/toolkit';

export const selectComment = (state) => state.comment;

export const getComments = createSelector(
  selectComment,
  (comment) => comment.data?.data,
);

export const isCommentLoading = createSelector(
  selectComment,
  (comment) => comment.isLoading,
);
export const isCommentError = createSelector(
  selectComment,
  (comment) => comment.isError,
);
export const getCommentErrorDetail = createSelector(
  selectComment,
  (comment) => comment.errorDetail,
);
