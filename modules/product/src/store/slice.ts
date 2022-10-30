
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/product';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: object | null;
  images: Array<any>;
  groups: Array<any>;
  categories: Array<any>;
  currencies: Array<any>;
  attributes: Array<any>;
  brands: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: null,
  images: [],
  groups: [],
  categories: [],
  currencies: [],
  attributes: [],
  brands: [],
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = null;
      state['categories'] = [];
      state['attributes'] = [];
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getAttributesRequestAction() {},
    getAttributesRequestFailAction() {},
    getAttributesRequestSuccessAction(state: IState, { payload }) {
      state['attributes'] = payload;
    },

    getCategoriesRequestAction() {},
    getCategoriesRequestFailAction() {},
    getCategoriesRequestSuccessAction(state: IState, { payload }) {
      state['categories'] = payload;
    },

    getProductRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getProductRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getProductRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    updateProductRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    updateProductRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    updateProductRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inUploadProcess'] = false;
    },

    copyProductRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    copyProductRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    copyProductRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  updateProductRequestAction,
  updateProductRequestFailAction,
  updateProductRequestSuccessAction,

  copyProductRequestAction,
  copyProductRequestFailAction,
  copyProductRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): any => state[REDUCER_NAME]['data'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];
export const selectAttributes = (state: IRootStore): Array<any> => state[REDUCER_NAME]['attributes'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
