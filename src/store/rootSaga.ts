import { all, call } from "redux-saga/effects";
import { postsSaga } from "./posts/postsSaga";
import { userSagas } from "./user/userSagas";

export function* rootSaga() {
  yield all([call(postsSaga), call(userSagas)]);
}
