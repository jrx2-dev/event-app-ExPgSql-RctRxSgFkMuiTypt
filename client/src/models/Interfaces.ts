import { FormStatusType } from "./Enum";
import { callbackPayload } from "./Types";

export interface Event {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
  id?: number;
}

export interface EventStoreReducer {
  events: Event[];
}

export interface getEventsSagaPayload {
  callback: callbackPayload;
}

export interface addEventSagaPayload {
  newEvent: Event;
  callback: callbackPayload;
}

export interface getEventsPayload {
  events: Event[];
}

export interface QueryResults {
  message: string;
  status: string;
  data: Event[];
}

export interface IFormStatus {
  message: string;
  type: FormStatusType;
}

export interface IFormStatusProps {
  [key: string]: IFormStatus;
}

export interface IAddEventForm {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date | null;
}
