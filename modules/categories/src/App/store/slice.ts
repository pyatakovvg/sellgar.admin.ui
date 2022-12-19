
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/categories';


interface IState {
  data: ICategory[];
  meta: IMeta;
  groups: IGroup[];
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
  inDeleteProcess: string[];
}


const initialState = {
  data: [],
  meta: { totalRows: 0 },
  groups: [],
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
      state['groups'] = [];
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
      state['inDeleteProcess'] = [];
    },

    getGroupsRequestAction() {},
    getGroupsRequestFailAction() {},
    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<IGroup[]>) {
      state['groups'] = payload;
    },

    getCategoryRequestAction(state: IState) {
      state['inProcessOne'] = true;
    },
    getCategoryRequestFailAction(state: IState) {
      state['inProcessOne'] = false;
    },
    getCategoryRequestSuccessAction(state: IState) {
      state['inProcessOne'] = false;
    },

    getCategoriesRequestAction(state: IState) {
      state['inProcessAll'] = true;
    },
    getCategoriesRequestFailAction(state: IState) {
      state['inProcessAll'] = false;
    },
    getCategoriesRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<ICategory>>) {
      state['data'] = payload.data;
      state['meta'] = payload.meta;
      state['inProcessAll'] = false;
    },

    upsertCategoryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertCategoryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertCategoryRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    deleteCategoryRequestAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = [...state.inDeleteProcess, ...payload];
    },
    deleteCategoryRequestFailAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
    },
    deleteCategoryRequestSuccessAction(state: IState, { payload }: PayloadAction<string[]>) {
      state.inDeleteProcess = state.inDeleteProcess.filter((item) => !~ payload.indexOf(item));
    },
  },
});

export const {
  resetStateAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCategoryRequestAction,
  getCategoryRequestFailAction,
  getCategoryRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  upsertCategoryRequestAction,
  upsertCategoryRequestFailAction,
  upsertCategoryRequestSuccessAction,

  deleteCategoryRequestAction,
  deleteCategoryRequestFailAction,
  deleteCategoryRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: TRootState): ICategory[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectGroups = (state: TRootState): IGroup[] => state[REDUCER_NAME]['groups'];
export const selectInProcessAll = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: TRootState): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];
export const selectInDeleteProcess = (state: TRootState): string[] => state[REDUCER_NAME]['inDeleteProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
