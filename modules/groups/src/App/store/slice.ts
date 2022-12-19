
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/Groups';


interface IState {
  data: IGroup[];
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
    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IGroup>>) {
      state['data'] = payload.data;
      state['meta'] = payload.meta;
      state['inProcessAll'] = false;
    },

    upsertGroupRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertGroupRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertGroupRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    deleteGroupRequestAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = [...state.inDeleteProcess, ...payload];
    },
    deleteGroupRequestFailAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
    },
    deleteGroupRequestSuccessAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
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

export const selectData = (state: TRootState): IGroup[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectInProcessAll = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];
export const selectInDeleteProcess = (state: TRootState): string[] => state[REDUCER_NAME]['inDeleteProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
