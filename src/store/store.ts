import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { postsReducer } from "./posts/postsSlice";
import { rootSaga } from "./rootSaga";
import { userReducer } from "./user/userSlice";

const rootReducer = combineReducers({ posts: postsReducer, user: userReducer });

const sagaMiddleWare = createSagaMiddleware();

const middleware =
  process.env.NODE_ENV === "development"
    ? [logger, sagaMiddleWare]
    : [sagaMiddleWare];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
