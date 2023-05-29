import { call, put, takeLatest, all } from "redux-saga/effects";
import PostsAPI from "../../api/posts.api";
import { AxiosResponse } from "axios";
import {
  fetchUserPostsFailed,
  fetchUserPostsRequested,
  fetchUserPostsSucceeded,
  fetchUserInfoRequested,
  fetchUserInfoSucceeded,
  fetchUserInfoFailed,
} from "./userSlice";
import { IAction } from "../interfaces";

interface IUserPayload {
  userId: number;
}

function* fetchUserInfo(action: IAction<IUserPayload>) {
  try {
    const { userId } = action.payload;
    const response: AxiosResponse = yield call(PostsAPI.getUser, userId);
    if (response.status === 200) {
      const delay = async () =>
        await new Promise((resolve) => setTimeout(resolve, 500));
      yield call(delay);
      yield put(fetchUserInfoSucceeded(response.data));
    } else {
      yield put(fetchUserInfoFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchUserInfoFailed(error?.message));
  }
}

function* userInfoSaga() {
  yield takeLatest(fetchUserInfoRequested.type, fetchUserInfo);
}

function* fetchUserPosts(action: IAction<IUserPayload>) {
  try {
    const { userId } = action.payload;
    const response: AxiosResponse = yield call(PostsAPI.getPostsByUser, userId);
    if (response.status === 200) {
      const delay = async () =>
        await new Promise((resolve) => setTimeout(resolve, 500));
      yield call(delay);
      yield put(fetchUserPostsSucceeded(response.data));
    } else {
      yield put(fetchUserPostsFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchUserPostsFailed(error?.message));
  }
}

function* userPostsSaga() {
  yield takeLatest(fetchUserPostsRequested.type, fetchUserPosts);
}

export function* userSagas() {
  yield all([call(userInfoSaga), call(userPostsSaga)]);
}
