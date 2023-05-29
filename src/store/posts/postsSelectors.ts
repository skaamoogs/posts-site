import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectPosts = (state: RootState) => state.posts;

export const postsSelector = createSelector(
  selectPosts,
  (posts) => posts.posts
);

export const postsLoadingSelector = createSelector(
  selectPosts,
  (state) => state.loading
);

export const postsErrorSelector = createSelector(
  selectPosts,
  (state) => state.error
);
