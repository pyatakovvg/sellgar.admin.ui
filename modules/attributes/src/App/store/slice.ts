
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/attributes';


interface IState {
  units: IUnit[];
  data: IAttribute[];
  meta: IMeta;
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
  inDeleteProcess: string[];
}

const initialState = {
  units: [],
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
      state['units'] = [];
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
      state['inDeleteProcess'] = [];
    },

    getAttributeRequestAction(state: IState): any {
      state['inProcessOne'] = true;
    },
    getAttributeRequestFailAction(state: IState) {
      state['inProcessOne'] = false;
    },
    getAttributeRequestSuccessAction(state: IState) {
      state['inProcessOne'] = false;
    },

    getAttributesRequestAction(state: IState): any {
      state['inProcessAll'] = true;
    },
    getAttributesRequestFailAction(state: IState) {
      state['inProcessAll'] = false;
    },
    getAttributesRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IAttribute>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcessAll'] = false;
    },

    upsertAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertAttributeRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    deleteAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteAttributeRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    getUnitsRequestSuccessAction(state: IState, { payload }: PayloadAction<IUnit[]>) {
      state['units'] = payload;
    },
  },
});

export const {
  resetStateAction,

  getAttributeRequestAction,
  getAttributeRequestFailAction,
  getAttributeRequestSuccessAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  upsertAttributeRequestAction,
  upsertAttributeRequestFailAction,
  upsertAttributeRequestSuccessAction,

  deleteAttributeRequestAction,
  deleteAttributeRequestFailAction,
  deleteAttributeRequestSuccessAction,

  getUnitsRequestSuccessAction,
} = slice['actions'] as any;

export const selectUnits = (state: TRootState): IUnit[] => state[REDUCER_NAME]['units'];

export const selectData = (state: TRootState): IAttribute[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];

export const selectInProcessAll = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];
export const selectInDeleteProcess = (state: TRootState): string[] => state[REDUCER_NAME]['inDeleteProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
