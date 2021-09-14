import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getEventsPayload, EventStoreReducer } from "../../models/Interfaces";

const initialState: EventStoreReducer = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    gettedEvents: (
      state: EventStoreReducer,
      action: PayloadAction<getEventsPayload>
    ): EventStoreReducer => {
      const { events } = action.payload;
      return {
        events,
      };
    },
  },
});

export const { gettedEvents } = eventsSlice.actions;
export const eventsSliceReducer = eventsSlice.reducer;
