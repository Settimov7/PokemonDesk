import React, { FC } from 'react';

import { PageLayout } from '../../components/page-layout/page-layout.component';

interface IProps {
  id: string;
}

export const PokemonPageComponent: FC<IProps> = ({ id }) => (
  <PageLayout>
    <h1>Pokemon page {id}</h1>
  </PageLayout>
);
