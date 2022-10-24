
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/attributes';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  meta: any;
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
}


const initialState = {
  data: [],
  meta: {},
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
      state['meta'] = {};
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
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
    getAttributesRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
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
    upsertAttributeRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inUploadProcess'] = false;
    },

    deleteAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteAttributeRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inUploadProcess'] = false;
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
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcessAll = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
