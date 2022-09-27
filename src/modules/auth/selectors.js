import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state) => state.auth;

export const getAuth = createSelector(selectAuth, (auth) => auth.data);

export const isAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.isLoading,
);
export const isAuthSuccess = createSelector(
  selectAuth,
  (auth) => auth.isSuccess,
);
export const isAuthError = createSelector(selectAuth, (auth) => auth.isError);
export const getAuthErrorDetail = createSelector(
  selectAuth,
  (auth) => auth.errorDetail,
);
