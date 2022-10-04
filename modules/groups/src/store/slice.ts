
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/Groups';


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

    getGroupRequestAction(state: IState) {
      state['inProcessOne'] = true;
    },
    getGroupRequestFailAction(state: IState) {
      state['inProcessOne'] = false;
    },
    getGroupRequestSuccessAction(state: IState) {
      state['inProcessOne'] = false;
    },

    getGroupsRequestAction(state: IState) {
      state['inProcessAll'] = true;
    },
    getGroupsRequestFailAction(state: IState) {
      state['inProcessAll'] = false;
    },
    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inProcessAll'] = false;
    },

    upsertGroupRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertGroupRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertGroupRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    deleteGroupRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteGroupRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteGroupRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getGroupRequestAction,
  getGroupRequestFailAction,
  getGroupRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  upsertGroupRequestAction,
  upsertGroupRequestFailAction,
  upsertGroupRequestSuccessAction,

  deleteGroupRequestAction,
  deleteGroupRequestFailAction,
  deleteGroupRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcessAll = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
