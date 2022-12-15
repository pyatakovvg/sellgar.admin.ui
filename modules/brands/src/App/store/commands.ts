
import request from "@package/request";
import { NotFoundError } from "@package/errors";

import { TAppDispatch } from './create';

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
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(getBrandRequestAction());

      const result = await request({
        url: '/api/v1/brands',
        method: 'get',
        params: {
          uuid,
        },
      });

      if ( ! result.data[0]) {
        throw new NotFoundError({ code: '1.2.3', message: `Производитель "${uuid}" не найден` });
      }

      dispatch(getBrandRequestSuccessAction());

      return result.data[0];
    }
    catch(error: any) {

      dispatch(getBrandRequestFailAction());

      return null;
    }
  };
}

export function getBrands(search: IFilter): any {
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(getBrandsRequestAction());

      const result = await request({
        url: '/api/v1/brands',
        method: 'get',
        params: {
          ...search,
          take: Number(process.env['REACT_APP_TAKE_ROWS']),
          skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
        }
      });

      dispatch(getBrandsRequestSuccessAction(result));
    }
    catch(error: any) {

      dispatch(getBrandsRequestFailAction());
    }
  };
}

export function upsertBrands(data: IBrand, search: IFilter): any {
  return async function (dispatch: TAppDispatch): Promise<boolean> {
    try {
      dispatch(upsertBrandRequestAction());

      await request({
        url: '/api/v1/brands',
        method: 'post',
        data,
      });

      await dispatch(getBrands(search));
      dispatch(upsertBrandRequestSuccessAction());

      return true;
    }
    catch (error: any) {

      dispatch(upsertBrandRequestFailAction());

      return false;
    }
  }
}

export function deleteBrands(uuid: string[], search: IFilter): any {
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(deleteBrandRequestAction(uuid));

      await request({
        url: '/api/v1/brands',
        method: 'delete',
        params: {
          uuid,
        },
      });

      await dispatch(getBrands(search));
      dispatch(deleteBrandRequestSuccessAction(uuid));
    }
    catch (error: any) {

      dispatch(deleteBrandRequestFailAction(uuid));
    }
  }
}
