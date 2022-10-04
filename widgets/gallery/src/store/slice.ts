
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const REDUCER_NAME = 'widget/gallery';


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

    getGalleryRequestAction(state: IState) {
      state['inProcess'] = true;
    },
    getGalleryRequestFailAction(state: IState) {
      state['inProcess'] = false;
    },
    getGalleryRequestSuccessAction(state: IState, { payload }) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },

    openGalleryAction(state, { payload }: PayloadAction<typeof initialState>) {
      state['isOpen'] = true;
      state['name'] = payload;
    },

    closeGalleryAction(state) {
      state['isOpen'] = false;
      state['name'] = '';
    },
  },
});

export const {
  resetStateAction,

  openGalleryAction,
  closeGalleryAction,

  getGalleryRequestAction,
  getGalleryRequestFailAction,
  getGalleryRequestSuccessAction,
} = slice['actions'] as any;

export const selectIsOpen = (state: IRootStore): Array<any> => state[REDUCER_NAME]['isOpen'];
export const selectName = (state: IRootStore): Array<any> => state[REDUCER_NAME]['name'];
export const selectData = (state: IRootStore): Array<any> => state[REDUCER_NAME]['data'];
export const selectMeta = (state: IRootStore): Array<any> => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: IRootStore): boolean => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
