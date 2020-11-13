import { IPokemon, IRawPokemon, ValueOf } from '../../../types';
import { State } from './use-pokemons.constants';

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

export type TState = ValueOf<typeof State>;
