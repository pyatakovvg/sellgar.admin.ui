
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/brands';


interface IState {
  data: IBrand[];
  meta: IMeta;
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
  inDeleteProcess: string[];
}


const initialState = {
  data: [],
  meta: { totalRows: 0 },
  inProcessAll: false,
  inProcessOne: false,
  inUploadProcess: false,
  inDeleteProcess: [],
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
      state['inDeleteProcess'] = [];
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
    getBrandsRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IBrand>>) {
      state['data'] = payload.data;
      state['meta'] = payload.meta;
      state['inProcessAll'] = false;
    },

    upsertBrandRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertBrandRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertBrandRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    deleteBrandRequestAction(state: IState, { payload }: PayloadAction<string[]>) {
      state['inDeleteProcess'] = [...state.inDeleteProcess, ...payload];
    },
    deleteBrandRequestFailAction(state: IState, { payload }: PayloadAction<string[]>) {
      state['inDeleteProcess'] = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
    },
    deleteBrandRequestSuccessAction(state: IState, { payload }: PayloadAction<string[]>) {
      state['inDeleteProcess'] = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
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

export const selectData = (state: TRootState): IBrand[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectInProcessAll = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];
export const selectInDeleteProcess = (state: TRootState): string[] => state[REDUCER_NAME]['inDeleteProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
