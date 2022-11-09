
interface IParams {
  [key: string]: any;
}


function normalizeParam(param: any): any {
  if (/^\d+$/ig.test(param)) {
    if (/^0+/ig.test(param)) {
      return String(param);
    }
    return Number(param);
  }
  else if (/^true$/.test(param)) {
    return true;
  }
  else if (/^false$/.test(param)) {
    return false;
  }
  else if (/^null$/.test(param)) {
    return null;
  }
  else if (param instanceof Array) {
    for (let index in param) {
      param[index] = normalizeParam(param[index]);
    }
    return param;
  }
  return param;
}

function normalizeParams(params: IParams): IParams {
  const newParams: any = {};

  for (let paramKey in params) {
    const param = params[paramKey];
    newParams[paramKey] = normalizeParam(param);
  }

  return newParams;
}

const withURLSearchParams = (query: string) => {
  const searchURL: any = new URLSearchParams(query as string);
  const entries = searchURL.entries();

  let result = null;
  let params: IParams = {};

  do {
    result = entries.next();
    const value = result['value'];

    if (value) {
      if ( ! (value[0] in params)) {
        params[value[0]] = value[1];
      }
      else {
        if (params[value[0]] instanceof Array) {
          params[value[0]] = [...params[value[0]], value[1]];
        }
        else {
          params[value[0]] = [params[value[0]], value[1]];
        }
      }
    }
  }
  while( ! result?.['done']);

  return normalizeParams(params);
};

export const toObject = (query: string) => {
  if ( ! query) {
    return {};
  }
  return withURLSearchParams(query.replace(/[?]/g, ''));
};

export const toQuery = (params: IParams) => {
  let query: any = {};
  for (let key in params) {
    const value = params[key];
    if ( !! value) {
      query[key] = value;
    }
  }
  const searchURL = new URLSearchParams(query);
  return '?' + decodeURI(searchURL.toString());
};
