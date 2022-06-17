
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/groups';


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

    getGroupRequestAction() {},
    getGroupRequestFailAction() {},
    getGroupRequestSuccessAction(state: IState) {
      state['inUploadProcess'] = false;
    },

    getGroupsRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getGroupsRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getGroupsRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    createGroupRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    createGroupRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    createGroupRequestSuccessAction(state: IState, { payload }) {
      state['data'] = [
        ...state['data'],
        payload,
      ];
      state['inUploadProcess'] = false;
    },

    updateGroupRequestAction(state: IState) {
      state['inUploadProcess'] = true;
    },
    updateGroupRequestFailAction(state: IState) {
      state['inUploadProcess'] = false;
    },
    updateGroupRequestSuccessAction(state: IState, { payload }) {
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

  getGroupRequestAction,
  getGroupRequestFailAction,
  getGroupRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  createGroupRequestAction,
  createGroupRequestFailAction,
  createGroupRequestSuccessAction,

  updateGroupRequestAction,
  updateGroupRequestFailAction,
  updateGroupRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUploadProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inUploadProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
