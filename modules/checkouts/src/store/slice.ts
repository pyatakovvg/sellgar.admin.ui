
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/orders';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  meta: any;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
  meta: null,
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['meta'] = null;
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

    changeStatusRequestAction() {},
    changeStatusRequestFailAction() {},
    changeStatusRequestSuccessAction(state: IState, { payload }) {
      state['data'] = state['data'].map((item) => {
        if (payload['uuid'] === item['uuid']) {
          return {
            ...item,
            ...payload,
          };
        }
        return item;
      });
    },
  },
});

export const {
  resetStateAction,

  getOrdersRequestAction,
  getOrdersRequestFailAction,
  getOrdersRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): Array<any> => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
