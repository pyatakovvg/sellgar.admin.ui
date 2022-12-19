
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';
import { NotFoundError } from "@package/errors";

import {
  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCategoryRequestAction,
  getCategoryRequestFailAction,
  getCategoryRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  upsertCategoryRequestAction,
  upsertCategoryRequestFailAction,
  upsertCategoryRequestSuccessAction,

  deleteCategoryRequestAction,
  deleteCategoryRequestFailAction,
  deleteCategoryRequestSuccessAction,
} from './slice';


export function getGroups(): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getGroupsRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'get',
      });

      dispatch(getGroupsRequestSuccessAction(result.data));

      return result.data[0];
    }
    catch(error: any) {

      dispatch(getGroupsRequestFailAction());

      return null;
    }
  };
}

export function getCategory(uuid: string): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getCategoryRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'get',
        params: {
          uuid,
        },
      });

      if ( ! result.data.length) {
        throw new NotFoundError({ code: '1.2.3', message: `Категория "${uuid}" не найдена` });
      }

      dispatch(getCategoryRequestSuccessAction());

      return result.data[0];
    }
    catch(error: any) {

      dispatch(getCategoryRequestFailAction());

      return null;
    }
  };
}

export function getCategories(search: IFilter): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getCategoriesRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'get',
        params: {
          ...search,
          take: Number(process.env['REACT_APP_TAKE_ROWS']),
          skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
        },
      });

      dispatch(getCategoriesRequestSuccessAction(result));
    }
    catch(error: any) {

      dispatch(getCategoriesRequestFailAction());
    }
  };
}

export function upsertCategory(data: any, search: IFilter): any {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(upsertCategoryRequestAction());

      await request({
        url: '/api/v1/categories',
        method: 'post',
        data: {
          ...data,
        }
      });

      await dispatch(getCategories(search));
      dispatch(upsertCategoryRequestSuccessAction());

      return true;
    }
    catch (error: any) {

      dispatch(upsertCategoryRequestFailAction());

      return false;
    }
  }
}

export function deleteCategories(uuid: string[], search: IFilter): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteCategoryRequestAction(uuid));

      await request({
        url: '/api/v1/categories',
        method: 'delete',
        params: {
          uuid,
        },
      });

      await getCategories(search);
      dispatch(deleteCategoryRequestSuccessAction(uuid));
    }
    catch (error: any) {

      dispatch(deleteCategoryRequestFailAction(uuid));
    }
  }
}
