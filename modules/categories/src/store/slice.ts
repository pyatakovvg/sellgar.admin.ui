
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/categories';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: [],
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

    getCategoryRequestAction() {},
    getCategoryRequestFailAction() {},
    getCategoryRequestSuccessAction() {},

    getCategoriesRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getCategoriesRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getCategoriesRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createCategoryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createCategoryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createCategoryRequestSuccessAction(state: IState, { payload }) {
      state['data'] = [
        ...state['data'],
        payload,
      ];
      state['inUploadProcess'] = false;
    },

    updateCategoryRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    updateCategoryRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    updateCategoryRequestSuccessAction(state: IState, { payload }) {
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

  getCategoryRequestAction,
  getCategoryRequestFailAction,
  getCategoryRequestSuccessAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,

  createCategoryRequestAction,
  createCategoryRequestFailAction,
  createCategoryRequestSuccessAction,

  updateCategoryRequestAction,
  updateCategoryRequestFailAction,
  updateCategoryRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
