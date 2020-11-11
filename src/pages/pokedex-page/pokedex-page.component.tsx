import React, { FC } from 'react';

import { PageLayout } from '../../components/page-layout/page-layout.component';
import { CardList } from '../../components/card-list/card-list.container';

import styles from './styles/pokedex-page.styles.scss';

export const PokedexPage: FC = () => (
  <PageLayout contentClassName={styles.pokedexPage}>
    <div>
      <h1>PokedexPage</h1>

      <CardList />
    </div>
  </PageLayout>
);
