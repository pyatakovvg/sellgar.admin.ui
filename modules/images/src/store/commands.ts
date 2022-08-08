
import request from "@package/request";
import { pushSuccess } from '@package/push';

import {
  getImagesRequestAction,
  getImagesRequestFailAction,
  getImagesRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,

  deleteImagesRequestAction,
  deleteImagesRequestFailAction,
  deleteImagesRequestSuccessAction,
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
    dispatch(pushSuccess(`Изображения загружены`));
  }
  catch(error: any) {

    dispatch(createImagesRequestFailAction());
  }
};

export const deleteImages = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(deleteImagesRequestAction());

    const result = await request({
      url: '/api/v1/images/' + uuid,
      method: 'delete',
      data: null,
    });

    dispatch(deleteImagesRequestSuccessAction(result['data']));
    dispatch(pushSuccess(`Изображение "${uuid}" удалено`));
  }
  catch(error: any) {

    dispatch(deleteImagesRequestFailAction());
  }
};
