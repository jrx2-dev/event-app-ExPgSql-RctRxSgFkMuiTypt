import { PayloadAction } from "@reduxjs/toolkit";

import {
  Event,
  getEventsSagaPayload,
  addEventSagaPayload,
} from "../../models/Interfaces";
import { callbackPayload } from "../../models/Types";

export const eventActions = {
  GET_EVENTS_SAGA: "event/getEventsSaga",
  ADD_EVENT_SAGA: "event/addEventSaga",
};

export const createEventsActions = {
  getEvents: (
    callback: callbackPayload
  ): PayloadAction<getEventsSagaPayload> => {
    return {
      type: eventActions.GET_EVENTS_SAGA,
      payload: { callback },
    };
  },
  addEvent: (
    newEvent: Event,
    callback: callbackPayload
  ): PayloadAction<addEventSagaPayload> => {
    return {
      type: eventActions.ADD_EVENT_SAGA,
      payload: { newEvent, callback },
    };
  },
};
