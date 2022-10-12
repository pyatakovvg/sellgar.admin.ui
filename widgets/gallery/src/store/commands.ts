
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  openGalleryAction,
  closeGalleryAction,

  getGalleryRequestAction,
  getGalleryRequestFailAction,
  getGalleryRequestSuccessAction,
} from './slice';


export const getGallery = (params: any): any => async (dispatch: Dispatch) => {
  try {
    dispatch(getGalleryRequestAction());

    const result = await request({
      url: '/api/v1/images',
      method: 'get',
      params: {
        ...params,
      },
    });

    dispatch(getGalleryRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getGalleryRequestFailAction());
  }
};

export const openGallery = (name: string): any => (dispatch: Dispatch) => {
  dispatch(openGalleryAction(name));
};

export const closeGallery = (): any => (dispatch: Dispatch) => {
  dispatch(closeGalleryAction());
};
