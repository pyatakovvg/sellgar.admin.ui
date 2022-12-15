
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/units';


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

    getUnitRequestAction(state: IState): any {
      state['inProcessOne'] = true;
    },
    getUnitRequestFailAction(state: IState) {
      state['inProcessOne'] = false;
    },
    getUnitRequestSuccessAction(state: IState) {
      state['inProcessOne'] = false;
    },

    getUnitsRequestAction(state: IState): any {
      state['inProcessAll'] = true;
    },
    getUnitsRequestFailAction(state: IState) {
      state['inProcessAll'] = false;
    },
    getUnitsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inProcessAll'] = false;
    },

    upsertUnitRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertUnitRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertUnitRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    deleteUnitRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteUnitRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteUnitRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getUnitRequestAction,
  getUnitRequestFailAction,
  getUnitRequestSuccessAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  upsertUnitRequestAction,
  upsertUnitRequestFailAction,
  upsertUnitRequestSuccessAction,

  deleteUnitRequestAction,
  deleteUnitRequestFailAction,
  deleteUnitRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcessAll = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
