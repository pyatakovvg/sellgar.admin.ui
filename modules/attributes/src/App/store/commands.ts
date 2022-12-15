
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

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
} from './slice';


export function getAttribute(uuid: string): any {
  return async function(dispatch: Dispatch): Promise<any> {
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

export function getAttributes(search: any): any {
  return async function(dispatch: Dispatch) {
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

export function upsertAttributes(data: any, search: any): any {
  return async function (dispatch: Dispatch): Promise<boolean> {
    try {
      dispatch(upsertAttributeRequestAction());

      const result = await request({
        url: '/api/v1/attributes',
        method: 'post',
        data: {
          ...data,
        },
        params: {
          ...search,
        },
      });

      dispatch(upsertAttributeRequestSuccessAction(result));

      return true;
    }
    catch (error: any) {

      dispatch(upsertAttributeRequestFailAction());

      return false;
    }
  }
}

export function deleteAttributes(uuid: Array<string>, search: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteAttributeRequestAction());

      const result = await request({
        url: '/api/v1/attributes',
        method: 'delete',
        params: {
          uuid,
          ...search,
        },
      });

      dispatch(deleteAttributeRequestSuccessAction(result));
    }
    catch (error: any) {

      dispatch(deleteAttributeRequestFailAction());
    }
  }
}
