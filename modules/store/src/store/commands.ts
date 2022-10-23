
import request from "@package/request";
import { NotFoundError } from '@package/errors';

import {
  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  upsertProductRequestAction,
  upsertProductRequestFailAction,
  upsertProductRequestSuccessAction,
} from './slice';


export const getProducts = (search: any, options: any): any => async (dispatch: any) => {
  try {
    dispatch(getProductsRequestAction());

    const result = await request({
      url: '/api/v1/store',
      method: 'get',
      cancelToken: options['token'],
      params: {
        ...search,
        take: Number(process.env['REACT_APP_TAKE_ROWS']),
        skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
      },
    });

    dispatch(getProductsRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getProductsRequestFailAction());
  }
};

export const getProduct = (uuid: string, options: any): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductRequestAction());

    const result = await request({
      url: '/api/v1/store',
      method: 'get',
      cancelToken: options['token'],
      params: {
        uuid,
      },
    });

    if ( ! result['data'][0]) {
      throw new NotFoundError({ code: '9.9.9', message: 'Нет данных' });
    }

    dispatch(getProductRequestSuccessAction(result));

    return result['data'][0];
  }
  catch(error: any) {

    dispatch(getProductRequestFailAction());

    return null;
  }
};

export const upsertProducts = (data: any): any => async (dispatch: any): Promise<boolean> => {
  try {
    dispatch(upsertProductRequestAction());

    const result = await request({
      url: '/api/v1/store',
      method: 'post',
      data,
    });

    dispatch(upsertProductRequestSuccessAction(result));
    return true;
  }
  catch(error: any) {
console.log(error)
    dispatch(upsertProductRequestFailAction());
    return false;
  }
};
