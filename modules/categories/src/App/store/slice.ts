
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/categories';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  groups: Array<any>;
  inProcessAll: boolean;
  inProcessOne: boolean;
  inUploadProcess: boolean;
}


const initialState = {
  data: [],
  groups: [],
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
      state['groups'] = [];
      state['inProcessAll'] = false;
      state['inProcessOne'] = false;
      state['inUploadProcess'] = false;
    },

    getGroupsRequestAction() {},
    getGroupsRequestFailAction() {},
    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
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
    getCategoriesRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inProcessAll'] = false;
    },

    upsertCategoryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    upsertCategoryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    upsertCategoryRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    deleteCategoryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteCategoryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteCategoryRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
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

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectGroups = (state: IRootStore): Array<any> => state[REDUCER_NAME]['groups'];
export const selectInProcessAll = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessAll'];
export const selectInProcessOne = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcessOne'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
