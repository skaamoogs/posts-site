import { all, call } from "redux-saga/effects";
import { postsSaga } from "./posts/postsSaga";

export function* rootSaga() {
  yield all([call(postsSaga)])
}