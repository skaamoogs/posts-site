import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectUser = (state: RootState) => state.user;

export const userInfoSelector = createSelector(
  [selectUser],
  (state) => state.user
);

export const userPostsSelector = createSelector(
  [selectUser],
  (state) => state.posts
);

export const userLoadingSelector = createSelector(
  [selectUser],
  (state) => state.loading
);

export const userErrorSelector = createSelector(
  [selectUser],
  (state) => state.error
);
