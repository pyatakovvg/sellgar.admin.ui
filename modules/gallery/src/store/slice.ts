
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/images';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: IResult;
  inProcess: boolean;
  inUploadProcess: boolean;
}

interface IActions {
  [key: string]: any;
}


const initialState: IState = {
  data: {
    images: [],
    folders: [],
    parent: [],
  },
  inProcess: false,
  inUploadProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = {
        images: [],
        folders: [],
        parent: [],
      };
      state['inProcess'] = false;
      state['inUploadProcess'] = false;
    },

    getFoldersRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getFoldersRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getFoldersRequestSuccessAction(state: IState, { payload }: PayloadAction<IResult>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createImagesRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createImagesRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createImagesRequestSuccessAction(state: IState, { payload }: PayloadAction<IImage[]>) {
      state['data']['images'] = [
        ...payload,
        ...state['data']['images'],
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
      state.data.images = state.data.images.filter((item) => item['uuid'] !== payload['uuid']);
      state['inUploadProcess'] = false;
    },

    createFolderRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createFolderRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createFolderRequestSuccessAction(state: IState, { payload }: PayloadAction<IFolder>) {
      state['data']['folders'] = [
        payload,
        ...state['data']['folders'],
      ];
      state['inUploadProcess'] = false;
    },

    deleteFolderRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    deleteFolderRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    deleteFolderRequestSuccessAction(state: IState, { payload }: PayloadAction<IFolder>) {
      state.data.folders = state.data.folders.filter((item) => item['uuid'] !== payload['uuid']);
      state['inUploadProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getFoldersRequestAction,
  getFoldersRequestFailAction,
  getFoldersRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,

  deleteImagesRequestAction,
  deleteImagesRequestFailAction,
  deleteImagesRequestSuccessAction,

  createFolderRequestAction,
  createFolderRequestFailAction,
  createFolderRequestSuccessAction,

  deleteFolderRequestAction,
  deleteFolderRequestFailAction,
  deleteFolderRequestSuccessAction,
} = slice['actions'] as IActions;

export const selectData = (state: IRootStore): IResult => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
