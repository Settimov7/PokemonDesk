import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './logo.styles.scss';

import logo from './logo.svg';

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => (
  <a className={classNames(className, styles.logo)} href="/">
    <img className={styles.logoImage} src={logo} alt="Pokemon home page" />
  </a>
);
