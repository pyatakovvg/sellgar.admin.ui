
import request from "@package/request";

import {
  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getAttributeRequestAction,
  getAttributeRequestFailAction,
  getAttributeRequestSuccessAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  createAttributeRequestAction,
  createAttributeRequestFailAction,
  createAttributeRequestSuccessAction,

  updateAttributeRequestAction,
  updateAttributeRequestFailAction,
  updateAttributeRequestSuccessAction,
} from './slice';


export const getUnits = () => async (dispatch: any): Promise<any> => {
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

export const getCategories = () => async (dispatch: any): Promise<any> => {
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

export const getAttribute = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getAttributeRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'get',
      params: {
        uuid,
      }
    });

    dispatch(getAttributeRequestSuccessAction());

    return result['data'][0] || null;
  }
  catch(error: any) {

    dispatch(getAttributeRequestFailAction());

    return null;
  }
};

export const getAttributes = (params: any) => async (dispatch: any): Promise<void> => {
  try {
    dispatch(getAttributesRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'get',
      params: {
        ...params,
      },
    });

    dispatch(getAttributesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getAttributesRequestFailAction());
  }
};

export const createAttribute = (data: any) => async (dispatch: any): Promise<boolean> => {
  try {
    dispatch(createAttributeRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'post',
      data,
    });

    dispatch(createAttributeRequestSuccessAction(result['data']));

    return true;
  }
  catch(error: any) {

    dispatch(createAttributeRequestFailAction());

    return false;
  }
};

export const updateAttribute = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateAttributeRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'put',
      data,
    });

    dispatch(updateAttributeRequestSuccessAction(result['data']));

    return true;
  }
  catch(error: any) {

    dispatch(updateAttributeRequestFailAction());

    return false;
  }
};
