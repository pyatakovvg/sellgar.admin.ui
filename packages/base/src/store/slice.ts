
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'package/base';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  groups: Array<any>;
  categories: Array<any>;
  brands: Array<any>;
  currency: Array<any>;
}

const initialState = {
  groups: [],
  categories: [],
  brands: [],
  currency: [],
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

    getCurrenciesRequestAction() {},
    getCurrenciesRequestFailAction() {},
    getCurrenciesRequestSuccessAction(state: IState, { payload }) {
      state['currency'] = payload;
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

  getCurrenciesRequestAction,
  getCurrenciesRequestFailAction,
  getCurrenciesRequestSuccessAction,
} = slice['actions'] as any;

export const selectGroups = (state: IRootStore): Array<any> => state[REDUCER_NAME]['groups'];
export const selectBrands = (state: IRootStore): Array<any> => state[REDUCER_NAME]['brands'];
export const selectCurrencies = (state: IRootStore): Array<any> => state[REDUCER_NAME]['currency'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];

export const name = slice['name'];
export const reducer = slice['reducer'];
