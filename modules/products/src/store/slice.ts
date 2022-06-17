
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/products';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
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
      state['data'] = payload;
      state['inProcess'] = false;
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
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
