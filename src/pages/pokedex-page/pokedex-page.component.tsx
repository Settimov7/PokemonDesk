import React, { ChangeEventHandler, FC } from 'react';

import { PageLayout } from '../../components/page-layout/page-layout.component';
import { CardList } from '../../components/card-list/card-list.container';

import styles from './styles/pokedex-page.styles.scss';

interface IProps {
  searchValue: string;
  searchQuery: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

export const PokedexPageComponent: FC<IProps> = ({ searchValue, searchQuery, changeHandler }) => (
  <PageLayout contentClassName={styles.pokedexPage}>
    <div>
      <h1>PokedexPage</h1>

      <input type="text" value={searchValue} onChange={changeHandler} />

      <CardList searchQuery={searchQuery} />
    </div>
  </PageLayout>
);
