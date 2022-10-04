
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  getGroupRequestAction,
  getGroupRequestFailAction,
  getGroupRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  upsertGroupRequestAction,
  upsertGroupRequestFailAction,
  upsertGroupRequestSuccessAction,

  deleteGroupRequestAction,
  deleteGroupRequestFailAction,
  deleteGroupRequestSuccessAction,
} from './slice';


export function getGroup(uuid: string): any {
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(getGroupRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'get',
        params: {
          uuid,
        },
      });

      dispatch(getGroupRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getGroupRequestFailAction());

      return null;
    }
  };
}

export function getGroups(): any {
  return async function(dispatch: Dispatch) {
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
}

export function upsertGroups(data: any): any {
  return async function (dispatch: Dispatch): Promise<boolean> {
    try {
      dispatch(upsertGroupRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'post',
        data,
      });

      dispatch(upsertGroupRequestSuccessAction(result['data']));

      return true;
    }
    catch (error: any) {

      dispatch(upsertGroupRequestFailAction());

      return false;
    }
  }
}

export function deleteGroups(uuid: Array<string>): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteGroupRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'delete',
        params: {
          uuid,
        },
      });

      dispatch(deleteGroupRequestSuccessAction(result['data']));
    }
    catch (error: any) {

      dispatch(deleteGroupRequestFailAction());
    }
  }
}
