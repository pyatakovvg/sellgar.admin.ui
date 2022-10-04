
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/products';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  groups: Array<any>;
  categories: Array<any>;
  brands: Array<any>;
  data: Array<any>;
  meta: any;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  groups: [],
  categories: [],
  brands: [],
  data: [],
  meta: null,
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
      state['meta'] = null;
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
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

    createProductTemplateRequest(state: IState) {
      state['inUploadProcess'] = true;
    },
    createProductTemplateRequestFail(state: IState) {
      state['inUploadProcess'] = false;
    },
    createProductTemplateRequestSuccess(state: IState) {
      state['inUploadProcess'] = false;
    },

    getProductsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getProductsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getProductsRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },

    changeStatusRequestAction() {},
    changeStatusRequestFailAction() {},
    changeStatusRequestSuccessAction(state: IState, { payload }) {
      state['data'] = state['data'].map((item) => {
        if (payload['uuid'] === item['uuid']) {
          return {
            ...item,
            ...payload,
          };
        }
        return item;
      });
    },
  },
});

export const {
  resetStateAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getBrandsRequestAction,
  getBrandsRequestFailAction,
  getBrandsRequestSuccessAction,

  createProductTemplateRequest,
  createProductTemplateRequestFail,
  createProductTemplateRequestSuccess,

  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,

  changeStatusRequestAction,
  changeStatusRequestFailAction,
  changeStatusRequestSuccessAction,
} = slice['actions'] as any;

export const selectGroups = (state: IRootStore): Array<any> => state[REDUCER_NAME]['groups'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];
export const selectBrands = (state: IRootStore): Array<any> => state[REDUCER_NAME]['brands'];
export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): Array<any> => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
