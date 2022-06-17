
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/units';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

interface IData {
  payload: Array<any>;
}


const initialState: IState = {
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

    getUnitRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getUnitRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getUnitRequestSuccessAction(state: IState) {
      state['inProcess'] = false;
    },

    getUnitsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getUnitsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getUnitsRequestSuccessAction(state: IState, { payload }: IData) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createUnitRequest(state) {
      state['inUploadProcess'] = true;
    },
    createUnitRequestFail(state) {
      state['inUploadProcess'] = false;
    },
    createUnitRequestSuccess(state, { payload }) {
      state['data'] = [...state['data'], payload];
      state['inUploadProcess'] = false;
    },

    updateUnitRequest(state) {
      state['inUploadProcess'] = true;
    },
    updateUnitRequestFail(state) {
      state['inUploadProcess'] = false;
    },
    updateUnitRequestSuccess(state, { payload }) {
      state['data'] = state['data'].map((item) => {
        if (item['uuid'] === payload['uuid']) {
          return {
            ...item,
            ...payload,
          }
        }
        return item;
      });
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getUnitRequestAction,
  getUnitRequestFailAction,
  getUnitRequestSuccessAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  createUnitRequest,
  createUnitRequestFail,
  createUnitRequestSuccess,

  updateUnitRequest,
  updateUnitRequestFail,
  updateUnitRequestSuccess,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
