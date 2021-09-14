import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { call, put } from "redux-saga/effects";

import {
  getEventsPayload,
  getEventsSagaPayload,
  addEventSagaPayload,
  QueryResults,
} from "../../models/Interfaces";

import { gettedEvents } from "../slices/event.slices";
import callAPI from "../api/api";

import { API_PATH } from "../../pages/path";

const EVENTS_BASE_URL = `${API_PATH}${process.env.REACT_APP_EVENTS_ENDPOINT}`;

export function* getEventsSaga(action: PayloadAction<getEventsSagaPayload>) {
  const { payload } = action;

  const axiosConfig: AxiosRequestConfig = {
    url: EVENTS_BASE_URL,
  };

  try {
    const functionToCall = (): Promise<AxiosResponse<QueryResults>> =>
      callAPI(axiosConfig);
    const response: AxiosResponse<QueryResults> = yield call(functionToCall);
    const getEventsPayload: getEventsPayload = {
      events: response.data.data || [],
    };
    yield put(gettedEvents(getEventsPayload));
    if (payload.callback) {
      payload.callback(true, null);
    }
  } catch (e: any) {
    if (payload.callback) {
      payload.callback(false, e.message);
    }
  }
}

export function* addEventSaga(action: PayloadAction<addEventSagaPayload>) {
  const { payload } = action;

  const method: Method = "POST";

  const axiosConfig: AxiosRequestConfig = {
    url: EVENTS_BASE_URL,
    method,
    data: payload.newEvent,
  };

  try {
    const functionToCall = (): Promise<AxiosResponse<QueryResults>> =>
      callAPI(axiosConfig);
    yield call(functionToCall);
    if (payload.callback) {
      payload.callback(true, null);
    }
  } catch (e: any) {
    if (payload.callback) {
      payload.callback(false, e.message);
    }
  }
}
