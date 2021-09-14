import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import RootSaga from "./sagas/index";

import { eventsSliceReducer } from "./slices/event.slices";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    events: eventsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      // https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants
      serializableCheck: {
        ignoredActionPaths: ["payload.callback"],
      },
    }).concat(sagaMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(RootSaga);

export default store;
