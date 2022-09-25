import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state) => state.user;

export const getUser = createSelector(selectUser, (user) => user.data);

export const isPostLoading = createSelector(
  selectUser,
  (user) => user.isLoading,
);
export const isPostError = createSelector(selectUser, (user) => user.isError);
export const getPostErrorDetail = createSelector(
  selectUser,
  (user) => user.errorDetail,
);
