
import request from "@package/request";
import { Dispatch } from '@reduxjs/toolkit';
import { pushSuccess, pushFail } from '@package/push';

import {
  getFoldersRequestAction,
  getFoldersRequestFailAction,
  getFoldersRequestSuccessAction,

  createFolderRequestAction,
  createFolderRequestFailAction,
  createFolderRequestSuccessAction,

  deleteFolderRequestAction,
  deleteFolderRequestFailAction,
  deleteFolderRequestSuccessAction,

  createImagesRequestAction,
  createImagesRequestFailAction,
  createImagesRequestSuccessAction,

  deleteImagesRequestAction,
  deleteImagesRequestFailAction,
  deleteImagesRequestSuccessAction,
} from './slice';


export const getFolders = (parentUuid: string | undefined): any => async (dispatch: Dispatch) => {
  try {
    dispatch(getFoldersRequestAction());

    const result = await request({
      url: '/api/v1/folders',
      method: 'get',
      params: {
        uuid: parentUuid,
      }
    });

    dispatch(getFoldersRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getFoldersRequestFailAction());
    dispatch<any>(pushFail(`Ошибка при выполнении операции`));
  }
};

export const createFolder = (data: IFolder): any => async (dispatch: Dispatch) => {
  try {
    dispatch(createFolderRequestAction());

    const result = await request({
      url: '/api/v1/folders',
      method: 'post',
      data: {
        ...data,
      }
    });

    dispatch(createFolderRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(createFolderRequestFailAction());
    return false;
  }
};

export const deleteFolder = (uuid: string): any => async (dispatch: Dispatch) => {
  try {
    dispatch(deleteFolderRequestAction());

    const result = await request({
      url: '/api/v1/folders/' + uuid,
      method: 'delete',
    });

    dispatch(deleteFolderRequestSuccessAction(result['data']));
    dispatch<any>(pushSuccess('Каталог удален'));
  }
  catch(error: any) {

    dispatch(deleteFolderRequestFailAction());
  }
};

export const uploadImages = (data: any, folderUuid: string | null): any => async (dispatch: Dispatch) => {
  try {
    dispatch(createImagesRequestAction());

    const formData = new FormData();

    for (let i in data) {
      const file = data[i];
      formData.append('file-' + i, file);
    }

    const result = await request({
      url: '/api/v1/images',
      method: 'post',
      data: formData,
      params: {
        folderUuid,
      },
    });

    dispatch(createImagesRequestSuccessAction(result['data']));
    dispatch<any>(pushSuccess(`Изображения загружены`));
  }
  catch(error: any) {

    dispatch(createImagesRequestFailAction());
  }
};

export const deleteImages = (uuid: string): any => async (dispatch: Dispatch) => {
  try {
    dispatch(deleteImagesRequestAction());

    const result = await request({
      url: '/api/v1/images/' + uuid,
      method: 'delete',
      data: null,
    });

    dispatch(deleteImagesRequestSuccessAction(result['data']));
    dispatch<any>(pushSuccess(`Изображение "${uuid}" удалено`));
  }
  catch(error: any) {

    dispatch(deleteImagesRequestFailAction());
  }
};
