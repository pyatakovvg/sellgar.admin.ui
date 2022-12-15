
import type { IAuth } from '../../@domain/form';

import request from "@package/request";
import { BaseError } from "@package/errors";
import { createPush } from '@package/push-2';

import { createForm } from 'effector-forms';
import { createEffect, forward } from 'effector';


const authForm = createForm({
  fields: {
    login: {
      init: '',
      rules: [
        {
          name: "login empty",
          validator: (value: string) => Boolean(value),
        },
        {
          name: "login",
          validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        },
      ],
    },
    password: {
      init: '',
      rules: [
        {
          name: "password empty",
          validator: (value: string) => Boolean(value),
        }
      ],
    },
  },
  validateOn: ['submit', 'change'],
});


export const authFx = createEffect<IAuth, any, BaseError>(async (data) => {
  return await request({
    url: '/api/v1/users/current/authorize',
    method: 'post',
    data: {
      login: data.login.trim(),
      password: data.password.trim(),
    }
  });
});

authFx.failData.watch((err) => createPush({
  title: `Что-то пошло не так!`,
  content: `${err.data.message} (${err.data.code})`,
  mode: 'danger',
}));


forward({
  from: authForm.formValidated,
  to: authFx,
});

export default authForm;
