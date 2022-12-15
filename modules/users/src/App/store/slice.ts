
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/users';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  inProcess: boolean;
}


const initialState = {
  data: [],
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = [];
      state['inProcess'] = false;
    },

    getUsersRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getUsersRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getUsersRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getUsersRequestAction,
  getUsersRequestFailAction,
  getUsersRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
