
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/product';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: object | null;
  gallery: Array<any>;
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
  gallery: [],
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
      state['gallery'] = [];
      state['groups'] = [];
      state['categories'] = [];
      state['currencies'] = [];
      state['attributes'] = [];
      state['brands'] = [];
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getAttributesRequestAction() {},
    getAttributesRequestFailAction() {},
    getAttributesRequestSuccessAction(state: IState, { payload }) {
      state['attributes'] = payload;
    },

    getCurrenciesRequestAction() {},
    getCurrenciesRequestFailAction() {},
    getCurrenciesRequestSuccessAction(state: IState, { payload }) {
      state['currencies'] = payload;
    },

    getGroupsRequestAction() {},
    getGroupsRequestFailAction() {},
    getGroupsRequestSuccessAction(state: IState, { payload }) {
      state['groups'] = payload;
    },

    getCategoriesRequestAction() {},
    getCategoriesRequestFailAction() {},
    getCategoriesRequestSuccessAction(state: IState, { payload }) {
      state['categories'] = payload;
    },

    getBrandsRequestAction() {},
    getBrandsRequestFailAction() {},
    getBrandsRequestSuccessAction(state: IState, { payload }) {
      state['brands'] = payload;
    },

    getGalleryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    getGalleryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    getGalleryRequestSuccessAction(state: IState, { payload }) {
      state['gallery'] = payload;
      state['inUploadProcess'] = false;
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
  },
});

export const {
  resetStateAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  getCurrenciesRequestAction,
  getCurrenciesRequestFailAction,
  getCurrenciesRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  getGalleryRequestAction,
  getGalleryRequestFailAction,
  getGalleryRequestSuccessAction,

  getProductRequestAction,
  getProductRequestFailAction,
  getProductRequestSuccessAction,

  updateProductRequestAction,
  updateProductRequestFailAction,
  updateProductRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectGallery = (state: IRootStore): Array<any> => state[REDUCER_NAME]['gallery'];
export const selectCurrencies = (state: IRootStore): Array<any> => state[REDUCER_NAME]['currencies'];
export const selectGroups = (state: IRootStore): Array<any> => state[REDUCER_NAME]['groups'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];
export const selectAttributes = (state: IRootStore): Array<any> => state[REDUCER_NAME]['attributes'];
export const selectBrands = (state: IRootStore): Array<any> => state[REDUCER_NAME]['brands'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
