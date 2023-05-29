import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { PostActionTypes } from "./const";
import { call, put, takeLatest } from "redux-saga/effects";
import PostsAPI from "../../api/posts.api";
import { fetchFailed, fetchRequested, fetchSucceeded } from "./postsSlice";
import { IAction, ResponseGenerator } from "../interfaces";
import { IPost } from "../../interfaces";

function* fetchPosts() {
  try {
    const response: ResponseGenerator = yield call(PostsAPI.getPosts);
    if (response.status === 200) {
      yield put(fetchSucceeded(response.data));
    } else {
      yield put(fetchFailed(response.statusText));
    }
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export function* postsSaga() {
  yield takeLatest(fetchRequested.type, fetchPosts);
}
