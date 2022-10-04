
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

export const getProducts = (search: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductsRequestAction());
console.log(search)
    const result = await request({
      url: '/api/v1/products',
      method: 'get',
      params: {
        ...search,
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

export const getGroups = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getGroupsRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
    });

    dispatch(getGroupsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getGroupsRequestFailAction());
  }
};

export const getCategories = (groupUuid?: string) => async (dispatch: any): Promise<any> => {
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

export const getBrands = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getBrandsRequestAction());

    const result = await request({
      url: '/api/v1/brands',
      method: 'get',
    });

    dispatch(getBrandsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getBrandsRequestFailAction());
  }
};