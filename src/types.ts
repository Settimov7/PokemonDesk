import { Ability, Type } from './constants';

export type ValueOf<T> = T[keyof T];

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IRawPokemon {
  // eslint-disable-next-line camelcase
  name_clean: string;
  abilities: ReadonlyArray<string>;
  stats: IStats;
  types: ReadonlyArray<string>;
  img: string;
  name: string;
  // eslint-disable-next-line camelcase
  base_experience: number;
  height: number;
  id: number;
  // eslint-disable-next-line camelcase
  is_default: boolean;
  order: number;
  weight: number;
}

export interface IPokemon {
  nameClean: string;
  abilities: ReadonlyArray<ValueOf<typeof Ability> | string>;
  stats: IStats;
  types: ReadonlyArray<ValueOf<typeof Type> | string>;
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}
