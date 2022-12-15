
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';

import {
  getOrdersRequestAction,
  getOrdersRequestFailAction,
  getOrdersRequestSuccessAction,

  getStatusesRequestAction,
  getStatusesRequestFailAction,
  getStatusesRequestSuccessAction,

  getDeliveryRequestAction,
  getDeliveryRequestFailAction,
  getDeliveryRequestSuccessAction,

  getPaymentsRequestAction,
  getPaymentsRequestFailAction,
  getPaymentsRequestSuccessAction,
} from './slice';


export function getStatuses(options: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getStatusesRequestAction());

      const result = await request({
        url: '/api/v1/statuses',
        method: 'get',
        cancelToken: options['token'],
      });

      dispatch(getStatusesRequestSuccessAction(result['data']));
    }
    catch (error) {
      dispatch(getStatusesRequestFailAction());
    }
  }
}

export function getDelivery(options: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getDeliveryRequestAction());

      const result = await request({
        url: '/api/v1/delivery',
        method: 'get',
        cancelToken: options['token'],
      });

      dispatch(getDeliveryRequestSuccessAction(result['data']));
    }
    catch (error) {
      dispatch(getDeliveryRequestFailAction());
    }
  }
}

export function getPayments(options: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getPaymentsRequestAction());

      const result = await request({
        url: '/api/v1/payments',
        method: 'get',
        cancelToken: options['token'],
      });

      dispatch(getPaymentsRequestSuccessAction(result['data']));
    }
    catch (error) {
      dispatch(getPaymentsRequestFailAction());
    }
  }
}

export const getOrders = (search: any, options: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getOrdersRequestAction());

    const result = await request({
      url: '/api/v1/checkouts',
      method: 'get',
      params: {
        ...search,
      },
      cancelToken: options['token'],
    });

    dispatch(getOrdersRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getOrdersRequestFailAction());
  }
};
