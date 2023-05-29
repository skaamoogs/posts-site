import { call, put, takeLatest } from "redux-saga/effects";
import PostsAPI from "../../api/posts.api";
import { AxiosResponse } from "axios";
import {
  fetchPostsFailed,
  fetchPostsRequested,
  fetchPostsSucceeded,
} from "./postsSlice";
import { RESPONSE_DELAY } from "../const";

function* fetchPosts() {
  try {
    const response: AxiosResponse = yield call(PostsAPI.getPosts);
    if (response.status === 200) {
      const delay = async () =>
        await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
      yield call(delay);
      yield put(fetchPostsSucceeded(response.data));
    } else {
      yield put(fetchPostsFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchPostsFailed(error?.message));
  }
}

export function* postsSaga() {
  yield takeLatest(fetchPostsRequested.type, fetchPosts);
}
