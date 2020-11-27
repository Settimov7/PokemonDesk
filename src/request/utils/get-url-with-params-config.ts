import { UrlObject } from 'url';

import { IRequestOptions } from '../request.types';
import { API_SERVER_CONFIG, REQUEST_CONFIG } from '../request.constants';

export function getUrlWithParamsConfig(requestName: string, options: IRequestOptions = {}): UrlObject {
  const { query, params, serverConfig = API_SERVER_CONFIG, requestConfig = REQUEST_CONFIG } = options;
  const { protocol, host, apiPath } = serverConfig;

  const currentRequestConfig = requestConfig[requestName];
  let pathName = apiPath + currentRequestConfig?.uri?.pathName ?? '';

  if (params) {
    pathName = Object.entries(params).reduce((resultPathName, [key, value]) => {
      if (value) {
        return resultPathName.replace(`{${key}}`, value);
      }

      return resultPathName;
    }, pathName);
  }

  return {
    protocol,
    host,
    pathname: pathName,
    query,
  };
}
