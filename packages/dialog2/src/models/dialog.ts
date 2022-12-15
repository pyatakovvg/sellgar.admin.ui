
import type { IDialog } from '../@domain/dialog';

import { createStore, createEvent } from 'effector';


interface IPayload {
  name: string;
  data?: any;
}


export const $dialogStore = createStore<IDialog[]>([]);
export const $hasOpenDialog = createStore<boolean>(false);

export const createDialog = createEvent<IDialog>();
export const openDialog = createEvent<IPayload>();
export const closeDialog = createEvent<string>();
export const destroyAllDialog = createEvent();

// Проверка на доступность открытых диалогов
$hasOpenDialog.on($dialogStore, (_, payload) => payload.some((item) => item.isOpen));

// Удалить все данные о диалогах
$dialogStore.on(destroyAllDialog, () => []);

// Добавить диалог в список доступных
$dialogStore.on(createDialog, (store, payload) => {
  if (store.some((item) => item.name === payload.name)) {
    console.warn(`Диалог с идентификатором "${payload.name}" уже зарегистрирован`);
    return store;
  }
  return [...store, payload];
});

// Открыть доступный диалог
$dialogStore.on(openDialog, (store, payload) => store.map((dialog) => {
  if (dialog.name === payload.name) {
    return { ...dialog, isOpen: true, data: payload?.data };
  }
  return { ...dialog, isOpen: false };
}));

// Закрыть доступный диалог
$dialogStore.on(closeDialog, (store, name) => store.map((dialog) => {
  if (dialog.name === name) {
    return { ...dialog, isOpen: false };
  }
  return dialog;
}));
