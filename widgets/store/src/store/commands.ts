
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
        hasParent: false,
      },
    });

    dispatch(getStoreRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getStoreRequestFailAction());
  }
};

export const getProduct = (uuid: string): any => async (dispatch: Dispatch) => {
  try {
    // dispatch(getStoreRequestAction());

    const result = await request({
      url: '/api/v1/store',
      method: 'get',
      params: {
        uuid,
      },
    });

    // dispatch(getStoreRequestSuccessAction(result['data']));
    return result['data'][0];
  }
  catch(error: any) {

    // dispatch(getStoreRequestFailAction());
    return null;
  }
};

export const openStore = (name: string): any => (dispatch: Dispatch) => {
  dispatch(openStoreAction(name));
};

export const closeStore = (): any => (dispatch: Dispatch) => {
  dispatch(closeStoreAction());
};
