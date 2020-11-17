import { useEffect, useState } from 'react';

import { request } from '../../request/request';

import { State } from './use-data.constants';

import { TOptions, TState } from './use-data.types';

export function useData<T>(options: TOptions): [T | null, TState];
export function useData<T, U>(options: TOptions, dataParser: (data: T) => U): [U | null, TState];
export function useData<T, U>(options: TOptions, dataParser?: (data: T) => U) {
  const { requestName, dependencies = [], ...requestOptions } = options;
  const useEffectDependencies = [dataParser, requestName, ...dependencies];

  const [data, setData] = useState<T | U | null>(null);
  const [state, setState] = useState<TState>(State.FETCHING);

  useEffect(() => {
    (async function fetchData() {
      try {
        const responseData = await request<T>(requestName, requestOptions);

        const result = dataParser ? dataParser(responseData) : responseData;

        setData(result);
        setState(State.SUCCESS);
      } catch (error) {
        setState(State.ERROR);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEffectDependencies);

  return [data, state];
}
