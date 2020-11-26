import { HTTPMethod, Protocol } from './request.constants';

import { ValueOf } from '../types';

export interface IServerConfig {
  protocol: ValueOf<typeof Protocol>;
  host: string;
  apiPath: string;
}

export interface IRequestConfigItem {
  method: ValueOf<typeof HTTPMethod>;
  uri: {
    pathName: string;
  };
}

export type TRequestConfig = Record<string, IRequestConfigItem>;

export interface IRequestOptions {
  query?: Record<string, string | undefined>;
  params?: Record<string, string | undefined>;
  serverConfig?: IServerConfig;
  requestConfig?: TRequestConfig;
}
