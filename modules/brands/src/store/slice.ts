
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/brands';


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

    getBrandRequestAction() {},
    getBrandRequestFailAction() {},
    getBrandRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    getBrandsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getBrandsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getBrandsRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createBrandRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createBrandRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createBrandRequestSuccessAction(state: IState, { payload }) {
      state['data'] = [
        ...state['data'],
        payload,
      ];
      state['inUploadProcess'] = false;
    },

    updateBrandRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    updateBrandRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    updateBrandRequestSuccessAction(state: IState, { payload }) {
      state['data'] = state['data'].map((item) => {
        if (item['uuid'] === payload['uuid']) {
          return {
            ...item,
            ...payload,
          };
        }
        return item;
      });
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getBrandRequestAction,
  getBrandRequestFailAction,
  getBrandRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  createBrandRequestAction,
  createBrandRequestFailAction,
  createBrandRequestSuccessAction,

  updateBrandRequestAction,
  updateBrandRequestFailAction,
  updateBrandRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
