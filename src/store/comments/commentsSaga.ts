import { call, put, takeLatest } from "redux-saga/effects";
import PostsAPI from "../../api/posts.api";
import { AxiosResponse } from "axios";
import {
  fetchCommentsFailed,
  fetchCommentsRequested,
  fetchCommentsSucceeded,
} from "./commentsSlice";
import { RESPONSE_DELAY } from "../const";
import { IAction } from "../interfaces";

export interface ICommentsPayload {
  postId: number;
}

function* fetchComments(action: IAction<ICommentsPayload>) {
  try {
    const { postId } = action.payload;
    const response: AxiosResponse = yield call(PostsAPI.getComments, postId);
    if (response.status === 200) {
      const delay = async () =>
        await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
      yield call(delay);
      yield put(fetchCommentsSucceeded(response.data));
    } else {
      yield put(fetchCommentsFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchCommentsFailed(error?.message));
  }
}

export function* commentsSaga() {
  yield takeLatest(fetchCommentsRequested.type, fetchComments);
}
