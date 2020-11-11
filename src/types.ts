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
