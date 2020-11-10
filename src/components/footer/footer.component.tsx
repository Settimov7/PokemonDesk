import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/footer.styles.scss';

interface IProps {
  className?: string;
}

export const Footer: FC<IProps> = ({ className }) => {
  const componentClassName = classNames(className, styles.footer);

  return (
    <footer className={componentClassName}>
      <p className={styles.footerTeamText}>Ours Team</p>
      <p className={styles.footerTagline}>
        Make with&nbsp;
        <span role="img" aria-hidden="true" aria-label="red heart">
          ❤️
        </span>
      </p>
    </footer>
  );
};
