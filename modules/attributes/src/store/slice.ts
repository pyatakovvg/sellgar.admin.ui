
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/attributes';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  units: Array<any>;
  categories: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}


const initialState = {
  data: [],
  units: [],
  categories: [],
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getUnitsRequestAction() {},
    getUnitsRequestFailAction() {},
    getUnitsRequestSuccessAction(state: IState, { payload }) {
      state['units'] = payload;
    },

    getCategoriesRequestAction() {},
    getCategoriesRequestFailAction() {},
    getCategoriesRequestSuccessAction(state: IState, { payload }) {
      state['categories'] = payload;
    },

    getAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    getAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    getAttributeRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    getAttributesRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getAttributesRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getAttributesRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createAttributeRequestSuccessAction(state: IState, { payload }) {
      state['data'] = [...state['data'], payload];
      state['inUploadProcess'] = false;
    },

    updateAttributeRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    updateAttributeRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    updateAttributeRequestSuccessAction(state: IState, { payload }) {
      state['data'] = state['data'].map((item) => {
        if (item['uuid'] === payload['uuid']) {
          return {
            ...item,
            ...payload,
          };
        }
        return item;
      });
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  getAttributeRequestAction,
  getAttributeRequestFailAction,
  getAttributeRequestSuccessAction,

  getAttributesRequestAction,
  getAttributesRequestFailAction,
  getAttributesRequestSuccessAction,

  createAttributeRequestAction,
  createAttributeRequestFailAction,
  createAttributeRequestSuccessAction,

  updateAttributeRequestAction,
  updateAttributeRequestFailAction,
  updateAttributeRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectUnits = (state: IRootStore): Array<any> => state[REDUCER_NAME]['units'];
export const selectCategories = (state: IRootStore): Array<any> => state[REDUCER_NAME]['categories'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
