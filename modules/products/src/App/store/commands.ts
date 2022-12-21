
import request from "@package/request";

import {
  getProductsRequestSuccessAction,
  changeStatusRequestSuccessAction,

  getBrandsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getGroupsRequestSuccessAction,
} from './slice';
import { TAppDispatch } from './create';


export const createProduct = () => async (): Promise<IProduct | null> => {
  try {
    const result = await request({
      url: '/api/v1/products',
      method: 'post',
      data: {
        name: 'New product',
        isUse: false,
      }
    });

    return result['data'];
  }
  catch(error: any) {

    return null;
  }
};

export const getProducts = (search: any, options: any) => async (dispatch: TAppDispatch): Promise<any> => {
  try {
    const result = await request({
      url: '/api/v1/products',
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

export const updateProduct = (data: any) => async (dispatch: TAppDispatch) => {
  try {
    const result = await request({
      url: '/api/v1/products',
      method: 'post',
      data,
    });

    dispatch(changeStatusRequestSuccessAction(result['data']));
  }
  catch(error: any) {

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
