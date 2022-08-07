
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/images';


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

    getImagesRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getImagesRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getImagesRequestSuccessAction(state: IState, { payload }: IData) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createImagesRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createImagesRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createImagesRequestSuccessAction(state: IState, { payload }: IData) {
      state['data'] = [
        ...payload,
        ...state['data'],
      ];
      state['inUploadProcess'] = false;
    },

    deleteImagesRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteImagesRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteImagesRequestSuccessAction(state: IState, { payload }: IData) {
      state['data'] = state['data'].filter((item) => item['uuid'] !== payload['uuid']);
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getImagesRequestAction,
  getImagesRequestFailAction,
  getImagesRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,

  deleteImagesRequestAction,
  deleteImagesRequestFailAction,
  deleteImagesRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
