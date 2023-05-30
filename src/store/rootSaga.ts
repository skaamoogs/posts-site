import { all, call } from "redux-saga/effects";
import { postsSaga } from "./posts/postsSaga";
import { userSagas } from "./user/userSagas";
import { commentsSaga } from "./comments/commentsSaga";

export function* rootSaga() {
  yield all([call(postsSaga), call(userSagas), call(commentsSaga)]);
}
