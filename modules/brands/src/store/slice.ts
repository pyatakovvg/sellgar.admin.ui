
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/brands';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
}


const initialState = {
  data: [],
  inProcessAll: false,
  inProcessOne: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
    },

    getBrandRequestAction(state: IState): any {
      state['inProcessOne'] = true;
    },
    getBrandRequestFailAction(state: IState) {
      state['inProcessOne'] = false;
    },
    getBrandRequestSuccessAction(state: IState) {
      state['inProcessOne'] = false;
    },

    getBrandsRequestAction(state: IState): any {
      state['inProcessAll'] = true;
    },
    getBrandsRequestFailAction(state: IState) {
      state['inProcessAll'] = false;
    },
    getBrandsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inProcessAll'] = false;
    },

    upsertBrandRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertBrandRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertBrandRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    deleteBrandRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteBrandRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteBrandRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
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

  upsertBrandRequestAction,
  upsertBrandRequestFailAction,
  upsertBrandRequestSuccessAction,

  deleteBrandRequestAction,
  deleteBrandRequestFailAction,
  deleteBrandRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcessAll = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
