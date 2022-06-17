
import request from "@package/request";

import {
  getCategoryRequestAction,
  getCategoryRequestFailAction,
  getCategoryRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  createCategoryRequestAction,
  createCategoryRequestFailAction,
  createCategoryRequestSuccessAction,

  updateCategoryRequestAction,
  updateCategoryRequestFailAction,
  updateCategoryRequestSuccessAction,
} from './slice';


export const getCategory = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoryRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
      params: {
        uuid,
      },
    });

    dispatch(getCategoryRequestSuccessAction());
    return result['data'][0] || null;
  }
  catch(error: any) {

    dispatch(getCategoryRequestFailAction());
    return null;
  }
};

export const getCategories = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoriesRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCategoriesRequestFailAction());
  }
};

export const createCategory = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createCategoryRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'post',
      data,
    });

    dispatch(createCategoryRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(createCategoryRequestFailAction());
    return false;
  }
};

export const updateCategory = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateCategoryRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'put',
      data,
    });

    dispatch(updateCategoryRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(updateCategoryRequestFailAction());
    return false;
  }
};
