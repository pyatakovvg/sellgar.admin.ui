
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/product';


interface IState {
  groups: IGroup[];
  categories: ICategory[];
  attributes: IAttribute[];
  data: IProduct | null;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  groups: [],
  categories: [],
  attributes: [],
  data: null,
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['groups'] = [];
      state['categories'] = [];
      state['attributes'] = [];
      state['data'] = null;
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    loadingPageProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inProcess'] = payload;
    },

    uploadingProductProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inUploadProcess'] = payload;
    },

    getProductRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
    },

    updateProductRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
    },

    copyProductRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<IGroup[]>) {
      state['groups'] = payload;
    },

    getCategoriesRequestSuccessAction(state: IState, { payload }: PayloadAction<ICategory[]>) {
      state['categories'] = payload;
    },

    getAttributesRequestSuccessAction(state: IState, { payload }: PayloadAction<IAttribute[]>) {
      state['attributes'] = payload;
    },
  },
});

export const {
  resetStateAction,

  getGroupsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getAttributesRequestSuccessAction,

  getProductRequestSuccessAction,
  updateProductRequestSuccessAction,

  loadingPageProcessAction,
  uploadingProductProcessAction,
} = slice['actions'] as any;

export const selectGroups = (state: TRootState): IGroup[] => state[REDUCER_NAME]['groups'];
export const selectCategories = (state: TRootState): ICategory[] => state[REDUCER_NAME]['categories'];
export const selectAttributes = (state: TRootState): Array<any> => state[REDUCER_NAME]['attributes'];

export const selectData = (state: TRootState): any => state[REDUCER_NAME]['data'];

export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
