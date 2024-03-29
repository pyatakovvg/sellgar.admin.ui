
import { Events } from '@helper/utils';
import {
  BaseError,
  BadRequestError,
  NotFoundError,
  ServiceUnavailableError,
  UnauthorizedError,
  InternalServerError,
  CanceledError,
} from '@package/errors';

import qs from "qs";
import axios from "axios";
import type { AxiosRequestConfig, CancelTokenSource } from "axios";


export const events = new Events();

export function createCancelToken(): CancelTokenSource {
  return axios.CancelToken.source();
}

async function request(options: AxiosRequestConfig): Promise<any> {
  try {
    const instance = await axios.create({
      baseURL: process.env['REACT_APP_GATEWAY_API'] || '/',
      timeout: 24000,
      withCredentials: true,
    });

    instance.interceptors.request.use(function (config) {
      config.paramsSerializer = function(params: any): string {
        return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true });
      };
      return config;
    });

    const { data } = await instance(options);

    return data;
  }
  catch(error: any) {
    let InstanceError = null;

    if (axios.isCancel(error)) {
      events.emit('cancel', error);
      throw new CanceledError({ code: '0.0.0', message: error.message });
    }

    if (error['response']) {
      let { status, data } = error['response'];

      if (options['responseType'] === 'blob') {
        data = await new Promise((resolve, reject) => {
          let reader: any = new FileReader();

          reader.onload = () => {
            resolve(JSON.parse(reader['result']));
          };
          reader.onerror = () => {
            reject(error);
          };
          reader.readAsText(error['response']['data']);
        });
      }

      if (status === 400) {
        InstanceError = new BadRequestError(data['error']);
      }
      else if (status === 401) {
        InstanceError = new UnauthorizedError(data['error']);
      }
      else if (status === 404) {
        InstanceError = new NotFoundError(data['error']);
      }
      else if (status === 500) {
        InstanceError = new InternalServerError(data['error']);
      }
      else if (status === 503) {
        InstanceError = new ServiceUnavailableError(data['error']);
      }
      else {
        InstanceError = new BaseError(data?.['status'] ?? 500, data?.['error'] ?? { code: '1.0.0', message: 'Сервис временно не доступен' });
      }
    }
    else {
      InstanceError = new InternalServerError({ code: '1.1.0', message: 'Сервис временно не доступен' });
    }

    events.emit('error', InstanceError);
    return Promise.reject(InstanceError);
  }
}

export default request;
