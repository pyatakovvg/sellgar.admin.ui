
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


const REDUCER_NAME = 'module/products';


interface IState {
  groups: IGroup[];
  categories: ICategory[];
  brands: IBrand[];
  data: IProduct[];
  meta: IMeta;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  groups: [],
  categories: [],
  brands: [],
  data: [],
  meta: { totalRows: 0 },
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
      state['brands'] = [];
      state['data'] = [];
      state['meta'] = { totalRows: 0 };
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    loadingPageProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inProcess'] = payload;
    },

    uploadingProductProcessAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['inUploadProcess'] = payload;
    },

    getProductsRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult<IProduct>>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
    },

    changeStatusRequestSuccessAction(state: IState, { payload }: PayloadAction<IProduct>) {
      state['data'] = state['data'].map((item) => {
        if (payload['uuid'] === item['uuid']) {
          return {
            ...item,
            isUse: payload['isUse'],
          };
        }
        return item;
      });
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
  },
});

export const {
  resetStateAction,

  loadingPageProcessAction,
  uploadingProductProcessAction,

  getProductsRequestSuccessAction,
  changeStatusRequestSuccessAction,

  getGroupsRequestSuccessAction,
  getCategoriesRequestSuccessAction,
  getBrandsRequestSuccessAction,
} = slice['actions'] as any;

export const selectBrands = (state: TRootState): IBrand[] => state[REDUCER_NAME]['brands'];
export const selectGroups = (state: TRootState): IGroup[] => state[REDUCER_NAME]['groups'];
export const selectCategories = (state: TRootState): ICategory[] => state[REDUCER_NAME]['categories'];

export const selectData = (state: TRootState): IProduct[] => state[REDUCER_NAME]['data'];
export const selectMeta = (state: TRootState): IMeta => state[REDUCER_NAME]['meta'];

export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
