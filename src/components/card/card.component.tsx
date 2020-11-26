import React, { FC } from 'react';
import classNames from 'classnames';

import { Heading } from '../heading/heading.component';

import { HeadingFontWeight, HeadingLevel, HeadingFontSize } from '../heading/heading.constants';

import { IPokemon } from '../../pokemon/pokemon.types';

import styles from './styles/card.styles.scss';

interface IProps {
  href: string;
  name: string;
  image: string;
  attack: number;
  defense: number;
  types: IPokemon['types'];
}

export const Card: FC<IProps> = ({ href, name, image, attack, defense, types }) => (
  <a href={href} className={styles.card}>
    <div>
      <Heading level={HeadingLevel.THIRD} fontSize={HeadingFontSize.S} fontWeight={HeadingFontWeight.BOLD}>
        {name}
      </Heading>

      <dl className={styles.cardStats}>
        <div className={styles.cardStatsItem}>
          <dt>Attack</dt>
          <dd className={styles.cardStatsData}>{attack}</dd>
        </div>

        <div className={styles.cardStatsItem}>
          <dt>Deffence</dt>
          <dd className={styles.cardStatsData}>{defense}</dd>
        </div>
      </dl>

      <dl className={styles.cardTypes}>
        <dt className={styles.cardTypesTitle}>Types</dt>

        {types.map((type) => {
          const typeClassName = classNames(styles.cardTypesData, styles.cardTypesDataGrass);

          return (
            <dd className={typeClassName} key={type}>
              {type}
            </dd>
          );
        })}
      </dl>
    </div>

    <img className={styles.cardImage} src={image} alt={name} />
  </a>
);
