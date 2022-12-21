
import request from "@package/request";

import {
  getAttributeRequestAction,
  getAttributeRequestFailAction,
  getAttributeRequestSuccessAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  upsertAttributeRequestAction,
  upsertAttributeRequestFailAction,
  upsertAttributeRequestSuccessAction,

  deleteAttributeRequestAction,
  deleteAttributeRequestFailAction,
  deleteAttributeRequestSuccessAction,

  getUnitsRequestSuccessAction,
} from './slice';
import { TAppDispatch } from './create';


export function getAttribute(uuid: string): any {
  return async function(dispatch: TAppDispatch): Promise<IAttribute | null> {
    try {
      dispatch(getAttributeRequestAction());

      const result = await request({
        url: '/api/v1/attributes',
        method: 'get',
        params: {
          uuid,
        },
      });

      dispatch(getAttributeRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getAttributeRequestFailAction());

      return null;
    }
  };
}

export function getUnits(): any {
  return async function(dispatch: TAppDispatch) {
    try {
      const result = await request({
        url: '/api/v1/units',
        method: 'get',
      });

      dispatch(getUnitsRequestSuccessAction(result['data']));
    }
    catch(error: any) {

    }
  };
}

export function getAttributes(search: IFilter): any {
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(getAttributesRequestAction());

      const result = await request({
        url: '/api/v1/attributes',
        method: 'get',
        params: {
          ...search,
        },
      });

      dispatch(getAttributesRequestSuccessAction(result));
    }
    catch(error: any) {

      dispatch(getAttributesRequestFailAction());
    }
  };
}

export function upsertAttributes(data: IAttribute, search: IFilter): any {
  return async function (dispatch: TAppDispatch): Promise<boolean> {
    try {
      dispatch(upsertAttributeRequestAction());

      await request({
        url: '/api/v1/attributes',
        method: 'post',
        data: {
          ...data,
        },
      });

      await dispatch(getAttributes(search));

      dispatch(upsertAttributeRequestSuccessAction());

      return true;
    }
    catch (error: any) {

      dispatch(upsertAttributeRequestFailAction());
      return false;
    }
  }
}

export function deleteAttributes(uuid: string[], search: IFilter): any {
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(deleteAttributeRequestAction());

      await request({
        url: '/api/v1/attributes',
        method: 'delete',
        params: {
          uuid,
          ...search,
        },
      });

      await dispatch(getAttributes(search));

      dispatch(deleteAttributeRequestSuccessAction());
    }
    catch (error: any) {

      dispatch(deleteAttributeRequestFailAction());
    }
  }
}
