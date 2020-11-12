import { useEffect, useState } from 'react';
import { POKEMONS_URL, State } from './use-pokemons.constants';

import { IRawResponseData, IResponseData, TState } from './use-pokemons.types';
import { IPokemon, IRawPokemon } from '../../../types';

function rawResponceDataParse({ pokemons, ...otherFields }: IRawResponseData): IResponseData {
  const parsedPokemons = rawPokemonsParse(pokemons);

  return {
    pokemons: parsedPokemons,
    ...otherFields,
  };
}

function rawPokemonsParse(pokemons: ReadonlyArray<IRawPokemon>): ReadonlyArray<IPokemon> {
  // eslint-disable-next-line camelcase
  return pokemons.map(({ name_clean, base_experience, is_default, ...otherFields }) => ({
    nameClean: name_clean,
    baseExperience: base_experience,
    isDefault: is_default,
    ...otherFields,
  }));
}

export function usePokemons(): [IResponseData | null, TState] {
  const [data, setData] = useState<IResponseData | null>(null);
  const [state, setState] = useState<TState>(State.FETCHING);

  async function fetchPokemons() {
    try {
      const response = await fetch(POKEMONS_URL);
      const responseData: IRawResponseData = await response.json();

      setData(rawResponceDataParse(responseData));
      setState(State.SUCCESS);
    } catch (error) {
      setState(State.ERROR);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return [data, state];
}
