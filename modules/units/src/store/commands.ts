
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  getUnitRequestAction,
  getUnitRequestFailAction,
  getUnitRequestSuccessAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  upsertUnitRequestAction,
  upsertUnitRequestFailAction,
  upsertUnitRequestSuccessAction,

  deleteUnitRequestAction,
  deleteUnitRequestFailAction,
  deleteUnitRequestSuccessAction,
} from './slice';


export function getUnit(uuid: string): any {
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(getUnitRequestAction());

      const result = await request({
        url: '/api/v1/units',
        method: 'get',
        params: {
          uuid,
        },
      });

      dispatch(getUnitRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getUnitRequestFailAction());

      return null;
    }
  };
}

export function getUnits(): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getUnitsRequestAction());

      const result = await request({
        url: '/api/v1/units',
        method: 'get',
      });

      dispatch(getUnitsRequestSuccessAction(result['data']));
    }
    catch(error: any) {

      dispatch(getUnitsRequestFailAction());
    }
  };
}

export function upsertUnits(data: any): any {
  return async function (dispatch: Dispatch): Promise<boolean> {
    try {
      dispatch(upsertUnitRequestAction());

      const result = await request({
        url: '/api/v1/units',
        method: 'post',
        data,
      });

      dispatch(upsertUnitRequestSuccessAction(result['data']));

      return true;
    }
    catch (error: any) {

      dispatch(upsertUnitRequestFailAction());

      return false;
    }
  }
}

export function deleteUnits(uuid: Array<string>): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteUnitRequestAction());

      const result = await request({
        url: '/api/v1/units',
        method: 'delete',
        params: {
          uuid,
        },
      });

      dispatch(deleteUnitRequestSuccessAction(result['data']));
    }
    catch (error: any) {

      dispatch(deleteUnitRequestFailAction());
    }
  }
}
