import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state) => state.auth;

export const getAuth = createSelector(selectAuth, (auth) => auth.data);

export const isPostLoading = createSelector(
  selectAuth,
  (auth) => auth.isLoading,
);
export const isPostError = createSelector(selectAuth, (auth) => auth.isError);
export const getPostErrorDetail = createSelector(
  selectAuth,
  (auth) => auth.errorDetail,
);
