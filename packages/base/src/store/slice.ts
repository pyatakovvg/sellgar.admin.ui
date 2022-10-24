
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'package/base';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  units: Array<any>;
  groups: Array<any>;
  categories: Array<any>;
  brands: Array<any>;
  currency: Array<any>;
}

const initialState = {
  units: [],
  groups: [],
  brands: [],
  currency: [],
  categories: [],
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['units'] = [];
      state['groups'] = [];
      state['brands'] = [];
      state['currency'] = [];
      state['categories'] = [];
    },

    getUnitsRequestAction() {},
    getUnitsRequestFailAction() {},
    getUnitsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['units'] = payload;
    },

    getGroupsRequestAction() {},
    getGroupsRequestFailAction() {},
    getGroupsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['groups'] = payload;
    },

    getCategoriesRequestAction() {},
    getCategoriesRequestFailAction() {},
    getCategoriesRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['categories'] = payload;
    },

    getBrandsRequestAction() {},
    getBrandsRequestFailAction() {},
    getBrandsRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['brands'] = payload;
    },

    getCurrenciesRequestAction() {},
    getCurrenciesRequestFailAction() {},
    getCurrenciesRequestSuccessAction(state: IState, { payload }: PayloadAction<Array<any>>) {
      state['currency'] = payload;
    },
  },
});

export const {
  resetStateAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

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

export const selectUnits = (state: IRootStore): Array<any> => state[REDUCER_NAME]['units'];
export const selectGroups = (state: IRootStore): Array<any> => state[REDUCER_NAME]['groups'];
export const selectBrands = (state: IRootStore): Array<any> => state[REDUCER_NAME]['brands'];
export const selectCurrencies = (state: IRootStore): Array<any> => state[REDUCER_NAME]['currency'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];

export const name = slice['name'];
export const reducer = slice['reducer'];
