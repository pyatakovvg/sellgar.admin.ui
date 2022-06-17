
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'widget/profile';


interface IData {

}

interface IRootStore {
  [path:string]: any;
}

interface IState {
  data?: IData | null;
  inProcess: boolean;
}

interface IData {
  payload: IData | null;
}


const initialState = {
  data: null,
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['data'] = null;
      state['inProcess'] = false;
    },

    signInRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    signInRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    signInRequestSuccessAction(state: IState) {
      state['inProcess'] = false;
    },

    getProfileRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getProfileRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getProfileRequestSuccessAction(state: IState, { payload }: IData) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    signOutRequestAction(state: IState) {
      state['inProcess'] = false;
    },
    signOutRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    signOutRequestSuccessAction(state: IState) {
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  signInRequestAction,
  signInRequestFailAction,
  signInRequestSuccessAction,

  getProfileRequestAction,
  getProfileRequestFailAction,
  getProfileRequestSuccessAction,

  signOutRequestAction,
  signOutRequestFailAction,
  signOutRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: IRootStore): IData => state[REDUCER_NAME]['profile'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
