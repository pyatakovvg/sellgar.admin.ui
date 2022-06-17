
const withURLSearchParams = (query: string) => {
  const searchURL: any = new URLSearchParams(query);
  let params: any = {};
  for (let param of searchURL) {
    if ( !! param[1]) {
      let paramValue = param[1];
      if (/^\d{1,16}$/.test(paramValue)) {
        paramValue = Number(paramValue);
      } else if (/^\d+$/.test(paramValue)) {
        paramValue = Number(paramValue);
      } else if (/^([0])+|([0]\w)+$/.test(paramValue)) {
        paramValue = String(paramValue);
      } else if (/^(true)$/.test(paramValue)) {
        paramValue = true;
      } else if (/^(false)$/.test(paramValue)) {
        paramValue = false;
      }
      params[param[0]] = paramValue;
    }
  }
  return params;
};

const withoutURLSearchParams = (query: string) => {
  const search = query.substring(1);
  return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
};

export const toObject = (query: string, options = { encoding: true }) => {
  if ( ! query) {
    return {};
  }
  if (options['encoding']) {
    return withURLSearchParams(query);
  }
  return withoutURLSearchParams(query);
};

export const toQuery = (object: any) => {
  let query: any = {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      if ( !! value) {
        query[key] = value;
      }
    }
  }
  const searchURL = new URLSearchParams(query);
  return '?' + decodeURI(searchURL.toString());
};
