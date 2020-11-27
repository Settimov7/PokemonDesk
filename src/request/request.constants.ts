export const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
} as const;

export const Protocol = {
  HTTP: 'http',
  HTTPS: 'https',
} as const;

export const RequestName = {
  GET_POKEMONS: 'GET_POKEMONS',
  GET_POKEMON: 'GET_POKEMON',
} as const;

export const API_SERVER_CONFIG = {
  protocol: Protocol.HTTP,
  host: 'zar.hosthot.ru',
  apiPath: '/api/v1/',
};

export const REQUEST_CONFIG = {
  [RequestName.GET_POKEMONS]: {
    method: HTTPMethod.GET,
    uri: {
      pathName: 'pokemons',
    },
  },
  [RequestName.GET_POKEMON]: {
    method: HTTPMethod.GET,
    uri: {
      pathName: 'pokemon/{id}',
    },
  },
};
