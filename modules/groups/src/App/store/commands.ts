
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';
import { NotFoundError } from "@package/errors";

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
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getGroupRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'get',
        params: {
          uuid,
        },
      });

      if ( ! result.data.length) {
        throw new NotFoundError({ code: '2.3.4', message: `Производитель "${uuid}" не найден` });
      }

      dispatch(getGroupRequestSuccessAction());

      return result.data[0];
    }
    catch(error: any) {

      dispatch(getGroupRequestFailAction());

      return null;
    }
  };
}

export function getGroups(search: IFilter): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getGroupsRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'get',
        params: {
          ...search,
          take: Number(process.env['REACT_APP_TAKE_ROWS']),
          skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
        },
      });

      dispatch(getGroupsRequestSuccessAction(result));
    }
    catch(error: any) {

      dispatch(getGroupsRequestFailAction());
    }
  };
}

export function upsertGroups(data: any, search: IFilter): any {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(upsertGroupRequestAction());

      await request({
        url: '/api/v1/groups',
        method: 'post',
        data,
      });

      await dispatch(getGroups(search));

      dispatch(upsertGroupRequestSuccessAction());

      return true;
    }
    catch (error: any) {

      dispatch(upsertGroupRequestFailAction());

      return false;
    }
  }
}

export function deleteGroups(uuid: string[], search: IFilter): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteGroupRequestAction(uuid));

      await request({
        url: '/api/v1/groups',
        method: 'delete',
        params: {
          uuid,
        },
      });

      await dispatch(getGroups(search))

      dispatch(deleteGroupRequestSuccessAction(uuid));
    }
    catch (error: any) {

      dispatch(deleteGroupRequestFailAction(uuid));
    }
  }
}
