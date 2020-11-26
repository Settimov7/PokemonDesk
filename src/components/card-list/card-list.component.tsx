import React, { FC } from 'react';

import { Card } from '../card/card.component';

import { IPokemon } from '../../pokemon/pokemon.types';

import styles from './styles/card-list.styles.scss';
import { Route } from '../../routing/routing.constants';

interface IProps {
  pokemons: ReadonlyArray<IPokemon>;
}

export const CardListComponent: FC<IProps> = ({ pokemons }) => (
  <ul className={styles.cardList}>
    {pokemons.map((pokemon) => {
      const { id, name, img, stats, types } = pokemon;
      const href = Route.POKEMON.replace(/:id$/, id.toString());

      return (
        <li key={pokemon.id}>
          <Card href={href} name={name} image={img} attack={stats.attack} defense={stats.defense} types={types} />
        </li>
      );
    })}
  </ul>
);
