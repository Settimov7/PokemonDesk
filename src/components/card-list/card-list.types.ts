import { IPokemon, IRawPokemon } from '../../pokemon/pokemon.types';

export interface IResponseCommonData {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export interface IRawResponseData extends IResponseCommonData {
  pokemons: ReadonlyArray<IRawPokemon>;
}

export interface IResponseData extends IResponseCommonData {
  pokemons: ReadonlyArray<IPokemon>;
}
