
import request from "@package/request";

import {
  getOrdersRequestAction,
  getOrdersRequestFailAction,
  getOrdersRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} from './slice';


export const getOrders = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getOrdersRequestAction());

    const result = await request({
      url: '/api/v1/checkouts',
      method: 'get',
    });

    dispatch(getOrdersRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getOrdersRequestFailAction());
  }
};

export const updateOrder = (uuid: string, data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(changeStatusRequestAction());

    const result = await request({
      url: '/api/v1/orders/' + uuid + '/only',
      method: 'put',
      data,
    });

    dispatch(changeStatusRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(changeStatusRequestFailAction());
  }
};
