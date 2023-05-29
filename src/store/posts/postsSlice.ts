import { createAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../interfaces";

interface IPostsState {
  posts: IPost[];
  loading: boolean;
  error?: string;
}

const initialState: IPostsState = { posts: [], loading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchRequested: (state) => {
      state.loading = true;
    },
    fetchSucceeded: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRequested, fetchFailed, fetchSucceeded } =
  postsSlice.actions;

export const postsReducer = postsSlice.reducer;