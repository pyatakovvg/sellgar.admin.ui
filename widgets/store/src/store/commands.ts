
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  openStoreAction,
  closeStoreAction,

  getStoreRequestAction,
  getStoreRequestFailAction,
  getStoreRequestSuccessAction,
} from './slice';


export const getStore = (params: any): any => async (dispatch: Dispatch) => {
  try {
    dispatch(getStoreRequestAction());

    const result = await request({
      url: '/api/v1/store',
      method: 'get',
      params: {
        ...params,
      },
    });

    dispatch(getStoreRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getStoreRequestFailAction());
  }
};

export const openStore = (name: string): any => (dispatch: Dispatch) => {
  dispatch(openStoreAction(name));
};

export const closeStore = (): any => (dispatch: Dispatch) => {
  dispatch(closeStoreAction());
};
