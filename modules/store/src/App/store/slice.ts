
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { TRootState } from './create';


const REDUCER_NAME = 'module/store';


interface IState {
  data: IProduct[];
  meta: IMeta;
  inProcess: boolean;
  inLoadProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
  meta: { totalRows: 0 },
  inProcess: false,
  inLoadProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['inProcess'] = false;
      state['inLoadProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getProductsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getProductsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getProductsRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IProduct>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },

    getProductRequestAction(state: IState) {
      state['inLoadProcess'] = true;
    },
    getProductRequestFailAction(state: IState) {
      state['inLoadProcess'] = false;
    },
    getProductRequestSuccessAction(state: IState) {
      state['inLoadProcess'] = false;
    },

    upsertProductRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertProductRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertProductRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  upsertProductRequestAction,
  upsertProductRequestFailAction,
  upsertProductRequestSuccessAction,
} = slice['actions'] as any;

export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectData = (state: TRootState): IProduct[] => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInLoadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inLoadProcess'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
