import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/logo.styles.scss';

import logoUrl from './assets/logo.svg';

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => (
  <a className={classNames(className, styles.logo)} href="/">
    <img className={styles.logoImage} src={logoUrl} alt="Pokemon home page" />
  </a>
);
