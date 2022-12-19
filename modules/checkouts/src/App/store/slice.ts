
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/orders';


interface IState {
  data: ICheckout[];
  meta: IMeta;
  payments: Array<any>;
  statuses: Array<any>;
  delivery: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
  meta: { totalRows: 0 },
  payments: [],
  statuses: [],
  delivery: [],
  inProcess: false,
  inUploadProcess: false,
};


const slice: Slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['statuses'] = [];
      state['delivery'] = [];
      state['payments'] = [];
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getOrdersRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getOrdersRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getOrdersRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<ICheckout>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },

    upsertOrdersRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertOrdersRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertOrdersRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    getStatusesRequestAction() {},
    getStatusesRequestFailAction() {},
    getStatusesRequestSuccessAction(state, { payload }) {
      state['statuses'] = payload;
    },

    getDeliveryRequestAction() {},
    getDeliveryRequestFailAction() {},
    getDeliveryRequestSuccessAction(state, { payload }) {
      state['delivery'] = payload;
    },

    getPaymentsRequestAction() {},
    getPaymentsRequestFailAction() {},
    getPaymentsRequestSuccessAction(state, { payload }) {
      state['payments'] = payload;
    },
  },
});

export const {
  resetStateAction,

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
} = slice['actions'] as any;

export const selectData = (state: TRootState): ICheckout[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectStatuses = (state: TRootState): Array<any> => state[REDUCER_NAME]['statuses'];
export const selectDelivery = (state: TRootState): Array<any> => state[REDUCER_NAME]['delivery'];
export const selectPayments = (state: TRootState): Array<any> => state[REDUCER_NAME]['payments'];
export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
