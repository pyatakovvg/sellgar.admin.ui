
import request from "@package/request";
import { NotFoundError } from "@package/errors";
import { pushSuccess } from '@package/push';

import {
  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  updateProductRequestAction,
  updateProductRequestFailAction,
  updateProductRequestSuccessAction,

  copyProductRequestAction,
  copyProductRequestFailAction,
  copyProductRequestSuccessAction,
} from './slice';


export const getAttributes = (): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getAttributesRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'get',
    });

    dispatch(getAttributesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getAttributesRequestFailAction());
  }
};

export const getCategories = (groupUuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoriesRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
      params: {
        groupUuid,
      }
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCategoriesRequestFailAction());
  }
};

export const getProduct = (uuid: string): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductRequestAction());

    const result = await request({
      url: '/api/v1/products/' + uuid,
      method: 'get',
    });

    if ( ! result['data']) {
      throw new NotFoundError({ code: '1.0.1', message: 'Продукт не найден' });
    }

    dispatch(getProductRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getProductRequestFailAction());
  }
};

export const updateProduct = (data: any): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateProductRequestAction());

    const result = await request({
      url: '/api/v1/products',
      method: 'post',
      data: {
        ...data,
      },
    });

    dispatch(updateProductRequestSuccessAction(result['data']));
    dispatch(pushSuccess('Данные обновлены'));
  }
  catch(error: any) {

    dispatch(updateProductRequestFailAction());
  }
};

export const copyProduct = (uuid: any): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(copyProductRequestAction());

    const result = await request({
      url: '/api/v1/products/' + uuid + '/copy',
      method: 'get',
    });

    dispatch(copyProductRequestSuccessAction(result['data']));
    dispatch(pushSuccess('Данные скопированы'));

    return result['data'];
  }
  catch(error: any) {

    dispatch(copyProductRequestFailAction());

    return null;
  }
};
