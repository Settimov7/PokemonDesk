import { getUrlWithParamsConfig } from './get-url-with-params-config';
import { HTTPMethod, Protocol } from '../request.constants';

describe('getUrlWithParamsConfig', () => {
  const serverConfig = {
    protocol: Protocol.HTTP,
    host: 'host',
    apiPath: '/api/v1/',
  };
  const requestConfig = {
    'request-1': {
      method: HTTPMethod.GET,
      uri: {
        pathName: 'pathname',
      },
    },
    'request-2': {
      method: HTTPMethod.GET,
      uri: {
        pathName: 'pathname/{id}',
      },
    },
  };
  const options = {
    serverConfig,
    requestConfig,
  };

  it('should return object with property protocol="http" if got requestName="request-1" and options with serverConfig and requestConfig', () => {
    const requestName = 'request-1';
    const expectedProtocol = 'http';

    const { protocol } = getUrlWithParamsConfig(requestName, options);

    expect(protocol).toBe(expectedProtocol);
  });

  it('should return object with property host="host" if got requestName="request-1" and options with serverConfig and requestConfig', () => {
    const requestName = 'request-1';
    const expectedHost = 'host';

    const { host } = getUrlWithParamsConfig(requestName, options);

    expect(host).toBe(expectedHost);
  });

  it('should return object with property pathname="/api/v1/pathname" if got requestName="request-1" and options with serverConfig and requestConfig', () => {
    const requestName = 'request-1';
    const expectedHost = '/api/v1/pathname';

    const { pathname } = getUrlWithParamsConfig(requestName, options);

    expect(pathname).toBe(expectedHost);
  });

  it('should return object without property query if got requestName="request-1" and options without query', () => {
    const requestName = 'request-1';
    const expectedQuery = undefined;

    const { query } = getUrlWithParamsConfig(requestName, options);

    expect(query).toEqual(expectedQuery);
  });

  it('should return object with property query={name: "query-name"} if got requestName="request-1" and options with query={name: query-name"}', () => {
    const requestName = 'request-1';
    const optionsWithQuery = {
      ...options,
      query: {
        name: 'query-name',
      },
    };
    const expectedQuery = {
      name: 'query-name',
    };

    const { query } = getUrlWithParamsConfig(requestName, optionsWithQuery);

    expect(query).toEqual(expectedQuery);
  });

  it('should return object with property pathname="/api/v1/pathname" if got requestName="request-2" and options with serverConfig, requestConfig and params = {id: 5}', () => {
    const requestName = 'request-2';
    const optionsWithQuery = {
      ...options,
      params: {
        id: '5',
      },
    };
    const expectedPathName = '/api/v1/pathname/5';

    const { pathname } = getUrlWithParamsConfig(requestName, optionsWithQuery);

    expect(pathname).toBe(expectedPathName);
  });
});
