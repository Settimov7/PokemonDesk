const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
};

const Protocol = {
  HTTP: 'http',
  HTTPS: 'https',
};

export const API_SERVER = {
  protocol: Protocol.HTTP,
  host: 'zar.hosthot.ru',
  apiPath: '/api/v1/',
};

export const RequestName = {
  GET_POKEMONS: 'GET_POKEMONS',
} as const;

export const RequestConfig = {
  [RequestName.GET_POKEMONS]: {
    method: HTTPMethod.GET,
    uri: {
      pathName: 'pokemons',
    },
  },
};
