
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/products';


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
  meta: {},
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['meta'] = {};
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    createProductTemplateRequest(state: IState) {
      state['inUploadProcess'] = true;
    },
    createProductTemplateRequestFail(state: IState) {
      state['inUploadProcess'] = false;
    },
    createProductTemplateRequestSuccess(state: IState) {
      state['inUploadProcess'] = false;
    },

    getProductsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getProductsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getProductsRequestSuccessAction(state: IState, { payload }) {
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
            isUse: payload['isUse'],
          };
        }
        return item;
      });
    },
  },
});

export const {
  resetStateAction,

  createProductTemplateRequest,
  createProductTemplateRequestFail,
  createProductTemplateRequestSuccess,

  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): any => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
