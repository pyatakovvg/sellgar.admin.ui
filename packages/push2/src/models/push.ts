
import type { IPush } from '../@domain/global';

import { createStore, createEvent } from 'effector';


export const $pushStore = createStore<IPush[]>([]);

export const createPush = createEvent<Omit<IPush, 'uuid'>>();
export const deletePush = createEvent<IPush>();


$pushStore.on(createPush, (state, push) => ([
  ...state,
  {
    uuid: Date.now().toString(16),
    title: push.title,
    content: push?.content,
    mode: push?.mode,
    autoClose: push?.autoClose ?? true,
  }
]));

$pushStore.on(deletePush, (state, push) => (
  state.filter((item) => item.uuid !== push.uuid))
);
