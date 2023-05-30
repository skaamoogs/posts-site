import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../interfaces";

interface ICommentsState {
  comments: IComment[];
  loading: boolean;
  error?: unknown;
}

const initialState: ICommentsState = { comments: [], loading: false };

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentsRequested: (state) => {
      state.loading = true;
    },
    fetchCommentsSucceeded: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    fetchCommentsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCommentsRequested,
  fetchCommentsSucceeded,
  fetchCommentsFailed,
} = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
