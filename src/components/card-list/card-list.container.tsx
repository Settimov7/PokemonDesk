import React, { FC } from 'react';

import { CardListComponent } from './card-list.component';

import { POKEMONS } from './card-list.constants';

export const CardList: FC = () => {
  return <CardListComponent pokemons={POKEMONS} />;
};
