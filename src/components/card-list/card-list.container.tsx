import React, { FC } from 'react';

import { CardListComponent } from './card-list.component';

import { usePokemons } from './hooks/use-pokemons';
import { State } from './hooks/use-pokemons.constants';

export const CardList: FC = () => {
  const [data, state] = usePokemons();
  const pokemons = data?.pokemons ?? [];

  if (state === State.FETCHING) {
    return <p>Loading...</p>;
  }

  if (state === State.ERROR) {
    return <p>Loading...</p>;
  }

  return <CardListComponent pokemons={pokemons} />;
};
