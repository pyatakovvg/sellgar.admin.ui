
import { Events } from '@helper/utils';
import {
  BaseError,
  BadRequestError,
  NotFoundError,
  ServiceUnavailableError,
  UnauthorizedError,
  InternalServerError
} from '@package/errors';

import qs from "qs";
import axios from "axios";
import type { AxiosRequestConfig, CancelTokenSource } from "axios";


interface IConfig {
  baseUrl: string | undefined;
}


let requestConfig: IConfig = {
  baseUrl: '',
};

const defaultOptions = {};


export const events = new Events();

export function config(config: IConfig) {
  requestConfig = {
    ...requestConfig,
    ...config,
  };
}

export function createCancelToken(): CancelTokenSource {
  return axios.CancelToken.source();
}

async function request(options: AxiosRequestConfig): Promise<any> {
  try {
    options = {
      ...defaultOptions,
      ...options,
    };

    const instance = axios.create({
      baseURL: requestConfig['baseUrl'],
      timeout: 24000,
      withCredentials: true,
    });

    instance.interceptors.request.use(function (config) {
      config.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
      return config;
    });

    const { data } = await instance(options);

    return data;
  }
  catch(error: any) {
    let InstanceError = null;

    if (axios.isCancel(error)) {
      events.emit('cancel', error);
      return { success: true, data: null };
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
