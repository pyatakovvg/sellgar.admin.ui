
import request from "@package/request";

import { TAppDispatch } from './create';

import {
  getOrdersRequestAction,
  getOrdersRequestFailAction,
  getOrdersRequestSuccessAction,

  upsertOrdersRequestAction,
  upsertOrdersRequestFailAction,
  upsertOrdersRequestSuccessAction,

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
  return async function(dispatch: TAppDispatch) {
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
  return async function(dispatch: TAppDispatch) {
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
  return async function(dispatch: TAppDispatch) {
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

export function getOrders(search: IFilter, options: any): any {
  return async function(dispatch: TAppDispatch) {
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
}

export function upsertOrders(data: Partial<ICheckout>, options: any): any {
  return async function(dispatch: TAppDispatch) {
    try {
      dispatch(upsertOrdersRequestAction());

      await request({
        url: '/api/v1/checkouts',
        method: 'post',
        cancelToken: options['token'],
      });

      dispatch(upsertOrdersRequestSuccessAction());
    }
    catch(error: any) {

      dispatch(upsertOrdersRequestFailAction());
    }
  };
}
