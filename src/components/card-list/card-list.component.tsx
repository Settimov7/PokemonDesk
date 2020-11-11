import React, { FC } from 'react';

import { Card } from '../card/card.component';

import { IPokemon } from '../../types';

import styles from './styles/card-list.styles.scss';

interface IProps {
  pokemons: ReadonlyArray<IPokemon>;
}

export const CardListComponent: FC<IProps> = ({ pokemons }) => (
  <div className={styles.cardList}>
    {pokemons.map((pokemon) => (
      <Card key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
