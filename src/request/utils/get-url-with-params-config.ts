import { UrlObject } from 'url';

import { API_SERVER, RequestName, RequestConfig } from '../request.constants';

import { IRequestOptions } from '../request.types';
import { ValueOf } from '../../types';

export function getUrlWithParamsConfig(requestName: ValueOf<typeof RequestName>, options?: IRequestOptions): UrlObject {
  const { protocol, host, apiPath } = API_SERVER;

  const requestConfig = RequestConfig[requestName];
  const pathName = apiPath + requestConfig.uri.pathName;

  return {
    protocol,
    host,
    pathname: pathName,
    query: options?.query,
  };
}
