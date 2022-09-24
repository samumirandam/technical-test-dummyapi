import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state) => state.user;

export const getUser = createSelector(selectUser, (postList) => postList.data);

export const isPostLoading = createSelector(
  selectUser,
  (postList) => postList.isLoading,
);
export const isPostError = createSelector(
  selectUser,
  (postList) => postList.isError,
);
export const getPostErrorDetail = createSelector(
  selectUser,
  (postList) => postList.errorDetail,
);
