import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectComments = (state: RootState) => state.comments;

export const commentsSelector = createSelector(
  selectComments,
  (state) => state.comments
);

export const commentsLoadingSelector = createSelector(
  selectComments,
  (state) => state.loading
);

export const commentsErrorSelector = createSelector(
  selectComments,
  (state) => state.error
);
