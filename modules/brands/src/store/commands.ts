
import request from "@package/request";

import {
  getBrandRequestAction,
  getBrandRequestFailAction,
  getBrandRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  createBrandRequestAction,
  createBrandRequestFailAction,
  createBrandRequestSuccessAction,

  updateBrandRequestAction,
  updateBrandRequestSuccessAction,
  updateBrandRequestFailAction,
} from './slice';


export const getBrand = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getBrandRequestAction());

    const result = await request({
      url: '/api/v1/brands',
      method: 'get',
      params: {
        uuid,
      }
    });

    dispatch(getBrandRequestSuccessAction());
    return result['data'][0] || null;
  }
  catch(error: any) {

    dispatch(getBrandRequestFailAction());
    return null;
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

export const createBrand = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createBrandRequestAction());

    const result = await request({
      url: '/api/v1/brands',
      method: 'post',
      data,
    });

    dispatch(createBrandRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(createBrandRequestFailAction());
    return false;
  }
};

export const updateBrand = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateBrandRequestAction());

    const result = await request({
      url: '/api/v1/brands',
      method: 'put',
      data,
    });

    dispatch(updateBrandRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(updateBrandRequestFailAction());
    return false;
  }
};
