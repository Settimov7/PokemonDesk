import { State } from './use-data.constants';

import { ValueOf } from '../../types';
import { IRequestOptions } from '../../request/request.types';
import { RequestName } from '../../request/request.constants';

export type TState = ValueOf<typeof State>;

export interface IUseDataOptions {
  requestName: ValueOf<typeof RequestName>;
  dependencies?: ReadonlyArray<unknown>;
}

export type TOptions = IUseDataOptions & IRequestOptions;
