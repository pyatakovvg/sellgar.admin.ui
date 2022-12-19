
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { TRootState } from './create';


const REDUCER_NAME = 'module/store';


interface IState {
  groups: IGroup[];
  categories: ICategory[];
  brands: IBrand[];
  currency: ICurrency[];
  data: IProduct[];
  meta: IMeta;
  inProcess: boolean;
  inLoadProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  groups: [],
  categories: [],
  brands: [],
  currency: [],
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
      state['groups'] = [];
      state['categories'] = [];
      state['brands'] = [];
      state['currency'] = [];
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['inProcess'] = false;
      state['inLoadProcess'] = false;
      state['inUploadProcess'] = false;
    },

    loadingPageProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inProcess'] = payload;
    },

    loadingProductProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inLoadProcess'] = payload;
    },

    uploadingProductProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inUploadProcess'] = payload;
    },

    getProductsRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IProduct>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
    },

    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<IGroup[]>) {
      state['groups'] = payload;
    },

    getCategoriesRequestSuccessAction(state: IState, { payload }: PayloadAction<ICategory[]>) {
      state['categories'] = payload;
    },

    getBrandsRequestSuccessAction(state: IState, { payload }: PayloadAction<IBrand[]>) {
      state['brands'] = payload;
    },

    getCurrenciesRequestSuccessAction(state: IState, { payload }: PayloadAction<ICurrency[]>) {
      state['currency'] = payload;
    },
  },
});

export const {
  resetStateAction,

  loadingPageProcessAction,
  loadingProductProcessAction,
  uploadingProductProcessAction,

  getProductsRequestSuccessAction,

  getGroupsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getBrandsRequestSuccessAction,
  getCurrenciesRequestSuccessAction,
} = slice['actions'] as any;

export const selectBrands = (state: TRootState): IBrand[] => state[REDUCER_NAME]['brands'];
export const selectGroups = (state: TRootState): IGroup[] => state[REDUCER_NAME]['groups'];
export const selectCategories = (state: TRootState): ICategory[] => state[REDUCER_NAME]['categories'];
export const selectCurrencies = (state: TRootState): ICurrency[] => state[REDUCER_NAME]['currency'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];
export const selectData = (state: TRootState): IProduct[] => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInLoadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inLoadProcess'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
