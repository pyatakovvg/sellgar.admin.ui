
import { createSlice, Slice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/orders';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  meta: any;
  payments: Array<any>;
  statuses: Array<any>;
  delivery: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
  meta: {},
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
      state['meta'] = {};
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
    getOrdersRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
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

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): any => state[REDUCER_NAME]['meta'];
export const selectStatuses = (state: IRootStore): Array<any> => state[REDUCER_NAME]['statuses'];
export const selectDelivery = (state: IRootStore): Array<any> => state[REDUCER_NAME]['delivery'];
export const selectPayments = (state: IRootStore): Array<any> => state[REDUCER_NAME]['payments'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
