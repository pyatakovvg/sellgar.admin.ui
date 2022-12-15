
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
      url: '/api/v1/products',
      method: 'post',
      data: {
        name: 'New product',
        isUse: false,
      }
    });

    dispatch(createProductTemplateRequestSuccess());
    return result['data'];
  }
  catch(error: any) {

    dispatch(createProductTemplateRequestFail());
    return null;
  }
};

export const getProducts = (search: any, options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getProductsRequestAction());

    const result = await request({
      url: '/api/v1/products',
      method: 'get',
      cancelToken: options['token'],
      params: {
        ...search,
        take: Number(process.env['REACT_APP_TAKE_ROWS']),
        skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
      },
    });

    dispatch(getProductsRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getProductsRequestFailAction());
  }
};

export const updateProduct = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(changeStatusRequestAction());

    const result = await request({
      url: '/api/v1/products',
      method: 'post',
      data,
    });

    dispatch(changeStatusRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(changeStatusRequestFailAction());
  }
};
