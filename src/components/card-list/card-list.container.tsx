import React, { FC } from 'react';

import { CardListComponent } from './card-list.component';

import { rawResponseDataParse } from './utils/raw-response-data-parse';
import { useData } from '../../hooks/use-data/use-data.hook';

import { State } from '../../hooks/use-data/use-data.constants';
import { RequestName } from '../../request/request.constants';

import { IRawResponseData, IResponseData } from './card-list.types';

interface IProps {
  searchQuery?: string;
}

export const CardList: FC<IProps> = ({ searchQuery }) => {
  const options = {
    requestName: RequestName.GET_POKEMONS,
    dependencies: [searchQuery],
    query: {
      name: searchQuery,
    },
  };
  const [data, state] = useData<IRawResponseData, IResponseData>(options, rawResponseDataParse);
  const pokemons = data?.pokemons ?? [];

  if (state === State.FETCHING) {
    return <p>Loading...</p>;
  }

  if (state === State.ERROR) {
    return <p>Loading...</p>;
  }

  return <CardListComponent pokemons={pokemons} />;
};
