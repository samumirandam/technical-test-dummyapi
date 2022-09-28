import { createSelector } from '@reduxjs/toolkit';

export const selectNav = (state) => state.nav;

export const getSearch = createSelector(selectNav, (auth) => auth.search);
export const getLastUrl = createSelector(selectNav, (auth) => auth.lastUrl);
