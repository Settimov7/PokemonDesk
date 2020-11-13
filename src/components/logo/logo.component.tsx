import React, { FC } from 'react';
import classNames from 'classnames';
import { A } from 'hookrouter';

import logoUrl from './assets/logo.svg';

import styles from './styles/logo.styles.scss';

interface IProps {
  href: string;
  className?: string;
}

export const Logo: FC<IProps> = ({ href, className }) => (
  <A className={classNames(className, styles.logo)} href={href}>
    <img className={styles.logoImage} src={logoUrl} alt="Pokemon home page" />
  </A>
);
