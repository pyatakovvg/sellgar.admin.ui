
import request from "@package/request";

import {
  createProductTemplateRequest,
  createProductTemplateRequestFail,
  createProductTemplateRequestSuccess,

  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} from './slice';


export const createProduct = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createProductTemplateRequest());

    const result = await request({
      url: '/api/v1/products/template',
      method: 'post',
    });

    dispatch(createProductTemplateRequestSuccess());
    return result['data'];
  }
  catch(error: any) {

    dispatch(createProductTemplateRequestFail());
    return null;
  }
};

export const getProducts = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductsRequestAction());

    const result = await request({
      url: '/api/v1/products',
      method: 'get',
    });

    dispatch(getProductsRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getProductsRequestFailAction());
  }
};

export const updateProduct = (uuid: string, data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(changeStatusRequestAction());

    const result = await request({
      url: '/api/v1/products/' + uuid + '/only',
      method: 'put',
      data,
    });

    dispatch(changeStatusRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(changeStatusRequestFailAction());
  }
};
