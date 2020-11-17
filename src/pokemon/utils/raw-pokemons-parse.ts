import { IPokemon, IRawPokemon } from '../pokemon.types';

export function rawPokemonsParse(pokemons: ReadonlyArray<IRawPokemon>): ReadonlyArray<IPokemon> {
  // eslint-disable-next-line camelcase
  return pokemons.map(({ name_clean, base_experience, is_default, ...otherFields }) => ({
    nameClean: name_clean,
    baseExperience: base_experience,
    isDefault: is_default,
    ...otherFields,
  }));
}
