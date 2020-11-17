import { rawPokemonsParse } from '../../../pokemon/utils/raw-pokemons-parse';

import { IRawResponseData, IResponseData } from '../card-list.types';

export function rawResponseDataParse({ pokemons, ...otherFields }: IRawResponseData): IResponseData {
  const parsedPokemons = rawPokemonsParse(pokemons);

  return {
    pokemons: parsedPokemons,
    ...otherFields,
  };
}
