
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/images';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  folders: Array<any>;
  inProcess: boolean;
  inUploadProcess: boolean;
}

interface IData {
  payload: Array<any>;
}


const initialState: IState = {
  data: [],
  folders: [],
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['folders'] = [];
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getFoldersRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getFoldersRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getFoldersRequestSuccessAction(state: IState, { payload }: IData) {
      state['folders'] = payload;
      state['inProcess'] = false;
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
    deleteImagesRequestSuccessAction(state: IState, { payload }: any) {
      state['data'] = state['data'].filter((item) => item['uuid'] !== payload['uuid']);
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getFoldersRequestAction,
  getFoldersRequestFailAction,
  getFoldersRequestSuccessAction,

  getImagesRequestAction,
  getImagesRequestFailAction,
  getImagesRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,

  deleteImagesRequestAction,
  deleteImagesRequestFailAction,
  deleteImagesRequestSuccessAction,
} = slice['actions'] as any;

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectFolders = (state: IRootStore): Array<any> => state[REDUCER_NAME]['folders'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
