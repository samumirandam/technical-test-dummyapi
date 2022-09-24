import { createSelector } from '@reduxjs/toolkit';

export const selectPost = (state) => state.post;

export const getPosts = createSelector(
  selectPost,
  (postList) => postList.data?.data,
);
export const getTotalPosts = createSelector(
  selectPost,
  (postList) => postList.data?.total,
);
export const isPostLoading = createSelector(
  selectPost,
  (postList) => postList.isLoading,
);
export const isPostError = createSelector(
  selectPost,
  (postList) => postList.isError,
);
export const getPostErrorDetail = createSelector(
  selectPost,
  (postList) => postList.errorDetail,
);
