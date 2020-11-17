import Url from 'url';

import { getUrlWithParamsConfig } from './utils/get-url-with-params-config';

import { RequestName } from './request.constants';

import { IRequestOptions } from './request.types';
import { ValueOf } from '../types';

export async function request<T>(name: ValueOf<typeof RequestName>, options?: IRequestOptions): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(name, options));
  const response = await fetch(uri);

  return response.json();
}
