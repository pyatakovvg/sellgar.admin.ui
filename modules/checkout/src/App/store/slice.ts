
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/checkout';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: any;
  inProcess: boolean;
  inUploadProcess: boolean;
}

const initialState = {
  data: null,
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = null;
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getOrderRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getOrderRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getOrderRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getOrderRequestAction,
  getOrderRequestFailAction,
  getOrderRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
