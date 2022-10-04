
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

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
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(getGroupsRequestAction());

      const result = await request({
        url: '/api/v1/groups',
        method: 'get',
      });

      dispatch(getGroupsRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getGroupsRequestFailAction());

      return null;
    }
  };
}

export function getCategory(uuid: string): any {
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(getCategoryRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'get',
        params: {
          uuid,
        },
      });

      dispatch(getCategoryRequestSuccessAction(result['data']));

      return result['data'][0];
    }
    catch(error: any) {

      dispatch(getCategoryRequestFailAction());

      return null;
    }
  };
}

export function getCategories(params: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getCategoriesRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'get',
        params,
      });

      dispatch(getCategoriesRequestSuccessAction(result['data']));
    }
    catch(error: any) {

      dispatch(getCategoriesRequestFailAction());
    }
  };
}

export function upsertCategory(data: any, search: any): any {
  return async function (dispatch: Dispatch): Promise<boolean> {
    try {
      dispatch(upsertCategoryRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'post',
        data: {
          ...data,
        },
        params: {
          ...search,
        },
      });

      dispatch(upsertCategoryRequestSuccessAction(result['data']));

      return true;
    }
    catch (error: any) {

      dispatch(upsertCategoryRequestFailAction());

      return false;
    }
  }
}

export function deleteCategories(uuid: Array<string>, search: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(deleteCategoryRequestAction());

      const result = await request({
        url: '/api/v1/categories',
        method: 'delete',
        params: {
          uuid,
          ...search,
        },
      });

      dispatch(deleteCategoryRequestSuccessAction(result['data']));
    }
    catch (error: any) {

      dispatch(deleteCategoryRequestFailAction());
    }
  }
}
