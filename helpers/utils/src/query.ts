
const withURLSearchParams = (query: string) => {
  const searchURL: any = new URLSearchParams(query as string);
  const entries = searchURL.entries();

  let params: any = {};
  let result = null;

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

  // for (const [index, num] of ) {
  //   console.log(index, num)
  //   // if ( !! param[1]) {
  //   //   let paramValue = param[1];
  //   //   if (/^\d{1,16}$/.test(paramValue)) {
  //   //     paramValue = Number(paramValue);
  //   //   } else if (/^\d+$/.test(paramValue)) {
  //   //     paramValue = Number(paramValue);
  //   //   } else if (/^([0])+|([0]\w)+$/.test(paramValue)) {
  //   //     paramValue = String(paramValue);
  //   //   } else if (/^(true)$/.test(paramValue)) {
  //   //     paramValue = true;
  //   //   } else if (/^(false)$/.test(paramValue)) {
  //   //     paramValue = false;
  //   //   }
  //   //   params[param[0]] = paramValue;
  //   // }
  // }
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
    return withURLSearchParams(query.replace(/[?]/g, ''));
  }
  return withoutURLSearchParams(query.replace(/[?]/g, ''));
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
