import Url from 'url';

import { getUrlWithParamsConfig } from './utils/get-url-with-params-config';

import { IRequestOptions } from './request.types';

export async function request<T>(name: string, options?: IRequestOptions): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(name, options));
  const response = await fetch(uri);

  return response.json();
}
