
import request from "@package/request";

import {
  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  createProductTemplateRequest,
  createProductTemplateRequestFail,
  createProductTemplateRequestSuccess,

  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} from './slice';


export const createProduct = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createProductTemplateRequest());

    const result = await request({
      url: '/api/v1/products/create',
      method: 'post',
    });

    dispatch(createProductTemplateRequestSuccess());
    return result['data'];
  }
  catch(error: any) {

    dispatch(createProductTemplateRequestFail());
    return null;
  }
};

export const getProducts = (search: any, options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductsRequestAction());

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

    dispatch(getProductsRequestFailAction());
  }
};

export const updateProduct = (uuid: string, data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(changeStatusRequestAction());

    const result = await request({
      url: '/api/v1/products/' + uuid,
      method: 'put',
      data,
    });

    dispatch(changeStatusRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(changeStatusRequestFailAction());
  }
};

export const getGroups = (options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getGroupsRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getGroupsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getGroupsRequestFailAction());
  }
};

export const getCategories = (options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoriesRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCategoriesRequestFailAction());
  }
};

export const getBrands = (options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getBrandsRequestAction());

    const result = await request({
      url: '/api/v1/brands',
      method: 'get',
      cancelToken: options['token'],
    });

    dispatch(getBrandsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getBrandsRequestFailAction());
  }
};