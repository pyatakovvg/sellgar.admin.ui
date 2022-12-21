
import request from "@package/request";
import { NotFoundError } from '@package/errors';

import type { TAppDispatch } from './create';
import {
  uploadingProductProcessAction,

  getProductsRequestSuccessAction,
  getBrandsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getCurrenciesRequestSuccessAction,
  getGroupsRequestSuccessAction,

} from './slice';


export const getProducts = (search: IFilter, options: any): any => async (dispatch: TAppDispatch) => {
  try {
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

  }
};

export const getProduct = (uuid: string, options: any): any => async (): Promise<IProduct | null> => {
  try {
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

    return result['data'][0];
  }
  catch(error: any) {

    return null;
  }
};

export const upsertProducts = (data: any): any => async (dispatch: TAppDispatch): Promise<boolean> => {
  try {
    dispatch(uploadingProductProcessAction(true));

    await request({
      url: '/api/v1/store',
      method: 'post',
      data,
    });

    dispatch(uploadingProductProcessAction(false));
    return true;
  }
  catch(error: any) {
    dispatch(uploadingProductProcessAction(false));
    return false;
  }
};

export const getGroups = (options: any): any => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getGroupsRequestSuccessAction(result['data']));
  }
  catch(error: any) {
  }
};

export const getCategories = (options: any): any => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

  }
};

export const getBrands = (options: any): any => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/brands',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getBrandsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

  }
};

export const getCurrencies = (options: any): any => async (dispatch: any) => {
  try {
    const result = await request({
      url: '/api/v1/currencies',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getCurrenciesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

  }
};
