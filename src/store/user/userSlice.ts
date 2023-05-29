import { createSlice } from "@reduxjs/toolkit";
import { IPost, IUserInfo } from "../../interfaces";

interface IUserState {
  user: IUserInfo | null;
  posts: IPost[];
  loading: boolean;
  error?: unknown;
}

const initialState: IUserState = { user: null, posts: [], loading: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserInfoRequested: (state) => {
      state.loading = true;
    },
    fetchUserInfoSucceeded: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserInfoFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserPostsRequested: (state) => {
      state.loading = true;
    },
    fetchUserPostsSucceeded: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchUserPostsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserInfoRequested,
  fetchUserInfoSucceeded,
  fetchUserInfoFailed,
  fetchUserPostsRequested,
  fetchUserPostsSucceeded,
  fetchUserPostsFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
