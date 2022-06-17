
import request from "@package/request";

import {
  getImagesRequestAction,
  getImagesRequestFailAction,
  getImagesRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,
} from './slice';


export const getImages = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getImagesRequestAction());

    const result = await request({
      url: '/api/v1/images',
      method: 'get',
    });

    dispatch(getImagesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getImagesRequestFailAction());
  }
};

export const uploadImages = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createImagesRequestAction());

    const result = await request({
      url: '/api/v1/images',
      method: 'post',
      data,
    });

    dispatch(createImagesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(createImagesRequestFailAction());
  }
};
