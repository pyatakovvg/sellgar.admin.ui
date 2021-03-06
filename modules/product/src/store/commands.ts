
import request from "@package/request";
import { NotFoundError } from "@package/errors";

import {
  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  getCurrenciesRequestAction,
  getCurrenciesRequestFailAction,
  getCurrenciesRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  getGalleryRequestAction,
  getGalleryRequestFailAction,
  getGalleryRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  updateProductRequestAction,
  updateProductRequestFailAction,
  updateProductRequestSuccessAction,
} from './slice';


export const getGallery = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getGalleryRequestAction());

    const result = await request({
      url: '/api/v1/images',
      method: 'get',
    });

    dispatch(getGalleryRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getGalleryRequestFailAction());
  }
};

export const getCurrencies = () => async (dispatch: any): Promise<any> => {
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

export const getAttributes = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getAttributesRequestAction());

    const result = await request({
      url: '/api/v1/attributes',
      method: 'get',
    });

    dispatch(getAttributesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getAttributesRequestFailAction());
  }
};

export const getGroups = () => async (dispatch: any): Promise<any> => {
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

export const getCategories = (groupUuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCategoriesRequestAction());

    const result = await request({
      url: '/api/v1/categories',
      method: 'get',
      params: {
        groupUuid,
      }
    });

    dispatch(getCategoriesRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getCategoriesRequestFailAction());
  }
};

export const getBrands = () => async (dispatch: any): Promise<any> => {
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

export const getProduct = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductRequestAction());

    const result = await request({
      url: '/api/v1/products/' + uuid,
      method: 'get',
    });

    if ( ! result['data']) {
      throw new NotFoundError({ code: '1.0.1', message: '?????????????? ???? ????????????' });
    }

    dispatch(getProductRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getProductRequestFailAction());
  }
};

export const updateProduct = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateProductRequestAction());

    const result = await request({
      url: '/api/v1/products/' + data['uuid'],
      method: 'put',
      data,
    });

    dispatch(updateProductRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(updateProductRequestFailAction());
  }
};
