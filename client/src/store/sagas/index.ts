import { takeEvery } from "redux-saga/effects";

import { getEventsSaga, addEventSaga } from "./event.sagas";
import { eventActions } from "../actions/event.actions";

export default function* rootSaga() {
  yield takeEvery(eventActions.GET_EVENTS_SAGA, getEventsSaga);
  yield takeEvery(eventActions.ADD_EVENT_SAGA, addEventSaga);
}