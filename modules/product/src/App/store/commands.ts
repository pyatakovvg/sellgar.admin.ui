
import request from "@package/request";
import { pushSuccess } from '@package/push';
import { NotFoundError } from "@package/errors";

import {
  getGroupsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getAttributesRequestSuccessAction,

  getProductRequestSuccessAction,
  updateProductRequestSuccessAction,
} from './slice';
import { TAppDispatch } from './create';


export const getProduct = (uuid: string): any => async (dispatch: TAppDispatch) => {
  try {
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

  }
};

export const updateProduct = (data: any): any => async (dispatch: TAppDispatch) => {
  try {
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

  }
};

export const copyProduct = (uuid: any): any => async (dispatch: TAppDispatch): Promise<IProduct | null> => {
  try {
    const result = await request({
      url: '/api/v1/products/' + uuid + '/copy',
      method: 'get',
    });

    dispatch(pushSuccess('Данные скопированы'));

    return result['data'];
  }
  catch(error: any) {

    return null;
  }
};

export const getGroups = (): any => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
    });

    dispatch(getGroupsRequestSuccessAction(result['data']));
  }
  catch(error: any) {
  }
};

export const getAttributes = (): any => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/attributes',
      method: 'get',
    });

    dispatch(getAttributesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

  }
};

export const getCategories = (groupUuid: string) => async (dispatch: TAppDispatch) => {
  try {
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

  }
};
