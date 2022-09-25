import { createSelector } from '@reduxjs/toolkit';

export const selectPost = (state) => state.post;

export const getPosts = createSelector(selectPost, (post) => post.data?.data);
export const getTotalPosts = createSelector(
  selectPost,
  (post) => post.data?.total,
);
export const isPostLoading = createSelector(
  selectPost,
  (post) => post.isLoading,
);
export const isPostError = createSelector(selectPost, (post) => post.isError);
export const getPostErrorDetail = createSelector(
  selectPost,
  (post) => post.errorDetail,
);
