import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../interfaces";

interface IPostsState {
  posts: IPost[];
  loading: boolean;
  error?: unknown;
}

const initialState: IPostsState = { posts: [], loading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequested: (state) => {
      state.loading = true;
    },
    fetchPostsSucceeded: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequested, fetchPostsFailed, fetchPostsSucceeded } =
  postsSlice.actions;

export const postsReducer = postsSlice.reducer;
