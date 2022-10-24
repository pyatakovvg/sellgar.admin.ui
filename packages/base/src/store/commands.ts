
import request from "@package/request";

import {
  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCurrenciesRequestAction,
  getCurrenciesRequestFailAction,
  getCurrenciesRequestSuccessAction,
} from './slice';
import {Dispatch} from "@reduxjs/toolkit";


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

export const getGroups = (): any => async (dispatch: any): Promise<any> => {
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

export const getCategories = (): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoriesRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCategoriesRequestFailAction());
  }
};

export const getBrands = (): any => async (dispatch: any): Promise<any> => {
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

export const getCurrencies = (): any => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCurrenciesRequestAction());

    const result = await request({
      url: '/api/v1/currencies',
      method: 'get',
    });

    dispatch(getCurrenciesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCurrenciesRequestFailAction());
  }
};
