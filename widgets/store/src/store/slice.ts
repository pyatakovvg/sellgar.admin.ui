
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const REDUCER_NAME = 'widget/store';


interface IRootStore {
  [path:string]: any;
}

interface IState {
  data: Array<any>;
  meta: any;
  inProcess: boolean;
  isOpen: boolean,
  name: string,
}


const initialState = {
  isOpen: false,
  name: '',
  data: [],
  meta: {},
  inProcess: true,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state: IState) {
      state['isOpen'] = false;
      state['name'] = '';
      state['data'] = [];
      state['meta'] = {};
      state['inProcess'] = false;
    },

    getStoreRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getStoreRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getStoreRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },

    openStoreAction(state, { payload }: PayloadAction<string>) {
      state['isOpen'] = true;
      state['name'] = payload;
    },

    closeStoreAction(state) {
      state['isOpen'] = false;
      state['name'] = '';
    },
  },
});

export const {
  resetStateAction,

  openStoreAction,
  closeStoreAction,

  getStoreRequestAction,
  getStoreRequestFailAction,
  getStoreRequestSuccessAction,
} = slice['actions'] as any;

export const selectIsOpen = (state: IRootStore): boolean => state[REDUCER_NAME]['isOpen'];
export const selectName = (state: IRootStore): string => state[REDUCER_NAME]['name'];
export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): any => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
