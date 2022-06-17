
interface IError {
  name: string;
  status: number;
  data: any;
}


export class BaseError extends Error implements IError {
  name: string;
  status: number;
  data: any;

  constructor(status: number, data: any) {
    super();

    this.name = 'BaseError';
    this.status = status;
    this.data = data;

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}


export class BadRequestError extends BaseError {
  constructor(data: any = 'Неправильный, некорректный запрос') {
    super(400, data);

    this.name = 'BadRequestError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export class UnauthorizedError extends BaseError {
  constructor(data: any = 'Не авторизован') {
    super(401, data);

    this.name = 'UnauthorizedError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, UnauthorizedError);
    }
  }
}

export class NotFoundError extends BaseError {
  constructor(data: any = 'Не найдено') {
    super(404, data);

    this.name = 'NotFoundError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

export class InternalServerError extends BaseError {
  constructor(data: any = 'Внутренняя ошибка сервера') {
    super(500, data);

    this.name = 'InternalServerError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, InternalServerError);
    }
  }
}

export class ServiceUnavailableError extends BaseError {
  constructor(data: any = 'Сервис недоступен') {
    super(503, data);

    this.name = 'ServiceUnavailableError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, ServiceUnavailableError);
    }
  }
}
