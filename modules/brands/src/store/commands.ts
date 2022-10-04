
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  getBrandRequestAction,
  getBrandRequestFailAction,
  getBrandRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  upsertBrandRequestAction,
  upsertBrandRequestFailAction,
  upsertBrandRequestSuccessAction,

  deleteBrandRequestAction,
  deleteBrandRequestFailAction,
  deleteBrandRequestSuccessAction,
} from './slice';


export function getBrand(uuid: string): any {
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(getBrandRequestAction());

      const result = await request({
        url: '/api/v1/brands',
        method: 'get',
        params: {
          uuid,
        },
      });

      dispatch(getBrandRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getBrandRequestFailAction());

      return null;
    }
  };
}

export function getBrands(): any {
  return async function(dispatch: Dispatch) {
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
}

export function upsertBrands(data: any): any {
  return async function (dispatch: Dispatch): Promise<boolean> {
    try {
      dispatch(upsertBrandRequestAction());

      const result = await request({
        url: '/api/v1/brands',
        method: 'post',
        data,
      });

      dispatch(upsertBrandRequestSuccessAction(result['data']));

      return true;
    }
    catch (error: any) {

      dispatch(upsertBrandRequestFailAction());

      return false;
    }
  }
}

export function deleteBrands(uuid: Array<string>): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteBrandRequestAction());

      const result = await request({
        url: '/api/v1/brands',
        method: 'delete',
        params: {
          uuid,
        },
      });

      dispatch(deleteBrandRequestSuccessAction(result['data']));
    }
    catch (error: any) {

      dispatch(deleteBrandRequestFailAction());
    }
  }
}
