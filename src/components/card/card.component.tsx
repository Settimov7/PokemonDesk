import React, { FC } from 'react';
import classNames from 'classnames';

import { Heading } from '../heading/heading.component';

import { HeadingFontWeight, HeadingLevel, HeadingFontSize } from '../heading/heading.constants';

import { IPokemon } from '../../types';

import styles from './styles/card.styles.scss';

interface IProps {
  pokemon: IPokemon;
}

export const Card: FC<IProps> = ({ pokemon }) => (
  <article className={styles.card}>
    <div>
      <Heading level={HeadingLevel.THIRD} fontSize={HeadingFontSize.S} fontWeight={HeadingFontWeight.BOLD}>
        {pokemon.name}
      </Heading>

      <dl className={styles.cardStats}>
        <div className={styles.cardStatsItem}>
          <dt>Attack</dt>
          <dd className={styles.cardStatsData}>{pokemon.stats.attack}</dd>
        </div>

        <div className={styles.cardStatsItem}>
          <dt>Deffence</dt>
          <dd className={styles.cardStatsData}>{pokemon.stats.defense}</dd>
        </div>
      </dl>

      <dl className={styles.cardTypes}>
        <dt className={styles.cardTypesTitle}>Types</dt>

        {pokemon.types.map((type) => {
          const typeClassName = classNames(styles.cardTypesData, styles.cardTypesDataGrass);

          return (
            <dd className={typeClassName} key={type}>
              {type}
            </dd>
          );
        })}
      </dl>
    </div>

    <img className={styles.cardImage} src={pokemon.img} alt={pokemon.name} />
  </article>
);
