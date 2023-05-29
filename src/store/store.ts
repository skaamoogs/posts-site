import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { postsReducer } from "./posts/postsSlice";
import { rootSaga } from "./rootSaga";
import logger from "redux-logger";

const rootReducer = combineReducers({ posts: postsReducer });

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

export type RootState = ReturnType<typeof rootReducer>;
