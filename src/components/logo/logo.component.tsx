import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/logo.styles.scss';

import logoUrl from './assets/logo.svg';

interface IProps {
  className?: string;
}

export const Logo: FC<IProps> = ({ className }) => (
  <a className={classNames(className, styles.logo)} href="/">
    <img className={styles.logoImage} src={logoUrl} alt="Pokemon home page" />
  </a>
);
